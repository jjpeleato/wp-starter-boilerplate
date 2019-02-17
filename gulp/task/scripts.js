'use strict';

import config from './../config';

import concat from 'gulp-concat';
import gulp from 'gulp';
import jshint from 'gulp-jshint';
import uglify from 'gulp-uglify';
import util from 'gulp-util';

/**
 * Validate the code with Jshint. Concat and minify the JS files.
 * @returns {*}
 */
function js()
{
    return gulp
        .src(config.paths.jsAssets.src)
        .pipe(config.jshint === true ? jshint() : util.noop())
        .pipe(config.jshint === true ? jshint.reporter('default') : util.noop())
        .pipe(config.environment === 'production' ? concat('script.min.js') : concat('script.js'))
        .pipe(config.environment === 'production' ? uglify() : util.noop())
        .pipe(gulp.dest(config.paths.jsAssets.dest));
}

exports.js = js;

/**
 * Copy JS assets to public directory
 * @type {function(): *}
 */
function jsAssets()
{
    return gulp
        .src(config.paths.jsAssets.vendor)
        .pipe(gulp.dest(config.paths.jsAssets.dest));
}

exports.jsAssets = jsAssets;
