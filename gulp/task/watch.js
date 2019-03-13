'use strict';

/*
 * Import require functions
 */
import gulp from 'gulp';

import config from '../config';
import { css } from './styles';
import { js } from './scripts';
import { validateScss } from './styles';
import { validateJs } from './scripts';

/* Tasks */
function watch()
{
    gulp.watch(config.paths.sassAssets.src, gulp.series(validateScss, css));
    gulp.watch(config.paths.jsAssets.src, gulp.series(validateJs, js));
}

exports.watch = watch;
