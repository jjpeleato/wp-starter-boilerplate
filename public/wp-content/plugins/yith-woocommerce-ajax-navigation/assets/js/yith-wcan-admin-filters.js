'use strict';

/* global jQuery, yith_wcan_admin, ajaxurl */

function YITH_WCAN_Filters( $ ) {
	const self = this;

	// status

	self.rowIndex = 0;

	self.dependencies = {
		taxonomy: {
			type: 'tax',
		},
		terms: {
			type: 'tax',
		},
		filter_design: {
			type: 'tax',
		},
		column_number: {
			filter_design: [ 'label', 'color' ],
		},
		terms_options: {
			terms: ( v ) => !! v,
		},
		show_search: {
			filter_design: 'select',
		},
		price_ranges: {
			type: 'price_range',
		},
		price_slider_min: {
			type: 'price_slider',
		},
		price_slider_max: {
			type: 'price_slider',
		},
		price_slider_step: {
			type: 'price_slider',
		},
		order_options: {
			type: 'orderby',
		},
		show_stock_filter: {
			type: 'stock_sale',
		},
		show_sale_filter: {
			type: 'stock_sale',
		},
		toggle_style: {
			show_toggle: ':checked',
		},
		order_by: {
			type: 'tax',
		},
		order: {
			type: 'tax',
		},
		show_count: {
			type: [ 'tax', 'price_range', 'review', 'stock_sale' ],
		},
		hierarchical: {
			type: 'tax',
			filter_design: [ 'checkbox', 'radio', 'text' ],
		},
		multiple: {
			type: 'tax',
			filter_design: '-radio',
		},
		relation: {
			multiple: ':checked',
		},
		adoptive: {
			type: [ 'tax', 'price_range', 'review', 'stock_sale' ],
		},
	};

	// dom objects

	self.$form = $( '#plugin-fw-wc' );

	self.$mainAddNewFilterButton = $( '#add_new_filter' );

	self.$addNewFilterButtons = $( '.add-new-filter' );

	self.$loadMoreFiltersButtons = $( '.load-more-filters' );

	self.$filtersContainer = $( '.preset-filters' );

	self.$filters = self.$filtersContainer.find( '.yith-toggle-row' );

	self.$page = $( '#paged' );

	self.$submit = $( '#submit' );

	// init object

	self.init = function () {
		self.initFilters();
		self.initAddFilter();
		self.initLoadMoreFilters();
		self.initSubmit();
	};

	// init filters

	self.initAddFilter = function () {
		self.updateRowIndex();

		self.$addNewFilterButtons.on( 'click', function ( ev ) {
			ev.preventDefault();

			self.addFilter();
		} );
	};

	self.initLoadMoreFilters = function () {
		self.$loadMoreFiltersButtons.on( 'click', function ( ev ) {
			ev.preventDefault();

			self.loadMoreFilters();
		} );
	};

	self.initSubmit = function () {
		self.$submit.on( 'click', () => self.block( self.$form ) );
	};

	self.initFilters = function () {
		// init filter drag & drop
		self.initFiltersDragDrop();

		// filter specific init
		self.$filters.each( function () {
			self.initFilter( $( this ) );
		} );
	};

	self.initFiltersDragDrop = function () {
		self.$filtersContainer.sortable( {
			cursor: 'move',
			handle: '.yith-toggle-title',
			axis: 'y',
			scrollSensitivity: 40,
			forcePlaceholderSize: true,
		} );
	};

	self.initFilter = function ( $filter ) {
		if ( $filter.hasClass( 'initialized' ) ) {
			return;
		}

		self.initFilterTitle( $filter );
		self.initFilterToggle( $filter );
		self.initFilterFields( $filter );
		self.initFilterFieldsDependencies( $filter );
		self.initFilterSave( $filter );
		self.initFilterDelete( $filter );
		self.initFilterClone( $filter );
		self.initTerms( $filter );
		self.initRanges( $filter );

		$filter.addClass( 'initialized' );
	};

	self.initFilterFields = function ( $filter ) {
		self.initFilterTermSearch( $filter );
		self.initFilterType( $filter );
	};

	self.initFilterFieldsDependencies = function ( $filter ) {
		$filter
			.find( ':input' )
			.on( 'change', () => {
				self._applyFilterDependencies( $filter );
			} )
			.first()
			.change();
	};

	self.initFilterTermSearch = function ( $filter ) {
		const $termSearch = $filter.find( '.term-search' ).first(),
			$taxonomySelect = $filter.find( '.taxonomy' ).first(),
			$container = $termSearch.closest( '.yith-plugin-fw-field-wrapper' ),
			getAjaxParams = function ( params ) {
				return {
					term: params.term,
					all: typeof params.all !== 'undefined' ? params.all : 0,
					taxonomy: $taxonomySelect.val(),
					selected: $termSearch.val(),
					action: 'yith_wcan_search_term',
					security: yith_wcan_admin.nonce.search_term,
				};
			},
			select2_args = {
				placeholder: $( this ).data( 'placeholder' ),
				minimumInputLength: '1',
				templateSelection( option ) {
					return self.removeHierarchyFromString( option.text );
				},
				templateResult( option ) {
					return option.text.replace( '&amp;', '&' );
				},
				ajax: {
					url: ajaxurl,
					dataType: 'json',
					delay: 250,
					data: getAjaxParams,
					processResults( data ) {
						const terms = [];
						if ( data ) {
							$.each( data, function ( id, text ) {
								terms.push( { id, text } );
							} );
						}
						return {
							results: terms,
						};
					},
					cache: true,
				},
				sorter( items ) {
					return items;
				},
			};

		// init terms select
		$termSearch.selectWoo( select2_args );

		// clear terms select when taxonomy is changed
		$taxonomySelect.on( 'change', () => {
			$termSearch.find( 'option' ).remove().end().change();
		} );

		// on term changes redraw Customize terms section
		$termSearch.on( 'change', () => {
			self.updateTerms( $filter );
		} );

		// add all button
		$container
			.find( '.yith-plugin-fw-select-all' )
			.on( 'click', function ( ev ) {
				ev.preventDefault();

				if ( ! self._confirmAddAllTerms( $taxonomySelect ) ) {
					return false;
				}

				self.block( $container );

				$.get( ajaxurl, getAjaxParams( { term: '', all: 1 } ) ).then(
					( data ) => {
						const selected = $termSearch.val();

						$termSearch
							.find( 'option' )
							.not( ':selected' )
							.remove();

						$.each( data, function ( i, v ) {
							selected.push( i );

							$termSearch.append(
								$( '<option/>', {
									value: i,
									text: v,
								} )
							);
						} );

						$termSearch.val( selected ).change();

						self.unblock( $container );
					}
				);

				return false;
			} );

		// remove all button
		$container
			.find( '.yith-plugin-fw-deselect-all' )
			.on( 'click', function ( ev ) {
				ev.preventDefault();

				$termSearch.find( 'option' ).remove().end().val( '' ).change();

				return false;
			} );
	};

	self.initFilterType = function ( $filter ) {
		const $filterType = $filter.find( '[name*="filter_design"]' );

		$filterType
			.on( 'change', () => {
				self.updateTermFields( $filter, $filterType.val() );
			} )
			.change();
	};

	self.initFilterTitle = function ( $filter ) {
		const field = $filter.find( '.heading-field' ).first(),
			title = $filter.find( 'h3.title' );

		if ( title.length && field.length ) {
			field.on( 'keyup', () => {
				const v = field.val();
				title.html(
					v
						? v
						: '<span class="no-title">' +
								yith_wcan_admin.labels.no_title +
								'</span>'
				);
			} );
		}
	};

	self.initFilterSave = function ( $filter ) {
		$filter.find( '.save' ).on( 'click', function ( ev ) {
			ev.stopPropagation();

			self.saveFilter( $filter );

			return false;
		} );
	};

	self.initFilterDelete = function ( $filter ) {
		$filter.find( '.delete' ).on( 'click', function ( ev ) {
			ev.stopPropagation();

			self.removeFilter( $filter );

			return false;
		} );
	};

	self.initFilterClone = function ( $filter ) {
		$filter.find( '.clone' ).on( 'click', function ( ev ) {
			ev.stopPropagation();

			self.cloneFilter( $filter );

			return false;
		} );
	};

	self.initFilterToggle = function ( $filter ) {
		$filter.find( '.yith-toggle-title' ).on( 'click', function ( ev ) {
			const $target = $( ev.target );

			ev.preventDefault();

			if ( $target.is( '.yith-plugin-fw-onoff' ) ) {
				const checkbox = $target.prev( 'input[type="checkbox"]' );

				checkbox.prop( 'checked', ! checkbox.prop( 'checked' ) );
				return false;
			}

			const $currentFilter = $( this ).parent();

			if ( $currentFilter.hasClass( 'yith-toggle-row-opened' ) ) {
				self.closeFilter( $currentFilter );
			} else {
				self.openFilter( $currentFilter );
			}

			return false;
		} );
	};

	self.afterAddFilter = function ( $filter ) {
		self.closeAllFilters();
		self.openFilter( $filter );
		self.updateFilters();
		self.maybeHideEmptyBox( self.$filtersContainer, self.$filters );
		self.$mainAddNewFilterButton.show();

		$filter.trigger( 'yith_fields_init' );

		self.initFilter( $filter );
	};

	self.afterRemoveFilter = function () {
		self.updateFilters();
		self.maybeShowEmptyBox( self.$filtersContainer, self.$filters );

		if ( ! self.$filters.length ) {
			self.$mainAddNewFilterButton.hide();
		}
	};

	self._findFilterField = function (
		$filter,
		field,
		returnContainer = true
	) {
		let $field;

		switch ( field ) {
			case 'terms_options':
				$field = $filter.find( '.terms-wrapper' );
				break;
			case 'price_ranges':
				$field = $filter.find( '.ranges-wrapper' );
				break;
			default:
				$field = $filter.find( ':input[name*="[' + field + ']"]' );
				break;
		}

		if ( ! $field.length ) {
			return null;
		}

		if ( returnContainer ) {
			return $field.closest( '.yith-toggle-content-row' );
		}

		return $field;
	};

	self._applyFilterDependencies = function ( $filter ) {
		$.each( self.dependencies, function ( field, conditions ) {
			const container = self._findFilterField( $filter, field ),
				show = self._checkFilterFieldConditions( $filter, conditions );

			if ( show ) {
				container?.css( { display: 'table' } );
			} else {
				container?.hide();
			}
		} );
	};

	self._checkFilterFieldConditions = function ( $filter, conditions ) {
		let result = true;

		$.each( conditions, function ( field, condition ) {
			let $field, fieldValue;

			if ( ! result ) {
				return;
			}

			$field = self._findFilterField( $filter, field, false );

			if ( ! $field?.length ) {
				return;
			}

			if ( $field.first().is( 'input[type="radio"]' ) ) {
				fieldValue = $field.filter( ':checked' ).val().toString();
			} else {
				fieldValue = $field?.val()?.toString();
			}

			if ( Array.isArray( condition ) ) {
				result = condition.includes( fieldValue );
			} else if ( typeof condition === 'function' ) {
				result = condition( fieldValue );
			} else if ( 0 === condition.indexOf( ':' ) ) {
				result = $field.is( condition );
			} else if ( 0 === condition.indexOf( '-' ) ) {
				result = condition.toString().substring( 1 ) !== fieldValue;
			} else {
				result = condition.toString() === fieldValue;
			}

			if ( typeof self.dependencies[ field ] !== 'undefined' ) {
				result =
					result &&
					self._checkFilterFieldConditions(
						$filter,
						self.dependencies[ field ]
					);
			}
		} );

		return result;
	};

	self._confirmAddAllTerms = function ( $select ) {
		let v = $select.val(),
			counts = $select.data( 'counts' ),
			message = yith_wcan_admin.messages.confirm_add_all_terms;

		if ( counts[ v ] && counts[ v ] > 1 ) {
			message = message.replace( '%s', counts[ v ] );
			return confirm( message );
		}
		return true;
	};

	// filter actions

	self.addFilter = function () {
		const newFilterTemplate = wp.template( 'yith-wcan-filter' ),
			newFilter = newFilterTemplate( {
				id: self.nextRowIndex(),
			} ),
			$newFilter = $( newFilter );

		self.$filtersContainer.append( $newFilter );

		self.afterAddFilter( $newFilter );

		return $newFilter;
	};

	self.removeFilter = function ( $filter ) {
		if ( confirm( yith_wcan_admin.messages.confirm_delete ) ) {
			self.ajaxDeleteFilter( $filter ).done( () => {
				$filter.remove();
				self.afterRemoveFilter();
			} );
		}
	};

	self.getFilterData = function ( $filter ) {
		return self.serialize(
			$filter,
			( v ) => v.replace( /filters\[[0-9]+]\[([a-z_-]+)]/, '$1' ),
			( i, v ) => ! $( v ).is( 'select[name*="terms"]' )
		);
	};

	self.populateFilter = function ( $filter, filterData ) {
		for ( const i in filterData ) {
			const row_id = self.getRowIndex( $filter ),
				nameId = `filters_${ row_id }_${ i }`,
				$input = $filter.find( `#${ nameId }` ),
				value = filterData[ i ];

			if ( ! $input.length && 'price_ranges' !== i ) {
				continue;
			}

			if ( 'terms' === i ) {
				const terms = value;
				if ( 'object' !== typeof terms ) {
					continue;
				}

				for ( const j in terms ) {
					if ( ! terms[ j ]?.label ) {
						continue;
					}

					const newOption = $( '<option/>', {
						value: j,
						text: terms[ j ]?.label,
						selected: true,
					} );

					$input.append( newOption );
				}

				// trigger change for the select
				$input.change();

				// update term boxes
				self.updateTerms( $filter );

				// populate options for each filter
				for ( const j in terms ) {
					for ( const k in terms[ j ] ) {
						const termId = `${ nameId }_${ j }_${ k }`,
							$termInput = $filter.find( `#${ termId }` );

						if ( ! $termInput.length ) {
							continue;
						}

						$termInput.val( terms[ j ][ k ] );
					}
				}
			} else if ( 'price_ranges' === i ) {
				const ranges = value;

				if ( 'object' !== typeof ranges ) {
					continue;
				}

				for ( const j in ranges ) {
					const range = ranges[ j ];

					self.addRange(
						$filter,
						range.min,
						range.max,
						range.unlimited
					);
				}
			} else if ( $input.is( ':checkbox' ) ) {
				$input.prop( 'checked', value === 'yes' ).change();
			} else if ( $input.is( '[data-type="radio"]' ) ) {
				$input
					.find( ':input' )
					.prop( 'checked', false )
					.filter( '[value="' + value + '"]' )
					.prop( 'checked', true )
					.change();
			} else if ( 'title' === i ) {
				$input.val( filterData[ i ] ).keyup();
			} else {
				$input.val( filterData[ i ] ).change();
			}
		}
	};

	self.cloneFilter = function ( $filter ) {
		self.closeAllFilters( () => {
			const $newFilter = self.addFilter(),
				filterIndex = self.getRowIndex( $filter ),
				currentRow = self.currentRowIndex();

			$filter.find( ':input' ).each( function () {
				let $input = $( this ),
					id = $input.attr( 'id' ),
					$newInput,
					newId;

				if ( 'undefined' === typeof id ) {
					return;
				}

				newId = id.replace(
					'filters_' + filterIndex + '_',
					'filters_' + currentRow + '_'
				);
				$newInput = $newFilter.find( '#' + newId );

				if ( ! $newInput.length ) {
					return;
				}

				if (
					$newInput.is( 'input[type="radio"]' ) ||
					$newInput.is( 'input[type="checkbox"]' )
				) {
					$newInput.prop( 'checked', $input.is( ':checked' ) );
				} else if ( $newInput.is( 'select' ) ) {
					if ( ! $newInput.find( 'option' ).length ) {
						$input.find( 'option' ).clone().appendTo( $newInput );
					}

					$newInput.val( $input.val() );
				} else {
					$newInput.val( $input.val() );
				}

				// special handling for term second color
				if (
					-1 !== newId.indexOf( 'color_2' ) &&
					! $input.prop( 'disabled' )
				) {
					self.showTermAdditionalColor(
						$newInput.closest( '.term-box' )
					);
				}

				// special handling for term mode
				if ( -1 !== newId.indexOf( 'mode' ) ) {
					self.showTermTab(
						$newInput.closest( '.term-box' ),
						$newInput.val()
					);
				}

				// special handling for term image
				if ( -1 !== newId.indexOf( 'image' ) && $newInput.val() ) {
					$newInput
						.closest( '.image-selector' )
						.find( '.placeholder-image' )
						.hide()
						.end()
						.find( '.selected-image' )
						.show()
						.append(
							$input
								.closest( '.image-selector' )
								.find( '.selected-image' )
								.find( 'img' )
								.clone()
						);
				}

				$newInput.change().keyup();
			} );
		} );
	};

	self.saveFilter = function ( $filter ) {
		self.ajaxSaveFilter( $filter ).done( ( data ) => {
			self.maybeSetPresetId( data.id );
			self.closeFilter( $filter );
		} );
	};

	self.openFilter = function ( $filter ) {
		// TODO: system doesn't know at this point correct filter offset; we will only know after animations
		// $('html, body').animate( { scrollTop: $filter.offset().top - 100 }, 400 );

		// fix title
		$filter
			.find( '.yith-toggle-title' )
			.find( '.title-arrow' )
			.text( 'keyboard_arrow_down' );

		// animate content and return promise
		return $filter
			.addClass( 'yith-toggle-row-opened' )
			.find( '.yith-toggle-content' )
			.slideDown()
			.promise();
	};

	self.closeFilter = function ( $filter ) {
		// fix title
		$filter
			.find( '.yith-toggle-title' )
			.find( '.title-arrow' )
			.text( 'keyboard_arrow_right' );

		// animate content and return promise
		return $filter
			.find( '.yith-toggle-content' )
			.slideUp( 400, function () {
				$filter.removeClass( 'yith-toggle-row-opened' );
			} )
			.promise();
	};

	self.closeAllFilters = function ( callback ) {
		self.closeFilter( self.$filters ).done( () => {
			typeof callback === 'function' && callback();
		} );
	};

	self.loadMoreFilters = function () {
		let page = self.$page.val();

		self.doAjax(
			'yith_wcan_load_more_filters',
			{
				preset: self.getPresetId(),
				page: ++page,
				_wpnonce: yith_wcan_admin.nonce.load_more_filters,
			},
			self.$loadMoreFiltersButtons,
			{
				method: 'get',
			}
		).done( ( data ) => {
			if ( !! data ) {
				if ( data.filters ) {
					for ( const i in data.filters ) {
						const filterData = data.filters[ i ],
							newFilterTemplate = wp.template(
								'yith-wcan-filter'
							),
							newFilter = newFilterTemplate( {
								id: i,
							} ),
							$newFilter = $( newFilter );

						self.populateFilter( $newFilter, filterData );
						self.$filtersContainer.append( $newFilter );

						self.afterAddFilter( $newFilter );
						$newFilter.find( '.heading-field' ).keyup();
					}
				}

				if ( ! data.has_more ) {
					self.$loadMoreFiltersButtons.remove();
					self.$page.remove();
					self.$page = null;
				} else {
					self.$page.val( page );
				}
			}
		} );
	};

	self.updateFilters = function () {
		self.$filters = self.$filtersContainer.find( '.yith-toggle-row' );
	};

	self.getRowIndex = function ( $row ) {
		const index = $row.data( 'item_key' );

		return index ? parseInt( index ) : 0;
	};

	self.updateRowIndex = function () {
		let maxIndex = 0;

		self.$filters.each( function ( i ) {
			const id = this.id,
				numericId = id.replace( 'filter_', '' );

			maxIndex = maxIndex < numericId ? numericId : maxIndex;
		} );

		self.rowIndex = maxIndex;
	};

	self.nextRowIndex = function () {
		if ( ! self.rowIndex ) {
			self.updateRowIndex();
		}

		return ++self.rowIndex;
	};

	self.currentRowIndex = function () {
		if ( ! self.rowIndex ) {
			self.updateRowIndex();
		}

		return self.rowIndex;
	};

	// term actions

	self.getTerms = function ( $filter ) {
		return $filter.find( '.term-box' );
	};

	self.initTerms = function ( $filter ) {
		const $terms = $filter.find( '.term-box' );

		$terms.each( function () {
			self.initTerm( $( this ) );
		} );

		self.initTermsDragDrop( $filter );
	};

	self.initTerm = function ( $term ) {
		self.initTermTabs( $term );
		self.initTermImageSelector( $term );
		self.initTermAdditionalColor( $term );
	};

	self.initTermTabs = function ( $term ) {
		const headers = $term.find( '.term-tab-header' );

		headers.on( 'click', function ( ev ) {
			const t = $( this ),
				tab = t.data( 'tab' );

			ev.preventDefault();

			self.showTermTab( $term, tab );
		} );

		self.showTermTab( $term, $term.find( '.term-mode' ).val() );
	};

	self.initTermAdditionalColor = function ( $term ) {
		$term.find( '.term-add-second-color' ).on( 'click', function ( ev ) {
			const t = $( this );

			ev.preventDefault();

			self.showTermAdditionalColor( $term );
		} );

		$term.find( '.term-hide-second-color' ).on( 'click', function ( ev ) {
			const t = $( this );

			ev.preventDefault();

			self.hideTermAdditionalColor( $term );
		} );
	};

	self.initTermImageSelector = function ( $term ) {
		let $imageSelector = $term.find( '.image-selector' ),
			$placeholder = $imageSelector.find( '.placeholder-image' ),
			$selected = $imageSelector.find( '.selected-image' ),
			$selectedImg = $selected.find( 'img' ),
			$input = $imageSelector.find( '.term-image' ),
			$clear = $selected.find( '.clear-image' ),
			media;

		$placeholder.off( 'click' ).on( 'click', function () {
			self.block( $placeholder );

			if ( media ) {
				media.open();
				return;
			}

			// Create a new media frame
			media = wp.media( {
				title: yith_wcan_admin.labels.upload_media,
				button: {
					text: yith_wcan_admin.labels.confirm_media,
				},
				multiple: false,
			} );

			// When an image is selected in the media frame...
			media.on( 'select', function () {
				// Get media attachment details from the frame state
				const attachment = media
					.state()
					.get( 'selection' )
					.first()
					.toJSON();

				$selectedImg.remove();
				$selectedImg = $( '<img/>', {
					src: attachment.url,
				} );

				$selected.prepend( $selectedImg );

				$input.val( attachment.id );

				self.unblock( $placeholder );

				$placeholder.hide();
				$selected.show();
			} );

			media.on( 'close', function () {
				self.unblock( $placeholder );
			} );

			// Finally, open the modal on click
			media.open();
		} );

		$clear.off( 'click' ).on( 'click', function ( ev ) {
			ev.preventDefault();

			$input.val( '' );

			$selected.hide();
			$placeholder.show();
		} );
	};

	self.initTermsDragDrop = function ( $filter ) {
		$filter.find( '.terms-wrapper' ).sortable( {
			cursor: 'move',
			scrollSensitivity: 40,
			forcePlaceholderSize: true,
			helper: 'clone',
		} );
	};

	self.showTermTab = function ( $term, tab, force ) {
		const headers = $term.find( '.term-tab-header' ),
			tabs = $term.find( '.tab' ),
			selectedTab = tabs.filter( '.tab-' + tab );

		if (
			! selectedTab.length ||
			( ! headers.is( ':visible' ) && ! force )
		) {
			return;
		}

		const activeMode = $term.find( '.term-mode' );

		headers
			.removeClass( 'active' )
			.filter( '[data-tab="' + tab + '"]' )
			.addClass( 'active' );

		tabs.hide();
		selectedTab.show();
		activeMode.val( tab );
	};

	self.showTermAdditionalColor = function ( $term ) {
		const trigger = $term.find( '.term-add-second-color' );

		trigger
			.parent()
			.hide()
			.next( '.additional-color' )
			.show()
			.find( '.wp-color-picker' )
			.prop( 'disabled', false );
	};

	self.hideTermAdditionalColor = function ( $term ) {
		const trigger = $term.find( '.term-hide-second-color' );

		trigger
			.parent()
			.find( '.wp-color-picker' )
			.prop( 'disabled', true )
			.end()
			.hide()
			.prev( 'p' )
			.show();
	};

	self.updateTerms = function ( $filter ) {
		const selectedTerms = self._getSelectedTerms( $filter ),
			$termsContainer = $filter.find( '.terms-wrapper' ),
			$existingTerms = $termsContainer.find( '.term-box' ),
			$filterType = $filter.find( '[name*="filter_design"]' ),
			newTerms = [];

		if ( selectedTerms ) {
			$.each( selectedTerms, function ( i, v ) {
				const $term = $existingTerms.filter(
					'[data-term_id="' + v.id + '"]'
				);
				if ( $term.length ) {
					newTerms.push( $term );
				} else {
					const newTermTemplate = wp.template(
							'yith-wcan-filter-term'
						),
						newTerm = newTermTemplate( {
							id: self.getRowIndex( $filter ),
							term_id: v.id,
							name: v.name,
							label: v.name,
							tooltip: '',
						} ),
						$newTerm = $( newTerm );

					newTerms.push( $newTerm );
				}
			} );
		}

		$existingTerms.detach();

		if ( newTerms.length ) {
			$.each( newTerms, function ( i, v ) {
				$termsContainer.append( v );

				self.afterAddTerm( v );
			} );
		}

		self.updateTermFields( $filter, $filterType.val() );

		$filter.trigger( 'yith_fields_init' );
	};

	self.updateTermFields = function ( $filter, type ) {
		const $terms = $filter.find( '.term-box' );

		switch ( type ) {
			case 'color':
				$terms
					.find( '.term-tab-headers' )
					.show()
					.find( 'a[data-tab="color"], span' )
					.show();
				$terms.find( '.tab.tab-color' ).show();
				$terms.find( '.tab.tab-image' ).show();

				$terms.each( function () {
					const $term = $( this );

					self.showTermTab(
						$term,
						$term.find( '.term-mode' ).val(),
						true
					);
				} );
				break;
			case 'label':
				$terms
					.find( '.term-tab-headers' )
					.show()
					.find( 'a[data-tab="color"], span' )
					.hide();
				$terms.find( '.tab.tab-color' ).hide();
				$terms.find( '.tab.tab-image' ).show();

				self.showTermTab( $terms, 'image', true );
				break;
			default:
				$terms.find( '.term-tab-headers' ).hide();
				$terms.find( '.tab.tab-color' ).hide();
				$terms.find( '.tab.tab-image' ).hide();
				break;
		}
	};

	self.afterAddTerm = function ( $term ) {
		self.initTerm( $term );
	};

	self._getSelectedTerms = function ( $filter ) {
		const $termSearch = $filter.find( '.term-search' ).first(),
			resultSet = [];

		if ( ! $termSearch.length ) {
			return resultSet;
		}

		const selectedTerms = $termSearch.val();

		if ( ! selectedTerms ) {
			return resultSet;
		}

		$.each( selectedTerms, function ( i, v ) {
			const option = $termSearch.find( 'option[value="' + v + '"]' );

			if ( option.length ) {
				resultSet.push( {
					id: v,
					name: self.removeHierarchyFromString( option.text() ),
				} );
			}
		} );

		return resultSet;
	};

	// range actions

	self.initRanges = function ( $filter ) {
		const $ranges = $filter.find( '.range-box' );

		self.initAddRange( $filter );
		self.initRangesPosition( $filter );
		self.initRangesDragDrop( $filter );

		$ranges.each( function () {
			self.initRange( $( this ) );
		} );
	};

	self.initRange = function ( $range ) {
		self.initRangeDependencies( $range );
		self.initRangeRemove( $range );
	};

	self.initAddRange = function ( $filter ) {
		const $addRange = $filter.find( '.add-price-range' );

		$addRange.on( 'click', function ( ev ) {
			ev.preventDefault();

			self.addRange( $filter );
			self.initRangesPosition( $filter );
		} );
	};

	self.initRangeRemove = function ( $range ) {
		$range.find( 'a.range-remove' ).on( 'click', ( ev ) => {
			const $filter = self.getItemFilter( $range );

			ev.preventDefault();
			$range.remove();

			self.initRangesPosition( $filter );
		} );
	};

	self.initRangeDependencies = function ( $range ) {
		const $unlimitedCheck = $range.find( '[name*="unlimited"]' );

		// manage unlimited check
		$unlimitedCheck
			.on( 'change', function () {
				const t = $( this ),
					$max = t.closest( '.range-box' ).find( '.max' );

				if ( t.is( ':checked' ) ) {
					$max.hide();
				} else {
					$max.show();
				}
			} )
			.change();
	};

	self.initRangesPosition = function ( $filter ) {
		$filter.find( '.range-box' ).each( function () {
			const t = $( this ),
				$unlimitedContainer = t.find( '.unlimited' ),
				$unlimitedCheck = $unlimitedContainer.find( ':input' );

			if ( ! t.is( ':last-child' ) ) {
				$unlimitedCheck.prop( 'checked', false ).change();
				$unlimitedContainer.hide();
			} else {
				$unlimitedContainer.show();
			}
		} );
	};

	self.initRangesDragDrop = function ( $filter ) {
		$filter.find( '.ranges-wrapper' ).sortable( {
			cursor: 'move',
			scrollSensitivity: 40,
			forcePlaceholderSize: true,
			helper: 'clone',
			stop() {
				$( this )
					.find( '.range-box' )
					.each( function ( i ) {
						$( this )
							.data( 'range_id', i )
							.find( ':input' )
							.attr( 'name', function () {
								return $( this )
									.attr( 'name' )
									.replace(
										/\[price_ranges]\[[0-9]+]/,
										'[price_ranges][' + i + ']'
									);
							} )
							.attr( 'id', function () {
								return $( this )
									.attr( 'id' )
									.replace(
										/price_ranges_[0-9]+/,
										'price_ranges_' + i
									);
							} );
					} );

				self.initRangesPosition( $filter );
			},
		} );
	};

	self.addRange = function (
		$filter,
		min = '',
		max = '',
		unlimited = false
	) {
		const newRangeTemplate = wp.template( 'yith-wcan-filter-range' ),
			newRange = newRangeTemplate( {
				id: self.getRowIndex( $filter ),
				range_id: self.getNextRangeIndex( $filter ),
				min: 0,
				max: 0,
			} ),
			$newRange = $( newRange );

		$newRange.find( '.min' ).find( ':input' ).val( min );
		$newRange.find( '.max' ).find( ':input' ).val( max );
		$newRange
			.find( '.unlimited' )
			.find( ':input' )
			.prop( 'checked', unlimited );

		$filter.find( '.ranges-wrapper' ).append( $newRange );

		self.afterAddRange( $newRange );

		return $newRange;
	};

	self.afterAddRange = function ( $range ) {
		self.initRange( $range );
	};

	self.getNextRangeIndex = function ( $filter ) {
		let $rangeWrapper = $filter.find( '.ranges-wrapper' ),
			currentIndex = $rangeWrapper.data( 'index' ),
			nextIndex = 0;

		if ( ! currentIndex ) {
			currentIndex = $rangeWrapper.find( '.range-box' ).length;
		}

		nextIndex = ++currentIndex;

		$rangeWrapper.data( 'index', nextIndex );

		return nextIndex;
	};

	// ajax handling

	self.ajaxSaveFilter = function ( $filter ) {
		const preset_id = self.getPresetId(),
			filter = self.getFilterData( $filter ),
			filter_id = $filter.attr( 'id' ).replace( 'filter_', '' );

		// send term order, to save terms in the correct sequence.
		filter.terms_order = self
			.getTerms( $filter )
			.toArray()
			.map( ( i ) => $( i ).data( 'term_id' ) );

		return self.doAjax(
			'yith_wcan_save_preset_filter',
			{
				preset: preset_id,
				filter,
				filter_id,
				_wpnonce: yith_wcan_admin.nonce.save_preset_filter,
			},
			$filter
		);
	};

	self.ajaxDeleteFilter = function ( $filter ) {
		const preset_id = self.getPresetId();

		if ( ! preset_id ) {
			return jQuery.Deferred().resolve();
		}

		const filter_id = $filter.attr( 'id' ).replace( 'filter_', '' );

		return self.doAjax( 'yith_wcan_delete_preset_filter', {
			preset: preset_id,
			filter_id,
			_wpnonce: yith_wcan_admin.nonce.delete_preset_filter,
		} );
	};

	self.doAjax = function ( action, data, $object, args ) {
		if ( ! data ) {
			data = {};
		}

		data.action = action;

		let params = {
			beforeSend: () => {
				$object && $object.length && self.block( $object );
			},
			complete: () => {
				$object && $object.length && self.unblock( $object );
			},
			data,
			method: 'post',
			dataType: 'json',
			url: ajaxurl,
		};

		if ( args ) {
			params = $.extend( params, args );
		}

		return $.ajax( params );
	};

	// utils

	self.getItemFilter = function ( $item ) {
		return $item.closest( '.yith-toggle-row' );
	};

	self.maybeShowEmptyBox = function ( $container, items ) {
		const emptyBox = $container.children( '.yith-wcan-admin-no-post' );

		if (
			emptyBox.length &&
			! emptyBox.is( ':visible' ) &&
			! items.length &&
			! self.$loadMoreFiltersButtons.length
		) {
			emptyBox.show();
		}
	};

	self.maybeHideEmptyBox = function ( $container, items ) {
		const emptyBox = $container.children( '.yith-wcan-admin-no-post' );

		if ( emptyBox.length && emptyBox.is( ':visible' ) && items.length ) {
			emptyBox.hide();
		}
	};

	self.block = function ( $el ) {
		if ( typeof $.fn.block === 'undefined' ) {
			return;
		}

		$el.block( {
			message: null,
			overlayCSS: {
				background: '#fff',
				opacity: 0.6,
			},
		} );
	};

	self.unblock = function ( $el ) {
		if ( typeof $.fn.unblock === 'undefined' ) {
			return;
		}

		$el.unblock();
	};

	self.serialize = function ( $el, formatName, filterItems ) {
		let result = {},
			inputs = $el.find( ':input' ).not( '[disabled]' );

		if ( typeof filterItems === 'function' ) {
			inputs = inputs.filter( filterItems );
		}

		inputs.each( function () {
			let t = $( this ),
				name = t.attr( 'name' ),
				value;

			if ( ! name ) {
				return;
			}

			// removes ending brackets, since are not needed
			name = name.replace( /^(.*)\[]$/, '$1' );

			// offers additional name formatting from invoker
			if ( typeof formatName === 'function' ) {
				name = formatName( name );
			}

			// retrieve value, depending on input type
			if ( t.is( '[type="checkbox"]' ) && ! t.is( ':checked' ) ) {
				return;
			} else if ( t.is( '[type="radio"]' ) && ! t.is( ':checked' ) ) {
				return;
			}
			value = t.val();

			// if name is composite, try to recreate missing structure
			if ( -1 !== name.indexOf( '[' ) ) {
				const components = name
						.split( '[' )
						.map( ( c ) => c.replace( /[\[, \]]/g, '' ) ),
					firstComponent = components.shift(),
					newItem = components
						.reverse()
						.reduce( ( res, key ) => ( { [ key ]: res } ), value );

				if ( typeof result[ firstComponent ] === 'undefined' ) {
					result[ firstComponent ] = newItem;
				} else {
					result[ firstComponent ] = $.extend(
						true,
						result[ firstComponent ],
						newItem
					);
				}
			}
			// else simply append value to result object
			else {
				result[ name ] = value;
			}
		} );

		return result;
	};

	self.getPresetId = function () {
		return $( '#preset_id' ).val();
	};

	self.maybeSetPresetId = function ( newId ) {
		if ( self.getPresetId() || ! newId ) {
			return;
		}

		$( '#preset_id' ).val( newId );
	};

	self.removeHierarchyFromString = function ( value ) {
		return value
			.replace( /^(.*>)([^>]+)$/, '$2' )
			.replace( '&amp;', '&' )
			.trim();
	};

	// let's start the game
	self.init();
}
