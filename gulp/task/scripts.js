'use strict';

/**
 * Import config file and required resources.
 */
import config from './../config';
import gulp from 'gulp';
import concat from 'gulp-concat';
import jshint from 'gulp-jshint';
import map from 'map-stream';
import noop from 'gulp-noop';
import terser from 'gulp-terser';

/**
 * Custom reporters don't interact when there are some error.
 *
 * @returns {Stream}
 */
const reporterJs = function() {
	return map(function (file, callback) {
		if (file.jshint.success) {
			return callback(null, file);
		}

		console.log('JSHINT fail in', file.path);
		file.jshint.results.forEach(function (result) {
			if (!result.error) {
				return;
			}

			const err = result.error
			console.log(`  line ${err.line}, col ${err.character}, code ${err.code}, ${err.reason}`);
		});

		callback(null, file);
	});
};

exports.reporterJs = reporterJs;

/**
 * Validate JS with JSHint (https://jshint.com/).
 * @returns {*}
 */
function validateJs()
{
	return gulp
		.src(config.paths.jsAssets.src)
		.pipe(config.jshint === true ? jshint() : noop())
		.pipe(config.jshint === true ? jshint.reporter('default') : noop())
		.pipe(config.jshint === true ? jshint.reporter('fail') : noop())
		.pipe(config.jshint === true ? reporterJs() : noop())
}

exports.validateJs = validateJs;

/**
 * Minify the JS files.
 * @returns {*}
 */
function js()
{
	return gulp
		.src(config.paths.jsAssets.src)
		.pipe(config.environment === 'production' ? concat('script.min.js') : concat('script.js'))
		.pipe(config.environment === 'production' ? terser() : noop())
		.pipe(gulp.dest(config.paths.jsAssets.dest));
}

exports.js = js;

/**
 * Concat and minify the JS files.
 * @returns {*}
 */
function jsWithConcat()
{
	let merge = config.paths.jsAssets.vendor.concat(config.paths.jsAssets.src);

	return gulp
		.src(merge)
		.pipe(config.environment === 'production' ? concat('script.min.js') : concat('script.js'))
		.pipe(config.environment === 'production' ? terser() : noop())
		.pipe(gulp.dest(config.paths.jsAssets.dest));
}

exports.jsWithConcat = jsWithConcat;

/**
 * Copy JS assets to public directory.
 * @type {function(): *}
 */
function jsAssets()
{
	return gulp
		.src(config.paths.jsAssets.vendor)
		.pipe(terser())
		.pipe(gulp.dest(config.paths.jsAssets.destVendor));
}

exports.jsAssets = jsAssets;
