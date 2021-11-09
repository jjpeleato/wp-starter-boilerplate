<?php
/**
 * Main class
 *
 * @author  YITH
 * @package YITH\AjaxProductFilter\Classes
 * @version 1.3.2
 */

if ( ! defined( 'YITH_WCAN' ) ) {
	exit;
} // Exit if accessed directly

if ( ! class_exists( 'YITH_WCAN' ) ) {
	/**
	 * YITH WooCommerce Ajax Product Filter
	 *
	 * @since 1.0.0
	 */
	class YITH_WCAN {
		/**
		 * Plugin version
		 *
		 * @var string
		 * @since 1.0.0
		 */
		public $version;

		/**
		 * Frontend object
		 *
		 * @var YITH_WCAN_Frontend
		 * @since 1.0.0
		 */
		public $frontend = null;

		/**
		 * Admin object
		 *
		 * @var YITH_WCAN_Admin
		 * @since 1.0.0
		 */
		public $admin = null;

		/**
		 * List of supported plugins and integrations
		 *
		 * @var array
		 * @since 4.0
		 */
		protected $supported_plugins = array();

		/**
		 * Main instance
		 *
		 * @var YITH_WCAN
		 * @since 4.0.0
		 */
		protected static $instance = null;

		/**
		 * Parameter of the term object used to filter shop.
		 *
		 * Before WooCommerce 2.6 product attribute use term_id for filter; from WooCommerce 2.6 use slug instead.
		 *
		 * @var string filtered term field.
		 * @since 3.0.0
		 */
		public $filter_term_field = 'slug';

		/**
		 * Constructor
		 *
		 * @return void
		 * @since 1.0.0
		 */
		public function __construct() {
			$this->version = YITH_WCAN_VERSION;

			// load plugin framework.
			add_action( 'plugins_loaded', array( $this, 'plugin_fw_loader' ), 15 );

			// install plugin.
			$this->install();

			// register assets needed both on backend and frontend.
			add_action( 'init', array( $this, 'register_assets' ) );

			// register plugin to licence/update system.
			if ( defined( 'YITH_WCAN_INIT' ) ) {
				add_action( 'wp_loaded', array( $this, 'register_plugin_for_activation' ), 99 );
				add_action( 'admin_init', array( $this, 'register_plugin_for_updates' ) );
			}
		}

		/**
		 * Load plugin framework
		 *
		 * @return void
		 * @since  1.0
		 * @author Andrea Grillo <andrea.grillo@yithemes.com>
		 */
		public function plugin_fw_loader() {
			if ( ! defined( 'YIT_CORE_PLUGIN' ) ) {
				global $plugin_fw_data;
				if ( ! empty( $plugin_fw_data ) ) {
					$plugin_fw_file = array_shift( $plugin_fw_data );
					require_once $plugin_fw_file;
				}
			}
		}

		/**
		 * Start plugin process, by requiring files and creating instances of main objects
		 *
		 * @return void
		 * @since  4.0
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function install() {
			do_action( 'yith_wcan_before_init' );

			$this->require_files();
			$this->init();

			$this->load_compatibilities();
			$this->load_filters();

			do_action( 'yith_wcan_standby' );
		}

		/**
		 * Load required files
		 *
		 * @return void
		 * @since  1.4
		 * @author Andrea Grillo <andrea.grillo@yithemes.com>
		 */
		public function require_files() {
			$required = apply_filters(
				'yith_wcan_required_files',
				array(
					'functions-yith-wcan.php',
					'class-yith-wcan-cache-helper.php',
					'class-yith-wcan-query.php',
					'class-yith-wcan-install.php',
					'class-yith-wcan-filter.php',
					'class-yith-wcan-filter-factory.php',
					'class-yith-wcan-preset.php',
					'class-yith-wcan-presets.php',
					'class-yith-wcan-preset-factory.php',
					'class-yith-wcan-shortcodes.php',
					'class-yith-wcan-widgets.php',
					'class-yith-wcan-admin.php',
					'class-yith-wcan-frontend.php',
					'data-stores/class-yith-wcan-preset-data-store.php',
				)
			);

			foreach ( $required as $file ) {
				file_exists( YITH_WCAN_INC . $file ) && require_once YITH_WCAN_INC . $file;
			}

			// basic cli support.
			if ( defined( 'WP_CLI' ) && WP_CLI ) {
				file_exists( YITH_WCAN_DIR . 'includes/wp-cli/class-yith-wcan-cli-commands.php' ) && require_once YITH_WCAN_DIR . 'includes/wp-cli/class-yith-wcan-cli-commands.php';
				file_exists( YITH_WCAN_DIR . 'tools/wp-cli/class-yith-wcan-cli-test-commands.php' ) && require_once YITH_WCAN_DIR . 'tools/wp-cli/class-yith-wcan-cli-test-commands.php';
			}
		}

		/**
		 * Init plugin, by creating main objects
		 *
		 * @return void
		 * @since  1.4
		 * @author Andrea Grillo <andrea.grillo@yithemes.com>
		 */
		public function init() {
			// do startup operations.
			YITH_WCAN_Install::init();

			// init general classes.
			YITH_WCAN_Presets();

			// init shortcodes.
			YITH_WCAN_Shortcodes::init();

			// init widgets.
			YITH_WCAN_Widgets::init();

			// init specific classes.
			if ( is_admin() ) {
				$this->admin = new YITH_WCAN_Admin();
			} else {
				$this->frontend = new YITH_WCAN_Frontend();
			}
		}

		/**
		 * Includes supported filter types, for future usage
		 *
		 * @return void
		 * @since 4.0
		 */
		public function load_filters() {
			$supported_types = YITH_WCAN_Filter_Factory::get_supported_types();

			if ( $supported_types ) {
				foreach ( $supported_types as $type => $label ) {
					$file_name = str_replace( '_', '-', $type );
					$file_name = "class-yith-wcan-filter-{$file_name}.php";
					$file_path = YITH_WCAN_INC . '/filters/' . $file_name;

					file_exists( $file_path ) && require_once $file_path;
				}
			}
		}

		/**
		 * Load classes for compatible themes/plugins
		 *
		 * @return void
		 * @since  4.0
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function load_compatibilities() {
			// include theme compatibility, if any.
			add_action( 'after_setup_theme', array( $this, 'load_theme_compatibility' ) );

			// include compatibilities for installed plugins.
			add_action( 'init', array( $this, 'load_plugin_compatibilities' ) );
		}

		/**
		 * Load classes for compatible themes
		 *
		 * @return void
		 * @since  4.0
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function load_theme_compatibility() {
			$theme = strtolower( wp_get_theme()->Name );
			$theme = str_replace( array( ' ', '-child' ), array( '-', '' ), $theme );

			$compatibility_path = YITH_WCAN_INC . "compatibility/themes/{$theme}/{$theme}.php";

			if ( file_exists( $compatibility_path ) ) {
				include_once $compatibility_path;
			}
		}

		/**
		 * Load classes for compatible plugins
		 *
		 * @return void
		 * @since  4.0
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function load_plugin_compatibilities() {
			$supported_plugins = $this->get_compatible_plugins();

			if ( ! empty( $supported_plugins ) ) {
				foreach ( $supported_plugins as $plugin => $args ) {
					if ( isset( $args['check'] ) ) {
						list( $check_callable, $check_args ) = $args['check'];

						if ( ! call_user_func_array( $check_callable, $check_args ) ) {
							continue;
						}
					}

					$compatibility_path = YITH_WCAN_INC . "compatibility/plugins/{$plugin}/{$plugin}.php";

					if ( ! file_exists( $compatibility_path ) ) {
						continue;
					}

					include_once $compatibility_path;

					if ( isset( $args['callback'] ) ) {
						list( $callback_callable, $callback_args ) = $args['callback'];

						call_user_func( $callback_callable, $callback_args );
					}
				}
			}
		}

		/**
		 * Register assets used both on frontend and backend
		 * Specific assets may be found on Frontend and Admin classes; here we only register assets that we need to load both
		 * on frontend and backend, maybe because they are needed for Gutenberg editor.
		 *
		 * @return void
		 * @since  4.0
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		public function register_assets() {
			$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

			wp_register_style( 'yith-wcan-shortcodes', YITH_WCAN_URL . 'assets/css/shortcodes.css', array(), YITH_WCAN_VERSION );
			wp_register_script( 'yith-wcan-shortcodes', YITH_WCAN_URL . 'assets/js/yith-wcan-shortcodes' . $suffix . '.js', array( 'jquery', 'accounting', 'selectWoo' ), YITH_WCAN_VERSION, true );
		}

		/**
		 * Get choosen attribute args
		 *
		 * @return array
		 * @since  2.9.3
		 * @author Andrea Grillo <andrea.grillo@yithemes.com>
		 */
		public function get_layered_nav_chosen_attributes() {
			return WC_Query::get_layered_nav_chosen_attributes();
		}

		/**
		 * Register plugins for activation tab
		 *
		 * @return void
		 * @since  2.0.0
		 * @author Andrea Grillo <andrea.grillo@yithemes.com>
		 */
		public function register_plugin_for_activation() {
			if ( ! class_exists( 'YIT_Plugin_Licence' ) ) {
				require_once YITH_WCAN_DIR . 'plugin-fw/lib/yit-plugin-licence.php';
			}

			YIT_Plugin_Licence()->register( YITH_WCAN_INIT, YITH_WCAN_SECRET_KEY, YITH_WCAN_SLUG );
		}

		/**
		 * Register plugins for update tab
		 *
		 * @return void
		 * @since  2.0.0
		 * @author Andrea Grillo <andrea.grillo@yithemes.com>
		 */
		public function register_plugin_for_updates() {
			if ( ! class_exists( 'YIT_Upgrade' ) ) {
				require_once YITH_WCAN_DIR . 'plugin-fw/lib/yit-upgrade.php';
			}

			YIT_Upgrade()->register( YITH_WCAN_SLUG, YITH_WCAN_INIT );
		}

		/**
		 * Return list of compatible plugins
		 *
		 * @return array Array of compatible plugins
		 *
		 * @since 4.0
		 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
		 */
		protected function get_compatible_plugins() {
			if ( empty( $this->supported_plugins ) ) {
				$this->supported_plugins = array(
					'ultimate-member'          => array(
						'check' => array( 'class_exists', array( 'UM_API' ) ),
					),
					'qtranslate-x'             => array(
						'check' => array( 'class_exists', array( 'QTX_Translator' ) ),
					),
					'wpml'                     => array(
						'check' => array( 'class_exists', array( 'Sitepress' ) ),
					),
					'yith-woocommerce-booking' => array(
						'check' => array( 'class_exists', array( 'YITH_WCBK' ) ),
					),
					'yith-woocommerce-colors-label-variations' => array(
						'check' => array( 'class_exists', array( 'YITH_WCCL' ) ),
					),
				);
			}

			return apply_filters( 'yith_wcan_compatible_plugins', $this->supported_plugins );
		}

		/**
		 * Main plugin Instance
		 *
		 * @return YITH_WCAN|YITH_WCAN_Premium Main instance
		 * @author Andrea Grillo <andrea.grillo@yithemes.com>
		 */
		public static function instance() {

			if ( class_exists( 'YITH_WCAN_Premium' ) ) {
				return YITH_WCAN_Premium::instance();
			} else {
				if ( is_null( self::$instance ) ) {
					self::$instance = new self();
				}

				return self::$instance;
			}
		}
	}
}

if ( ! function_exists( 'YITH_WCAN' ) ) {
	/**
	 * Return single instance for YITH_WCAN_Premium class
	 *
	 * @return YITH_WCAN
	 * @since 4.0.0
	 * @author Antonio La Rocca <antonio.larocca@yithemes.com>
	 */
	function YITH_WCAN() { // phpcs:ignore WordPress.NamingConventions.ValidFunctionName.FunctionNameInvalid
		return YITH_WCAN::instance();
	}
}
