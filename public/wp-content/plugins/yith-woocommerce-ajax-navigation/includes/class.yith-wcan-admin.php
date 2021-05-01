<?php
/**
 * Admin class
 *
 * @author  YITH
 * @package YITH WooCommerce Ajax Product Filter
 * @version 4.0.0
 */

if ( ! defined( 'YITH_WCAN' ) ) {
	exit;
} // Exit if accessed directly

if ( ! class_exists( 'YITH_WCAN_Admin' ) ) {
	/**
	 * Admin class.
	 * This class manage all the admin features.
	 *
	 * @since 1.0.0
	 */
	class YITH_WCAN_Admin {

		/**
		 * Instance of panel object for the plugin
		 *
		 * @var YIT_Plugin_Panel_WooCommerce
		 */
		protected $_panel;

		/**
		 * Panel page slug
		 *
		 * @var string
		 */
		protected $_panel_page = 'yith_wcan_panel';

		/**
		 * Link to landing page on yithemes.com
		 *
		 * @var string
		 * @since 1.0.0
		 */
		public $premium_landing_url = 'https://yithemes.com/themes/plugins/yith-woocommerce-ajax-product-filter/';

		/**
		 * Constructor
		 *
		 * @access public
		 * @since  1.0.0
		 * @author Andrea Grillo <andrea.grillo@yithemes.com>
		 */
		public function __construct() {
			// admin scripts.
			add_action( 'admin_init', array( $this, 'register_styles_scripts' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_styles_scripts' ) );

			// admin panel.
			add_action( 'admin_menu', array( $this, 'register_panel' ), 5 );
			add_action( 'yith_wcan_premium_tab', array( $this, 'premium_tab' ) );
			add_action( 'yith_wcan_preset_details', array( $this, 'preset_edit_tab' ) );
			add_action( 'yith_wcan_terms_options', array( $this, 'filter_terms_field' ), 10, 1 );
			add_action( 'yith_wcan_price_ranges', array( $this, 'filter_ranges_field' ), 10, 1 );

			// ajax handling.
			add_action( 'wp_ajax_yith_wcan_search_term', array( $this, 'json_search_term' ) );

			// tools.
			add_filter( 'woocommerce_debug_tools', array( $this, 'register_tools' ) );

			// plugin action links.
			add_filter( 'plugin_action_links_' . plugin_basename( YITH_WCAN_DIR . 'init.php' ), array( $this, 'action_links' ) );
			add_filter( 'yith_show_plugin_row_meta', array( $this, 'plugin_row_meta' ), 10, 5 );

			// YITH WCAN Loaded.
			do_action( 'yith_wcan_loaded' );
		}

		/* === SCRIPT METHODS === */

		/**
		 * Register admin styles and scripts
		 *
		 * @access public
		 * @return void
		 * @since  4.0.0
		 */
		public function register_styles_scripts() {
			// register styles.
			wp_register_style( 'yith_wcan_admin', YITH_WCAN_URL . 'assets/css/admin.css', array( 'yit-plugin-style' ), YITH_WCAN_VERSION );
			wp_register_style( 'yith-wcan-material-icons', 'https://fonts.googleapis.com/icon?family=Material+Icons', array(), '3.0.1' );

			// register scripts.
			wp_register_script( 'yith_wcan_admin_filters', YITH_WCAN_URL . 'assets/js/yith-wcan-admin-filters.js', array( 'jquery' ), YITH_WCAN_VERSION, true );
			wp_register_script( 'yith_wcan_admin', YITH_WCAN_URL . 'assets/js/yith-wcan-admin.js', array( 'jquery', 'wp-color-picker', 'wc-backbone-modal', 'yith_wcan_admin_filters' ), YITH_WCAN_VERSION, true );
			wp_localize_script(
				'yith_wcan_admin',
				'yith_wcan_admin',
				array(
					'nonce' => array(
						'change_preset_status' => wp_create_nonce( 'change_preset_status' ),
						'search_term' => wp_create_nonce( 'search_term' ),
						'save_preset_filter' => wp_create_nonce( 'save_preset_filter' ),
						'load_more_filters' => wp_create_nonce( 'load_more_filters' ),
						'delete_preset_filter' => wp_create_nonce( 'delete_preset_filter' ),
					),
					'messages' => array(
						'confirm_copy' => _x( 'Content copied to your clipboard', '[Admin] Copy confirmation message', 'yith-woocommerce-ajax-navigation' ),
						'confirm_delete' => _x( 'Are you sure you want to delete this item?', '[Admin] Confirm filter delete message', 'yith-woocommerce-ajax-navigation' ),
						// translators: 1. Number of items that will be added.
						'confirm_add_all_terms' => _x( 'Are you sure you want to proceed? This operation will add %s items', '[Admin] Confirm add all terms message', 'yith-woocommerce-ajax-navigation' ),
					),
					'labels' => array(
						'no_title' => _x( '&lt; no title &gt;', '[Admin] Message shown when filter has empty title', 'yith-woocommerce-ajax-navigation' ),
						'upload_media' => _x( 'Select media you want to use', '[Admin] Media library title, when selecting images', 'yith-woocommerce-ajax-navigation' ),
						'confirm_media' => _x( 'Use this media', '[Admin] Media library confirm button, when selecting images', 'yith-woocommerce-ajax-navigation' ),
					),
				)
			);
		}

		/**
		 * Enqueue admin styles and scripts
		 *
		 * @access public
		 * @return void
		 * @since  1.0.0
		 */
		public function enqueue_styles_scripts() {
			$screen = get_current_screen();

			if ( is_null( $screen ) ) {
				return;
			}

			$screen_id = $screen->id;

			if ( 'widgets' === $screen_id || $this->is_panel_page() ) {
				wp_enqueue_style( 'wp-color-picker' );
				wp_enqueue_style( 'yith_wcan_admin' );

				wp_enqueue_script( 'wp-color-picker' );
				wp_enqueue_script( 'yith_wcan_admin' );

				wp_enqueue_media();

				if ( ! isset( $_GET['tab'] ) || 'filter-preset' == $_GET['tab'] ) {
					wp_enqueue_style( 'yith-wcan-material-icons' );
				}
			}
		}

		/* === PANEL METHODS === */

		/**
		 * Get the premium landing uri
		 *
		 * @since   1.0.0
		 * @author  Andrea Grillo <andrea.grillo@yithemes.com>
		 * @return  string The premium landing link
		 */
		public function get_premium_landing_uri() {
			return $this->premium_landing_url;
		}

		/**
		 * Add a panel under YITH Plugins tab
		 *
		 * @return   void
		 * @since    1.0
		 * @author   Andrea Grillo <andrea.grillo@yithemes.com>
		 * @use      /Yit_Plugin_Panel class
		 * @see      plugin-fw/lib/yit-plugin-panel.php
		 */
		public function register_panel() {

			if ( ! empty( $this->_panel ) ) {
				return;
			}

			$admin_tabs = array(
				'filter-preset' => _x( 'Filter presets', '[Admin] tab name', 'yith-woocommerce-ajax-navigation' ),
				'general'       => _x( 'General settings', '[Admin] tab name', 'yith-woocommerce-ajax-navigation' ),
				'seo'           => _x( 'SEO', '[Admin] tab name', 'yith-woocommerce-ajax-navigation' ),
				'premium'       => _x( 'Premium Version', '[Admin] tab name', 'yith-woocommerce-ajax-navigation' ),
			);

			if ( isset( $_GET['tab'] ) && 'legacy' === $_GET['tab'] ) {
				$admin_tabs['legacy'] = _x( 'Legacy', '[Admin] tab name', 'yith-woocommerce-ajax-navigation' );
			}

			$args = array(
				'create_menu_page'   => true,
				'parent_slug'        => '',
				'page_title'         => _x( 'Ajax Product Filter', '[Admin] Menu title', 'yith-woocommerce-ajax-navigation' ),
				'menu_title'         => _x( 'Ajax Product Filter', '[Admin] Menu title', 'yith-woocommerce-ajax-navigation' ),
				'plugin_description' => _x( 'It allows your users to find the product they are looking for as quickly as possible.', '[Admin] Plugin description', 'yith-woocommerce-ajax-navigation' ),
				'capability'         => apply_filters( 'yith_wcan_panel_capability', 'manage_woocommerce' ),
				'parent'             => '',
				'class'              => function_exists( 'yith_set_wrapper_class' ) ? yith_set_wrapper_class() : '',
				'parent_page'        => 'yit_plugin_panel',
				'admin-tabs'         => apply_filters( 'yith_wcan_settings_tabs', $admin_tabs ),
				'options-path'       => YITH_WCAN_DIR . '/plugin-options',
				'plugin_slug'        => YITH_WCAN_SLUG,
				'plugin-url'         => YITH_WCAN_URL,
				'page'               => $this->_panel_page,
			);

			$this->_panel = new YIT_Plugin_Panel_WooCommerce( $args );

			do_action( 'yith_wcan_after_option_panel', $args );
		}

		/**
		 * Return url to plugin panel page
		 *
		 * @param string $tab  Tab slug.
		 * @param array  $args Array of additional arguments.
		 * @return string Panel url
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function get_panel_url( $tab = '', $args = array() ) {
			$args = array_merge(
				$args,
				array(
					'page' => $this->_panel_page,
				)
			);

			if ( ! empty( $tab ) ) {
				$args['tab'] = $tab;
			}

			return add_query_arg( $args, admin_url( 'admin.php' ) );
		}

		/**
		 * Return url to "create a new preset" page
		 *
		 * @return string "Create a new preset" url
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function get_preset_create_page() {
			return $this->get_panel_url(
				'filter-preset',
				array(
					'action' => 'create',
				)
			);
		}

		/**
		 * Return panel page slug
		 *
		 * @return string Panel Slug.
		 */
		public function get_panel_page() {
			return $this->_panel_page;
		}

		/**
		 * Return true if we're currently on plugin panel
		 *
		 * @return bool Whether current screen is panel page
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function is_panel_page() {
			$screen = get_current_screen();

			// too soon to read screen, fallback on pagenow.
			if ( is_null( $screen ) ) {
				global $pagenow;

				return 'admin.php' === $pagenow && isset( $_GET['page'] ) && $this->_panel_page === $_GET['page'];
			}

			// use screen id to check for current page.
			$screen_id = $screen->id;

			return 'yith-plugins_page_yith_wcan_panel' === $screen_id;
		}

		/**
		 * Return true if we're currently on preset new/edit page
		 *
		 * @return bool Whether current screen is preset new/edit page
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function is_preset_detail_page() {
			$action = isset( $_GET['action'] ) ? wc_clean( wp_unslash( $_GET['action'] ) ) : false; // phpcs:ignore WordPress.Security.ValidatedSanitizedInput

			if ( ! $action ) {
				return false;
			}

			return $this->is_panel_page() && in_array( $action, array( 'create', 'edit' ) );
		}

		/**
		 * Shows "No items" template whenever needed
		 *
		 * @param array $args Array of arguments for the template.
		 * @return void
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function show_empty_content( $args = array() ) {
			$args = wp_parse_args(
				$args,
				array(
					'item_name' => _x( 'item', '[Admin] Generic item name, in "You have no x yet"', 'yith-woocommerce-ajax-navigation' ),
					'subtitle' => _x( 'But don\'t worry, here you can create your first one!', '[Admin] Preset table empty message second line', 'yith-woocommerce-ajax-navigation' ),
					'button_label' => '',
					'button_class' => '',
					'button_url' => '',
					'show_icon' => true,
					'hide' => false,
				)
			);

			extract( $args ); // phpcs:ignore WordPress.PHP.DontExtract

			include( YITH_WCAN_DIR . 'templates/admin/preset-empty-content.php' );
		}

		/**
		 * Prints premium tab
		 *
		 * @return void
		 */
		public function premium_tab() {
			require_once( YITH_WCAN_DIR . 'templates/admin/premium.php' );
		}

		/**
		 * Prints "Edit existing preset/Create new preset" tab
		 *
		 * @return void
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function preset_edit_tab() {
			$action = isset( $_GET['action'] ) ? wc_clean( wp_unslash( $_GET['action'] ) ) : false; // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
			$preset = isset( $_GET['preset'] ) ? (int) $_GET['preset'] : false;

			if ( 'edit' === $action && $preset ) {
				$preset = YITH_WCAN_Preset_Factory::get_preset( $preset );
			} else {
				$preset = false;
			}

			include( YITH_WCAN_DIR . 'templates/admin/preset-edit.php' );
		}

		/**
		 * Prints "Term edit" template
		 *
		 * @param array $field Array of options for current template.
		 *
		 * @return void
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function filter_terms_field( $field ) {
			$id = isset( $field['index'] ) ? $field['index'] : 0;
			$terms = isset( $field['value'] ) ? $field['value'] : array();
			$taxonomy = ! empty( $field['filter'] ) ? $field['filter']->get_taxonomy() : '';

			include( YITH_WCAN_DIR . 'templates/admin/preset-filter-terms.php' );
		}

		/**
		 * Prints single item of "Term edit" template
		 *
		 * @param int    $id Current row id.
		 * @param int    $term_id Current term id.
		 * @param string $term_name Current term name.
		 * @param string $term_options Options for current term (it may include label, tooltip, colors, and image).
		 *
		 * @return void
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function filter_term_field( $id, $term_id, $term_name, $term_options = array() ) {
			// just include template, and provide passed terms.
			include( YITH_WCAN_DIR . 'templates/admin/preset-filter-term.php' );
		}

		/* === AJAX HANDLING === */

		/**
		 * Echoes a json formatted list of terms for a specific taxonomy
		 *
		 * @return void
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function json_search_term() {
			check_ajax_referer( 'search_term', 'security' );

			$term    = isset( $_GET['term'] ) ? wc_clean( wp_unslash( $_GET['term'] ) ) : ''; // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
			$all     = isset( $_GET['all'] ) ? (bool) intval( $_GET['all'] ) : false;
			$tax     = isset( $_GET['taxonomy'] ) ? wc_clean( wp_unslash( $_GET['taxonomy'] ) ) : ''; // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
			$exclude = isset( $_GET['selected'] ) ? array_map( 'intval', $_GET['selected'] ) : array();

			if ( ( ! $term && ! $all ) || ! $tax ) {
				wp_die();
			}

			$result = array();
			$terms  = get_terms(
				array(
					'taxonomy'   => $tax,
					'search'     => $term,
					'hide_empty' => false,
				)
			);

			if ( is_wp_error( $terms ) ) {
				wp_die();
			}

			if ( ! empty( $terms ) ) {
				foreach ( $terms as $term_obj ) {
					if ( in_array( $term_obj->term_id, $exclude ) ) {
						continue;
					}

					if ( ! $term_obj->parent ) {
						$result[ $term_obj->term_id ] = $term_obj->name;
					} else {
						$term_tmp  = $term_obj;
						$term_name = $term_obj->name;

						do {
							$term_tmp = get_term( $term_tmp->parent, $tax );

							if ( ! $term_tmp || is_wp_error( $term_tmp ) ) {
								break;
							}

							$term_name = "{$term_tmp->name} > {$term_name}";
						} while ( $term_tmp->parent );

						$result[ $term_obj->term_id ] = $term_name;
					}
				}
			}

			wp_send_json( apply_filters( 'yith_wcan_json_search_found_terms', $result, $term, $tax ) );
		}

		/* === TOOLS === */

		/**
		 * Register available plugin tools
		 *
		 * @param array $tools Available tools.
		 * @return array Filtered array of tools.
		 */
		public function register_tools( $tools ) {
			$additional_tools = array(
				'clear_filter_transient' => array(
					'name'     => _x( 'Clear Product Filter transients', '[ADMIN] WooCommerce Tools tab, name of the tool', 'yith-woocommerce-ajax-navigation' ),
					'button'   => _x( 'Clear', '[ADMIN] WooCommerce Tools tab, button for the tool', 'yith-woocommerce-ajax-navigation' ),
					'desc'     => _x( 'This will clear all transients related to the YITH WooCommerce AJAX Product Filter plugin. It may be useful if you changed your product\'s configuration, and filters do not display the expected results.', '[ADMIN] WooCommerce Tools tab, description of the tool', 'yith-woocommerce-ajax-navigation' ),
					'callback' => array( YITH_WCAN_Query(), 'delete_transients' ),
				),
				'run_widget_upgrade' => array(
					'name'   => _x( 'Run filter widgets upgrade', '[ADMIN] WooCommerce Tools tab, name of the tool', 'yith-woocommerce-ajax-navigation' ),
					'button' => _x( 'Run', '[ADMIN] WooCommerce Tools tab, button for the tool', 'yith-woocommerce-ajax-navigation' ),
					'desc'   => _x( 'This will create a preset for any sidebar of your shop containing filter widgets; preset will be configured to match widgets specifications', '[ADMIN] WooCommerce Tools tab, description of the tool', 'yith-woocommerce-ajax-navigation' ),
					'callback' => array( YITH_WCAN_Presets(), 'do_widget_upgrade' ),
				),
			);

			$tools = array_merge(
				$tools,
				$additional_tools
			);

			return $tools;
		}

		/* === PLUGIN META === */

		/**
		 * Add action links to plugin row in plugins.php admin page
		 *
		 * @param array $links Array of links available for the plugin.
		 *
		 * @return   mixed Array
		 * @use      plugin_action_links_{$plugin_file_name}
		 * @author   Andrea Grillo <andrea.grillo@yithemes.com>
		 * @since    1.0
		 */
		public function action_links( $links ) {
			$links = yith_add_action_links( $links, $this->_panel_page, defined( 'YITH_WCAN_PREMIUM' ), YITH_WCAN_SLUG );

			return $links;
		}

		/**
		 * Adds meta links to plugin row in plugins.php admin page
		 *
		 * @param array  $new_row_meta_args Array of data to filter.
		 * @param array  $plugin_meta       Array of plugin meta.
		 * @param string $plugin_file       Path to init file.
		 * @param array  $plugin_data       Array of plugin data.
		 * @param string $status            Not used.
		 * @param string $init_file         Constant containing plugin int path.
		 *
		 * @return   array
		 * @since    1.0
		 * @author   Andrea Grillo <andrea.grillo@yithemes.com>
		 * @use      plugin_row_meta
		 */
		public function plugin_row_meta( $new_row_meta_args, $plugin_meta, $plugin_file, $plugin_data, $status, $init_file = 'YITH_WCAN_FREE_INIT' ) {
			if ( defined( $init_file ) && constant( $init_file ) == $plugin_file ) {
				$new_row_meta_args['slug'] = 'yith-woocommerce-ajax-product-filter';

				if ( 'YITH_WCAN_FREE_INIT' === $init_file ) {
					$new_row_meta_args['support'] = array(
						'url' => 'https://wordpress.org/support/plugin/yith-woocommerce-ajax-navigation',
					);
				}
			}

			return $new_row_meta_args;
		}
	}
}
