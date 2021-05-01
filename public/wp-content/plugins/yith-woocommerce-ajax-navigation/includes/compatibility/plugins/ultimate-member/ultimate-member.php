<?php
/**
 * Ultimate member plugin support
 *
 * @author  YITH
 * @package YITH WooCommerce Ajax Product Filter
 * @version 4.0.0
 */

if ( ! defined( 'YITH_WCAN' ) ) {
	exit;
} // Exit if accessed directly

add_action( 'init', 'yith_wcan_wc_list_grid_support', 0 );

if ( ! function_exists( 'yith_wcan_ultimate_member_support' ) ) {
	/**
	 * Support to ultimate members functions
	 *
	 * The method set_predefined_fields call a WP_Query that generate
	 * an issue with shop filtered query. Move this step to init with priority 2
	 * instead of 1
	 *
	 * @return void
	 * @since  3.0.9
	 * @author Andrea Grillo <andrea.grillo@yithemes.com>
	 */
	function yith_wcan_ultimate_member_support() {
		global $ultimatemember;

		if ( $ultimatemember ) {
			remove_action( 'init', array( $ultimatemember->builtin, 'set_predefined_fields' ), 1 );
			add_action( 'init', array( $ultimatemember->builtin, 'set_predefined_fields' ), 2 );
		}
	}
}
