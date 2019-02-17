/*globals jQuery,Window,HTMLElement,HTMLDocument,HTMLCollection,NodeList,MutationObserver */
/*exported Arrive*/
/*jshint latedef:false */

/*
 * arrive.js
 * v2.4.1
 * https://github.com/uzairfarooq/arrive
 * MIT licensed
 *
 * Copyright (c) 2014-2017 Uzair Farooq
 */
var Arrive = (function(window, $, undefined) {

        "use strict";

        if(!window.MutationObserver || typeof HTMLElement === 'undefined'){
                return; //for unsupported browsers
        }

        var arriveUniqueId = 0;

        var utils = (function() {
                var matches = HTMLElement.prototype.matches || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector
                || HTMLElement.prototype.msMatchesSelector;

                return {
                        matchesSelector: function(elem, selector) {
                                return elem instanceof HTMLElement && matches.call(elem, selector);
                        },
                        // to enable function overloading - By John Resig (MIT Licensed)
                        addMethod: function (object, name, fn) {
                                var old = object[ name ];
                                object[ name ] = function(){
                                        if ( fn.length == arguments.length ) {
                                                return fn.apply( this, arguments );
                                        }
                                        else if ( typeof old == 'function' ) {
                                                return old.apply( this, arguments );
                                        }
                                };
                        },
                        callCallbacks: function(callbacksToBeCalled, registrationData) {
                                if (registrationData && registrationData.options.onceOnly && registrationData.firedElems.length == 1) {
                                        // as onlyOnce param is true, make sure we fire the event for only one item
                                        callbacksToBeCalled = [callbacksToBeCalled[0]];
                                }

                                for (var i = 0, cb; (cb = callbacksToBeCalled[i]); i++) {
                                        if (cb && cb.callback) {
                                                cb.callback.call(cb.elem, cb.elem);
                                        }
                                }

                                if (registrationData && registrationData.options.onceOnly && registrationData.firedElems.length == 1) {
                                        // unbind event after first callback as onceOnly is true.
                                        registrationData.me.unbindEventWithSelectorAndCallback.call(
                                                registrationData.target, registrationData.selector, registrationData.callback
                                        );
                                }
                        },
                        // traverse through all descendants of a node to check if event should be fired for any descendant
                        checkChildNodesRecursively: function(nodes, registrationData, matchFunc, callbacksToBeCalled) {
                                // check each new node if it matches the selector
                                for (var i=0, node; (node = nodes[i]); i++) {
                                        if (matchFunc(node, registrationData, callbacksToBeCalled)) {
                                                callbacksToBeCalled.push({ callback: registrationData.callback, elem: node });
                                        }

                                        if (node.childNodes.length > 0) {
                                                utils.checkChildNodesRecursively(node.childNodes, registrationData, matchFunc, callbacksToBeCalled);
                                        }
                                }
                        },
                        mergeArrays: function(firstArr, secondArr){
                                // Overwrites default options with user-defined options.
                                var options = {},
                                attrName;
                                for (attrName in firstArr) {
                                        if (firstArr.hasOwnProperty(attrName)) {
                                                options[attrName] = firstArr[attrName];
                                        }
                                }
                                for (attrName in secondArr) {
                                        if (secondArr.hasOwnProperty(attrName)) {
                                                options[attrName] = secondArr[attrName];
                                        }
                                }
                                return options;
                        },
                        toElementsArray: function (elements) {
                                // check if object is an array (or array like object)
                                // Note: window object has .length property but it's not array of elements so don't consider it an array
                                if (typeof elements !== "undefined" && (typeof elements.length !== "number" || elements === window)) {
                                        elements = [elements];
                                }
                                return elements;
                        }
                };
        })();


        // Class to maintain state of all registered events of a single type
        var EventsBucket = (function() {
                var EventsBucket = function() {
                        // holds all the events

                        this._eventsBucket    = [];
                        // function to be called while adding an event, the function should do the event initialization/registration
                        this._beforeAdding    = null;
                        // function to be called while removing an event, the function should do the event destruction
                        this._beforeRemoving  = null;
                };

                EventsBucket.prototype.addEvent = function(target, selector, options, callback) {
                        var newEvent = {
                                target:             target,
                                selector:           selector,
                                options:            options,
                                callback:           callback,
                                firedElems:         []
                        };

                        if (this._beforeAdding) {
                                this._beforeAdding(newEvent);
                        }

                        this._eventsBucket.push(newEvent);
                        return newEvent;
                };

                EventsBucket.prototype.removeEvent = function(compareFunction) {
                        for (var i=this._eventsBucket.length - 1, registeredEvent; (registeredEvent = this._eventsBucket[i]); i--) {
                                if (compareFunction(registeredEvent)) {
                                        if (this._beforeRemoving) {
                                                this._beforeRemoving(registeredEvent);
                                        }

                                        // mark callback as null so that even if an event mutation was already triggered it does not call callback
                                        var removedEvents = this._eventsBucket.splice(i, 1);
                                        if (removedEvents && removedEvents.length) {
                                                removedEvents[0].callback = null;
                                        }
                                }
                        }
                };

                EventsBucket.prototype.beforeAdding = function(beforeAdding) {
                        this._beforeAdding = beforeAdding;
                };

                EventsBucket.prototype.beforeRemoving = function(beforeRemoving) {
                        this._beforeRemoving = beforeRemoving;
                };

                return EventsBucket;
        })();


        /**
        * @constructor
        * General class for binding/unbinding arrive and leave events
        */
        var MutationEvents = function(getObserverConfig, onMutation) {
                var eventsBucket    = new EventsBucket(),
                me              = this;

                var defaultOptions = {
                        fireOnAttributesModification: false
                };

                // actual event registration before adding it to bucket
                eventsBucket.beforeAdding(function(registrationData) {
                        var
                        target    = registrationData.target,
                        observer;

                        // mutation observer does not work on window or document
                        if (target === window.document || target === window) {
                                target = document.getElementsByTagName("html")[0];
                        }

                        // Create an observer instance
                        observer = new MutationObserver(function(e) {
                                onMutation.call(this, e, registrationData);
                        });

                        var config = getObserverConfig(registrationData.options);

                        observer.observe(target, config);

                        registrationData.observer = observer;
                        registrationData.me = me;
                });

                // cleanup/unregister before removing an event
                eventsBucket.beforeRemoving(function (eventData) {
                        eventData.observer.disconnect();
                });

                this.bindEvent = function(selector, options, callback) {
                        options = utils.mergeArrays(defaultOptions, options);

                        var elements = utils.toElementsArray(this);

                        for (var i = 0; i < elements.length; i++) {
                                eventsBucket.addEvent(elements[i], selector, options, callback);
                        }
                };

                this.unbindEvent = function() {
                        var elements = utils.toElementsArray(this);
                        eventsBucket.removeEvent(function(eventObj) {
                                for (var i = 0; i < elements.length; i++) {
                                        if (this === undefined || eventObj.target === elements[i]) {
                                                return true;
                                        }
                                }
                                return false;
                        });
                };

                this.unbindEventWithSelectorOrCallback = function(selector) {
                        var elements = utils.toElementsArray(this),
                        callback = selector,
                        compareFunction;

                        if (typeof selector === "function") {
                                compareFunction = function(eventObj) {
                                        for (var i = 0; i < elements.length; i++) {
                                                if ((this === undefined || eventObj.target === elements[i]) && eventObj.callback === callback) {
                                                        return true;
                                                }
                                        }
                                        return false;
                                };
                        }
                        else {
                                compareFunction = function(eventObj) {
                                        for (var i = 0; i < elements.length; i++) {
                                                if ((this === undefined || eventObj.target === elements[i]) && eventObj.selector === selector) {
                                                        return true;
                                                }
                                        }
                                        return false;
                                };
                        }
                        eventsBucket.removeEvent(compareFunction);
                };

                this.unbindEventWithSelectorAndCallback = function(selector, callback) {
                        var elements = utils.toElementsArray(this);
                        eventsBucket.removeEvent(function(eventObj) {
                                for (var i = 0; i < elements.length; i++) {
                                        if ((this === undefined || eventObj.target === elements[i]) && eventObj.selector === selector && eventObj.callback === callback) {
                                                return true;
                                        }
                                }
                                return false;
                        });
                };

                return this;
        };


        /**
        * @constructor
        * Processes 'arrive' events
        */
        var ArriveEvents = function() {
                // Default options for 'arrive' event
                var arriveDefaultOptions = {
                        fireOnAttributesModification: false,
                        onceOnly: false,
                        existing: false
                };

                function getArriveObserverConfig(options) {
                        var config = {
                                attributes: false,
                                childList: true,
                                subtree: true
                        };

                        if (options.fireOnAttributesModification) {
                                config.attributes = true;
                        }

                        return config;
                }

                function onArriveMutation(mutations, registrationData) {
                        mutations.forEach(function( mutation ) {
                                var newNodes    = mutation.addedNodes,
                                targetNode = mutation.target,
                                callbacksToBeCalled = [],
                                node;

                                // If new nodes are added
                                if( newNodes !== null && newNodes.length > 0 ) {
                                        utils.checkChildNodesRecursively(newNodes, registrationData, nodeMatchFunc, callbacksToBeCalled);
                                }
                                else if (mutation.type === "attributes") {
                                        if (nodeMatchFunc(targetNode, registrationData, callbacksToBeCalled)) {
                                                callbacksToBeCalled.push({ callback: registrationData.callback, elem: targetNode });
                                        }
                                }

                                utils.callCallbacks(callbacksToBeCalled, registrationData);
                        });
                }

                function nodeMatchFunc(node, registrationData, callbacksToBeCalled) {
                        // check a single node to see if it matches the selector
                        if (utils.matchesSelector(node, registrationData.selector)) {
                                if(node._id === undefined) {
                                        node._id = arriveUniqueId++;
                                }
                                // make sure the arrive event is not already fired for the element
                                if (registrationData.firedElems.indexOf(node._id) == -1) {
                                        registrationData.firedElems.push(node._id);

                                        return true;
                                }
                        }

                        return false;
                }

                arriveEvents = new MutationEvents(getArriveObserverConfig, onArriveMutation);

                var mutationBindEvent = arriveEvents.bindEvent;

                // override bindEvent function
                arriveEvents.bindEvent = function(selector, options, callback) {

                        if (typeof callback === "undefined") {
                                callback = options;
                                options = arriveDefaultOptions;
                        } else {
                                options = utils.mergeArrays(arriveDefaultOptions, options);
                        }

                        var elements = utils.toElementsArray(this);

                        if (options.existing) {
                                var existing = [];

                                for (var i = 0; i < elements.length; i++) {
                                        var nodes = elements[i].querySelectorAll(selector);
                                        for (var j = 0; j < nodes.length; j++) {
                                                existing.push({ callback: callback, elem: nodes[j] });
                                        }
                                }

                                // no need to bind event if the callback has to be fired only once and we have already found the element
                                if (options.onceOnly && existing.length) {
                                        return callback.call(existing[0].elem, existing[0].elem);
                                }

                                setTimeout(utils.callCallbacks, 1, existing);
                        }

                        mutationBindEvent.call(this, selector, options, callback);
                };

                return arriveEvents;
        };


        /**
        * @constructor
        * Processes 'leave' events
        */
        var LeaveEvents = function() {
                // Default options for 'leave' event
                var leaveDefaultOptions = {};

                function getLeaveObserverConfig() {
                        var config = {
                                childList: true,
                                subtree: true
                        };

                        return config;
                }

                function onLeaveMutation(mutations, registrationData) {
                        mutations.forEach(function( mutation ) {
                                var removedNodes  = mutation.removedNodes,
                                callbacksToBeCalled = [];

                                if( removedNodes !== null && removedNodes.length > 0 ) {
                                        utils.checkChildNodesRecursively(removedNodes, registrationData, nodeMatchFunc, callbacksToBeCalled);
                                }

                                utils.callCallbacks(callbacksToBeCalled, registrationData);
                        });
                }

                function nodeMatchFunc(node, registrationData) {
                        return utils.matchesSelector(node, registrationData.selector);
                }

                leaveEvents = new MutationEvents(getLeaveObserverConfig, onLeaveMutation);

                var mutationBindEvent = leaveEvents.bindEvent;

                // override bindEvent function
                leaveEvents.bindEvent = function(selector, options, callback) {

                        if (typeof callback === "undefined") {
                                callback = options;
                                options = leaveDefaultOptions;
                        } else {
                                options = utils.mergeArrays(leaveDefaultOptions, options);
                        }

                        mutationBindEvent.call(this, selector, options, callback);
                };

                return leaveEvents;
        };


        var arriveEvents = new ArriveEvents(),
        leaveEvents  = new LeaveEvents();

        function exposeUnbindApi(eventObj, exposeTo, funcName) {
                // expose unbind function with function overriding
                utils.addMethod(exposeTo, funcName, eventObj.unbindEvent);
                utils.addMethod(exposeTo, funcName, eventObj.unbindEventWithSelectorOrCallback);
                utils.addMethod(exposeTo, funcName, eventObj.unbindEventWithSelectorAndCallback);
        }

        /*** expose APIs ***/
        function exposeApi(exposeTo) {
                exposeTo.arrive = arriveEvents.bindEvent;
                exposeUnbindApi(arriveEvents, exposeTo, "unbindArrive");

                exposeTo.leave = leaveEvents.bindEvent;
                exposeUnbindApi(leaveEvents, exposeTo, "unbindLeave");
        }

        if ($) {
                exposeApi($.fn);
        }
        exposeApi(HTMLElement.prototype);
        exposeApi(NodeList.prototype);
        exposeApi(HTMLCollection.prototype);
        exposeApi(HTMLDocument.prototype);
        exposeApi(Window.prototype);

        var Arrive = {};
        // expose functions to unbind all arrive/leave events
        exposeUnbindApi(arriveEvents, Arrive, "unbindAllArrive");
        exposeUnbindApi(leaveEvents, Arrive, "unbindAllLeave");

        return Arrive;

})(window, typeof jQuery === 'undefined' ? null : jQuery, undefined);

// webp detection adapted from https://developers.google.com/speed/webp/faq#how_can_i_detect_browser_support_using_javascript
function check_webp_feature(feature, callback) {
        var kTestImages = {
                alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
        };
        var img = new Image();
        img.onload = function () {
                var ewww_webp_supported = (img.width > 0) && (img.height > 0);
                callback(ewww_webp_supported);
        };
        img.onerror = function () {
                callback(false);
        };
        img.src = "data:image/webp;base64," + kTestImages[feature];
}
function ewww_load_images(ewww_webp_supported) {
	(function($) {
                $.fn.extend({
                        ewwwattr: function(attr, value) {
                                if (typeof value !== typeof undefined && value !== false) {
                                        this.attr(attr, value);
                                }
                                return this;
                        }
                });
		var attr_prefix = 'data-';
		function ewww_copy_attrs(ewww_nscript, ewww_img) {
			var attrs = ['align','alt','border','crossorigin','height','hspace','ismap','longdesc','usemap','vspace','width','accesskey','class','contenteditable','contextmenu','dir','draggable','dropzone','hidden','id','lang','spellcheck','style','tabindex','title','translate','sizes','data-caption','data-attachment-id','data-permalink','data-orig-size','data-comments-opened','data-image-meta','data-image-title','data-image-description','data-event-trigger','data-highlight-color','data-highlight-opacity','data-highlight-border-color','data-highlight-border-width','data-highlight-border-opacity','data-no-lazy','data-lazy','data-large_image_width','data-large_image_height'];
			for (var i = 0, len = attrs.length; i < len; i++) {
                                $(ewww_img).ewwwattr(attrs[i], $(ewww_nscript).attr(attr_prefix + attrs[i]));
			}
			return ewww_img;
		}
		if (ewww_webp_supported) {
			$('.batch-image img, .image-wrapper a, .ngg-pro-masonry-item a, .ngg-galleria-offscreen-seo-wrapper a').each(function() {
				$(this).ewwwattr('data-src', $(this).attr('data-webp'));
				$(this).ewwwattr('data-thumbnail', $(this).attr('data-webp-thumbnail'));
			});
			$('.image-wrapper a, .ngg-pro-masonry-item a').each(function() {
				$(this).ewwwattr('href', $(this).attr('data-webp'));
			});
			$('.rev_slider ul li').each(function() {
				$(this).ewwwattr('data-thumb', $(this).attr('data-webp-thumb'));
				var param_num = 1;
				while ( param_num < 11 ) {
                                        $(this).ewwwattr('data-param' + param_num, $(this).attr('data-webp-param' + param_num));
					param_num++;
				}
			});
			$('.rev_slider img').each(function() {
				$(this).ewwwattr('data-lazyload', $(this).attr('data-webp-lazyload'));
			});
			$('div.woocommerce-product-gallery__image').each(function() {
				$(this).ewwwattr('data-thumb', $(this).attr('data-webp-thumb'));
			});
		}
		$('video').each(function() {
			if (ewww_webp_supported) {
				$(this).ewwwattr('poster', $(this).attr('data-poster-webp'));
                        } else {
				$(this).ewwwattr('poster', $(this).attr('data-poster-image'));
                        }
		});
		$('img.ewww_webp_lazy_load').each(function() {
			if (ewww_webp_supported) {
				$(this).ewwwattr('data-lazy-srcset', $(this).attr('data-lazy-srcset-webp'));
				$(this).ewwwattr('data-srcset', $(this).attr('data-srcset-webp'));
				$(this).ewwwattr('data-lazy-src', $(this).attr('data-lazy-src-webp'));
				$(this).ewwwattr('data-src', $(this).attr('data-src-webp'));
                                $(this).ewwwattr('data-orig-file', $(this).attr('data-webp-orig-file'));
                                $(this).ewwwattr('data-medium-file', $(this).attr('data-webp-medium-file'));
                                $(this).ewwwattr('data-large-file', $(this).attr('data-webp-large-file'));
                                var jpsrcset = $(this).attr('srcset');
                                if (typeof jpsrcset !== typeof undefined && jpsrcset !== false && jpsrcset.includes('R0lGOD')) {
                                        $(this).ewwwattr('src', $(this).attr('data-lazy-src-webp'));
                                }
			}
			$(this).removeClass('ewww_webp_lazy_load');
		});
		$('.ewww_webp').each(function() {
			var ewww_img = document.createElement('img');
			if (ewww_webp_supported) {
                                $(ewww_img).ewwwattr('src', $(this).attr('data-webp'));
                                $(ewww_img).ewwwattr('srcset', $(this).attr('data-srcset-webp'));
                                $(ewww_img).ewwwattr('data-orig-file', $(this).attr('data-orig-file'));
                                $(ewww_img).ewwwattr('data-orig-file', $(this).attr('data-webp-orig-file'));
                                $(ewww_img).ewwwattr('data-medium-file', $(this).attr('data-medium-file'));
                                $(ewww_img).ewwwattr('data-medium-file', $(this).attr('data-webp-medium-file'));
                                $(ewww_img).ewwwattr('data-large-file', $(this).attr('data-large-file'));
                                $(ewww_img).ewwwattr('data-large-file', $(this).attr('data-webp-large-file'));
                                $(ewww_img).ewwwattr('data-large_image', $(this).attr('data-large_image'));
                                $(ewww_img).ewwwattr('data-large_image', $(this).attr('data-webp-large_image'));
                                $(ewww_img).ewwwattr('data-src', $(this).attr('data-src'));
                                $(ewww_img).ewwwattr('data-src', $(this).attr('data-webp-src'));
			} else {
                                $(ewww_img).ewwwattr('src', $(this).attr('data-img'));
                                $(ewww_img).ewwwattr('srcset', $(this).attr('data-srcset-img'));
                                $(ewww_img).ewwwattr('data-orig-file', $(this).attr('data-orig-file'));
                                $(ewww_img).ewwwattr('data-medium-file', $(this).attr('data-medium-file'));
                                $(ewww_img).ewwwattr('data-large-file', $(this).attr('data-large-file'));
                                $(ewww_img).ewwwattr('data-large_image', $(this).attr('data-large_image'));
                                $(ewww_img).ewwwattr('data-src', $(this).attr('data-src'));
			}
			ewww_img = ewww_copy_attrs(this, ewww_img);
			$(this).after(ewww_img);
			$(this).removeClass('ewww_webp');
		});
                // $(document.body).trigger('post-load');
	})(jQuery);
  	if (jQuery.fn.isotope && jQuery.fn.imagesLoaded) {
		jQuery('.fusion-posts-container-infinite').imagesLoaded( function() {
			if ( jQuery( '.fusion-posts-container-infinite' ).hasClass( 'isotope' ) ) {
				jQuery( '.fusion-posts-container-infinite' ).isotope();
			}
		});
		jQuery('.fusion-portfolio:not(.fusion-recent-works) .fusion-portfolio-wrapper').imagesLoaded( function() {
			jQuery( '.fusion-portfolio:not(.fusion-recent-works) .fusion-portfolio-wrapper' ).isotope();
		});
	}
}
var ewww_jquery_waiting_timer = 0;
ewww_jquery_waiting = setInterval(function () {
        if (window.jQuery) {
                check_webp_feature('alpha', ewww_load_images);
                check_webp_feature('alpha', ewww_ngg_plus_load_galleries);
                document.arrive('.ewww_webp', function() {
                        check_webp_feature('alpha', ewww_load_images);
                });
                var ewww_ngg_galleries_timer = 0;
                var ewww_ngg_galleries = setInterval(function() {
                        if ( typeof galleries !== 'undefined' ) {
                                check_webp_feature('alpha', ewww_ngg_plus_parse_galleries);
                                clearInterval(ewww_ngg_galleries);
                        }
                        ewww_ngg_galleries_timer += 25;
                        if (ewww_ngg_galleries_timer > 1000) {
                                clearInterval(ewww_ngg_galleries);
                        }
                }, 25);
                clearInterval(ewww_jquery_waiting);
        }
        ewww_jquery_waiting_timer +=100;
        if (ewww_jquery_waiting_timer > 10000) {
                clearInterval(ewww_jquery_waiting);
        }
}, 100);
function ewww_ngg_plus_parse_galleries(ewww_webp_supported) {
        if (ewww_webp_supported) {
                (function($) {
                        $.each(galleries, function(galleryIndex, gallery) {
                                galleries[galleryIndex].images_list = ewww_ngg_plus_parse_image_list(gallery.images_list);
                        });
                })(jQuery);
        }
}
function ewww_ngg_plus_load_galleries(ewww_webp_supported) {
        if (ewww_webp_supported) {
                (function($) {
                        $(window).on('ngg.galleria.themeadded', function(event, themename) {
                                window.ngg_galleria._create_backup = window.ngg_galleria.create;
                                window.ngg_galleria.create = function(gallery_parent, themename) {
                                        var gallery_id = $(gallery_parent).data('id');
                                        galleries['gallery_' + gallery_id].images_list = ewww_ngg_plus_parse_image_list(galleries['gallery_' + gallery_id].images_list);
                                        return window.ngg_galleria._create_backup(gallery_parent, themename);
                                };
                        });
                        $(window).on('override_nplModal_methods', function(e, methods) {
                                methods._set_events_backup = methods.set_events;
                                methods.set_events = function() {
                                        $('#npl_content').bind('npl_images_ready', function(event, gallery_id) {
                                                var cache = methods.fetch_images.gallery_image_cache[gallery_id];
                                                cache = ewww_ngg_plus_parse_image_list(cache);
                                        });
                                        return methods._set_events_backup();
                                }
                        });
                })(jQuery);
        }
}
function ewww_ngg_plus_parse_image_list(images_list) {
        (function($) {
                $.each(images_list, function(nggIndex, nggImage) {
                        if (typeof nggImage['image-webp'] !== typeof undefined) {
                                images_list[nggIndex]['image'] = nggImage['image-webp'];
                                delete images_list[nggIndex]['image-webp'];
                        }
                        if (typeof nggImage['thumb-webp'] !== typeof undefined) {
                                images_list[nggIndex]['thumb'] = nggImage['thumb-webp'];
                                delete images_list[nggIndex]['thumb-webp'];
                        }
                        if (typeof nggImage['full_image_webp'] !== typeof undefined) {
                                images_list[nggIndex]['full_image'] = nggImage['full_image_webp'];
                                delete images_list[nggIndex]['full_image_webp'];
                        }
                        if (typeof nggImage['srcsets'] !== typeof undefined) {
                                $.each(nggImage['srcsets'], function(nggSrcsetIndex, nggSrcset) {
                                        if (typeof nggImage['srcsets'][nggSrcsetIndex + '-webp'] !== typeof undefined) {
                                                images_list[nggIndex]['srcsets'][nggSrcsetIndex] = nggImage['srcsets'][nggSrcsetIndex + '-webp'];
                                                delete images_list[nggIndex]['srcsets'][nggSrcsetIndex + '-webp'];
                                        }
                                });
                        }
                        if (typeof nggImage['full_srcsets'] !== typeof undefined) {
                                $.each(nggImage['full_srcsets'], function(nggFSrcsetIndex, nggFSrcset) {
                                        if (typeof nggImage['full_srcsets'][nggFSrcsetIndex + '-webp'] !== typeof undefined) {
                                                images_list[nggIndex]['full_srcsets'][nggFSrcsetIndex] = nggImage['full_srcsets'][nggFSrcsetIndex + '-webp'];
                                                delete images_list[nggIndex]['full_srcsets'][nggFSrcsetIndex + '-webp'];
                                        }
                                });
                        }
                });
        })(jQuery);
        return images_list;
}
