'use strict';

/* global globalThis, jQuery, yith_wcan_shortcodes, accounting */

function YITH_WCAN_Filter( $ ) {
	const self = this;

	// currently executing xhr
	self.xhr = null;

	// flag set during ajax call handling
	self.doingAjax = false;

	// flag set once init has executed
	self.initialized = false;

	// register original url search param
	self.originalSearch = false;

	// init object
	self._init = function () {
		const head = $( 'head' ).html(),
			pageTitle = document.title,
			alternativeUrl = self.searchAlternativeUrl( head );

		alternativeUrl &&
			! self.doingAjax &&
			! self.initialized &&
			! yith_wcan_shortcodes.ajax_filters &&
			self.pushUrlToHistory( alternativeUrl, pageTitle );

		self.originalSearch = location.search;

		self.initialized = true;
	};

	// execute call to filter products in current view
	self.doFilter = function ( filters, target, preset ) {
		let targetUrl,
			$target = target ? $( target ) : $( 'body' );

		// block elements before filtering
		$target && self.block( $target );

		// calculate target url
		targetUrl = self.buildUrl( filters );

		// if no ajax, simply change page url
		if ( ! yith_wcan_shortcodes.ajax_filters ) {
			window.location = targetUrl;
			return;
		}

		// start doing ajax
		self.doingAjax = true;

		return self._doAjax( targetUrl ).done( function ( response ) {
			targetUrl = self.searchAlternativeUrl( response, targetUrl );

			self._beforeFilter( response, filters );

			self.refreshFragments( target, preset, response );
			self.pushUrlToHistory( targetUrl, response.pageTitle );

			$target && self.unblock( $target );

			self._afterFilter( response, filters );

			self.doingAjax = false;
		} );
	};

	// actions performed before filter
	self._beforeFilter = function ( response, filters ) {
		$( document ).trigger( 'yith-wcan-ajax-loading', [
			response,
			filters,
		] );
	};

	// actions performed after filter
	self._afterFilter = function ( response, filters ) {
		$( '.woocommerce-ordering' ).on(
			'change',
			'select.orderby',
			function () {
				$( this ).closest( 'form' ).submit();
			}
		);

		$( window ).trigger( 'scroll' );

		$( document )
			.trigger( 'yith-wcan-ajax-filtered', [ response, filters ] )
			.trigger( 'yith_wcwl_reload_fragments' );
	};

	// build url to show
	self.buildUrl = function ( filters ) {
		let queryParam = yith_wcan_shortcodes.query_param,
			params = {},
			location = window.location,
			url = !! yith_wcan_shortcodes.base_url
				? yith_wcan_shortcodes.base_url
				: location?.origin + location?.pathname,
			search = '';

		const haveFilters =
			typeof filters === 'object' && Object.keys( filters ).length;

		// remove filter session from current url, if any
		if ( !! yith_wcan_shortcodes.session_param ) {
			url = url.replace(
				new RegExp(
					'/' + yith_wcan_shortcodes.session_param + '/[^/]*/'
				),
				''
			);
		}

		if ( haveFilters ) {
			params[ queryParam ] = 1;
		}

		if ( !! self.originalSearch ) {
			const searchParams = self.originalSearch
				.replace( '?', '' )
				.split( '&' )
				.reduce( ( a, v ) => {
					const items = v.split( '=' );

					if ( items.length === 2 ) {
						if ( self.isFilterParam( items[ 0 ] ) ) {
							return a;
						}

						a[ items[ 0 ] ] = items[ 1 ];
					}

					return a;
				}, {} );

			params = $.extend( params, searchParams );
		}

		if ( haveFilters ) {
			params = $.extend( params, filters );
		}

		search = Object.keys( params )
			.reduce( function ( a, i ) {
				const v = params[ i ];

				if ( ! v || ! i ) {
					return a;
				}

				a +=
					encodeURIComponent( i ) +
					'=' +
					encodeURIComponent( v ) +
					'&';

				return a;
			}, '?' )
			.replace( /&$/g, '' )
			.replace( /%2B/g, '+' )
			.replace( /%2C/g, ',' );

		if ( search.length > 1 ) {
			url += search;
		}

		return url;
	};

	// retrieves alternative sharing url in response body
	self.searchAlternativeUrl = function ( response, defaultUrl = '' ) {
		let url = defaultUrl,
			matches;

		if ( -1 === response.indexOf( 'yith_wcan:sharing_url' ) ) {
			return url;
		}

		matches = response.match(
			/<meta name="yith_wcan:sharing_url" content="([^"]*)">/
		);
		url = 1 in matches ? matches[ 1 ] : url;

		return url;
	};

	// push url to browser history
	self.pushUrlToHistory = function ( url, title ) {
		if (
			! yith_wcan_shortcodes.change_browser_url ||
			navigator.userAgent.match( /msie/i )
		) {
			return;
		}

		window.history.pushState(
			{
				pageTitle: title,
			},
			'',
			url
		);
	};

	// replaces elements in the page with refreshed ones
	self.refreshFragments = function ( target, preset, response ) {
		const responseDom = document.createElement( 'html' ),
			$response = $( responseDom );

		responseDom.innerHTML = response;

		if ( target ) {
			let $preset = $( preset ),
				$target = $( target ),
				$destination;

			if ( $preset.length ) {
				$destination = $response.find( preset );

				if ( $destination.length ) {
					$preset.replaceWith( $destination.first() );
				}
			}

			if ( $target.length ) {
				$destination = $response.find( target );

				if ( $destination.length ) {
					$target.replaceWith( $destination.first() );
				}
			}
		} else {
			const content = $( yith_wcan_shortcodes.content );

			if ( content.length ) {
				content.replaceWith(
					$response.find( yith_wcan_shortcodes.content )
				);
			} else {
				$( 'body' ).replaceWith( $response.find( 'body' ) );
			}
		}

		$( document ).trigger( 'yith_wcan_init_shortcodes' );
	};

	// executes Ajax calls
	self._doAjax = function ( url, params ) {
		if ( self.xhr ) {
			self.xhr.abort();
		}

		params = $.extend(
			{
				url,
			},
			params
		);

		self.xhr = $.ajax( params );

		return self.xhr;
	};

	// block dom elements
	self.block = function ( $el ) {
		if ( typeof $.fn.block === 'undefined' ) {
			return;
		}

		let background = '#fff center center no-repeat';

		if ( yith_wcan_shortcodes?.loader ) {
			background = `url('${ yith_wcan_shortcodes.loader }') ${ background }`;
		}

		$el.block( {
			message: null,
			overlayCSS: {
				background,
				opacity: 0.7,
			},
		} );
	};

	// unblock dom elements
	self.unblock = function ( $el ) {
		if ( typeof $.fn.unblock === 'undefined' ) {
			return;
		}

		$el.unblock();
	};

	// checks if param is one used by layared nav to filter products.
	self.isFilterParam = function ( param ) {
		let supportedParams = [
			'rating_filter',
			'min_price',
			'max_price',
			'onsale_filter',
			'instock_filter',
			'orderby',
			'product-page',
			yith_wcan_shortcodes.query_param,
		].concat(
			yith_wcan_shortcodes.supported_taxonomies.map( ( i ) =>
				i.replace( 'pa_', 'filter_' )
			)
		);

		if ( -1 !== supportedParams.indexOf( param ) ) {
			return true;
		}

		if ( -1 !== param.indexOf( 'filter_' ) ) {
			return true;
		}

		if ( -1 !== param.indexOf( 'query_type_' ) ) {
			return true;
		}

		return false;
	};

	// let's start the game
	self._init();

	return self;
}

function YITH_WCAN_Preset( el, $ ) {
	const self = this;

	// main preset node
	self.preset = '#' + el.attr( 'id' );
	self.$preset = el;

	// target of the filter, if any
	self.target = self.$preset.data( 'target' );
	self.$target = self.target ? $( self.target ) : false;

	// filters node
	self.$filters = false;

	// filter button
	self.$filterButtons = false;

	// nodes created just for modal layout
	self.modalElements = {};

	// retains current status of filters
	self.activeFilters = false;

	// mobile flag
	self.isMobile = false;

	// slider timeout
	self.sliderTimeout = false;

	// registers when status has changed
	self.originalFilters = null;
	self.dirty = false;

	// init object
	self._init = function () {
		self._regiterStatus();
		self._initFilterButton();
		self._initResponsive();
		self._initFilters();
		self._initActions();

		self.$preset.data( 'preset', self ).addClass( 'enhanced' );
	};

	// init filters
	self._initFilters = function () {
		self.getFilters().each( function () {
			const $filter = $( this );

			self._initFilter( $filter );
		} );

		self.maybeShowClearAllFilters();
	};

	// init filter button
	self._initFilterButton = function () {
		self.$filterButtons = self.$preset.find( '.apply-filters' );

		if ( ! self.$filterButtons.length ) {
			return;
		}

		// manage filter button
		self.$filterButtons
			.on( 'click', ( ev ) => {
				ev.preventDefault();
				self.filter();
			} )
			.hide();
	};

	// init generic actions
	self._initActions = function () {
		self.$preset.find( 'form' ).on( 'submit', ( ev ) => {
			ev.preventDefault();
		} );
	};

	// init responsive
	self._initResponsive = function () {
		if ( ! yith_wcan_shortcodes.modal_on_mobile ) {
			return;
		}

		const media = window.matchMedia(
			`(max-width: ${ yith_wcan_shortcodes.mobile_media_query }px)`
		);

		$( window )
			.on( 'resize', function () {
				const isMobile = !! media.matches;

				if ( isMobile !== self.isMobile ) {
					self.isMobile = isMobile;
					self._afterLayoutChange();
				}
			} )
			.resize();
	};

	// init filter
	self._initFilter = function ( $filter ) {
		const handleChange = function ( ev ) {
			const t = $( this ),
				$currentFilter = t.closest( '.yith-wcan-filter' ),
				multiple = $currentFilter.length
					? 'yes' === $currentFilter.data( 'multiple' )
					: false,
				$item = t.closest( '.filter-item' ),
				$items = $item.length
					? $currentFilter.find( '.filter-item' ).not( $item )
					: [];

			if ( $item.is( '.disabled' ) && ! $item.is( '.active' ) ) {
				ev.preventDefault();
				return false;
			}

			ev.preventDefault();

			$items.length && ! multiple && $items.removeClass( 'active' );
			$item.length && $item.toggleClass( 'active' );

			// reset active filters.
			self.activeFilters = false;

			self.maybeFilter();
			self.maybeToggleClearAllFilters();
			self.maybeToggleClearFilter( $currentFilter );
		};

		// handle filter activation/deactivation by click on label (no input involved)
		$filter
			.find( '.filter-item' )
			.not( '.checkbox' )
			.not( '.radio' )
			.on( 'click', 'a', function ( ev ) {
				const t = $( this ),
					$item = t.closest( '.filter-item' );

				if ( ! $( ev?.delegateTarget ).is( $item ) ) {
					return false;
				}

				handleChange.call( this, ev );
			} );

		// handle filter activation/deactivation from input change
		$filter.find( ':input' ).on( 'change', function ( ev ) {
			const t = $( this ),
				$item = t.closest( '.filter-item' );

			if ( $item.is( '.disabled' ) && ! $item.is( '.active' ) ) {
				t.prop( 'checked', false );
				return false;
			}

			handleChange.call( this, ev );
		} );

		// handle filter activation/deactivation by click on label (there is an input whose state can be switched)
		$filter.find( 'label > a' ).on( 'click', function ( ev ) {
			const t = $( this ),
				$item = t.closest( '.filter-item' );

			ev.preventDefault();

			if ( $item.is( '.disabled' ) && ! $item.is( '.active' ) ) {
				return false;
			}

			const $input = t.parent().find( ':input' );

			if (
				$input.is( '[type="radio"]' ) ||
				$input.is( '[type="checkbox"]' )
			) {
				$input.prop( 'checked', ! $input.prop( 'checked' ) );
			}

			$input.change();
		} );

		// init tooltip
		self._initTooltip( $filter );

		// init price slider
		self._initPriceSlider( $filter );

		// init dropdown
		self._initDropdown( $filter );

		// init collapsable
		self._initCollapsable( $filter );

		// init clear anchors
		self.maybeShowClearFilter( $filter );

		// init custom inputs
		if ( self.$preset?.hasClass( 'custom-style' ) ) {
			self._initCustomInput( $filter );
		}
	};

	// init tooltip
	self._initTooltip = function ( $filter, position ) {
		$filter.find( '[data-title]' ).each( function () {
			const t = $( this );

			if ( t.hasClass( 'tooltip-added' ) || ! t.data( 'title' ) ) {
				return;
			}

			t.on( 'mouseenter', function () {
				let th = $( this ),
					tooltip = null,
					wrapperWidth = th.outerWidth(),
					left = 0,
					width = 0;

				if (
					! position ||
					( 'top' !== position && 'right' !== position )
				) {
					const container = th.closest( '.filter-item' );

					position =
						container.hasClass( 'color' ) ||
						container.hasClass( 'label' )
							? 'top'
							: 'right';
				}

				tooltip = $( '<span>', {
					class: 'yith-wcan-tooltip',
					html: th.data( 'title' ),
				} );

				th.append( tooltip );

				width = tooltip.outerWidth() + 6;
				tooltip.outerWidth( width );

				if ( 'top' === position ) {
					left = ( wrapperWidth - width ) / 2;
				} else {
					left = wrapperWidth + 15;
				}

				tooltip.css( { left: left.toFixed( 0 ) + 'px' } ).fadeIn( 200 );

				th.addClass( 'with-tooltip' );
			} ).on( 'mouseleave', function () {
				const th = $( this );

				th.find( '.yith-wcan-tooltip' ).fadeOut( 200, function () {
					th.removeClass( 'with-tooltip' )
						.find( '.yith-wcan-tooltip' )
						.remove();
				} );
			} );

			t.addClass( 'tooltip-added' );
		} );
	};

	// init dropdown
	self._initDropdown = function ( $filter ) {
		const $dropdown = $filter.find( 'select.filter-dropdown' );

		if ( ! $dropdown.length ) {
			return;
		}

		if (
			$dropdown.hasClass( 'select2-hidden-accessible' ) &&
			'undefined' !== typeof $.fn.selectWoo
		) {
			$dropdown.selectWoo( 'destroy' );
		}

		new YITH_WCAN_Dropdown( $dropdown, $, {
			paginate: true,
			perPage: yith_wcan_shortcodes.terms_per_page,
		} );
	};

	// init price slider
	self._initPriceSlider = function ( $filter ) {
		if ( ! $filter.hasClass( 'filter-price-slider' ) ) {
			return;
		}

		const $container = $filter.find( '.price-slider' ),
			$minInput = $container.find( '.price-slider-min' ),
			$maxInput = $container.find( '.price-slider-max' ),
			min = parseFloat( $container.data( 'min' ) ),
			max = parseFloat( $container.data( 'max' ) ),
			currentMin = parseFloat( $minInput.val() ),
			currentMax = parseFloat( $maxInput.val() ),
			step = parseFloat( $container.data( 'step' ) );

		$filter.find( '.price-slider-ui' ).ionRangeSlider( {
			skin: 'round',
			type: 'double',
			min,
			max,
			step,
			from: currentMin,
			to: currentMax,
			min_interval: step,
			values_separator: ' - ',
			prettify: ( v ) => self.formatPrice( v ),
			onChange: ( data ) => {
				$minInput.val( data.from );
				$maxInput.val( data.to );
			},
			onFinish: ( data ) => {
				if ( self.sliderTimeout ) {
					clearTimeout( self.sliderTimeout );
				}

				self.sliderTimeout = setTimeout( function () {
					self.maybeFilter();
				}, 200 );
			},
		} );
	};

	// init collapsable
	self._initCollapsable = function ( $filter ) {
		self._initTitleCollapsable( $filter );
		self._initHierarchyCollapsable( $filter );
	};

	// init toggle on click of the title
	self._initTitleCollapsable = function ( $filter ) {
		const $title = $filter.find( '.collapsable' );

		if ( ! $title.length ) {
			return;
		}

		self._initToggle( $title, $title, $filter.find( '.filter-content' ) );
	};

	// init toggle on click of the parent li
	self._initHierarchyCollapsable = function ( $filter ) {
		const $items = $filter.find( '.hierarchy-collapsable' );

		if ( ! $items.length ) {
			return;
		}

		// set parents of currently active term as open
		const active = $filter.find( '.active' );

		if ( active.length ) {
			active
				.parents( '.hierarchy-collapsable' )
				.removeClass( 'closed' )
				.addClass( 'opened' );

			if (
				active.hasClass( 'hierarchy-collapsable' ) &&
				yith_wcan_shortcodes.show_current_children
			) {
				active.removeClass( 'closed' ).addClass( 'opened' );
			}
		}

		$items.each( function () {
			const $t = $( this ),
				$toggle = $( '<span/>', {
					class: 'toggle-handle',
				} );

			$toggle.appendTo( $t );

			self._initToggle( $toggle, $t, $t.children( 'ul.filter-items' ) );
		} );
	};

	// init toggle to generic toggle/target pair
	self._initToggle = function ( $toggle, $container, $target ) {
		if ( $container.hasClass( 'closed' ) ) {
			$target.hide();
		}

		$toggle.off( 'click' ).on( 'click', function ( ev ) {
			ev.stopPropagation();

			$container.toggleClass( 'opened' ).toggleClass( 'closed' );
			$target.slideToggle();
		} );
	};

	// init custom input
	self._initCustomInput = function ( $filter ) {
		$filter.find( ':input' ).each( function () {
			let input = $( this ),
				type = input.attr( 'type' ),
				containerClass = `${ type }button`,
				container;

			if ( 'checkbox' !== type && 'radio' !== type ) {
				return;
			}

			if ( input.closest( `.${ containerClass }` ).length ) {
				return;
			}

			if ( input.is( ':checked' ) ) {
				containerClass += ' checked';
			}

			container = $( '<span/>', {
				class: containerClass,
			} );

			input.wrap( container ).on( 'change', function () {
				const t = $( this );

				t.prop( 'checked' )
					? t.parent().addClass( 'checked' )
					: t.parent().removeClass( 'checked' );
			} );
		} );
	};

	// register initial status
	self._regiterStatus = function () {
		self.originalFilters = self.getFiltersProperties();
	};

	// trigger handling after layout change
	self._afterLayoutChange = function () {
		if ( self.isMobile ) {
			self.$preset
				.addClass( 'filters-modal' )
				.attr( 'role', 'dialog' )
				.attr( 'tabindex', '-1' )
				.hide();

			self._addCloseModalButton();
			self._addApplyFiltersModalButton();
			self._switchToCollapsables();

			self.$filterButtons?.hide();
		} else {
			self.$preset
				.removeClass( 'filters-modal' )
				.removeClass( 'open' )
				.removeAttr( 'role' )
				.removeAttr( 'tabindex' )
				.show();

			$( 'body' )
				.css( 'overflow', 'auto' )
				.removeClass( 'yith-wcan-preset-modal-open' );

			self._removeCloseModalButton();
			self._removeApplyFiltersModalButton();
			self._switchBackCollapsables();

			self.$filterButtons?.show();
		}
	};

	// add modal close button
	self._addCloseModalButton = function () {
		const $closeButton = $( '<a/>', {
			class: 'close-button',
			html: '&times;',
			'data-dismiss': 'modal',
			'aria-label': yith_wcan_shortcodes.labels.close,
		} );

		$closeButton.prependTo( self.$preset ).on( 'click', self.closeModal );
		self.modalElements.closeButton = $closeButton;
	};

	// remove modal close button
	self._removeCloseModalButton = function () {
		self.modalElements?.closeButton?.remove();
	};

	// show main filter button for the modal
	self._addApplyFiltersModalButton = function () {
		const $filterButton = $( '<button/>', {
			class: 'apply-filters main-modal-button',
			html: yith_wcan_shortcodes.labels.show_results,
			'data-dismiss': 'modal',
		} );

		$filterButton.appendTo( self.$preset ).on( 'click', () => {
			self.filter();
			self.closeModal();
		} );
		self.modalElements.applyFiltersButton = $filterButton;
	};

	// hide main filter button for the modal
	self._removeApplyFiltersModalButton = function () {
		self.modalElements?.applyFiltersButton?.remove();
	};

	// convert all filters to collapsable
	self._switchToCollapsables = function () {
		self.getFilters().each( function () {
			const $filter = $( this ),
				$title = $filter.find( '.filter-title' );

			if ( ! $title.length || $title.hasClass( 'collapsable' ) ) {
				return;
			}

			$title.addClass( 'collapsable' ).data( 'disable-collapse', true );

			self._initTitleCollapsable( $filter );
		} );
	};

	// switch back filters to their previous collapsable state
	self._switchBackCollapsables = function () {
		self.getFilters().each( function () {
			const $filter = $( this ),
				$title = $filter.find( '.filter-title' );

			if (
				! $title.length ||
				! $title.hasClass( 'collapsable' ) ||
				! $title.data( 'disable-collapse' )
			) {
				return;
			}

			$title
				.removeClass( 'collapsable' )
				.removeData( 'disable-collapse', true )
				.off( 'click' );

			$filter.find( '.filter-content' ).show();
		} );
	};

	// close all collpasable before showing modal
	self._closeAllCollapsables = function () {
		self.$filters
			.not( '.no-title' )
			.not( ( i, v ) => {
				return self.isFilterActive( $( v ) );
			} )
			.find( '.filter-content' )
			.hide()
			.end()
			.find( '.filter-title' )
			.addClass( 'closed' )
			.removeClass( 'opened' );
	};

	// update status change flag, if filters have changed
	self.maybeRegisterStatusChange = function () {
		const currentFilters = self.getFiltersProperties(),
			currentStr = JSON.stringify( currentFilters ),
			originalStr = JSON.stringify( self.originalFilters );

		self.dirty = currentStr !== originalStr;
	};

	// apply filters when possible
	self.maybeFilter = function () {
		// register status change
		self.maybeRegisterStatusChange();

		// filter, or show filter button.
		if ( yith_wcan_shortcodes.instant_filters && ! self.isMobile ) {
			self.filter();
		} else if (
			! yith_wcan_shortcodes.instant_filters &&
			! self.isMobile
		) {
			self.dirty
				? self.$filterButtons?.show()
				: self.$filterButtons?.hide();
		} else if ( self.isMobile && self.dirty ) {
			self.$preset.addClass( 'with-filter-button' );
			self.modalElements.applyFiltersButton?.show();
		}
	};

	// main filtering method
	self.filter = function () {
		const filter = window?.product_filter;

		filter
			?.doFilter( self.getFiltersProperties(), self.target, self.preset )
			.done( () => {
				let newPreset = $( self.preset );

				if (
					! self.isMobile &&
					newPreset.length &&
					yith_wcan_shortcodes.scroll_top
				) {
					let targetOffset = newPreset.offset().top;

					if ( !! yith_wcan_shortcodes.scroll_target ) {
						const scrollTarget = $(
							yith_wcan_shortcodes.scroll_target
						);

						targetOffset = scrollTarget.length
							? scrollTarget.offset().top
							: targetOffset;
					}
					$( 'body, html' ).animate( {
						scrollTop: targetOffset - 100,
					} );
				}

				// register new filters, clear status flag
				self.originalFilters = self.getFiltersProperties();
				self.dirty = false;
			} );

		if ( self.isMobile ) {
			self.$preset.removeClass( 'with-filter-button' );
			self.modalElements.applyFiltersButton?.hide();
		}
	};

	// get all filter nodes
	self.getFilters = function () {
		if ( false === self.$filters ) {
			self.$filters = self.$preset.find( '.yith-wcan-filter' );
		}

		return self.$filters;
	};

	// retrieves all filters that we want to apply
	self.getActiveFilters = function () {
		if ( false === self.activeFilters ) {
			self.activeFilters = self.getFiltersProperties();
		}

		return self.activeFilters;
	};

	// check whether there is any filter active
	self.isAnyFilterActive = function () {
		return !! Object.keys( self.getActiveFilters() ).length;
	};

	// checks whether current filter is active
	self.isFilterActive = function ( $filter ) {
		let filterType = $filter.data( 'filter-type' ),
			active,
			filteredActive;

		switch ( filterType ) {
			case 'tax':
				const $dropdown = $filter.find( '.filter-dropdown' );

				if ( $dropdown.length ) {
					const val = $dropdown.val();

					active = 'object' === typeof val ? !! val?.length : !! val;
					break;
				}

			// if we use type other than dropdown, fallthrough
			case 'price_range':
			case 'stock_sale':
				active = $filter.find( '.filter-item' ).filter( '.active' )
					.length;
				break;
			case 'review':
				active = !! $filter.find( 'select' ).val();
				break;
			case 'price_slider':
				const min = parseFloat(
						$filter.find( '.price-slider' ).data( 'min' )
					),
					max = parseFloat(
						$filter.find( '.price-slider' ).data( 'max' )
					),
					currentMin = parseFloat(
						$filter.find( '.price-slider-min' ).val()
					),
					currentMax = parseFloat(
						$filter.find( '.price-slider-max' ).val()
					);

				active = currentMin > min || currentMax < max;
				break;
			case 'orderby':
				active =
					'menu_order' !== $filter.find( '.filter-order-by' ).val();
				break;
			default:
				active = false;
				break;
		}

		filteredActive = $filter.triggerHandler(
			'yith_wcan_is_filter_active',
			active,
			self
		);
		active =
			typeof filteredActive !== 'undefined' ? filteredActive : active;

		return active;
	};

	// retrieves filter properties for the filter
	self.getFilterProperties = function ( $filter ) {
		let filterType = $filter.data( 'filter-type' ),
			properties = {},
			filteredProperties,
			$active;

		switch ( filterType ) {
			case 'tax':
				let $dropdown = $filter.find( '.filter-dropdown' ),
					activeTerms = [],
					taxonomy = $filter.data( 'taxonomy' ),
					isAttr = 0 === taxonomy.indexOf( 'filter' ),
					multiple = 'yes' === $filter.data( 'multiple' ),
					relation = $filter.data( 'relation' );

				if ( $dropdown.length ) {
					if ( multiple ) {
						activeTerms = $dropdown.val();
					} else {
						activeTerms.push( $dropdown.val() );
					}
				} else {
					$active = $filter
						.find( '.filter-item' )
						.filter( '.active' )
						.children( 'a, label' );
					activeTerms = $active.get().reduce( function ( a, v ) {
						let val;

						v = $( v );
						val = v.is( 'label' )
							? v.find( ':input' ).val()
							: v.data( 'term-slug' );

						if ( ! val ) {
							return a;
						}

						a.push( val );

						return a;
					}, activeTerms );
				}

				if ( ! multiple ) {
					properties[ taxonomy ] = activeTerms.pop();
				} else {
					const glue = ! isAttr && 'and' === relation ? '+' : ',';
					properties[ taxonomy ] = activeTerms.join( glue );
				}

				if ( isAttr ) {
					properties[
						taxonomy.replace( 'filter_', 'query_type_' )
					] = relation;
				}

				break;
			case 'review':
				properties.rating_filter = $filter.find( 'select' ).val();
				break;
			case 'price_range':
				$active = $filter
					.find( '.filter-item' )
					.filter( '.active' )
					.first()
					.children( 'a' );

				properties.min_price = parseFloat(
					$active.data( 'range-min' )
				);
				properties.max_price = parseFloat(
					$active.data( 'range-max' )
				);
				break;
			case 'price_slider':
				properties.min_price = parseFloat(
					$filter.find( '.price-slider-min' ).val()
				);
				properties.max_price = parseFloat(
					$filter.find( '.price-slider-max' ).val()
				);
				break;
			case 'stock_sale':
				if ( $filter.find( '.filter-on-sale' ).is( '.active' ) ) {
					properties.onsale_filter = 1;
				}
				if ( $filter.find( '.filter-in-stock' ).is( '.active' ) ) {
					properties.instock_filter = 1;
				}
				break;
			case 'orderby':
				properties.orderby = $filter.find( '.filter-order-by' ).val();
				break;
			default:
				break;
		}

		filteredProperties = $filter.triggerHandler(
			'yith_wcan_filter_properties',
			properties,
			self
		);
		properties =
			typeof filteredProperties !== 'undefined'
				? filteredProperties
				: properties;

		return properties;
	};

	// retrieves properties for all filters of the preset
	self.getFiltersProperties = function () {
		let properties = {};

		self.getFilters().each( function () {
			const $filter = $( this );

			if ( self.isFilterActive( $filter ) ) {
				const filterProperties = self.getFilterProperties( $filter );

				properties = self.mergeProperties(
					properties,
					filterProperties,
					$filter
				);
				// $.extend( properties, filterProperties );
			}
		} );

		return properties;
	};

	// retrieve filters matching any of the properties passed
	self.getFiltersByProperties = function ( properties ) {
		return self.getFilters().filter( function () {
			const $filter = $( this );

			if ( self.isFilterActive( $filter ) ) {
				let filterProperties = self.getFilterProperties( $filter ),
					hasProp = false;

				for ( const prop in properties ) {
					if ( typeof filterProperties[ prop ] !== 'undefined' ) {
						hasProp = true;
						break;
					}
				}

				return hasProp;
			}

			return false;
		} );
	};

	// show clear selection anchor
	self.maybeToggleClearFilter = function ( $filter ) {
		if ( ! self.isFilterActive( $filter ) ) {
			self.maybeHideClearFilter( $filter );
		} else {
			self.maybeShowClearFilter( $filter );
		}
	};

	// show clear all selections anchor
	self.maybeToggleClearAllFilters = function () {
		if ( ! self.isAnyFilterActive() ) {
			self.maybeHideClearAllFilters();
		} else {
			self.maybeShowClearAllFilters();
		}
	};

	// show clear selection anchor
	self.maybeShowClearFilter = function ( $filter ) {
		if (
			! self.isFilterActive( $filter ) ||
			! yith_wcan_shortcodes.show_clear_filter
		) {
			return;
		}

		// remove clear selection link if already added.
		$filter.find( '.clear-selection' ).remove();

		// add new clear selection link.
		$( '<a/>', {
			class: 'clear-selection',
			text: yith_wcan_shortcodes.labels.clear_selection,
			role: 'button',
		} )
			.prependTo( $filter.find( '.filter-content' ) )
			.on( 'click', function ( ev ) {
				ev.preventDefault();

				self.deactivateFilter(
					$filter,
					false,
					yith_wcan_shortcodes.instant_filters
				);
				self.maybeHideClearFilter( $filter );

				if ( yith_wcan_shortcodes.instant_filters ) {
					self.closeModal();
				}
			} );
	};

	// show clearAll anchor, when on mobile layout
	self.maybeShowClearAllFilters = function () {
		if ( ! self.isAnyFilterActive() || ! self.isMobile ) {
			return;
		}

		// remove clear selection link if already added.
		self.$preset.find( '.clear-selection' ).remove();

		// add new clear selection link.
		$( '<a/>', {
			class: 'clear-selection',
			text: yith_wcan_shortcodes.labels.clear_all_selections,
			role: 'button',
		} )
			.prependTo( self.$preset.find( '.filters-container' ) )
			.on( 'click', function ( ev ) {
				ev.preventDefault();

				self.deactivateAllFilters(
					yith_wcan_shortcodes.instant_filters
				);
				self.maybeHideClearAllFilters();

				if ( yith_wcan_shortcodes.instant_filters ) {
					self.closeModal();
				}
			} );
	};

	// hide clear selection anchor
	self.maybeHideClearFilter = function ( $filter ) {
		if (
			self.isFilterActive( $filter ) ||
			! yith_wcan_shortcodes.show_clear_filter
		) {
			return;
		}

		// remove clear selection link.
		$filter.find( '.clear-selection' ).remove();
	};

	// show clearAll anchor, when on mobile layout
	self.maybeHideClearAllFilters = function () {
		if ( self.isAnyFilterActive() ) {
			return;
		}

		// remove clear selection link.
		self.$preset
			.find( '.filters-container' )
			.children( '.clear-selection' )
			.remove();
	};

	// deactivate filter
	self.deactivateFilter = function ( $filter, properties, doFilter ) {
		const filterType = $filter.data( 'filter-type' ),
			$items = $filter.find( '.filter-item' ),
			$activeItems = $items.filter( '.active' );

		switch ( filterType ) {
			case 'tax':
				const $dropdown = $filter.find( '.filter-dropdown' ),
					taxonomy = $filter.data( 'taxonomy' );

				if ( $dropdown.length ) {
					if ( ! properties ) {
						$dropdown.find( 'option' ).prop( 'selected', false );
					} else {
						$dropdown.find( 'option' ).each( function () {
							const $option = $( this );

							if ( $option.val() === properties[ taxonomy ] ) {
								$option.prop( 'selected', false );
							}
						} );
					}

					$dropdown.change();
				} else if ( ! properties ) {
					$activeItems.children( 'label' ).children( 'a' ).click();
					$activeItems.removeClass( 'active' );
				} else {
					$activeItems.each( function () {
						let $item = $( this ),
							$label = $item.children( 'label' ),
							$anchor = $item.children( 'a' ),
							value;

						value = $label.length
							? $label.find( ':input' ).val()
							: $anchor.data( 'term-slug' );

						if ( value === properties[ taxonomy ] ) {
							$item.children( 'label' ).children( 'a' ).click();
							$item.removeClass( 'active' );
						}
					} );
				}
				break;
			case 'price_slider':
				const $priceSlider = $filter.find( '.price-slider' );

				$filter
					.find( '.price-slider-min' )
					.val( $priceSlider.data( 'min' ) );
				$filter
					.find( '.price-slider-max' )
					.val( $priceSlider.data( 'max' ) )
					.change();
				break;
			case 'orderby':
				$filter.find( 'select' ).val( 'menu_order' );
				break;
			case 'stock_sale':
				if ( ! properties ) {
					$filter
						.find( '.filter-in-stock' )
						.find( ':input' )
						.prop( 'checked', false )
						.change();
					$filter
						.find( '.filter-on-sale' )
						.find( ':input' )
						.prop( 'checked', false )
						.change();

					$items.removeClass( 'active' );
				} else {
					if ( properties?.instock_filter ) {
						$filter
							.find( '.filter-in-stock' )
							.find( ':input' )
							.prop( 'checked', false )
							.change()
							.closest( '.filter-item' )
							.removeClass( 'active' );
					}

					if ( properties?.onsale_filter ) {
						$filter
							.find( '.filter-on-sale' )
							.find( ':input' )
							.prop( 'checked', false )
							.change()
							.closest( '.filter-item' )
							.removeClass( 'active' );
					}
				}
				break;
			case 'review':
				$filter.find( '.filter-dropdown' ).val( '' ).change();
				break;
			default:
				$items.removeClass( 'active' );
				break;
		}

		self.activeFilters = false;

		if ( doFilter ) {
			self.filter();
		}
	};

	// deactivate all filters
	self.deactivateAllFilters = function ( doFilter ) {
		const $filters = self.getFilters();

		$filters.each( function () {
			const $filter = $( this );

			self.deactivateFilter( $filter );
		} );

		self.activeFilters = false;

		if ( doFilter ) {
			self.filter();
		}
	};

	// deactivate filters that matches a specific set of properties
	self.deactivateFilterByProperties = function ( properties, doFilter ) {
		const $filters = self.getFiltersByProperties( properties );

		if ( ! $filters.length ) {
			return;
		}

		$filters.each( function () {
			const $filter = $( this );

			self.deactivateFilter( $filter, properties, doFilter );
		} );
	};

	// open filters as a modal, when in mobile layout
	self.openModal = function () {
		if ( ! self.isMobile ) {
			return;
		}

		self._closeAllCollapsables();

		$( 'body' )
			.css( 'overflow', 'hidden' )
			.addClass( 'yith-wcan-preset-modal-open' );

		self.$preset.show();

		setTimeout( () => {
			self.$preset.addClass( 'open' );
		}, 100 );
	};

	// close filters modal, when in mobile layout
	self.closeModal = function () {
		if ( ! self.isMobile ) {
			return;
		}

		self.$preset.removeClass( 'open' );

		setTimeout( () => {
			self.$preset.hide();
			$( 'body' )
				.css( 'overflow', 'auto' )
				.removeClass( 'yith-wcan-preset-modal-open' );
		}, 300 );
	};

	// utility that formats the price according to store configuration.
	self.formatPrice = function ( price ) {
		if ( 'undefined' !== typeof accounting ) {
			price = accounting.formatMoney( price, {
				symbol: yith_wcan_shortcodes.currency_format.symbol,
				decimal: yith_wcan_shortcodes.currency_format.decimal,
				thousand: yith_wcan_shortcodes.currency_format.thousand,
				precision: 0,
				format: yith_wcan_shortcodes.currency_format.format,
			} );
		}

		return price;
	};

	// utility that merges together sets of filter properties
	self.mergeProperties = function ( set1, set2, $filter ) {
		// search for common properties
		for ( const prop in set2 ) {
			if ( ! set2.hasOwnProperty( prop ) ) {
				continue;
			}

			if ( !! set1[ prop ] ) {
				switch ( prop ) {
					case 'rating_filter':
					case 'min_price':
					case 'max_price':
					case 'onsale_filter':
					case 'instock_filter':
					case 'orderby':
						// just override default value
						set1[ prop ] = set2[ prop ];
						break;
					default:
						if ( 0 === prop.indexOf( 'query_type_' ) ) {
							// query_type param
							set1[ prop ] = set2[ prop ];
						} else {
							// we're dealing with taxonomy
							const isAttr = 0 === prop.indexOf( 'filter_' ),
								glue = isAttr ? ',' : '+';

							let newValue =
								set1[ prop ].replace( ',', glue ) +
								glue +
								set2[ prop ].replace( ',', glue );

							newValue = newValue
								.split( glue )
								.filter(
									( value, index, arr ) =>
										arr.indexOf( value ) === index
								)
								.join( glue );

							set1[ prop ] = newValue;

							if ( isAttr ) {
								const queryTypeParam = prop.replace(
									'filter_',
									'query_type_'
								);

								set1[ queryTypeParam ] = 'and';
								set2[ queryTypeParam ] = 'and';
							}
						}
				}

				delete set2[ prop ];
			}
		}

		$.extend( set1, set2 );

		return set1;
	};

	// let's start the game
	self._init();

	return self;
}

function YITH_WCAN_Filter_Labels( el, $ ) {
	const self = this;

	// current label set
	self.$label_set = el;

	// labels of current set
	self.$labels = false;

	// init object
	self._init = function () {
		self._initLabels();

		self.$label_set.data( 'filter_labels', self ).addClass( 'enhanced' );
	};

	// init labels
	self._initLabels = function () {
		self.getLabels().each( function () {
			const $label = $( this );

			self._initLabel( $label );
		} );
	};

	// init label
	self._initLabel = function ( $label ) {
		$label.on( 'click', () => self.disableLabel( $label ) );
	};

	// get labels
	self.getLabels = function () {
		if ( false === self.$labels ) {
			self.$labels = self.$label_set.find( '.active-filter-label' );
		}

		return self.$labels;
	};

	// disable filter
	self.disableLabel = function ( $label ) {
		const properties = $label.data( 'filters' );
		// search for preset
		$( '.yith-wcan-filters' ).each( function () {
			const preset = $( this ).data( 'preset' );

			preset.deactivateFilterByProperties( properties, true );
		} );
	};

	// let's start the game
	self._init();

	return self;
}

function YITH_WCAN_Reset_Button( el, $ ) {
	const self = this;

	// current button
	self.$reset = el;

	// init object
	self._init = function () {
		self.$reset.on( 'click', function ( ev ) {
			ev.preventDefault();

			$( '.yith-wcan-filters' ).each( function () {
				const preset = $( this ).data( 'preset' );

				preset.deactivateAllFilters( true );
			} );
		} );

		self.$reset.data( 'reset', self ).addClass( 'enhanced' );
	};

	// let's start the game
	self._init();

	return self;
}

function YITH_WCAN_Modal_Opener( el, $ ) {
	const self = this;

	// current button
	self.$button = el;

	// YITH_WCAN_Preset object
	self.preset = null;

	// preset dom node
	self.$preset = null;

	// is mobile flag
	self.isMobile;

	// init object
	self._init = function () {
		self._initPreset();
		self._initResponsive();
		self._initActions();

		self.$button.data( 'modalOpener', self ).addClass( 'enhanced' );
	};

	// search for related preset
	self._initPreset = function () {
		let target = self.$button.data( 'target' ),
			$target;

		if ( target ) {
			$target = $( `#${ target }` );
		} else {
			$target = $( '.yith-wcan-filters' );
		}

		if ( ! $target.length ) {
			return;
		}

		self.$preset = $target.first();
		self.preset = self.$preset.data( 'preset' );
	};

	// init responsive
	self._initResponsive = function () {
		if ( ! yith_wcan_shortcodes.modal_on_mobile ) {
			self.$button.hide();
			return;
		}

		const media = window.matchMedia(
			`(max-width: ${ yith_wcan_shortcodes.mobile_media_query }px)`
		);

		$( window )
			.on( 'resize', function () {
				const isMobile = !! media.matches;

				if ( isMobile !== self.isMobile ) {
					self.isMobile = isMobile;
					self._afterLayoutChange();
				}
			} )
			.resize();
	};

	// init actions
	self._initActions = function () {
		if ( ! self.$preset?.length ) {
			return;
		}

		self.$button.on( 'click', function ( ev ) {
			ev.preventDefault();

			self.preset.openModal();
		} );
	};

	// hide/show button when needed
	self._afterLayoutChange = function () {
		self.isMobile ? self.$button.show() : self.$button.hide();
	};

	// let's start the game
	self._init();

	return self;
}

function YITH_WCAN_Dropdown( el, $, opts ) {
	const self = this;

	// current button
	self.$origialSelect = el;

	// main element
	self.$_main = null;

	// label element
	self.$_label = null;

	// dropdown
	self.$_dropdown = null;

	// search input
	self.$_search = null;

	// show more link
	self.$_showMore = null;

	// items list
	self.$_items = null;

	// current page
	self.currentPage = 1;

	// options
	self.options = {};

	// init object
	self._init = function () {
		if ( ! self.$origialSelect.is( 'select' ) ) {
			return;
		}

		const defaultPerPage = self.$origialSelect.data( 'per_page' ),
			defaultOrder = self.$origialSelect.data( 'order' ),
			defaults = {
				showSearch: self.$origialSelect.data( 'show_search' ),
				paginate: self.$origialSelect.data( 'paginate' ),
				perPage: defaultPerPage ? defaultPerPage : 10,
				order: defaultOrder ? defaultOrder : 'ASC',
				getElements: null,
				labels: {
					emptyLabel: yith_wcan_shortcodes.labels.empty_option,
					searchPlaceholder:
						yith_wcan_shortcodes.labels.search_placeholder,
					noItemsFound: yith_wcan_shortcodes.labels.no_items,
					showMore: yith_wcan_shortcodes.labels.show_more,
				},
			};

		self.options = $.extend( defaults, opts );

		self._hideSelect();
		self._initTemplate();
		self._initActions();

		self.$origialSelect.data( 'dropdown', self ).addClass( 'enhanced' );
	};

	// hide select
	self._hideSelect = function () {
		self.$origialSelect.hide();
	};

	// create dropdown
	self._initTemplate = function () {
		const $mainSpan = $( '<div/>', {
				class: 'yith-wcan-dropdown closed',
			} ),
			$labelSpan = $( '<div/>', {
				class: 'dropdown-label',
				html: self.getLabel(),
			} ),
			$dropdownSpan = $( '<div>', {
				class: 'dropdown-wrapper',
			} ),
			$matchingItemsList = $( '<ul/>', {
				class: 'matching-items filter-items',
			} );

		$dropdownSpan.append( $matchingItemsList );
		$mainSpan.append( $labelSpan ).append( $dropdownSpan );

		if ( self.options.showSearch ) {
			self._initSearchTemplate( $dropdownSpan );
		}

		if ( self.options.paginate ) {
			self._initShowMoreTemplate( $dropdownSpan );
		}

		self.$origialSelect.after( $mainSpan );
		self.$_main = $mainSpan;
		self.$_label = $labelSpan;
		self.$_dropdown = $dropdownSpan;
		self.$_items = $matchingItemsList;
	};

	// create search field
	self._initSearchTemplate = function ( $dropdwonSpan ) {
		const $container = $( '<div/>', {
				class: 'search-field-container',
			} ),
			$search = $( '<input/>', {
				name: 's',
				class: 'search-field',
				type: 'search',
				placeholder: self.options.labels.searchPlaceholder,
			} );

		$container.append( $search ).prependTo( $dropdwonSpan );
		self.$_search = $search;
	};

	// create showMore field
	self._initShowMoreTemplate = function ( $dropdwonSpan ) {
		const $showMore = $( '<a/>', {
			class: 'show-more',
			text: self.options.labels.showMore.replace(
				'%d',
				self.options.perPage
			),
		} );

		$showMore.on( 'click', self.loadNextPage ).hide();

		$dropdwonSpan.append( $showMore );
		self.$_showMore = $showMore;
	};

	// init actions performed over dropdown elements
	self._initActions = function () {
		// main open event
		self.$_main.on( 'click', ( ev ) => {
			ev.stopPropagation();
			self.toggleDropdown();
		} );
		self.$_dropdown.on( 'click', ( ev ) => {
			ev.stopPropagation();
		} );

		// search event
		self.$_search?.on( 'keyup search', () => {
			self._populateItems();
		} );

		// select event
		self.$_items.on( 'change', ':input', function () {
			let $li = $( this ).closest( 'li' ),
				value = $li.data( 'value' ),
				isActive = false;

			if (
				$li.hasClass( 'disabled' ) &&
				! self.isValueSelected( value )
			) {
				return false;
			}

			$li.toggleClass( 'active' );
			isActive = $li.hasClass( 'active' );

			self._changeItemStatus( value, isActive );
		} );
		self.$_items.on( 'click', 'li:not(.checkbox) a', function ( ev ) {
			let $li = $( this ).closest( 'li' ),
				value = $li.data( 'value' ),
				isActive = false;

			ev.preventDefault();

			if (
				$li.hasClass( 'disabled' ) &&
				! self.isValueSelected( value )
			) {
				return false;
			}

			$li.toggleClass( 'active' );
			isActive = $li.hasClass( 'active' );

			if ( isActive ) {
				$li.siblings().removeClass( 'active' );
			}

			self._changeItemStatus( value, isActive );
		} );
		self.$_items.on( 'click', 'label > a', function ( ev ) {
			const input = $( this ).parent().find( ':input' );

			ev.preventDefault();

			if (
				input.is( '[type="radio"]' ) ||
				input.is( '[type="checkbox"]' )
			) {
				input.prop( 'checked', ! input.prop( 'checked' ) );
			}

			input.change();
		} );

		// select change
		self.$origialSelect.on( 'change', ( ev, selfOriginated ) => {
			if ( selfOriginated ) {
				return;
			}

			self.$_items.find( 'li' ).each( function () {
				const value = $( this ).data( 'value' );

				if ( self.isValueSelected( value ) ) {
					self._selectItem( value );
				} else {
					self._deselectItem( value );
				}
			} );

			self.updateLabel();
		} );

		// close dropdown on external click
		$( document ).on( 'click', self.closeDropdown );
	};

	// open dropdown
	self.openDropdown = function () {
		self.$_main.addClass( 'open' ).removeClass( 'closed' );
		self._afterDropdownOpen();
	};

	// close dropdown
	self.closeDropdown = function () {
		self.$_main.removeClass( 'open' ).addClass( 'closed' );
	};

	// close other dropdowns
	self._closeOtherDropdowns = function () {
		const dropdowns = $( document )
			.find( 'select.enhanced' )
			.filter( function ( i, select ) {
				const $el = $( select );

				return (
					!! $el.data( 'dropdown' ) && ! $el.is( self.$origialSelect )
				);
			} );

		dropdowns.each( function () {
			$( this ).data( 'dropdown' ).closeDropdown();
		} );
	};

	// toggle dropdown
	self.toggleDropdown = function () {
		self.$_main.toggleClass( 'open' ).toggleClass( 'closed' );

		if ( self.$_main.hasClass( 'open' ) ) {
			self._afterDropdownOpen();
		}
	};

	// perform operations after dropdown is open
	self._afterDropdownOpen = function () {
		self._closeOtherDropdowns();

		if ( self.$_search?.length ) {
			self.$_search.val( '' );
		}

		self._populateItems();
	};

	// get elements
	self.getMatchingElements = function ( search, limit ) {
		let matchingElements = [],
			$options = self.getOptions(),
			promise;

		promise = new Promise( ( resolve ) => {
			// first of all, search across select option
			$options.each( function () {
				const t = $( this ),
					value = t.val(),
					label = t.html(),
					regex = new RegExp( '.*' + search + '.*', 'i' ),
					show =
						! search || regex.test( value ) || regex.test( label );

				if ( show ) {
					matchingElements.push( {
						value,
						label,
					} );
				}
			} );

			// then retrieve additional items
			if ( self.options.getElements ) {
				// we're expecting key => value pairs
				self.options
					.getElements( search )
					.then( ( retrievedElements ) => {
						if ( retrievedElements ) {
							// reformat retrieved array
							retrievedElements = retrievedElements.reduce(
								( a, v, i ) => {
									a.push( { label: i, value: v } );
									return a;
								},
								[]
							);

							// merge found results with options
							matchingElements = $.extend(
								matchingElements,
								retrievedElements
							);
						}

						resolve( self._formatItems( matchingElements, limit ) );
					} );
			} else {
				resolve( self._formatItems( matchingElements, limit ) );
			}
		} );

		return promise;
	};

	// format items as key/value pairs for further processing
	self._formatItems = function ( items, limit ) {
		let indexes = [],
			hasMore = false;

		// remove duplicates and sort array of results
		items
			.filter( ( v ) => {
				if ( -1 === indexes.indexOf( v.value ) ) {
					indexes.push( v.value );
					return true;
				}

				return false;
			} )
			.sort( ( a, b ) => {
				const order = self.options.order,
					mod = order === 'ASC' ? 1 : -1;

				if ( a.value < b.value ) {
					return -1 * mod;
				} else if ( a.value > b.value ) {
					return mod;
				}

				return 0;
			} );

		// paginate when needed
		if ( limit ) {
			hasMore = limit < Object.keys( items ).length;
			items = items.slice( 0, limit );
		}

		return {
			items,
			hasMore,
		};
	};

	// generate item to append to items list
	self._generateItem = function ( value, label ) {
		let active = self.isValueSelected( value ),
			option = self.getOptionByValue( value ),
			$item = $( '<li/>', {
				'data-value': value,
				class: option.length ? option.attr( 'class' ) : '',
			} ),
			$anchor;

		if ( option.length ) {
			const template = option.data( 'template' ),
				count = option.data( 'count' );

			label = template ? template : label;

			if ( !! count ) {
				label += count;
			}
		}

		$anchor = $( '<a/>', {
			href: option.length ? option.data( 'filter_url' ) : '#',
			html: label,
			'data-title': option.length ? option.data( 'title' ) : '',
		} );

		if ( self.$origialSelect.prop( 'multiple' ) ) {
			const $checkbox = $( '<input/>', {
					type: 'checkbox',
					value,
				} ),
				$label = $( '<label>' );

			$checkbox.prop( 'checked', active );
			$label.prepend( $checkbox ).append( $anchor );
			$item.append( $label ).addClass( 'checkbox' );
		} else {
			$item.append( $anchor );
		}

		active ? $item.addClass( 'active' ) : $item.removeClass( 'active' );

		return $item;
	};

	// populate items list
	self._populateItems = function ( page ) {
		let search = self.$_search?.length ? self.$_search.val() : '',
			perPage = self.options.paginate ? self.options.perPage : 0,
			limit;

		page = page ? parseInt( page ) : 1;
		limit = page * perPage;

		self.getMatchingElements( search, limit ).then( function ( resultSet ) {
			let matchingItems = resultSet.items,
				items = [],
				hasMore = false;

			// remove all previous items
			self._emptyItems();
			self._hideLoadMore();

			if ( ! matchingItems.length ) {
				items.push(
					$( '<li/>', { text: self.options.labels.noItemsFound } )
				);

				self.currentPage = 1;
			} else {
				for ( const v of matchingItems ) {
					if ( v.value === '' ) {
						items.unshift( self._generateItem( v.value, v.label ) );
					} else {
						items.push( self._generateItem( v.value, v.label ) );
					}
				}

				self.currentPage = page;
				hasMore = resultSet.hasMore;
			}

			self.$_items.append( items );

			$( document ).trigger( 'yith_wcan_dropdown_updated' );

			if ( hasMore ) {
				self._showLoadMore();
			}
		} );
	};

	// load next page of items
	self.loadNextPage = function () {
		const page = self.currentPage + 1;

		self._populateItems( page );
	};

	// set an item as active
	self._selectItem = function ( value ) {
		return self._changeItemStatus( value, true );
	};

	// disable an item
	self._deselectItem = function ( value ) {
		return self._changeItemStatus( value, false );
	};

	// change item status
	self._changeItemStatus = function ( value, status ) {
		const $option = self.$origialSelect.find(
			`option[value="${ value }"]`
		);

		if ( $option.length ) {
			$option.prop( 'selected', status );

			self.closeDropdown();
			self.updateLabel();

			self.$origialSelect.trigger( 'change', [ true ] );

			return true;
		}
		return false;
	};

	// empty items list
	self._emptyItems = function () {
		self.$_items.html( '' );
	};

	// show "Load more" link
	self._showLoadMore = function () {
		self.$_showMore.show();
	};

	// hide "Load more" link
	self._hideLoadMore = function () {
		self.$_showMore.hide();
	};

	// returns select label
	self.getLabel = function () {
		return self.hasSelectedValues()
			? self.getSelectedLabels().join( ', ' )
			: self.options.labels.emptyLabel;
	};

	// update label to match new selection
	self.updateLabel = function () {
		const label = self.getLabel();

		self.$_label.html( label );
	};

	// returns select options
	self.getOptions = function () {
		return self.$origialSelect.find( 'option' );
	};

	// checks whether select has selected values
	self.hasSelectedValues = function () {
		return self.getSelectedOptions().length;
	};

	// checks whether a value is selected
	self.isValueSelected = function ( value ) {
		const found = self.getSelectedValues().indexOf( value );

		return -1 !== found;
	};

	// retrieve selected options
	self.getSelectedOptions = function () {
		return self.$origialSelect.find( 'option' ).filter( ':selected' );
	};

	// retrieves an option node by value
	self.getOptionByValue = function ( value ) {
		return self.$origialSelect.find( `option[value="${ value }"]` );
	};

	// retrieve labels for selected options
	self.getSelectedLabels = function () {
		const labels = [];

		self.getSelectedOptions().each( function () {
			let $option = $( this ),
				template = $option.data( 'template' );

			template = template
				? template
				: $option.html().replace( /\([0-9]*\)/, '' );

			labels.push( template );
		} );

		return labels;
	};

	// retrieve values for selected options
	self.getSelectedValues = function () {
		const values = [];

		self.getSelectedOptions().each( function () {
			values.push( $( this ).val() );
		} );

		return values;
	};

	self.destroy = function () {};

	// let's start the game
	self._init();

	return self;
}

jQuery( function ( $ ) {
	$( document )
		.on(
			'yith_wcan_init_shortcodes yith_plugin_fw_gutenberg_success_do_shortcode',
			function () {
				$( '.yith-wcan-filters' )
					.not( '.enhanced' )
					.each( function () {
						new YITH_WCAN_Preset( $( this ), $ );
					} );

				$( '.yith-wcan-active-filters' )
					.not( '.enhanced' )
					.each( function () {
						new YITH_WCAN_Filter_Labels( $( this ), $ );
					} );

				$( '.yith-wcan-reset-filters' )
					.not( '.enhanced' )
					.each( function () {
						new YITH_WCAN_Reset_Button( $( this ), $ );
					} );

				$( '.yith-wcan-filters-opener' )
					.not( '.enhanced' )
					.each( function () {
						new YITH_WCAN_Modal_Opener( $( this ), $ );
					} );
			}
		)
		.trigger( 'yith_wcan_init_shortcodes' );

	globalThis.product_filter = new YITH_WCAN_Filter( $ );
} );
