'use strict';

import config from './../config';

import gulp from 'gulp';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import stylelint from 'gulp-stylelint';
import uglifycss from 'gulp-uglifycss';
import util from 'gulp-util';
import concat from "gulp-concat";

/**
 * Validate SCSS according Stylint (https://stylelint.io/)
 * @returns {*}
 */
function validateScss()
{
    return gulp
        .src(config.paths.sassAssets.src)
        .pipe(config.lintcss === true ? stylelint(config.options.stylelint) : util.noop());
}

exports.validateScss = validateScss;

/**
 * Compile SASS to CSS and validate SASS according Stylelint (https://stylelint.io/). Not concat
 * @returns {*}
 */
function css()
{
    return gulp
        .src(config.paths.sassAssets.src)
        .pipe(sass(config.options.sass))
        .pipe(config.environment === 'production' ? uglifycss(config.options.uglifyCss) : util.noop())
        .pipe(config.environment === 'production' ? rename({ suffix: '.min' }) : util.noop())
        .pipe(gulp.dest(config.paths.sassAssets.dest));
}

exports.css = css;

/**
 * Concat and compile SASS to CSS and validate SASS according Stylelint (https://stylelint.io/)
 * @returns {*}
 */
function cssWithConcat()
{
    let merge = config.paths.sassAssets.vendor.concat(config.paths.sassAssets.src);

    return gulp
        .src(merge)
        .pipe(sass(config.options.sass))
        .pipe(config.environment === 'production' ? concat('custom-style.min.css') : concat('custom-style.css'))
        .pipe(config.environment === 'production' ? uglifycss(config.options.uglifyCss) : util.noop())
        .pipe(gulp.dest(config.paths.sassAssets.dest));
}

exports.cssWithConcat = cssWithConcat;

/**
 * Copy CSS assets to public directory
 * @type {function(): *}
 */
function cssAssets()
{
    return gulp
        .src(config.paths.sassAssets.vendor)
        .pipe(gulp.dest(config.paths.sassAssets.destVendor));
}

exports.cssAssets = cssAssets;

/**
 * Copy fonts assets to public directory
 */
function fontAssets()
{
    return gulp
        .src(config.paths.fontAssets.src)
        .pipe(gulp.dest(config.paths.fontAssets.dest));
}

exports.fontAssets = fontAssets;
