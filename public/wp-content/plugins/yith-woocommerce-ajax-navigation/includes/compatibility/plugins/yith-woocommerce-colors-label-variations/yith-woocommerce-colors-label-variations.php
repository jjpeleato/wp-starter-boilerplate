<?php // phpcs:ignore WordPress.Files.FileName.InvalidClassFileName
/**
 * YITH WooCommerce Color Label Variations plugin support
 *
 * @author  YITH
 * @package YITH\AjaxProductFilter\Classes\Compatibility
 * @version 4.1.1
 */

if ( ! defined( 'YITH_WCAN' ) ) {
	exit;
} // Exit if accessed directly

if ( ! class_exists( 'YITH_WCAN_Color_Label_Compatibility' ) ) {
	/**
	 * Class that implements methods required to integrate single variations of YITH WC Color and Labels in YITH WCAN Filters.
	 *
	 * @since 4.1.1
	 */
	class YITH_WCAN_Color_Label_Compatibility {

		/**
		 * Main instance
		 *
		 * @var YITH_WCAN_Color_Label_Compatibility
		 * @since 4.1.1
		 */
		protected static $instance = null;

		/**
		 * Init integration, hooking all required methods
		 *
		 * @return void
		 */
		public function init() {
			// clear transients when C&L options change.
			add_action( 'update_option_yith-wccl-show-single-variations-loop', array( 'YITH_WCAN_Cache_Helper', 'delete_transients' ) );
			add_action( 'update_option_yith-wccl-hide-parent-products-loop', array( 'YITH_WCAN_Cache_Helper', 'delete_transients' ) );

			// add support for variations in query, when C&L asks for it.
			if ( 'yes' === get_option( 'yith-wccl-show-single-variations-loop', 'no' ) ) {
				add_filter( 'yith_wcan_product_ids_in_stock_args', array( $this, 'add_variations_ids_in_stock' ) );
				add_filter( 'yith_wcan_filtered_products_query', array( $this, 'add_variation_query_to_filtered_products' ) );
			}

		}

		/**
		 * Filters post in for YITH WCAN queries, including post_in parameter as computed by Booking plugin
		 *
		 * @param array $query_args Array of products types.
		 * @return array Query arguments.
		 */
		public function add_variations_ids_in_stock( $query_args ) {
			// add variation among valid product types.
			$product_types = array_merge(
				array_keys( wc_get_product_types() ),
				array(
					'variation',
				)
			);

			// remove variable type if necessary.
			$variable_index = array_search( 'variable', $product_types, true );

			if ( 'yes' === get_option( 'yith-wccl-hide-parent-products-loop', 'yes' ) && false !== $variable_index ) {
				unset( $product_types[ $variable_index ] );
			}

			$query_args['type'] = $product_types;

			return $query_args;
		}

		/**
		 * Add_variation_query_to_filtered_products
		 *
		 * @param array $query_args Array of products types.
		 * @return array Product query arguments.
		 */
		public function add_variation_query_to_filtered_products( $query_args ) {
			$query_args['post_type'] = array(
				'product',
				'product_variation',
			);

			return $query_args;
		}

		/**
		 * Compatibility class instance
		 *
		 * @return YITH_WCAN_Color_Label_Compatibility Class unique instance
		 */
		public static function instance() {

			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}
	}
}

// init compatibility.
if ( defined( 'YITH_WCCL_PREMIUM' ) ) {
	YITH_WCAN_Color_Label_Compatibility::instance()->init();
}
