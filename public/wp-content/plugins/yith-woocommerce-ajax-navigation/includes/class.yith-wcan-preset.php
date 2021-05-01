<?php
/**
 * Preset object
 * Offers method to read and set properties of the preset and filters
 *
 * @author  YITH
 * @package YITH WooCommerce Ajax Product FIlter
 * @version 4.0.0
 */

if ( ! defined( 'YITH_WCAN' ) ) {
	exit;
} // Exit if accessed directly

if ( ! class_exists( 'YITH_WCAN_Preset' ) ) {
	/**
	 * Filter Presets Handling
	 *
	 * @since 1.0.0
	 */
	class YITH_WCAN_Preset extends WC_Data {

		/**
		 * Preset slug (Unique identifier)
		 *
		 * @var string
		 */
		protected $slug = '';

		/**
		 * Preset Data array
		 *
		 * @var array
		 */
		protected $data;

		/**
		 * Preset filters will be stored here, sometimes before they persist in the DB.
		 *
		 * @var array
		 */
		protected $filters = array();

		/**
		 * Preset filters that need deleting are stored here.
		 *
		 * @var array
		 */
		protected $filters_to_delete = array();

		/**
		 * Stores meta in cache for future reads.
		 *
		 * A group must be set to to enable caching.
		 *
		 * @var string
		 */
		protected $cache_group = 'filter_presets';

		/**
		 * Constructor
		 *
		 * @param int|string|\YITH_WCAN_Preset $preset Preset identifier.
		 *
		 * @throws Exception When not able to load Data Store class.
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function __construct( $preset = 0 ) {
			// set default values.
			$this->data = array(
				'title'    => apply_filters( 'yith_wcan_default_preset_title', '' ),
				'slug'     => apply_filters( 'yith_wcan_default_preset_slug', '' ),
				'selector' => '',
				'filters'  => array(),
				'enabled'  => true,
			);

			parent::__construct();

			if ( is_numeric( $preset ) && $preset > 0 ) {
				$this->set_id( $preset );
			} elseif ( $preset instanceof self ) {
				$this->set_id( $preset->get_id() );
			} elseif ( is_string( $preset ) ) {
				$this->set_slug( $preset );
			} else {
				$this->set_object_read( true );
			}

			$this->data_store = WC_Data_Store::load( 'filter_preset' );

			if ( $this->get_id() > 0 || $this->get_slug() != '' ) {
				$this->data_store->read( $this );
			}
		}

		/* === GETTERS === */

		/**
		 * Get preset title
		 *
		 * @param string $context Context of the operation.
		 *
		 * @return string Preset title
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function get_title( $context = 'view' ) {
			return $this->get_prop( 'title', $context );
		}

		/**
		 * Get preset slug
		 *
		 * @param string $context Context of the operation.
		 *
		 * @return string Preset slug
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function get_slug( $context = 'view' ) {
			return $this->slug;
		}

		/**
		 * Get preset selector
		 *
		 * @param string $context Context of the operation.
		 *
		 * @return string Preset slug
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function get_selector( $context = 'view' ) {
			return $this->get_prop( 'selector', $context );
		}

		/**
		 * Check if preset is enabled
		 *
		 * @param string $context Context of the operation.
		 *
		 * @return bool Preset status
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function is_enabled( $context = 'view' ) {
			return yith_plugin_fw_is_true( $this->get_prop( 'enabled', $context ) );
		}

		/**
		 * Returns additional classes for the preset
		 *
		 * @return string Additional classes for the preset.
		 */
		public function get_additional_classes() {
			$additional_classes = array();

			if ( 'custom' === yith_wcan_get_option( 'yith_wcan_filters_style', 'default' ) ) {
				$additional_classes[] = 'custom-style';
			}

			if ( ! yith_wcan_get_option( 'yith_wcan_filters_title', '' ) ) {
				$additional_classes[] = 'no-title';
			}

			$additional_classes = apply_filters( 'yith_wcan_preset_additional_classes', $additional_classes, $this );

			return implode( ' ', $additional_classes );
		}

		/* === SETTERS === */

		/**
		 * Set preset slug
		 *
		 * @param string $title Filter preset unique token.
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function set_title( $title ) {
			$this->set_prop( 'title', $title );
		}

		/**
		 * Set preset slug
		 *
		 * @param string $slug Filter preset unique token.
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function set_slug( $slug ) {
			$this->slug = $slug;
		}

		/**
		 * Set preset selector
		 *
		 * @param string $selector Filter preset selector.
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function set_selector( $selector ) {
			$this->set_prop( 'selector', $selector );
		}

		/**
		 * Set preset status
		 *
		 * @param string $enabled Filter preset status (yes/no for enabled/not enabled).
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function set_enabled( $enabled ) {
			$this->set_prop( 'enabled', $enabled );
		}

		/**
		 * Set preset as enabled
		 *
		 * @return void
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function enable() {
			$this->set_prop( 'enabled', 'yes' );
		}

		/**
		 * Set preset as disabled
		 *
		 * @return void
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function disable() {
			$this->set_prop( 'enabled', 'no' );
		}

		/* === CRUD METHODS === */

		/**
		 * Save data to the database.
		 *
		 * @return int Preset ID
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function save() {
			if ( $this->data_store ) {
				// Trigger action before saving to the DB. Allows you to adjust object props before save.
				do_action( 'yith_wcan_before_' . $this->object_type . '_object_save', $this, $this->data_store );

				if ( $this->get_id() ) {
					$this->data_store->update( $this );
				} else {
					$this->data_store->create( $this );
				}
			}
			return $this->get_id();
		}

		/* === FILTERS METHODS === */

		/**
		 * Return number of filter pages available
		 *
		 * @return int nuber of pages
		 */
		public function get_pages() {
			return ceil( $this->count_filters() / YITH_WCAN_Presets::FILTERS_PER_PAGE );
		}

		/**
		 * Check if preset has a filter with a specific id
		 *
		 * @param int    $filter_id Filter id.
		 * @param string $context Context for the operation.
		 *
		 * @return bool Whether filter with specified ID exists or not.
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function has_filter( $filter_id, $context = 'view' ) {
			$filters = $this->get_raw_filters( $context );

			return array_key_exists( $filter_id, $filters );
		}

		/**
		 * Check if preset has any filter
		 *
		 * @param string $context Context for the operation.
		 *
		 * @return bool Whether preset has filters.
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function has_filters( $context = 'view' ) {
			return ! ! $this->get_raw_filters( $context );
		}

		/**
		 * Returns true if preset needs pagination
		 *
		 * @return bool Whether preset needs pagination or not.
		 */
		public function needs_pagination() {
			return YITH_WCAN_Presets::FILTERS_PER_PAGE < $this->count_filters();
		}

		/**
		 * Returns raw array of filters (instead of objects). For internal use only
		 *
		 * @param string $context Context for the operation.
		 * @param int    $page    Page to retrieve; false if you want all filters (default: false).
		 *
		 * @return array Array of filters.
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function get_raw_filters( $context = 'view', $page = false ) {
			$filters = $this->get_prop( 'filters', $context );

			// slice array according to offset a limit parameters.
			if ( $page ) {
				$limit   = YITH_WCAN_Presets::FILTERS_PER_PAGE;
				$offset  = ( $page - 1 ) * $limit;
				$filters = array_slice( $filters, $offset, $limit, true );
			}

			return $filters;
		}

		/**
		 * Returns filters for current preset
		 *
		 * @return YITH_WCAN_Filter[]
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function get_filters() {
			$filters = $this->get_prop( 'filters', 'edit' );
			$results = array();

			if ( empty( $filters ) ) {
				return array();
			}

			foreach ( $filters as $filter_id => $filter ) {
				// set ids.
				$filter['id']        = $filter_id;
				$filter['preset_id'] = $this->get_id();

				$results[] = yith_wcan_get_filter( $filter );
			}

			return $results;
		}

		/**
		 * Count how many filters current preset have
		 *
		 * @return int Number of filters for this preset
		 */
		public function count_filters() {
			return count( $this->get_raw_filters() );
		}

		/**
		 * Set filters for current preset
		 *
		 * @param array $filters Formatted array of filters.
		 * @param int   $page    Page to overwrite; false if the entire set should be overridden (default: false).
		 *
		 * @return void
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function set_filters( $filters, $page = false ) {
			if ( $page ) {
				$original_filters = $this->get_raw_filters();

				$limit = YITH_WCAN_Presets::FILTERS_PER_PAGE;
				$tail  = array_slice( $original_filters, $page * $limit, count( $original_filters ), true );

				$filters = array_merge(
					$filters,
					$tail
				);
			}

			$this->set_prop( 'filters', $filters );
		}

		/**
		 * Set filters for current preset
		 *
		 * @param int   $filter_id Id of the filter to set.
		 * @param array $filter Formatted filter.
		 *
		 * @return void
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function set_filter( $filter_id, $filter ) {
			$filters = $this->get_raw_filters();
			$filters[ $filter_id ] = $filter;

			$this->set_prop( 'filters', $filters );
		}

		/**
		 * Remove all filters for current preset
		 *
		 * @return void
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function delete_filters() {
			$this->set_filters( array() );
		}

		/**
		 * Remove all filters for current preset
		 *
		 * @param int $filter_id Filter id.
		 *
		 * @return void
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function delete_filter( $filter_id ) {
			if ( ! $this->has_filter( $filter_id ) ) {
				return;
			}

			$filters = $this->get_raw_filters();
			unset( $filters[ $filter_id ] );

			$this->set_filters( $filters );
		}

		/* === HELPER METHODS === */

		/**
		 * Return admin edit url for current item
		 *
		 * @return string Edit url
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function get_admin_edit_url() {
			return YITH_WCAN()->admin->get_panel_url(
				'filter-preset',
				array(
					'action' => 'edit',
					'preset' => $this->get_id(),
				)
			);
		}

		/**
		 * Get admin url to visit to clone this preset
		 *
		 * @return string Url to clone preset
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function get_admin_clone_url() {
			if ( ! $this->current_user_can( 'clone' ) ) {
				return false;
			}

			return add_query_arg(
				array(
					'action' => 'yith_wcan_clone_preset',
					'preset' => $this->get_id(),
				),
				wp_nonce_url( admin_url( 'admin.php' ), 'clone_preset' )
			);
		}

		/**
		 * Get admin url to visit to delete this preset
		 *
		 * @return string Url to delete preset
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function get_admin_delete_url() {
			if ( ! $this->current_user_can( 'clone' ) ) {
				return false;
			}

			return add_query_arg(
				array(
					'action' => 'yith_wcan_delete_preset',
					'preset' => $this->get_id(),
				),
				wp_nonce_url( admin_url( 'admin.php' ), 'delete_preset' )
			);
		}

		/**
		 * Check that a specific user has a certain capability over this preset
		 *
		 * @param int    $user_id User id.
		 * @param string $cap Capability to check.
		 *
		 * @return bool Whether user has capability or not
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function user_can( $user_id, $cap ) {
			$default = user_can( $user_id, 'manage_woocommerce' );
			$public  = array(
				'read',
			);

			if ( ! $default && in_array( $cap, $public ) ) {
				$default = true;
			}

			return apply_filters( 'yith_wcan_preset_user_can', $default, $user_id, $cap, $this );
		}

		/**
		 * Check that current user has a certain capability over this preset
		 *
		 * @param string $cap Capability to check.
		 *
		 * @return bool Whether current user has capability or not
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function current_user_can( $cap ) {
			if ( ! is_user_logged_in() ) {
				return false;
			}

			$default = $this->user_can( get_current_user_id(), $cap );

			return apply_filters( 'yith_wcan_preset_current_user_can', $default, $cap, $this );
		}
	}
}
