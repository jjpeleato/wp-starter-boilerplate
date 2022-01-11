<?php
/**
 * The mu-plugin file.
 *
 * @package     Ao_Mu_Plugin
 * @author      Your Name <jjpeleato@example.com>
 * @license     http://www.gnu.org/licenses/gpl-2.0.txt
 * @copyright   2XXX Your Name or Company Name
 * @since       0.1.0
 *
 * More information:
 *
 * https://wordpress.org/support/article/must-use-plugins/
 * https://developer.wordpress.org/plugins/
 */

declare(strict_types=1);

/**
 * If this file is called directly, then abort execution.
 */
defined( 'ABSPATH' ) || exit;

/**
 * Inactivate some plugins
 *
 * @since 0.1.0
 *
 * @param array $plugin_list Active plugin list.
 *
 * @return array
 */
function alom_inactivate_plugins( $plugin_list ) {
	if ( true === is_admin() ) {
		return $plugin_list;
	}

	if ( true === in_array( 'better-search-replace/better-search-replace.php', $plugin_list, true ) ) {
		unset( $plugin_list[ array_search( 'better-search-replace/better-search-replace.php', $plugin_list, true ) ] );
	}

	if ( true === in_array( 'classic-editor/classic-editor.php', $plugin_list, true ) ) {
		unset( $plugin_list[ array_search( 'classic-editor/classic-editor.php', $plugin_list, true ) ] );
	}

	return $plugin_list;
}

add_filter( 'option_active_plugins', 'alom_inactivate_plugins', 1 );
