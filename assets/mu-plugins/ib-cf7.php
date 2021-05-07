<?php
declare(strict_types=1);

/**
 * If this file is called directly, then abort execution.
 */
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Inactivate CF7 plugin only if the "/contacto/" URI
 *
 * @author jjpeleato
 *
 * @param $plugin_list
 * @return array
 */
function apolo_inactivate_cf7($plugin_list)
{
	if (is_admin()) {
		return $plugin_list;
	}

	$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
	$is_cf7_needed = ($request_uri === '/contacto/' || strpos($request_uri, '/wp-json/contact-form-7/v1/contact-forms/') !== false) ;

	if (false === $is_cf7_needed) {
        if (in_array('contact-form-7/wp-contact-form-7.php', $plugin_list)) {
            unset($plugin_list[array_search('contact-form-7/wp-contact-form-7.php', $plugin_list)]);
        }
        if (in_array('contact-form-7-dynamic-text-extension/contact-form-7-dynamic-text-extension.php', $plugin_list)) {
            unset($plugin_list[array_search('contact-form-7-dynamic-text-extension/contact-form-7-dynamic-text-extension.php', $plugin_list)]);
        }
        if (in_array('database-for-cf7/database-for-cf7.php', $plugin_list)) {
            unset($plugin_list[array_search('database-for-cf7/database-for-cf7.php', $plugin_list)]);
        }
	}

	return $plugin_list;
}

add_filter('option_active_plugins', 'apolo_inactivate_cf7', 1);
