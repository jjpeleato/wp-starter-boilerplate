/**
 * Get current scroll.
 *
 * @returns {number}
 */
function getCurrentScroll()
{
	return window.pageYOffset || document.documentElement.scrollTop;
}

/**
 * Is desktop.
 *
 * @returns {boolean}
 */
function isDesktop()
{
	return jQuery(window).width() > 1024;
}

/**
 * Is tablet.
 *
 * @returns {boolean}
 */
function isTablet()
{
	let width = jQuery(window).width();
	return width >= 768 && width <= 1024;
}

/**
 * Is tablet and mobile.
 *
 * @returns {boolean}
 */
function isTabletAndMobile()
{
	return jQuery(window).width() < 991;
}

/**
 * Is mobile.
 *
 * @returns {boolean}
 */
function isMobile()
{
	return jQuery(window).width() < 768;
}

/**
 * Set device class into html tag.
 */
function setDevice()
{
	let html = jQuery('html');

	/* Clean all classes */
	html.removeClass('on-ipad')
		.removeClass('on-mobile')
		.removeClass('on-tablet')
		.removeClass('on-desktop')
		.removeClass('on-macos')
		.removeClass('on-windows');

	if (navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/BlackBerry/i) ||
		navigator.userAgent.match(/Windows Phone/i)
	) {
		if (true === isMobile()) {
			html.addClass('on-mobile');
		} else {
			html.addClass('on-tablet');
		}
	} else if (navigator.userAgent.match(/iPad/i)) {
		html.addClass('on-ipad');
	} else {
		if (true === isDesktop()) {
			html.addClass('on-desktop');

			let isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
			if (isMac) {
				html.addClass('on-macos');
			} else {
				html.addClass('on-windows');
			}
		}
		if (true === isTablet()) {
			html.addClass('on-tablet');
		}
		if (true === isMobile()) {
			html.addClass('on-mobile');
		}
	}
}

/**
 * Detect IE. Returns version of IE or false, if browser is not Internet Explorer.
 *
 * @returns {boolean|number}
 */
function detectIE()
{
	let ua = window.navigator.userAgent;

	let msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	let trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		let rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	let edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
}

/**
 * Is Internet Explorer.
 *
 * @returns {boolean}
 */
function isIE()
{
	return detectIE() !== false;
}

/**
 * Set IE class into html tag.
 */
function setIE()
{
	let html = jQuery('html');
	html.removeClass('ie');

	if (isIE() === true) {
		html.addClass('ie');
	}
}

/**
 * Remove some special characters from text string and to lower case.
 *
 * @param str
 * @returns {*}
 */
function getNormalizeAndToLowerCase(str)
{
	if (isIE()) {
		return str;
	}

	return str
		.normalize('NFD')
		.replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
		.normalize()
		.toLowerCase();
}

/**
 * Scroll to section by classname.
 */
function scrollTo() {
	jQuery('.js-scroll').on('click', function (event) {
		event.preventDefault();

		const anchor = jQuery(this).attr('href');
		const offset = jQuery(anchor).offset();

		if ('undefined' === typeof offset) {
			return;
		}

		const lessMoveTo = true === isMobile() ? 150 : 200;
		const section = parseInt(jQuery(anchor).offset().top) - lessMoveTo;

		jQuery('html,body').stop().animate({
			scrollTop: section
		}, 900, 'swing');
	});
}

/**
 * Redirect to by data-link attribute.
 */
function goToByDataLink() {
	jQuery('.js-link').on('click', function () {
		const link = jQuery(this).attr('data-link');

		if (typeof link === "undefined") {
			return;
		}

		const target = jQuery(this).attr('target');
		if (typeof target === "undefined") {
			window.location.href = link;
		} else {
			const win = window.open(link, target);
			win.focus();
		}
	});
}
