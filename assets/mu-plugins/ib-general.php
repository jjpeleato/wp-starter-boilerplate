<?php
declare(strict_types=1);

/**
 * If this file is called directly, then abort execution.
 */
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Inactivate some plugins
 *
 * @author jjpeleato
 *
 * @param $plugin_list
 * @return array
 */
function apolo_inactivate_plugins($plugin_list)
{
	if (is_admin()) {
		return $plugin_list;
	}

    if (in_array('adminimize/adminimize.php', $plugin_list)) {
        unset($plugin_list[array_search('adminimize/adminimize.php', $plugin_list)]);
    }

    if (in_array('better-search-replace/better-search-replace.php', $plugin_list)) {
        unset($plugin_list[array_search('better-search-replace/better-search-replace.php', $plugin_list)]);
    }

    if (in_array('classic-editor/classic-editor.php', $plugin_list)) {
        unset($plugin_list[array_search('classic-editor/classic-editor.php', $plugin_list)]);
    }

    if (in_array('duplicate-post/duplicate-post.php', $plugin_list)) {
        unset($plugin_list[array_search('duplicate-post/duplicate-post.php', $plugin_list)]);
    }

    if (in_array('ewww-image-optimizer/ewww-image-optimizer.php', $plugin_list)) {
        unset($plugin_list[array_search('ewww-image-optimizer/ewww-image-optimizer.php', $plugin_list)]);
    }

    if (in_array('regenerate-thumbnails/regenerate-thumbnails.php', $plugin_list)) {
        unset($plugin_list[array_search('regenerate-thumbnails/regenerate-thumbnails.php', $plugin_list)]);
    }

    if (in_array('wp-sweep/wp-sweep.php', $plugin_list)) {
        unset($plugin_list[array_search('wp-sweep/wp-sweep.php', $plugin_list)]);
    }

    if (in_array('wp-sync-db/wp-sync-db.php', $plugin_list)) {
        unset($plugin_list[array_search('wp-sync-db/wp-sync-db.php', $plugin_list)]);
    }

	return $plugin_list;
}

add_filter('option_active_plugins', 'apolo_inactivate_plugins', 1);
