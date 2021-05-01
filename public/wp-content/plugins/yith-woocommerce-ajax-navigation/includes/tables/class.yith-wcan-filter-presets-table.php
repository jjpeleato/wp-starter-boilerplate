<?php
/**
 * Filter Presets Table class
 *
 * @author  Your Inspiration Themes
 * @package YITH WooCommerce Ajax Product Filter
 * @version 1.0.0
 */

if ( ! defined( 'YITH_WCAN' ) ) {
	exit;
} // Exit if accessed directly

if ( ! class_exists( 'YITH_WCAN_Filter_Presets_Table' ) ) {
	/**
	 * WooCommerce Affiliates Table
	 *
	 * @since 1.0.0
	 */
	class YITH_WCAN_Filter_Presets_Table extends WP_List_Table {
		/**
		 * Class constructor method
		 *
		 * @return void
		 * @since 1.0.0
		 */
		public function __construct() {
			// Set parent defaults.
			parent::__construct(
				array(
					'singular' => 'affiliate',
					'plural'   => 'affiliates',
					'ajax'     => false,
				)
			);
		}

		/* === COLUMNS METHODS === */

		/**
		 * Print default column content
		 *
		 * @param YITH_WCAN_Preset $item        Item of the row.
		 * @param string           $column_name Column name.
		 *
		 * @return string Column content
		 * @since 1.0.0
		 */
		public function column_default( $item, $column_name ) {
			if ( isset( $item->$column_name ) ) {
				return esc_html( $item->$column_name );
			} else {
				return print_r( $item, true ); // Show the whole array for troubleshooting purposes.
			}
		}

		/**
		 * Prints column name
		 *
		 * @param YITH_WCAN_Preset $item Current item.
		 */
		public function column_name( $item ) {
			if ( ! $item->current_user_can( 'edit' ) ) {
				echo esc_html( $item->get_title() );
			} else {
				echo sprintf( '<a href="%s">%s</a>', esc_url( $item->get_admin_edit_url() ), esc_html( $item->get_title() ) );
			}
		}

		/**
		 * Prints column shortcode
		 *
		 * @param YITH_WCAN_Preset $item Current item.
		 */
		public function column_shortcode( $item ) {
			echo sprintf( '<span class="copy-on-click"><input type="text" readonly value="[yith_wcan_filters slug=&quot;%s&quot;]"/></span>', esc_attr( $item->get_slug() ) );
		}

		/**
		 * Prints column actions
		 *
		 * @param YITH_WCAN_Preset $item Current item.
		 */
		public function column_actions( $item ) {
			$available_actions = array(
				'change_status',
				'delete',
				'clone',
				'edit',
			);

			foreach ( $available_actions as $action ) {
				if ( ! $item->current_user_can( $action ) ) {
					continue;
				}

				$method = "action_{$action}";

				if ( method_exists( $this, $method ) ) {
					$this->{$method}( $item );
				} else {
					do_action( 'yith_wcan_preset_table_action', $action, $item );
				}
			}
		}

		/**
		 * Returns columns available in table
		 *
		 * @return array Array of columns of the table
		 * @since 1.0.0
		 */
		public function get_columns() {
			$columns = array(
				'name' => _x( 'Preset name', '[Admin] Preset table column header', 'yith-woocommerce-ajax-navigation' ),
				'shortcode' => _x( 'Shortcode', '[Admin] Preset table column header', 'yith-woocommerce-ajax-navigation' ),
				'actions' => '',
			);

			return $columns;
		}

		/* === ACTION METHODS === */

		/**
		 * Prints button to edit preset
		 *
		 * @param YITH_WCAN_Preset $item Current item.
		 */
		public function action_edit( $item ) {
			echo sprintf(
				'<a class="show-on-hover edit" href="%s" title="%s"><i class="material-icons">edit</i></a>',
				esc_url( $item->get_admin_edit_url() ),
				esc_html_x( 'Edit this preset', '[Admin] Preset edit action label', 'yith-woocommerce-ajax-navigation' )
			);
		}

		/**
		 * Prints button to clone preset
		 *
		 * @param YITH_WCAN_Preset $item Current item.
		 */
		public function action_clone( $item ) {
			echo sprintf(
				'<a class="show-on-hover clone" href="%s" title="%s"><i class="material-icons">filter_none</i></a>',
				esc_url( $item->get_admin_clone_url() ),
				esc_html_x( 'Clone this preset', '[Admin] Preset clone action label', 'yith-woocommerce-ajax-navigation' )
			);
		}

		/**
		 * Prints button to delete preset
		 *
		 * @param YITH_WCAN_Preset $item Current item.
		 */
		public function action_delete( $item ) {
			echo sprintf(
				'<a class="show-on-hover delete" href="%s" title="%s" onclick="return confirm(\'%s\');"><i class="material-icons">delete_outline</i></a>',
				esc_url( $item->get_admin_delete_url() ),
				esc_attr_x( 'Delete this preset', '[Admin] Preset delete action label', 'yith-woocommerce-ajax-navigation' ),
				esc_attr_x( 'Are you sure you want to delete this preset?', '[Admin] Preset delete confirm label', 'yith-woocommerce-ajax-navigation' )
			);
		}

		/**
		 * Prints toggle to activate/deactivate preset status
		 *
		 * @param YITH_WCAN_Preset $item Current item.
		 */
		public function action_change_status( $item ) {
			?>
			<div class="yith-plugin-fw-onoff-container ">
				<input type="checkbox" class="preset-status" data-preset="<?php echo esc_attr( $item->get_id() ); ?>" value="<?php echo $item->is_enabled() ? esc_attr( 'yes' ) : esc_attr( 'no' ); ?>" <?php checked( $item->is_enabled() ); ?> class="on_off">
				<span class="yith-plugin-fw-onoff" data-text-on="<?php echo esc_attr_x( 'YES', '[Admin] on-off yes', 'yith-woocommerce-ajax-navigation' ); ?>" data-text-off="<?php echo esc_attr_x( 'NO', '[Admin] on-off no', 'yith-woocommerce-ajax-navigation' ); ?>"></span>
			</div>
			<?php
		}

		/* === OUTPUT METHODS === */

		/**
		 * Display table, or empty content when no row is found
		 *
		 * @return void
		 */
		public function display() {
			if ( $this->has_items() ) {
				do_action( 'yith_wcan_before_presets_table', $this );
				parent::display();
				do_action( 'yith_wcan_after_presets_table', $this );
			} else {
				YITH_WCAN()->admin->show_empty_content(
					array(
						'item_name' => _x( 'filter preset', '[Admin] Name of the item missing, shown in preset-empty-content template', 'yith-woocommerce-ajax-navigation' ),
						'button_label' => _x( 'Create a new preset', '[Admin] New preset button label', 'yith-woocommerce-ajax-navigation' ),
						'button_url' => YITH_WCAN()->admin->get_preset_create_page(),
					)
				);
			}
		}

		/* === QUERY METHODS === */

		/**
		 * Prepare items for table
		 *
		 * @return void
		 * @since 1.0.0
		 */
		public function prepare_items() {
			$query_arg = array();

			if ( ! empty( $_REQUEST['s'] ) && '' !== $_REQUEST['s'] ) {
				$query_arg['s'] = sanitize_text_field( wp_unslash( $_REQUEST['s'] ) );
			}

			// sets pagination arguments.
			$per_page     = apply_filters( 'yith_wcan_filter_presets_per_page', 20 );
			$current_page = $this->get_pagenum();
			$total_items  = YITH_WCAN_Preset_Factory::count_presets( $query_arg );
			$presets      = YITH_WCAN_Preset_Factory::get_presets(
				array_merge(
					array(
						'limit'   => $per_page,
						'offset'  => ( ( $current_page - 1 ) * $per_page ),
						'orderby' => isset( $_REQUEST['orderby'] ) ? sanitize_text_field( wp_unslash( $_REQUEST['orderby'] ) ) : 'ID',
						'order'   => isset( $_REQUEST['order'] ) ? sanitize_text_field( wp_unslash( $_REQUEST['order'] ) ) : 'DESC',
					),
					$query_arg
				)
			);

			// sets columns headers.
			$columns               = $this->get_columns();
			$sortable              = $this->get_sortable_columns();
			$this->_column_headers = array( $columns, array(), $sortable );

			// retrieve data for table.
			$this->items = $presets;

			// sets pagination args.
			$this->set_pagination_args(
				array(
					'total_items' => $total_items,
					'per_page'    => $per_page,
					'total_pages' => ceil( $total_items / $per_page ),
				)
			);
			$this->items = $presets;
		}
	}
}
