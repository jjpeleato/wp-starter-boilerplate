'use strict';

import config from './../config';

/**
 * Import config file and required resources.
 */
import gulp from 'gulp';
import concat from 'gulp-concat';
import gulpSass from 'gulp-sass';
import nodeSass from 'node-sass';
import noop from 'gulp-noop';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import stylelint from 'gulp-stylelint';
import uglifycss from 'gulp-uglifycss';

const sass = gulpSass(nodeSass);

/**
 * Validate SCSS according Stylint (https://stylelint.io/).
 * @returns {*}
 */
function validateScss()
{
	return gulp
		.src(config.paths.sassAssets.src)
		.pipe(config.lintcss === true ? stylelint(config.options.stylelint) : noop());
}

exports.validateScss = validateScss;

/**
 * Compile SASS to CSS. Not concat.
 * @returns {*}
 */
function css()
{
	return gulp
		.src(config.paths.sassAssets.src)
		.pipe(sourcemaps.init())
		.pipe(sass(config.options.sass).on('error', sass.logError))
		.pipe(config.environment === 'production' ? uglifycss(config.options.uglifyCss) : noop())
		.pipe(config.environment === 'production' ? rename({ suffix: '.min' }) : noop())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.paths.sassAssets.dest));
}

exports.css = css;

/**
 * Concat and compile SASS to CSS and validate SASS according Stylelint (https://stylelint.io/).
 * @returns {*}
 */
function cssWithConcat()
{
	let merge = config.paths.sassAssets.vendor.concat(config.paths.sassAssets.src);

	return gulp
		.src(merge)
		.pipe(sourcemaps.init())
		.pipe(sass(config.options.sass).on('error', sass.logError))
		.pipe(config.environment === 'production' ? concat('custom-style.min.css') : concat('custom-style.css'))
		.pipe(config.environment === 'production' ? uglifycss(config.options.uglifyCss) : noop())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.paths.sassAssets.dest));
}

exports.cssWithConcat = cssWithConcat;

/**
 * Compile critical SASS to CSS and validate SASS according Stylelint (https://stylelint.io/)
 *
 * @returns {*}
 */
function cssCritical()
{
	return gulp
		.src(config.paths.sassAssets.srcCritical)
		.pipe(sourcemaps.init())
		.pipe(sass(config.options.sass).on('error', sass.logError))
		.pipe(config.environment === 'production' ? uglifycss(config.options.uglifyCss) : noop())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.paths.sassAssets.dest));
}

exports.cssCritical = cssCritical;

/**
 * Copy CSS assets to public directory.
 * @type {function(): *}
 */
function cssAssets()
{
	return gulp
		.src(config.paths.sassAssets.vendor)
		.pipe(uglifycss(config.options.uglifyCss))
		.pipe(gulp.dest(config.paths.sassAssets.destVendor));
}

exports.cssAssets = cssAssets;

/**
 * Copy fonts assets to public directory.
 */
function fontAssets()
{
	return gulp
		.src(config.paths.fontAssets.src)
		.pipe(gulp.dest(config.paths.fontAssets.dest));
}

exports.fontAssets = fontAssets;
