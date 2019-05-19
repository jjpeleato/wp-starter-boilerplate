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
        vendor: [
            './node_modules/bootstrap/dist/css/bootstrap.min.css'
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
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/popper.js/dist/popper.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js'
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
        outputStyle: 'expanded', // output_style = expanded or nested or compact or compressed
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
