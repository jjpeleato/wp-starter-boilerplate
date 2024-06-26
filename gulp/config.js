'use strict';

/* Const for environment */
const environment = process.env.NODE_ENV || 'development';

/* Activate or desactivate Stylint on CSS task. true: activate | false: desactivate */
const lintcss = true;
const jshint = true;

/* Paths */
const theme = './public/wp-content/themes/ao-apolo/assets/';
const paths = {
    sassAssets: {
        src: [
            './assets/scss/**/*.scss'
        ],
		srcCritical: [
			'./assets/scss/critical.scss'
		],
        vendor: [
            './node_modules/normalize.css/normalize.css',
            './node_modules/photoswipe/dist/photoswipe.css',
            './node_modules/tiny-slider/dist/tiny-slider.css',
        ],
        dest: theme + 'css/',
        destVendor: theme + 'vendor/'
    },
    jsAssets: {
        src: [
            './assets/js/vendor/**/*.js',
            './assets/js/custom.js'
        ],
        vendor: [
			'./node_modules/gsap/dist/gsap.min.js',
			'./node_modules/gsap/dist/ScrollTrigger.min.js',
			'./node_modules/lottie-web/build/player/lottie.min.js',
			'./node_modules/tiny-slider/dist/min/tiny-slider.js',
			'./node_modules/photoswipe/dist/umd/photoswipe.umd.min.js',
			'./node_modules/photoswipe/dist/umd/photoswipe-lightbox.umd.min.js'
        ],
        dest: theme + 'js/',
        destVendor: theme + 'vendor/'
    },
    fontAssets: {
        src: [
            './assets/fonts/*'
        ],
        dest: theme + 'css/fonts/'
    },
    imgAssets: {
        src: [
            './assets/img/**/*.svg',
            './assets/img/**/*.png',
            './assets/img/**/*.jpeg',
            './assets/img/**/*.jpg',
            './assets/img/**/*.gif',
            './assets/img/**/*.ico'
        ],
        vendor: [],
        dest: theme + 'img/',
        destVendor: theme + 'vendor/'
    },
    extra: {
        src: [],
        dest: theme + 'vendor/'
    }
};

/* Options */
const options = {
	stylelint: {
		reporters: [
			{
				formatter: 'string',
				console: true
			}
		]
	},
	sass: {
		outputStyle: 'compressed', // output_style = expanded or nested or compact or compressed
		precision: 10
	},
	uglifyCss: {
		"maxLineLen": 80,
		"uglyComments": false
	}
};

/* Exports */
exports.environment = environment;
exports.lintcss = lintcss;
exports.jshint = jshint;
exports.paths = paths;
exports.options = options;
