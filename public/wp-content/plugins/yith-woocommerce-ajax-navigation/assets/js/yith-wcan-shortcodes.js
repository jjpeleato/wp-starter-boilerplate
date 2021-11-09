/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./assets/js/shortcodes/config.js

/* global globalThis, jQuery, yith_wcan_shortcodes, accounting */

var $ = jQuery; // we can do this as WebPack will compact all together inside a closure.


;// CONCATENATED MODULE: ./assets/js/shortcodes/modules/yith-wcan-filter.js

/* global globalThis, jQuery, yith_wcan_shortcodes, accounting */

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var YITH_WCAN_Filter = /*#__PURE__*/function () {
  // currently executing xhr
  // flag set during ajax call handling
  // register original url search param
  // flag set once init has executed
  // init object
  function YITH_WCAN_Filter() {
    _classCallCheck(this, YITH_WCAN_Filter);

    _defineProperty(this, "xhr", null);

    _defineProperty(this, "doingAjax", false);

    _defineProperty(this, "originalSearch", location.search);

    _defineProperty(this, "initialized", false);

    var head = $('head').html(),
        pageTitle = document.title,
        alternativeUrl = this.searchAlternativeUrl(head);
    alternativeUrl && !this.doingAjax && !this.initialized && !yith_wcan_shortcodes.ajax_filters && this.pushUrlToHistory(alternativeUrl, pageTitle);
    this.initialized = true;
  } // execute call to filter products in current view


  _createClass(YITH_WCAN_Filter, [{
    key: "doFilter",
    value: function doFilter(filters, target, preset) {
      var _this = this;

      var targetUrl,
          $target = target ? $(target) : $('body'),
          customFilters; // filter properties

      customFilters = $(document).triggerHandler('yith_wcan_filters_parameters', [filters]);

      if (!!customFilters) {
        filters = customFilters;
      } // block elements before filtering


      $target && this.block($target); // calculate target url

      targetUrl = this.buildUrl(filters); // if no ajax, simply change page url

      if (!yith_wcan_shortcodes.ajax_filters) {
        window.location = targetUrl;
        return;
      } // start doing ajax


      this.doingAjax = true;
      return this._doAjax(targetUrl).done(function (response) {
        targetUrl = _this.searchAlternativeUrl(response, targetUrl);

        _this._beforeFilter(response, filters);

        _this.refreshFragments(target, preset, response);

        _this.pushUrlToHistory(targetUrl, response.pageTitle);

        $target && _this.unblock($target);

        _this._afterFilter(response, filters);

        _this.doingAjax = false;
      });
    } // actions performed before filter

  }, {
    key: "_beforeFilter",
    value: function _beforeFilter(response, filters) {
      $(document).trigger('yith-wcan-ajax-loading', [response, filters]);
    } // actions performed after filter

  }, {
    key: "_afterFilter",
    value: function _afterFilter(response, filters) {
      $('.woocommerce-ordering').on('change', 'select.orderby', function () {
        $(this).closest('form').submit();
      });

      if (filters && !!Object.keys(filters).length) {
        $('body').addClass('filtered');
      } else {
        $('body').removeClass('filtered');
      }

      $(window).trigger('scroll');
      $(document).trigger('yith-wcan-ajax-filtered', [response, filters]).trigger('yith_wcwl_reload_fragments');
    } // build url to show

  }, {
    key: "buildUrl",
    value: function buildUrl(filters) {
      var _this2 = this;

      var queryParam = yith_wcan_shortcodes.query_param,
          params = {},
          location = window.location,
          url = !!yith_wcan_shortcodes.base_url ? yith_wcan_shortcodes.base_url : (location === null || location === void 0 ? void 0 : location.origin) + (location === null || location === void 0 ? void 0 : location.pathname),
          search = '',
          self = this;
      var haveFilters = _typeof(filters) === 'object' && Object.keys(filters).length; // remove filter session from current url, if any

      if (!!yith_wcan_shortcodes.session_param) {
        url = url.replace(new RegExp('/' + yith_wcan_shortcodes.session_param + '/[^/]*/'), '');
      }

      if (haveFilters) {
        params[queryParam] = 1;
      }

      if (!!this.originalSearch) {
        var searchParams = this.originalSearch.replace('?', '').split('&').reduce(function (a, v) {
          var items = v.split('=');

          if (items.length === 2) {
            if (_this2.isFilterParam(items[0])) {
              return a;
            }

            a[items[0]] = items[1];
          }

          return a;
        }, {});
        params = $.extend(params, searchParams);
      }

      if (haveFilters) {
        params = $.extend(params, filters);
      }

      search = Object.keys(params).reduce(function (a, i) {
        var v = params[i];

        if (!v || !i) {
          return a;
        }

        a += self._cleanParam(i) + '=' + self._cleanParam(v) + '&';
        return a;
      }, '?').replace(/&$/g, '').replace(/%2B/g, '+').replace(/%2C/g, ',');

      if (search.length > 1) {
        url += search;
      }

      return url;
    } // retrieves alternative sharing url in response body

  }, {
    key: "searchAlternativeUrl",
    value: function searchAlternativeUrl(response) {
      var defaultUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var url = defaultUrl,
          matches;

      if (-1 === response.indexOf('yith_wcan:sharing_url')) {
        return url;
      }

      matches = response.match(/<meta name="yith_wcan:sharing_url" content="([^"]*)">/);
      url = matches && 1 in matches ? matches[1] : url;
      return url;
    } // push url to browser history

  }, {
    key: "pushUrlToHistory",
    value: function pushUrlToHistory(url, title) {
      if (!yith_wcan_shortcodes.change_browser_url || navigator.userAgent.match(/msie/i)) {
        return;
      }

      window.history.pushState({
        pageTitle: title
      }, '', url);
    } // replaces elements in the page with refreshed ones

  }, {
    key: "refreshFragments",
    value: function refreshFragments(target, preset, response) {
      var responseDom = document.createElement('html'),
          $response = $(responseDom);
      responseDom.innerHTML = response;

      if (target) {
        var $preset = $(preset),
            $target = $(target),
            $destination;

        if ($preset.length) {
          $destination = $response.find(preset);

          if ($destination.length) {
            $preset.replaceWith($destination.first());
          }
        }

        if ($target.length) {
          $destination = $response.find(target);

          if ($destination.length) {
            $target.replaceWith($destination.first());
          }
        }
      } else {
        var content = $(yith_wcan_shortcodes.content);

        if (content.length) {
          content.replaceWith($response.find(yith_wcan_shortcodes.content));
        } else {
          $('body').replaceWith($response.find('body'));
        }
      }

      $(document).trigger('yith_wcan_init_shortcodes');
    } // clean url parameters

  }, {
    key: "_cleanParam",
    value: function _cleanParam(param) {
      var _yith_wcan_shortcodes, _yith_wcan_shortcodes2;

      if (!((_yith_wcan_shortcodes = yith_wcan_shortcodes) !== null && _yith_wcan_shortcodes !== void 0 && _yith_wcan_shortcodes.process_sanitize) || (_yith_wcan_shortcodes2 = yith_wcan_shortcodes) !== null && _yith_wcan_shortcodes2 !== void 0 && _yith_wcan_shortcodes2.skip_sanitize) {
        return param;
      }

      return encodeURIComponent(param);
    } // executes Ajax calls

  }, {
    key: "_doAjax",
    value: function _doAjax(url, params) {
      if (this.xhr) {
        this.xhr.abort();
      }

      params = $.extend({
        url: url,
        headers: {
          'X-YITH-WCAN': 1
        }
      }, params);
      this.xhr = $.ajax(params);
      return this.xhr;
    } // block dom elements

  }, {
    key: "block",
    value: function block($el) {
      var _yith_wcan_shortcodes3;

      if (typeof $.fn.block === 'undefined') {
        return;
      }

      var background = '#fff center center no-repeat';

      if ((_yith_wcan_shortcodes3 = yith_wcan_shortcodes) !== null && _yith_wcan_shortcodes3 !== void 0 && _yith_wcan_shortcodes3.loader) {
        background = "url('".concat(yith_wcan_shortcodes.loader, "') ").concat(background);
      }

      $el.block({
        message: null,
        overlayCSS: {
          background: background,
          opacity: 0.7
        }
      });
    } // unblock dom elements

  }, {
    key: "unblock",
    value: function unblock($el) {
      if (typeof $.fn.unblock === 'undefined') {
        return;
      }

      $el.unblock();
    } // checks if param is one used by layared nav to filter products.

  }, {
    key: "isFilterParam",
    value: function isFilterParam(param) {
      var supportedParams = ['rating_filter', 'min_price', 'max_price', 'price_ranges', 'onsale_filter', 'instock_filter', 'featured_filter', 'orderby', 'product-page', yith_wcan_shortcodes.query_param],
          customParams; // filter properties

      customParams = $(document).triggerHandler('yith_wcan_supported_filters_parameters', [supportedParams]);

      if (!!customParams) {
        supportedParams = customParams;
      }

      supportedParams = supportedParams.concat(yith_wcan_shortcodes.supported_taxonomies.map(function (i) {
        return i.replace('pa_', 'filter_');
      }));

      if (-1 !== supportedParams.indexOf(param)) {
        return true;
      }

      if (-1 !== param.indexOf('filter_')) {
        return true;
      }

      if (-1 !== param.indexOf('query_type_')) {
        return true;
      }

      return false;
    }
  }]);

  return YITH_WCAN_Filter;
}();


;// CONCATENATED MODULE: ./assets/js/shortcodes/modules/yith-wcan-reset-button.js

/* global globalThis, jQuery, yith_wcan_shortcodes, accounting */

function yith_wcan_reset_button_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function yith_wcan_reset_button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var YITH_WCAN_Reset_Button = // current button
// init object
function YITH_WCAN_Reset_Button(el) {
  yith_wcan_reset_button_classCallCheck(this, YITH_WCAN_Reset_Button);

  yith_wcan_reset_button_defineProperty(this, "$reset", null);

  // current button
  this.$reset = el;
  this.$reset.on('click', function (ev) {
    ev.preventDefault();
    $('.yith-wcan-filters').each(function () {
      var preset = $(this).data('preset');
      preset.deactivateAllFilters(true);
      preset.closeModal();
    });
  });
  this.$reset.data('reset', this).addClass('enhanced');
};


;// CONCATENATED MODULE: ./assets/js/shortcodes/modules/yith-wcan-dropdown.js

/* global globalThis, jQuery, yith_wcan_shortcodes, accounting */

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function yith_wcan_dropdown_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function yith_wcan_dropdown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function yith_wcan_dropdown_createClass(Constructor, protoProps, staticProps) { if (protoProps) yith_wcan_dropdown_defineProperties(Constructor.prototype, protoProps); if (staticProps) yith_wcan_dropdown_defineProperties(Constructor, staticProps); return Constructor; }

function yith_wcan_dropdown_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var YITH_WCAN_Dropdown = /*#__PURE__*/function () {
  // current button
  // main element
  // label element
  // dropdown
  // search input
  // show more link
  // items list
  // current page
  // options
  // init object
  function YITH_WCAN_Dropdown(el, opts) {
    yith_wcan_dropdown_classCallCheck(this, YITH_WCAN_Dropdown);

    yith_wcan_dropdown_defineProperty(this, "$originalSelect", null);

    yith_wcan_dropdown_defineProperty(this, "$_main", null);

    yith_wcan_dropdown_defineProperty(this, "$_label", null);

    yith_wcan_dropdown_defineProperty(this, "$_dropdown", null);

    yith_wcan_dropdown_defineProperty(this, "$_search", null);

    yith_wcan_dropdown_defineProperty(this, "$_showMore", null);

    yith_wcan_dropdown_defineProperty(this, "$_items", null);

    yith_wcan_dropdown_defineProperty(this, "currentPage", 1);

    yith_wcan_dropdown_defineProperty(this, "options", {});

    this.$originalSelect = el;

    if (!this.$originalSelect.is('select')) {
      return;
    }

    var defaultPerPage = this.$originalSelect.data('per_page'),
        defaultOrder = this.$originalSelect.data('order'),
        defaultAll = this.$originalSelect.data('all-label'),
        defaults = {
      showSearch: this.$originalSelect.data('show_search'),
      paginate: this.$originalSelect.data('paginate'),
      perPage: defaultPerPage ? defaultPerPage : 10,
      order: defaultOrder ? defaultOrder : 'ASC',
      getElements: null,
      labels: {
        emptyLabel: defaultAll ? defaultAll : yith_wcan_shortcodes.labels.empty_option,
        searchPlaceholder: yith_wcan_shortcodes.labels.search_placeholder,
        noItemsFound: yith_wcan_shortcodes.labels.no_items,
        showMore: yith_wcan_shortcodes.labels.show_more
      }
    };
    this.options = $.extend(defaults, opts);

    this._hideSelect();

    this._initTemplate();

    this._initActions();

    this.$originalSelect.data('dropdown', this).addClass('enhanced');
  } // hide select


  yith_wcan_dropdown_createClass(YITH_WCAN_Dropdown, [{
    key: "_hideSelect",
    value: function _hideSelect() {
      this.$originalSelect.hide();
    } // create dropdown

  }, {
    key: "_initTemplate",
    value: function _initTemplate() {
      var $mainSpan = $('<div/>', {
        "class": 'yith-wcan-dropdown closed'
      }),
          $labelSpan = $('<div/>', {
        "class": 'dropdown-label',
        html: this.getLabel()
      }),
          $dropdownSpan = $('<div>', {
        "class": 'dropdown-wrapper'
      }),
          $matchingItemsList = $('<ul/>', {
        "class": 'matching-items filter-items'
      });
      $dropdownSpan.append($matchingItemsList);
      $mainSpan.append($labelSpan).append($dropdownSpan);

      if (this.options.showSearch) {
        this._initSearchTemplate($dropdownSpan);
      }

      if (this.options.paginate) {
        this._initShowMoreTemplate($dropdownSpan);
      }

      this.$originalSelect.after($mainSpan);
      this.$_main = $mainSpan;
      this.$_label = $labelSpan;
      this.$_dropdown = $dropdownSpan;
      this.$_items = $matchingItemsList;
    } // create search field

  }, {
    key: "_initSearchTemplate",
    value: function _initSearchTemplate($dropdwonSpan) {
      var $container = $('<div/>', {
        "class": 'search-field-container'
      }),
          $search = $('<input/>', {
        name: 's',
        "class": 'search-field',
        type: 'search',
        placeholder: this.options.labels.searchPlaceholder
      });
      $container.append($search).prependTo($dropdwonSpan);
      this.$_search = $search;
    } // create showMore field

  }, {
    key: "_initShowMoreTemplate",
    value: function _initShowMoreTemplate($dropdwonSpan) {
      var $showMore = $('<a/>', {
        "class": 'show-more',
        text: this.options.labels.showMore.replace('%d', this.options.perPage)
      });
      $showMore.on('click', this.loadNextPage.bind(this)).hide();
      $dropdwonSpan.append($showMore);
      this.$_showMore = $showMore;
    } // init actions performed over dropdown elements

  }, {
    key: "_initActions",
    value: function _initActions() {
      var _this$$_main, _this$$_search;

      var self = this; // main open event

      (_this$$_main = this.$_main) === null || _this$$_main === void 0 ? void 0 : _this$$_main.on('click', function (ev) {
        ev.stopPropagation();
        self.toggleDropdown();
      });
      this.$_dropdown.on('click', function (ev) {
        ev.stopPropagation();
      }); // search event

      (_this$$_search = this.$_search) === null || _this$$_search === void 0 ? void 0 : _this$$_search.on('keyup search', function () {
        self._populateItems();
      }); // select event

      this.$_items.on('change', ':input', function () {
        var $li = $(this).closest('li'),
            value = $li.data('value'),
            isActive = false;

        if ($li.hasClass('disabled') && !self.isValueSelected(value)) {
          return false;
        }

        $li.toggleClass('active');
        isActive = $li.hasClass('active');

        self._changeItemStatus(value, isActive);
      });
      this.$_items.on('click', 'li:not(.checkbox) a', function (ev) {
        var $li = $(this).closest('li'),
            value = $li.data('value'),
            isActive = false;
        ev.preventDefault();

        if ($li.hasClass('disabled') && !self.isValueSelected(value)) {
          return false;
        }

        $li.toggleClass('active');
        isActive = $li.hasClass('active');

        if (isActive) {
          $li.siblings().removeClass('active');
        }

        self._changeItemStatus(value, isActive);
      });
      this.$_items.on('click', 'label > a', function (ev) {
        var input = $(this).parent().find(':input');
        ev.preventDefault();

        if (input.is('[type="radio"]') || input.is('[type="checkbox"]')) {
          input.prop('checked', !input.prop('checked'));
        }

        input.change();
      }); // select change

      this.$originalSelect.on('change', function (ev, selfOriginated) {
        if (selfOriginated) {
          return;
        }

        self.$_items.find('li').each(function () {
          var value = $(this).data('value');

          if (self.isValueSelected(value)) {
            self._selectItem(value);
          } else {
            self._deselectItem(value);
          }
        });
        self.updateLabel();
      }); // close dropdown on external click

      $(document).on('click', this.closeDropdown.bind(this));
    } // open dropdown

  }, {
    key: "openDropdown",
    value: function openDropdown() {
      var _this$$_main2;

      (_this$$_main2 = this.$_main) === null || _this$$_main2 === void 0 ? void 0 : _this$$_main2.addClass('open').removeClass('closed');

      this._afterDropdownOpen();
    } // close dropdown

  }, {
    key: "closeDropdown",
    value: function closeDropdown() {
      var _this$$_main3;

      (_this$$_main3 = this.$_main) === null || _this$$_main3 === void 0 ? void 0 : _this$$_main3.removeClass('open').addClass('closed');
    } // close other dropdowns

  }, {
    key: "_closeOtherDropdowns",
    value: function _closeOtherDropdowns() {
      var self = this,
          dropdowns = $(document).find('select.enhanced').filter(function (i, select) {
        var $el = $(select);
        return !!$el.data('dropdown') && !$el.is(self.$originalSelect);
      });
      dropdowns.each(function () {
        $(this).data('dropdown').closeDropdown();
      });
    } // toggle dropdown

  }, {
    key: "toggleDropdown",
    value: function toggleDropdown() {
      var _this$$_main4, _this$$_main5;

      (_this$$_main4 = this.$_main) === null || _this$$_main4 === void 0 ? void 0 : _this$$_main4.toggleClass('open').toggleClass('closed');

      if ((_this$$_main5 = this.$_main) !== null && _this$$_main5 !== void 0 && _this$$_main5.hasClass('open')) {
        this._afterDropdownOpen();
      }
    } // perform operations after dropdown is open

  }, {
    key: "_afterDropdownOpen",
    value: function _afterDropdownOpen() {
      var _this$$_search2;

      this._closeOtherDropdowns();

      if ((_this$$_search2 = this.$_search) !== null && _this$$_search2 !== void 0 && _this$$_search2.length) {
        this.$_search.val('');
      }

      this._populateItems();
    } // get elements

  }, {
    key: "getMatchingElements",
    value: function getMatchingElements(search, limit) {
      var _this = this;

      var matchingElements = [],
          $options = this.getOptions(),
          promise;
      promise = new Promise(function (resolve) {
        // first of all, search across select option
        $options.each(function () {
          var t = $(this),
              value = t.val(),
              label = t.html(),
              regex = new RegExp('.*' + search + '.*', 'i'),
              show = !search || regex.test(value) || regex.test(label);

          if (show) {
            matchingElements.push({
              value: value,
              label: label
            });
          }
        }); // then retrieve additional items

        if (_this.options.getElements) {
          // we're expecting key => value pairs
          _this.options.getElements(search).then(function (retrievedElements) {
            if (retrievedElements) {
              // reformat retrieved array
              retrievedElements = retrievedElements.reduce(function (a, v, i) {
                a.push({
                  label: i,
                  value: v
                });
                return a;
              }, []); // merge found results with options

              matchingElements = $.extend(matchingElements, retrievedElements);
            }

            resolve(_this._formatItems(matchingElements, limit));
          });
        } else {
          resolve(_this._formatItems(matchingElements, limit));
        }
      });
      return promise;
    } // format items as key/value pairs for further processing

  }, {
    key: "_formatItems",
    value: function _formatItems(items, limit) {
      var _this2 = this;

      var indexes = [],
          hasMore = false; // remove duplicates and sort array of results

      items.filter(function (v) {
        if (-1 === indexes.indexOf(v.value)) {
          indexes.push(v.value);
          return true;
        }

        return false;
      }).sort(function (a, b) {
        var order = _this2.options.order,
            mod = order === 'ASC' ? 1 : -1;

        if (a.value < b.value) {
          return -1 * mod;
        } else if (a.value > b.value) {
          return mod;
        }

        return 0;
      }); // paginate when needed

      if (limit) {
        hasMore = limit < Object.keys(items).length;
        items = items.slice(0, limit);
      }

      return {
        items: items,
        hasMore: hasMore
      };
    } // generate item to append to items list

  }, {
    key: "_generateItem",
    value: function _generateItem(value, label) {
      var active = this.isValueSelected(value),
          option = this.getOptionByValue(value),
          $item = $('<li/>', {
        'data-value': value,
        "class": option.length ? option.attr('class') : ''
      }),
          $anchor;

      if (option.length) {
        var template = option.data('template'),
            count = option.data('count');
        label = template ? template : label;

        if (!!count) {
          label += count;
        }
      }

      $anchor = $('<a/>', {
        href: option.length ? option.data('filter_url') : '#',
        html: label,
        'data-title': option.length ? option.data('title') : ''
      });

      if (this.$originalSelect.prop('multiple')) {
        var $checkbox = $('<input/>', {
          type: 'checkbox',
          value: value
        }),
            $label = $('<label>');
        $checkbox.prop('checked', active);
        $label.prepend($checkbox).append($anchor);
        $item.append($label).addClass('checkbox');
      } else {
        $item.append($anchor);
      }

      active ? $item.addClass('active') : $item.removeClass('active');
      return $item;
    } // populate items list

  }, {
    key: "_populateItems",
    value: function _populateItems(page) {
      var _this$$_search3,
          _this3 = this;

      var search = (_this$$_search3 = this.$_search) !== null && _this$$_search3 !== void 0 && _this$$_search3.length ? this.$_search.val() : '',
          perPage = this.options.paginate ? this.options.perPage : 0,
          limit;
      page = page ? parseInt(page) : 1;
      limit = page * perPage;
      this.getMatchingElements(search, limit).then(function (resultSet) {
        var matchingItems = resultSet.items,
            items = [],
            hasMore = false; // remove all previous items

        _this3._emptyItems();

        _this3._hideLoadMore();

        if (!matchingItems.length) {
          items.push($('<li/>', {
            text: _this3.options.labels.noItemsFound
          }));
          _this3.currentPage = 1;
        } else {
          var _iterator = _createForOfIteratorHelper(matchingItems),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var v = _step.value;

              if (v.value === '') {
                items.unshift(_this3._generateItem(v.value, v.label));
              } else {
                items.push(_this3._generateItem(v.value, v.label));
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          _this3.currentPage = page;
          hasMore = resultSet.hasMore;
        }

        _this3.$_items.append(items);

        $(document).trigger('yith_wcan_dropdown_updated');

        if (hasMore) {
          _this3._showLoadMore();
        }
      });
    } // load next page of items

  }, {
    key: "loadNextPage",
    value: function loadNextPage() {
      var page = this.currentPage + 1;

      this._populateItems(page);
    } // set an item as active

  }, {
    key: "_selectItem",
    value: function _selectItem(value) {
      return this._changeItemStatus(value, true);
    } // disable an item

  }, {
    key: "_deselectItem",
    value: function _deselectItem(value) {
      return this._changeItemStatus(value, false);
    } // change item status

  }, {
    key: "_changeItemStatus",
    value: function _changeItemStatus(value, status) {
      var $option = this.$originalSelect.find("option[value=\"".concat(value, "\"]"));

      if ($option.length) {
        $option.prop('selected', status);
        this.closeDropdown();
        this.updateLabel();
        this.$originalSelect.trigger('change', [true]);
        return true;
      }

      return false;
    } // empty items list

  }, {
    key: "_emptyItems",
    value: function _emptyItems() {
      this.$_items.html('');
    } // show "Load more" link

  }, {
    key: "_showLoadMore",
    value: function _showLoadMore() {
      this.$_showMore.show();
    } // hide "Load more" link

  }, {
    key: "_hideLoadMore",
    value: function _hideLoadMore() {
      this.$_showMore.hide();
    } // returns select label

  }, {
    key: "getLabel",
    value: function getLabel() {
      return this.hasSelectedValues() ? this.getSelectedLabels().join(', ') : this.options.labels.emptyLabel;
    } // update label to match new selection

  }, {
    key: "updateLabel",
    value: function updateLabel() {
      var _this$$_label;

      var label = this.getLabel();
      (_this$$_label = this.$_label) === null || _this$$_label === void 0 ? void 0 : _this$$_label.html(label);
    } // returns select options

  }, {
    key: "getOptions",
    value: function getOptions() {
      return this.$originalSelect.find('option');
    } // checks whether select has selected values

  }, {
    key: "hasSelectedValues",
    value: function hasSelectedValues() {
      return this.getSelectedOptions().length;
    } // checks whether a value is selected

  }, {
    key: "isValueSelected",
    value: function isValueSelected(value) {
      var found = this.getSelectedValues().indexOf(value.toString());
      return -1 !== found;
    } // retrieve selected options

  }, {
    key: "getSelectedOptions",
    value: function getSelectedOptions() {
      return this.$originalSelect.find('option').filter(':selected');
    } // retrieves an option node by value

  }, {
    key: "getOptionByValue",
    value: function getOptionByValue(value) {
      return this.$originalSelect.find("option[value=\"".concat(value, "\"]"));
    } // retrieve labels for selected options

  }, {
    key: "getSelectedLabels",
    value: function getSelectedLabels() {
      var labels = [];
      this.getSelectedOptions().each(function () {
        var $option = $(this),
            template = $option.data('template');
        template = template ? template : $option.html().replace(/\([0-9]*\)/, '');
        labels.push(template);
      });
      return labels;
    } // retrieve values for selected options

  }, {
    key: "getSelectedValues",
    value: function getSelectedValues() {
      var values = [];
      this.getSelectedOptions().each(function () {
        values.push($(this).val());
      });
      return values;
    }
  }, {
    key: "destroy",
    value: function destroy() {// TBD
    }
  }]);

  return YITH_WCAN_Dropdown;
}();


;// CONCATENATED MODULE: ./assets/js/shortcodes/modules/yith-wcan-preset.js

/* global globalThis, jQuery, yith_wcan_shortcodes, accounting */

function yith_wcan_preset_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { yith_wcan_preset_typeof = function _typeof(obj) { return typeof obj; }; } else { yith_wcan_preset_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return yith_wcan_preset_typeof(obj); }

function yith_wcan_preset_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function yith_wcan_preset_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function yith_wcan_preset_createClass(Constructor, protoProps, staticProps) { if (protoProps) yith_wcan_preset_defineProperties(Constructor.prototype, protoProps); if (staticProps) yith_wcan_preset_defineProperties(Constructor, staticProps); return Constructor; }

function yith_wcan_preset_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var YITH_WCAN_Preset = /*#__PURE__*/function () {
  // main preset node
  // target of the filter, if any
  // filters node
  // filter button
  // nodes created just for modal layout
  // retains current status of filters
  // mobile flag
  // slider timeout
  // registers when status has changed
  // init object
  function YITH_WCAN_Preset(el) {
    yith_wcan_preset_classCallCheck(this, YITH_WCAN_Preset);

    yith_wcan_preset_defineProperty(this, "preset", false);

    yith_wcan_preset_defineProperty(this, "$preset", false);

    yith_wcan_preset_defineProperty(this, "target", false);

    yith_wcan_preset_defineProperty(this, "$target", false);

    yith_wcan_preset_defineProperty(this, "$filters", false);

    yith_wcan_preset_defineProperty(this, "$filterButtons", false);

    yith_wcan_preset_defineProperty(this, "modalElements", {});

    yith_wcan_preset_defineProperty(this, "activeFilters", false);

    yith_wcan_preset_defineProperty(this, "isMobile", false);

    yith_wcan_preset_defineProperty(this, "sliderTimeout", false);

    yith_wcan_preset_defineProperty(this, "originalFilters", null);

    yith_wcan_preset_defineProperty(this, "dirty", false);

    // main preset node
    this.preset = '#' + el.attr('id');
    this.$preset = el; // target of the filter, if any

    this.target = this.$preset.data('target');
    this.$target = this.target ? $(this.target) : false;

    this._regiterStatus();

    this._initFilterButton();

    this._initResponsive();

    this._initFilters();

    this._initActions();

    this.$preset.data('preset', this).addClass('enhanced').trigger('yith_wcan_preset_initialized', [this]);
  } // init filters


  yith_wcan_preset_createClass(YITH_WCAN_Preset, [{
    key: "_initFilters",
    value: function _initFilters() {
      var self = this;
      this.getFilters().each(function () {
        var $filter = $(this);

        self._initFilter($filter);
      });
      this.maybeShowClearAllFilters();
    } // init filter button

  }, {
    key: "_initFilterButton",
    value: function _initFilterButton() {
      var _this = this;

      this.$filterButtons = this.$preset.find('.apply-filters');

      if (!this.$filterButtons.length) {
        return;
      } // manage filter button


      this.$filterButtons.on('click', function (ev) {
        ev.preventDefault();

        _this.filter();
      }).hide();
    } // init generic actions

  }, {
    key: "_initActions",
    value: function _initActions() {
      this.$preset.find('form').on('submit', function (ev) {
        ev.preventDefault();
      });
    } // init responsive

  }, {
    key: "_initResponsive",
    value: function _initResponsive() {
      var _this2 = this;

      if (!yith_wcan_shortcodes.modal_on_mobile) {
        return;
      }

      var media = window.matchMedia("(max-width: ".concat(yith_wcan_shortcodes.mobile_media_query, "px)"));
      $(window).on('resize', function () {
        var isMobile = !!media.matches;

        if (isMobile !== _this2.isMobile) {
          _this2.isMobile = isMobile;

          _this2._afterLayoutChange();
        }
      }).resize();
    } // init filter

  }, {
    key: "_initFilter",
    value: function _initFilter($filter) {
      var _this$$preset;

      var self = this,
          handleChange = function handleChange(ev) {
        var t = $(this),
            $currentFilter = t.closest('.yith-wcan-filter'),
            multiple = $currentFilter.length ? 'yes' === $currentFilter.data('multiple') : false,
            $item = t.closest('.filter-item'),
            $items = $item.length ? $currentFilter.find('.filter-item').not($item) : [];

        if ($item.is('.disabled') && !$item.is('.active')) {
          ev.preventDefault();
          return false;
        }

        ev.preventDefault();
        $items.length && !multiple && $items.removeClass('active').children('label').find(':input').prop('checked', false).parent('.checked').removeClass('checked');
        $item.length && $item.toggleClass('active'); // reset active filters.

        self.activeFilters = false;
        self.maybeFilter($filter);
        self.maybeToggleClearAllFilters();
        self.maybeToggleClearFilter($currentFilter);
      }; // handle filter activation/deactivation by click on label (no input involved)


      $filter.find('.filter-item').not('.checkbox').not('.radio').on('click', 'a', function (ev) {
        var t = $(this),
            $item = t.closest('.filter-item');

        if (!$(ev === null || ev === void 0 ? void 0 : ev.delegateTarget).is($item)) {
          return false;
        }

        handleChange.call(this, ev);
      }); // handle filter activation/deactivation from input change

      $filter.find(':input').on('change', function (ev) {
        var t = $(this),
            $item = t.closest('.filter-item');

        if ($item.is('.disabled') && !$item.is('.active')) {
          t.prop('checked', false);
          return false;
        }

        handleChange.call(this, ev);
      }); // handle filter activation/deactivation by click on label (there is an input whose state can be switched)

      $filter.find('label > a').on('click', function (ev) {
        var t = $(this),
            $item = t.closest('.filter-item');
        ev.preventDefault();

        if ($item.is('.disabled') && !$item.is('.active')) {
          return false;
        }

        var $input = t.parent().find(':input');

        if ($input.is('[type="radio"]') || $input.is('[type="checkbox"]')) {
          $input.prop('checked', !$input.prop('checked'));
        }

        $input.change();
      }); // init tooltip

      this._initTooltip($filter); // init price slider


      this._initPriceSlider($filter); // init dropdown


      this._initDropdown($filter); // init collapsable


      this._initCollapsable($filter); // init clear anchors


      this.maybeShowClearFilter($filter); // init custom inputs

      if ((_this$$preset = this.$preset) !== null && _this$$preset !== void 0 && _this$$preset.hasClass('custom-style')) {
        this._initCustomInput($filter);
      }
    } // init tooltip

  }, {
    key: "_initTooltip",
    value: function _initTooltip($filter, position) {
      $filter.find('[data-title]').each(function () {
        var t = $(this);

        if (t.hasClass('tooltip-added') || !t.data('title')) {
          return;
        }

        t.on('mouseenter', function () {
          var th = $(this),
              tooltip = null,
              wrapperWidth = th.outerWidth(),
              left = 0,
              width = 0;

          if (!position || 'top' !== position && 'right' !== position) {
            var container = th.closest('.filter-item');
            position = container.hasClass('color') || container.hasClass('label') ? 'top' : 'right';
          }

          tooltip = $('<span>', {
            "class": 'yith-wcan-tooltip',
            html: th.data('title')
          });
          th.append(tooltip);
          width = tooltip.outerWidth() + 6;
          tooltip.outerWidth(width);

          if ('top' === position) {
            left = (wrapperWidth - width) / 2;
          } else {
            left = wrapperWidth + 15;
          }

          tooltip.css({
            left: left.toFixed(0) + 'px'
          }).fadeIn(200);
          th.addClass('with-tooltip');
        }).on('mouseleave', function () {
          var th = $(this);
          th.find('.yith-wcan-tooltip').fadeOut(200, function () {
            th.removeClass('with-tooltip').find('.yith-wcan-tooltip').remove();
          });
        });
        t.addClass('tooltip-added');
      });
    } // init dropdown

  }, {
    key: "_initDropdown",
    value: function _initDropdown($filter) {
      var $dropdown = $filter.find('select.filter-dropdown');

      if (!$dropdown.length) {
        return;
      }

      if ($dropdown.hasClass('select2-hidden-accessible') && 'undefined' !== typeof $.fn.selectWoo) {
        $dropdown.selectWoo('destroy');
      }

      this._initDropdownObject($dropdown, {
        paginate: true,
        perPage: yith_wcan_shortcodes.terms_per_page
      });
    } // init dropdown object

  }, {
    key: "_initDropdownObject",
    value: function _initDropdownObject($dropdown, opts) {
      return new YITH_WCAN_Dropdown($dropdown, opts);
    } // init price slider

  }, {
    key: "_initPriceSlider",
    value: function _initPriceSlider($filter) {
      var _this3 = this;

      if (!$filter.hasClass('filter-price-slider')) {
        return;
      }

      var self = this,
          $container = $filter.find('.price-slider'),
          $minInput = $container.find('.price-slider-min'),
          $maxInput = $container.find('.price-slider-max'),
          min = parseFloat($container.data('min')),
          max = parseFloat($container.data('max')),
          currentMin = parseFloat($minInput.val()),
          currentMax = parseFloat($maxInput.val()),
          step = parseFloat($container.data('step')),
          handleSliderChange = function handleSliderChange() {
        if (self.sliderTimeout) {
          clearTimeout(self.sliderTimeout);
        }

        self.sliderTimeout = setTimeout(function () {
          self.maybeFilter($filter);
        }, 200);
      };

      $filter.find('.price-slider-ui').ionRangeSlider({
        skin: 'round',
        type: 'double',
        min: min,
        max: max,
        step: step,
        from: currentMin,
        to: currentMax,
        min_interval: step,
        values_separator: ' - ',
        prettify: function prettify(v) {
          return _this3.formatPrice(v);
        },
        onChange: function onChange(data) {
          $minInput.val(data.from);
          $maxInput.val(data.to);
        },
        onFinish: handleSliderChange
      });
      $minInput.add($maxInput).off('change').on('keyup', function () {
        if (!$minInput.val() || !$maxInput.val()) {
          return;
        }

        handleSliderChange();
      });
    } // init collapsable

  }, {
    key: "_initCollapsable",
    value: function _initCollapsable($filter) {
      this._initTitleCollapsable($filter);

      this._initHierarchyCollapsable($filter);
    } // init toggle on click of the title

  }, {
    key: "_initTitleCollapsable",
    value: function _initTitleCollapsable($filter) {
      var $title = $filter.find('.collapsable');

      if (!$title.length) {
        return;
      }

      this._initToggle($title, $title, $filter.find('.filter-content'));
    } // init toggle on click of the parent li

  }, {
    key: "_initHierarchyCollapsable",
    value: function _initHierarchyCollapsable($filter) {
      var $items = $filter.find('.hierarchy-collapsable');

      if (!$items.length) {
        return;
      } // set parents of currently active term as open


      var self = this,
          active = $filter.find('.active');

      if (active.length) {
        active.parents('.hierarchy-collapsable').removeClass('closed').addClass('opened');

        if (active.hasClass('hierarchy-collapsable') && yith_wcan_shortcodes.show_current_children) {
          active.removeClass('closed').addClass('opened');
        }
      }

      $items.each(function () {
        var $t = $(this),
            $toggle = $('<span/>', {
          "class": 'toggle-handle'
        });
        $toggle.appendTo($t);

        self._initToggle($toggle, $t, $t.children('ul.filter-items'));
      });
    } // init toggle to generic toggle/target pair

  }, {
    key: "_initToggle",
    value: function _initToggle($toggle, $container, $target) {
      if ($container.hasClass('closed')) {
        $target.hide();
      }

      $toggle.off('click').on('click', function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        $target.slideToggle(400, function () {
          $container.toggleClass('opened').toggleClass('closed');
        });
      });
    } // init custom input

  }, {
    key: "_initCustomInput",
    value: function _initCustomInput($filter) {
      $filter.find(':input').each(function () {
        var input = $(this),
            type = input.attr('type'),
            containerClass = "".concat(type, "button"),
            container;

        if ('checkbox' !== type && 'radio' !== type) {
          return;
        }

        if (input.closest(".".concat(containerClass)).length) {
          return;
        }

        if (input.is(':checked')) {
          containerClass += ' checked';
        }

        container = $('<span/>', {
          "class": containerClass
        });
        input.wrap(container).on('change', function () {
          var t = $(this);
          t.prop('checked') ? t.parent().addClass('checked') : t.parent().removeClass('checked');
        });
      });
    } // register initial status

  }, {
    key: "_regiterStatus",
    value: function _regiterStatus() {
      this.originalFilters = this.getFiltersProperties();
    } // trigger handling after layout change

  }, {
    key: "_afterLayoutChange",
    value: function _afterLayoutChange() {
      if (this.isMobile) {
        var _this$$filterButtons;

        this.$preset.addClass('filters-modal').attr('role', 'dialog').attr('tabindex', '-1').hide();

        this._addCloseModalButton();

        this._addApplyFiltersModalButton();

        this._switchToCollapsables();

        (_this$$filterButtons = this.$filterButtons) === null || _this$$filterButtons === void 0 ? void 0 : _this$$filterButtons.hide();
      } else {
        var _this$$filterButtons2;

        this.$preset.removeClass('filters-modal').removeClass('open').removeAttr('role').removeAttr('tabindex').show();
        $('body').css('overflow', 'auto').removeClass('yith-wcan-preset-modal-open');

        this._removeCloseModalButton();

        this._removeApplyFiltersModalButton();

        this._switchBackCollapsables();

        (_this$$filterButtons2 = this.$filterButtons) === null || _this$$filterButtons2 === void 0 ? void 0 : _this$$filterButtons2.show();
      }
    } // add modal close button

  }, {
    key: "_addCloseModalButton",
    value: function _addCloseModalButton() {
      var $closeButton = $('<a/>', {
        "class": 'close-button',
        html: '&times;',
        'data-dismiss': 'modal',
        'aria-label': yith_wcan_shortcodes.labels.close
      });
      $closeButton.prependTo(this.$preset).on('click', this.closeModal.bind(this));
      this.modalElements.closeButton = $closeButton;
    } // remove modal close button

  }, {
    key: "_removeCloseModalButton",
    value: function _removeCloseModalButton() {
      var _this$modalElements, _this$modalElements$c;

      (_this$modalElements = this.modalElements) === null || _this$modalElements === void 0 ? void 0 : (_this$modalElements$c = _this$modalElements.closeButton) === null || _this$modalElements$c === void 0 ? void 0 : _this$modalElements$c.remove();
    } // show main filter button for the modal

  }, {
    key: "_addApplyFiltersModalButton",
    value: function _addApplyFiltersModalButton() {
      var _this4 = this;

      var $filterButton = $('<button/>', {
        "class": 'apply-filters main-modal-button',
        html: yith_wcan_shortcodes.labels.show_results,
        'data-dismiss': 'modal'
      });
      $filterButton.appendTo(this.$preset).on('click', function () {
        _this4.filter();

        _this4.closeModal();
      });
      this.modalElements.applyFiltersButton = $filterButton;
    } // hide main filter button for the modal

  }, {
    key: "_removeApplyFiltersModalButton",
    value: function _removeApplyFiltersModalButton() {
      var _this$modalElements2, _this$modalElements2$;

      (_this$modalElements2 = this.modalElements) === null || _this$modalElements2 === void 0 ? void 0 : (_this$modalElements2$ = _this$modalElements2.applyFiltersButton) === null || _this$modalElements2$ === void 0 ? void 0 : _this$modalElements2$.remove();
    } // convert all filters to collapsable

  }, {
    key: "_switchToCollapsables",
    value: function _switchToCollapsables() {
      var self = this;
      this.getFilters().each(function () {
        var $filter = $(this),
            $title = $filter.find('.filter-title');

        if (!$title.length || $title.hasClass('collapsable')) {
          return;
        }

        $title.addClass('collapsable').data('disable-collapse', true);

        self._initTitleCollapsable($filter);
      });
    } // switch back filters to their previous collapsable state

  }, {
    key: "_switchBackCollapsables",
    value: function _switchBackCollapsables() {
      this.getFilters().each(function () {
        var $filter = $(this),
            $title = $filter.find('.filter-title');

        if (!$title.length || !$title.hasClass('collapsable') || !$title.data('disable-collapse')) {
          return;
        }

        $title.removeClass('collapsable').removeData('disable-collapse', true).off('click');
        $filter.find('.filter-content').show();
      });
    } // close all collpasable before showing modal

  }, {
    key: "_openAllCollapsables",
    value: function _openAllCollapsables() {
      var _this5 = this;

      this.$filters.not('.no-title').not(function (i, v) {
        return _this5.isFilterActive($(v));
      }).find('.filter-content').show().end().find('.filter-title').removeClass('closed').addClass('opened');
    } // close all collpasable before showing modal

  }, {
    key: "_closeAllCollapsables",
    value: function _closeAllCollapsables() {
      var _this6 = this;

      this.$filters.not('.no-title').not(function (i, v) {
        return _this6.isFilterActive($(v));
      }).find('.filter-content').hide().end().find('.filter-title').addClass('closed').removeClass('opened');
    } // update status change flag, if filters have changed

  }, {
    key: "maybeRegisterStatusChange",
    value: function maybeRegisterStatusChange() {
      var currentFilters = this.getFiltersProperties(),
          currentStr = JSON.stringify(currentFilters),
          originalStr = JSON.stringify(this.originalFilters);
      this.dirty = currentStr !== originalStr;
    } // apply filters when possible

  }, {
    key: "maybeFilter",
    value: function maybeFilter($initiator) {
      // register status change
      this.maybeRegisterStatusChange(); // filter, or show filter button.

      if (yith_wcan_shortcodes.instant_filters && !this.isMobile) {
        this.filter();
      } else if (!yith_wcan_shortcodes.instant_filters && !this.isMobile) {
        var _this$$filterButtons3, _this$$filterButtons4;

        this.dirty ? (_this$$filterButtons3 = this.$filterButtons) === null || _this$$filterButtons3 === void 0 ? void 0 : _this$$filterButtons3.show() : (_this$$filterButtons4 = this.$filterButtons) === null || _this$$filterButtons4 === void 0 ? void 0 : _this$$filterButtons4.hide();
      } else if (this.isMobile && this.dirty) {
        var _this$modalElements$a;

        this.$preset.addClass('with-filter-button');
        (_this$modalElements$a = this.modalElements.applyFiltersButton) === null || _this$modalElements$a === void 0 ? void 0 : _this$modalElements$a.show();
      }
    } // main filtering method

  }, {
    key: "filter",
    value: function filter() {
      var _window,
          _filter$doFilter,
          _this7 = this;

      var filter = (_window = window) === null || _window === void 0 ? void 0 : _window.product_filter;
      filter === null || filter === void 0 ? void 0 : (_filter$doFilter = filter.doFilter(this.getFiltersProperties(), this.target, this.preset)) === null || _filter$doFilter === void 0 ? void 0 : _filter$doFilter.done(function () {
        var newPreset = $(_this7.preset);

        if (!_this7.isMobile && newPreset.length && yith_wcan_shortcodes.scroll_top) {
          var targetOffset = newPreset.offset().top;

          if (!!yith_wcan_shortcodes.scroll_target) {
            var scrollTarget = $(yith_wcan_shortcodes.scroll_target);
            targetOffset = scrollTarget.length ? scrollTarget.offset().top : targetOffset;
          }

          $('body, html').animate({
            scrollTop: targetOffset - 100
          });
        } // register new filters, clear status flag


        _this7.originalFilters = _this7.getFiltersProperties();
        _this7.dirty = false;
      });

      if (this.isMobile) {
        var _this$modalElements$a2;

        this.$preset.removeClass('with-filter-button');
        (_this$modalElements$a2 = this.modalElements.applyFiltersButton) === null || _this$modalElements$a2 === void 0 ? void 0 : _this$modalElements$a2.hide();
      }
    } // get all filter nodes

  }, {
    key: "getFilters",
    value: function getFilters() {
      if (false === this.$filters) {
        this.$filters = this.$preset.find('.yith-wcan-filter');
      }

      return this.$filters;
    } // retrieves all filters that we want to apply

  }, {
    key: "getActiveFilters",
    value: function getActiveFilters() {
      if (false === this.activeFilters) {
        this.activeFilters = this.getFiltersProperties();
      }

      return this.activeFilters;
    } // check whether there is any filter active

  }, {
    key: "isAnyFilterActive",
    value: function isAnyFilterActive() {
      return !!Object.keys(this.getActiveFilters()).length;
    } // checks whether current filter is active

  }, {
    key: "isFilterActive",
    value: function isFilterActive($filter) {
      var filterType = $filter.data('filter-type'),
          active,
          filteredActive;

      switch (filterType) {
        case 'tax':
        case 'review':
        case 'price_range':
          var $dropdown = $filter.find('.filter-dropdown');

          if ($dropdown.length) {
            var val = $dropdown.val();
            active = 'object' === yith_wcan_preset_typeof(val) ? !!(val !== null && val !== void 0 && val.length) : !!val;
            break;
          }

        // if we use type other than dropdown, fallthrough

        case 'stock_sale':
          active = $filter.find('.filter-item').filter('.active').length;
          break;

        case 'price_slider':
          var step = parseFloat($filter.find('.price-slider').data('step')),
              min = parseFloat($filter.find('.price-slider').data('min')),
              max = parseFloat($filter.find('.price-slider').data('max')),
              currentMin = parseFloat($filter.find('.price-slider-min').val()),
              currentMax = parseFloat($filter.find('.price-slider-max').val());
          active = Math.abs(currentMin - min) >= step || Math.abs(currentMax - max) >= step;
          break;

        case 'orderby':
          active = 'menu_order' !== $filter.find('.filter-order-by').val();
          break;

        default:
          active = false;
          break;
      }

      filteredActive = $filter.triggerHandler('yith_wcan_is_filter_active', [active, this]);
      active = typeof filteredActive !== 'undefined' ? filteredActive : active;
      return active;
    } // count the number of active items per filter

  }, {
    key: "countActiveItems",
    value: function countActiveItems($filter) {
      var filterType = $filter.data('filter-type'),
          count;

      switch (filterType) {
        case 'tax':
        case 'review':
        case 'price_range':
          var $dropdown = $filter.find('.filter-dropdown');

          if ($dropdown.length) {
            var val = $dropdown.val();
            count = 'object' === yith_wcan_preset_typeof(val) ? val === null || val === void 0 ? void 0 : val.length : +!!val;
            break;
          }

        // if we use type other than dropdown, fallthrough

        case 'stock_sale':
          count = $filter.find('.filter-items').find('.active').length;
          break;

        case 'orderby':
          if (this.isFilterActive($filter)) {
            count = 1;
          }

          break;

        case 'price_slider':
        default:
          count = 0;
          break;
      }

      return count;
    } // retrieves filter properties for the filter

  }, {
    key: "getFilterProperties",
    value: function getFilterProperties($filter) {
      var filterType = $filter.data('filter-type'),
          multiple = 'yes' === $filter.data('multiple'),
          $dropdown = $filter.find('.filter-dropdown'),
          properties = {},
          filteredProperties,
          $active;

      switch (filterType) {
        case 'tax':
          var activeTerms = [],
              taxonomy = $filter.data('taxonomy'),
              isAttr = 0 === taxonomy.indexOf('filter'),
              relation = $filter.data('relation');

          if ($dropdown.length) {
            if (multiple) {
              activeTerms = $dropdown.val();
            } else {
              activeTerms.push($dropdown.val());
            }
          } else {
            $active = $filter.find('.filter-item').filter('.active').children('a, label');
            activeTerms = $active.get().reduce(function (a, v) {
              var val;
              v = $(v);
              val = v.is('label') ? v.find(':input').val() : v.data('term-slug');

              if (!val) {
                return a;
              }

              a.push(val);
              return a;
            }, activeTerms);
          }

          if (!multiple) {
            properties[taxonomy] = activeTerms.pop();
          } else {
            var glue = !isAttr && 'and' === relation ? '+' : ',';
            properties[taxonomy] = activeTerms.join(glue);
          }

          if (isAttr) {
            properties[taxonomy.replace('filter_', 'query_type_')] = relation;
          }

          break;

        case 'review':
          if ($dropdown.length) {
            properties.rating_filter = $dropdown.val();
          } else {
            $active = $filter.find('.filter-item').filter('.active').children('a, label');

            if (!multiple) {
              $active = $active.first();
              properties.rating_filter = $active.is('label') ? $active.find(':input').val() : $active.data('rating');
            } else {
              properties.rating_filter = $active.get().reduce(function (a, v) {
                var val;
                v = $(v);
                val = v.is('label') ? v.find(':input').val() : v.data('rating');

                if (!val) {
                  return a;
                }

                a.push(val);
                return a;
              }, []).join(',');
            }
          }

          break;

        case 'price_range':
          if ($dropdown.length) {
            if (multiple) {
              properties.price_ranges = $dropdown.val().join(',');
            } else {
              properties.min_price = $dropdown.val().split('-')[0];
              properties.max_price = $dropdown.val().split('-')[1];
            }
          } else {
            $active = $filter.find('.filter-item').filter('.active').children('a, label');

            if (multiple) {
              properties.price_ranges = $active.get().reduce(function (a, v) {
                var min = $(v).data('range-min'),
                    max = $(v).data('range-max');
                a += (max ? "".concat(min, "-").concat(max) : min) + ',';
                return a;
              }, '').replace(/^(.*),$/, '$1');
            } else {
              properties.min_price = parseFloat($active.first().data('range-min'));
              properties.max_price = parseFloat($active.first().data('range-max'));
            }
          }

          break;

        case 'price_slider':
          properties.min_price = parseFloat($filter.find('.price-slider-min').val());
          properties.max_price = parseFloat($filter.find('.price-slider-max').val());
          break;

        case 'stock_sale':
          if ($filter.find('.filter-on-sale').is('.active')) {
            properties.onsale_filter = 1;
          }

          if ($filter.find('.filter-in-stock').is('.active')) {
            properties.instock_filter = 1;
          }

          if ($filter.find('.filter-featured').is('.active')) {
            properties.featured_filter = 1;
          }

          break;

        case 'orderby':
          properties.orderby = $filter.find('.filter-order-by').val();
          break;

        default:
          break;
      }

      filteredProperties = $filter.triggerHandler('yith_wcan_filter_properties', [properties, self]);
      properties = typeof filteredProperties !== 'undefined' ? filteredProperties : properties;
      return properties;
    } // retrieves properties for all filters of the preset

  }, {
    key: "getFiltersProperties",
    value: function getFiltersProperties() {
      var properties = {};
      var self = this;
      this.getFilters().each(function () {
        var $filter = $(this);

        if (self.isFilterActive($filter)) {
          var filterProperties = self.getFilterProperties($filter);
          properties = self.mergeProperties(properties, filterProperties, $filter);
        }
      });
      return properties;
    } // retrieve filters matching any of the properties passed

  }, {
    key: "getFiltersByProperties",
    value: function getFiltersByProperties(properties) {
      var self = this;
      return this.getFilters().filter(function () {
        var $filter = $(this);

        if (self.isFilterActive($filter)) {
          var filterProperties = self.getFilterProperties($filter),
              hasProp = false;

          for (var prop in properties) {
            if (['min_price', 'max_price', 'price_ranges'].includes(prop) && (filterProperties.min_price || filterProperties.price_ranges)) {
              hasProp = true;
              break;
            } else if (filterProperties[prop]) {
              hasProp = true;
              break;
            }
          }

          return hasProp;
        }

        return false;
      });
    } // show clear selection anchor

  }, {
    key: "maybeToggleClearFilter",
    value: function maybeToggleClearFilter($filter) {
      if (!this.isFilterActive($filter)) {
        this.maybeHideClearFilter($filter);
      } else {
        this.maybeShowClearFilter($filter);
      }
    } // show clear all selections anchor

  }, {
    key: "maybeToggleClearAllFilters",
    value: function maybeToggleClearAllFilters() {
      if (!this.isAnyFilterActive()) {
        this.maybeHideClearAllFilters();
      } else {
        this.maybeShowClearAllFilters();
      }
    } // show clear selection anchor

  }, {
    key: "maybeShowClearFilter",
    value: function maybeShowClearFilter($filter) {
      var _this8 = this;

      if (!this.isFilterActive($filter) || !yith_wcan_shortcodes.show_clear_filter) {
        return;
      } // remove clear selection link if already added.


      $filter.find('.clear-selection').remove(); // add new clear selection link.

      $('<a/>', {
        "class": 'clear-selection',
        text: yith_wcan_shortcodes.labels.clear_selection,
        role: 'button'
      }).prependTo($filter.find('.filter-content')).on('click', function (ev) {
        ev.preventDefault();

        _this8.deactivateFilter($filter, false, yith_wcan_shortcodes.instant_filters);

        _this8.maybeHideClearFilter($filter);

        if (yith_wcan_shortcodes.instant_filters) {
          _this8.closeModal();
        }
      });
    } // show clearAll anchor, when on mobile layout

  }, {
    key: "maybeShowClearAllFilters",
    value: function maybeShowClearAllFilters() {
      var _this9 = this;

      if (!this.isAnyFilterActive() || !this.isMobile) {
        return;
      } // remove clear selection link if already added.


      this.$preset.find('.clear-selection').remove(); // add new clear selection link.

      $('<a/>', {
        "class": 'clear-selection',
        text: yith_wcan_shortcodes.labels.clear_all_selections,
        role: 'button'
      }).prependTo(this.$preset.find('.filters-container')).on('click', function (ev) {
        ev.preventDefault();

        _this9.deactivateAllFilters(yith_wcan_shortcodes.instant_filters);

        _this9.maybeHideClearAllFilters();

        if (yith_wcan_shortcodes.instant_filters) {
          _this9.closeModal();
        }
      });
    } // hide clear selection anchor

  }, {
    key: "maybeHideClearFilter",
    value: function maybeHideClearFilter($filter) {
      if (this.isFilterActive($filter) || !yith_wcan_shortcodes.show_clear_filter) {
        return;
      } // remove clear selection link.


      $filter.find('.clear-selection').remove();
    } // show clearAll anchor, when on mobile layout

  }, {
    key: "maybeHideClearAllFilters",
    value: function maybeHideClearAllFilters() {
      if (this.isAnyFilterActive()) {
        return;
      } // remove clear selection link.


      this.$preset.find('.filters-container').children('.clear-selection').remove();
    } // deactivate filter

  }, {
    key: "deactivateFilter",
    value: function deactivateFilter($filter, properties, doFilter) {
      var filterType = $filter.data('filter-type'),
          $items = $filter.find('.filter-item'),
          $activeItems = $items.filter('.active'),
          $dropdown = $filter.find('.filter-dropdown');

      switch (filterType) {
        case 'tax':
          var taxonomy = $filter.data('taxonomy');

          if ($dropdown.length) {
            if (!properties) {
              $dropdown.find('option').prop('selected', false);
            } else {
              $dropdown.find('option').each(function () {
                var $option = $(this);

                if ($option.val().toString() === properties[taxonomy].toString()) {
                  $option.prop('selected', false);
                }
              });
            }

            $dropdown.change();
          } else if (!properties) {
            $activeItems.children('label').children('a').click();
            $activeItems.removeClass('active');
          } else {
            $activeItems.each(function () {
              var $item = $(this),
                  $label = $item.children('label'),
                  $anchor = $item.children('a'),
                  value;
              value = $label.length ? $label.find(':input').val() : $anchor.data('term-slug');

              if (value.toString() === properties[taxonomy].toString()) {
                $item.children('label').children('a').click();
                $item.removeClass('active');
              }
            });
          }

          break;

        case 'review':
          if ($dropdown.length) {
            if (!properties) {
              $dropdown.find('option').prop('selected', false);
            } else {
              $dropdown.find('option').each(function () {
                var $option = $(this);

                if ($option.val() === properties.rating_filter) {
                  $option.prop('selected', false);
                }
              });
            }

            $dropdown.change();
          } else if (!properties) {
            $activeItems.children('label').children('a').click();
            $activeItems.removeClass('active');
          } else {
            $activeItems.each(function () {
              var $item = $(this),
                  $label = $item.children('label'),
                  $anchor = $item.children('a'),
                  value;
              value = $label.length ? $label.find(':input').val() : $anchor.data('rating');

              if (value === properties.rating_filter) {
                $item.children('label').children('a').click();
                $item.removeClass('active');
              }
            });
          }

          break;

        case 'price_range':
          if ($dropdown.length) {
            if (!properties) {
              $dropdown.find('option').prop('selected', false);
            } else {
              $dropdown.find('option').each(function () {
                var $option = $(this),
                    formattedRange = properties.min_price + (properties.max_price ? "-".concat(properties.max_price) : '');

                if ($option.val() === formattedRange) {
                  $option.prop('selected', false);
                }
              });
            }

            $dropdown.change();
          } else if (!properties) {
            $activeItems.children('label').children('a').click();
            $activeItems.removeClass('active');
          } else {
            $activeItems.each(function () {
              var $item = $(this),
                  $label = $item.children('label'),
                  $anchor = $item.children('a'),
                  formattedRange,
                  value;
              value = $label.length ? $label.find(':input').val() : $anchor.data('min_price') + ($anchor.data('max_price') ? '-' + $anchor.data('max_price') : '');

              if (properties.min_price) {
                formattedRange = properties.min_price + (properties.max_price ? '-' + properties.max_price : '');
              } else if (properties.price_ranges) {
                formattedRange = properties.price_ranges;
              }

              if (value === formattedRange) {
                $item.children('label').children('a').click();
                $item.removeClass('active');
              }
            });
          }

          break;

        case 'price_slider':
          var $priceSlider = $filter.find('.price-slider');
          $filter.find('.price-slider-min').val($priceSlider.data('min'));
          $filter.find('.price-slider-max').val($priceSlider.data('max')).change();
          break;

        case 'orderby':
          $filter.find('select').val('menu_order');
          break;

        case 'stock_sale':
          if (!properties) {
            $filter.find('.filter-in-stock').find(':input').prop('checked', false).change();
            $filter.find('.filter-on-sale').find(':input').prop('checked', false).change();
            $filter.find('.filter-featured').find(':input').prop('checked', false).change();
            $items.removeClass('active');
          } else {
            if (properties !== null && properties !== void 0 && properties.instock_filter) {
              $filter.find('.filter-in-stock').find(':input').prop('checked', false).change().closest('.filter-item').removeClass('active');
            }

            if (properties !== null && properties !== void 0 && properties.onsale_filter) {
              $filter.find('.filter-on-sale').find(':input').prop('checked', false).change().closest('.filter-item').removeClass('active');
            }

            if (properties !== null && properties !== void 0 && properties.featured_filter) {
              $filter.find('.filter-featured').find(':input').prop('checked', false).change().closest('.filter-item').removeClass('active');
            }
          }

          break;

        default:
          $items.removeClass('active');
          break;
      }

      this.activeFilters = false;

      if (doFilter) {
        this.filter();
      }
    } // deactivate all filters

  }, {
    key: "deactivateAllFilters",
    value: function deactivateAllFilters(doFilter) {
      var self = this,
          $filters = this.getFilters();
      $filters.each(function () {
        var $filter = $(this);
        self.deactivateFilter($filter);
      });
      this.activeFilters = false;

      if (doFilter) {
        this.filter();
      }
    } // deactivate filters that matches a specific set of properties

  }, {
    key: "deactivateFilterByProperties",
    value: function deactivateFilterByProperties(properties, doFilter) {
      var self = this,
          $filters = this.getFiltersByProperties(properties);

      if (!$filters.length) {
        return;
      }

      $filters.each(function () {
        var $filter = $(this);
        self.deactivateFilter($filter, properties, doFilter);
      });
    } // open filters as a modal, when in mobile layout

  }, {
    key: "openModal",
    value: function openModal() {
      var _this10 = this;

      if (!this.isMobile) {
        return;
      }

      if (yith_wcan_shortcodes.toggles_open_on_modal) {
        this._openAllCollapsables();
      } else {
        this._closeAllCollapsables();
      }

      $('body').css('overflow', 'hidden').addClass('yith-wcan-preset-modal-open');
      this.$preset.show();
      setTimeout(function () {
        _this10.$preset.addClass('open');
      }, 100);
    } // close filters modal, when in mobile layout

  }, {
    key: "closeModal",
    value: function closeModal() {
      var _this11 = this;

      if (!this.isMobile) {
        return;
      }

      this.$preset.removeClass('open');
      setTimeout(function () {
        _this11.$preset.hide();

        $('body').css('overflow', 'auto').removeClass('yith-wcan-preset-modal-open');
      }, 300);
    } // utility that formats the price according to store configuration.

  }, {
    key: "formatPrice",
    value: function formatPrice(price) {
      if ('undefined' !== typeof accounting) {
        price = accounting.formatMoney(price, {
          symbol: yith_wcan_shortcodes.currency_format.symbol,
          decimal: yith_wcan_shortcodes.currency_format.decimal,
          thousand: yith_wcan_shortcodes.currency_format.thousand,
          precision: 0,
          format: yith_wcan_shortcodes.currency_format.format
        });
      }

      return price;
    } // utility that merges together sets of filter properties

  }, {
    key: "mergeProperties",
    value: function mergeProperties(set1, set2, $filter) {
      // search for common properties
      for (var prop in set2) {
        if (!set2.hasOwnProperty(prop)) {
          continue;
        }

        if (!!set1[prop]) {
          switch (prop) {
            case 'rating_filter':
            case 'min_price':
            case 'max_price':
            case 'onsale_filter':
            case 'instock_filter':
            case 'orderby':
              // just override default value
              set1[prop] = set2[prop];
              break;

            default:
              if (0 === prop.indexOf('query_type_')) {
                // query_type param
                set1[prop] = set2[prop];
              } else {
                // we're dealing with taxonomy
                var isAttr = 0 === prop.indexOf('filter_'),
                    glue = isAttr ? ',' : '+';
                var newValue = set1[prop].replace(',', glue) + glue + set2[prop].replace(',', glue);
                newValue = newValue.split(glue).filter(function (value, index, arr) {
                  return arr.indexOf(value) === index;
                }).join(glue);
                set1[prop] = newValue;

                if (isAttr) {
                  var queryTypeParam = prop.replace('filter_', 'query_type_');
                  set1[queryTypeParam] = 'and';
                  set2[queryTypeParam] = 'and';
                }
              }

          }

          delete set2[prop];
        }
      }

      $.extend(set1, set2);
      return set1;
    }
  }]);

  return YITH_WCAN_Preset;
}();


;// CONCATENATED MODULE: ./assets/js/shortcodes/index.js

/* global globalThis, jQuery, yith_wcan_shortcodes, accounting */




jQuery(function ($) {
  $(document).on('yith_wcan_init_shortcodes yith_plugin_fw_gutenberg_success_do_shortcode', function () {
    $('.yith-wcan-filters').not('.enhanced').each(function () {
      new YITH_WCAN_Preset($(this));
    });
    $('.yith-wcan-reset-filters').not('.enhanced').each(function () {
      new YITH_WCAN_Reset_Button($(this));
    });
  }).trigger('yith_wcan_init_shortcodes');
  globalThis.product_filter = new YITH_WCAN_Filter();
});
/******/ })()
;
//# sourceMappingURL=yith-wcan-shortcodes.js.map