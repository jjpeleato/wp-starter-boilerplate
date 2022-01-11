'use strict';

/**
 * Import config file and required resources.
 */
import config from './../config';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import noop from 'gulp-noop';

/**
 * Copy and minify PNG, JPEG, GIF and SVG images with imagemin.
 */
function images()
{
	return gulp
		.src(config.paths.imgAssets.src)
		.pipe(config.environment === 'production' ? imagemin() : noop())
		.pipe(gulp.dest(config.paths.imgAssets.dest));
}

exports.images = images;

/**
 * Copy and minify PNG, JPEG, GIF and SVG assets images with imagemin.
 */
function imagesAssets()
{
	return gulp
		.src(config.paths.imgAssets.vendor)
		.pipe(config.environment === 'production' ? imagemin() : noop())
		.pipe(gulp.dest(config.paths.imgAssets.destVendor));
}

exports.imagesAssets = imagesAssets;
