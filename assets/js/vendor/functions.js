/**
 * Detect IE. Returns version of IE or false, if browser is not Internet Explorer
 *
 * @returns {boolean|number}
 */
function detectIE() {
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
 * Is Internet Explorer
 *
 * @returns {boolean}
 */
function isIE() {
	let version = detectIE();

    return false !== version;
}

/**
 * Set IE class into html tag
 */
function setIE() {
	let html = jQuery('html');
    html.removeClass('ie');

    if (true === isIE()) {
        html.addClass('ie');
    }
}

/**
 * Is mobile
 *
 * @returns {boolean}
 */
function isMobile() {
    return jQuery(window).width() < 991;
}

/**
 * Remove some special characters from text string and to lower case
 *
 * @param str
 * @returns {*}
 */
function getNormalizeAndToLowerCase(str) {
    if (true === isIE()) {
        return str;
    }

    return str
        .normalize('NFD')
        .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
        .normalize()
        .toLowerCase();
}

/**
 * Get current scroll
 *
 * @returns {number}
 */
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
}
