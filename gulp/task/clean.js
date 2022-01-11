'use strict';

/**
 * Import config file and required resources.
 */
import config from './../config';
import del from 'del';

/**
 * Delete all files.
 */
function clean()
{
	return del([
		config.paths.sassAssets.dest,
		config.paths.sassAssets.destVendor,
		config.paths.jsAssets.dest,
		config.paths.jsAssets.destVendor,
		config.paths.fontAssets.dest,
		config.paths.imgAssets.dest,
		config.paths.imgAssets.destVendor,
		config.paths.extra.dest,
	]);
}

exports.clean = clean;
