'use strict';

/**
 * Import all required functions.
 */
import config from '../config';
import gulp from 'gulp';
import { css } from './styles';
import { js } from './scripts';
import { validateJs } from './scripts';
import { validateScss } from './styles';

/**
 * All tasks to watch.
 */
function watch()
{
	gulp.watch(
		config.paths.sassAssets.src,
		{ ignoreInitial: false },
		gulp.series(validateScss, css)
	);
	gulp.watch(
		config.paths.jsAssets.src,
		{ ignoreInitial: false },
		gulp.series(validateJs, js)
	);
}

exports.watch = watch;
