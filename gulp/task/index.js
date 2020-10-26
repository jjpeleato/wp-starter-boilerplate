'use strict';

/*
 * Import require functions
 */
import gulp from 'gulp';
import { clean } from './clean';
import { css } from './styles';
import { cssAssets } from './styles';
import { cssWithConcat } from './styles';
import { fontAssets } from './styles';
import { images } from './images';
import { imagesAssets } from './images';
import { js } from './scripts';
import { jsAssets } from './scripts';
import { jsWithConcat } from './scripts';
import { validateJs } from './scripts';
import { validateScss } from './styles';
import { watch } from './watch';

/* Tasks */
gulp.task(
	'default',
	gulp.series(
		clean,
		validateScss,
		css,
		cssAssets,
		fontAssets,
		validateJs,
		js,
		jsAssets,
		images,
		imagesAssets
	)
);
gulp.task('clean', clean);
gulp.task('css', css);
gulp.task('cssAssets', cssAssets);
gulp.task('cssWithConcat', cssWithConcat);
gulp.task('fontAssets', fontAssets);
gulp.task('images', images);
gulp.task('imagesAssets', imagesAssets);
gulp.task('js', js);
gulp.task('jsAssets', jsAssets);
gulp.task('jsWithConcat', jsWithConcat);
gulp.task('validate', gulp.series(validateScss, validateJs));
gulp.task('validateJs', validateJs);
gulp.task('validateScss', validateScss);
gulp.task('watch', watch);
