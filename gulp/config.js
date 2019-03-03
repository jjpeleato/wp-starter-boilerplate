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
            './node_modules/bootstrap/dist/css/bootstrap.css'
        ],
        dest: theme + 'css/'
    },
    jsAssets: {
        src: [
            './assets/js/**/*.js'
        ],
        vendor: [
            './node_modules/popper.js/dist/popper.js',
            './node_modules/bootstrap/dist/js/bootstrap.js'
        ],
        dest: theme + 'js/'
    },
    fontAssets: {
        src: [
            './assets/fonts/*'
        ],
        dest: theme + 'css/fonts/'
    },
    imgAssets: {
		src: [
			'./assets/img/**/*.png',
			'./assets/img/**/*.jpeg',
			'./assets/img/**/*.jpg',
			'./assets/img/**/*.gif',
			'./assets/img/**/*.ico'
		],
        dest: theme + 'img/'
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
