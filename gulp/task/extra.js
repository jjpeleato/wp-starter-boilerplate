'use strict'

import config from './../config';

import gulp from 'gulp';

/**
 * Copy extra assets
 */
function copy()
{
    return gulp
        .src(config.paths.extra.src)
        .pipe(gulp.dest(config.paths.extra.dest));
}

exports.copy = copy;
