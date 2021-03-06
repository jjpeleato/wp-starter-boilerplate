<?php
/**
 * Name: Table Storage
 *
 * Description: Enable a custom database table for your custom fields on Post Types, Media, Taxonomies, Users, and Comments.
 *
 * Version: 2.3
 *
 * Category: Advanced
 *
 * Tableless Mode: No
 *
 * @package    Pods\Components
 * @subpackage Advanced Content Types
 */

if ( class_exists( 'Pods_Table_Storage' ) ) {
	return;
}

/**
 * Class Pods_Table_Storage
 */
class Pods_Table_Storage extends PodsComponent {

	/**
	 * {@inheritdoc}
	 */
	public function init() {

		if ( ! pods_tableless() ) {
			add_filter( 'pods_admin_setup_add_create_storage', '__return_true' );
			add_filter( 'pods_admin_setup_add_create_taxonomy_storage', '__return_true' );

			add_filter( 'pods_admin_setup_add_extend_storage', '__return_true' );
			add_filter( 'pods_admin_setup_add_extend_taxonomy_storage', '__return_true' );

			if ( ! function_exists( 'get_term_meta' ) ) {
				add_filter( 'pods_admin_setup_add_extend_pod_type', array( $this, 'add_pod_type' ) );
			}
		}
	}

	/**
	 * Enable Taxonomy extending option in setup-add.php
	 *
	 * @param array $data Pod Type options
	 *
	 * @return array
	 */
	public function add_pod_type( $data ) {

		$data['taxonomy'] = __( 'Taxonomies (Categories, Tags, etc..)', 'pods' );

		return $data;
	}

}
