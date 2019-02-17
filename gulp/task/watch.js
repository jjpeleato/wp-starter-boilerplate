'use strict';

/*
 * Import require functions
 */
import gulp from 'gulp';

import config from '../config';
import { css } from './styles';
import { js } from './scripts';

/* Tasks */
function watch()
{
    gulp.watch(config.paths.sassAssets.src, css);
    gulp.watch(config.paths.jsAssets.src, js);
}

exports.watch = watch;
