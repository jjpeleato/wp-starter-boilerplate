'use strict'

import config from './../config';

import del from 'del';

/**
 * Delete all files
 */
function clean()
{
	return del([
		config.paths.sassAssets.dest,
		config.paths.jsAssets.dest,
		config.paths.fontAssets.dest,
		config.paths.imgAssets.dest
	]);
}

exports.clean = clean;
