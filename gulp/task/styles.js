'use strict';

import config from './../config';

import gulp from 'gulp';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import stylelint from 'gulp-stylelint';
import uglifycss from 'gulp-uglifycss';
import util from 'gulp-util';

/**
 * Compile SASS to CSS and validate SASS according Stylelint (https://stylelint.io/)
 * @returns {*}
 */
function css()
{
    return gulp
        .src(config.paths.sassAssets.src)
        .pipe(config.lintcss === true ? stylelint(config.options.stylelint) : util.noop())
        .pipe(sass(config.options.sass))
        .pipe(config.environment === 'production' ? uglifycss(config.options.uglifyCss) : util.noop())
        .pipe(config.environment === 'production' ? rename({ suffix: '.min' }) : util.noop())
        .pipe(gulp.dest(config.paths.sassAssets.dest))
}

exports.css = css;

/**
 * Copy CSS assets to public directory
 * @type {function(): *}
 */
function cssAssets()
{
    return gulp
        .src(config.paths.sassAssets.vendor)
        .pipe(gulp.dest(config.paths.sassAssets.dest));
}

exports.cssAssets = cssAssets;

/**
 * Copy ICOMOON assets to public directory
 */
function fontAssets()
{
    return gulp
        .src(config.paths.fontAssets.src)
        .pipe(gulp.dest(config.paths.fontAssets.dest));
}

exports.fontAssets = fontAssets;

/**
 * Validate SCSS according Stylint (https://stylelint.io/)
 * @returns {*}
 */
function validateScss()
{
	return gulp
		.src(config.paths.sassAssets.src)
		.pipe(stylelint(config.options.stylelint))
}

exports.validateScss = validateScss;