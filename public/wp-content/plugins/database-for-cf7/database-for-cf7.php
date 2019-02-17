<?php

/*
    Plugin Name: Database for CF7
    Plugin URI: https://code4life.it/shop/plugins/database-for-cf7/
    Description: Save CF7 submitted form informations into your WordPress database.
    Author: Code4Life
    Author URI: https://code4life.it/
    Version: 1.2.1
    Text Domain: wpcf7db
 	Domain Path: /i18n/
	License: GPLv3
	License URI: http://www.gnu.org/licenses/gpl-3.0.html
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) { exit; }

// Function to execute on plugin activation
register_activation_hook( __FILE__, function() {
	if ( ! current_user_can( 'activate_plugins' ) ) { return; }

    $plugin = isset( $_REQUEST[ 'plugin' ] ) ? $_REQUEST[ 'plugin' ] : null;
    check_admin_referer( 'activate-plugin_' . $plugin );

    global $wpdb;

    $wpdb->show_errors();
    $wpdb->query( "CREATE TABLE IF NOT EXISTS {$wpdb->prefix}cf7db (
		id int(11) unsigned NOT NULL auto_increment,
		form int(11) NOT NULL,
		data text NOT NULL,
		submitted datetime NOT NULL,
		PRIMARY KEY (id)
	);" );
} );

// Function to execute on plugin deactivation
register_deactivation_hook( __FILE__, function() {
	if ( ! current_user_can( 'activate_plugins' ) ) { return; }

    $plugin = isset( $_REQUEST[ 'plugin' ] ) ? $_REQUEST[ 'plugin' ] : null;
    check_admin_referer( 'deactivate-plugin_' . $plugin );

    /* Code here */
} );

// Add language support to internationalize plugin
add_action( 'init', function() {
	load_plugin_textdomain( 'wpcf7db', false, dirname( plugin_basename( __FILE__ ) ) . '/i18n/' );
} );

// Add link to configuration page into plugin
add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), function( $links ) {
	return array_merge( array(
		'view' => '<a href="' . admin_url( 'admin.php?page=wpcf7db' ) . '">' . __( 'View', 'wpcf7db' ) . '</a>'
	), $links );
} );

// Register scripts & styles
add_action( 'admin_enqueue_scripts', function( $hook ) {
	// Hook only on requested page
    if ( strpos( $hook, '_page_wpcf7db' ) === false ) { return; }

    // Support for minified versions
	$minified = SCRIPT_DEBUG === false ? '.min' : false;

	wp_enqueue_style( 'datatables', plugins_url( 'libs/datatables/css/jquery.dataTables.min.css', __FILE__ ), false, '1.10.12', 'all' );
	wp_enqueue_style( 'datatables-buttons', plugins_url( 'libs/datatables/css/buttons.dataTables.min.css', __FILE__ ), false, '1.2.2', 'all' );
    wp_enqueue_style( 'wpcf7db', plugins_url( 'resources/css/wpcf7db' . $minified . '.css', __FILE__ ), false, '1.0', 'all' );

	wp_enqueue_script( 'datatables', plugins_url( 'libs/datatables/js/jquery.dataTables.min.js', __FILE__ ), false, '1.10.12', true );
    wp_enqueue_script( 'datatables-buttons', plugins_url( 'libs/datatables/js/dataTables.buttons.min.js', __FILE__ ), false, '1.2.2', true );
    wp_enqueue_script( 'datatables-buttons_html5', plugins_url( 'libs/datatables/js/buttons.html5.min.js', __FILE__ ), false, false, true );
    wp_enqueue_script( 'datatables-buttons_colvis', plugins_url( 'libs/datatables/js/buttons.colVis.min.js', __FILE__ ), false, false, true );
    wp_enqueue_script( 'datatables-buttons_print', plugins_url( 'libs/datatables/js/buttons.print.min.js', __FILE__ ), false, false, true );
    wp_enqueue_script( 'datatables-jszip', plugins_url( 'libs/datatables/js/jszip.min.js', __FILE__ ), false, false, true );
    wp_enqueue_script( 'datatables-pdfmake', plugins_url( 'libs/datatables/js/pdfmake.min.js', __FILE__ ), false, false, true );
    wp_enqueue_script( 'datatables-vfs_fonts', plugins_url( 'libs/datatables/js/vfs_fonts.js', __FILE__ ), false, false, true );
    wp_enqueue_script( 'datatables-select', plugins_url( 'libs/datatables/js/dataTables.select.min.js', __FILE__ ), false, false, true );
    wp_enqueue_script( 'wpcf7db', plugins_url( 'resources/js/wpcf7db' . $minified . '.js', __FILE__ ), false, '1.0', true );
    wp_localize_script( 'wpcf7db', 'parameters', array(
    	'lang'		=> get_locale(),
    	'url' 		=> plugins_url( '', __FILE__ ),
    	'ajax_url' 	=> admin_url( 'admin-ajax.php' ),
    	'confirm'	=> __( 'Are you sure? This action is irreversible', 'wpcf7db' )
	) );
} );

// Add checks and notices
add_action( 'admin_notices', function() {
	if ( ! is_plugin_active( 'contact-form-7/wp-contact-form-7.php' ) ) {
		?><div class="notice notice-error"><p><?php _e( 'Warning! To use Database for CF7 it need Contact Form 7 is installed and active.', 'wpcf7db' ); ?></p></div><?php
	}
} );

// Save into database
add_action( 'wpcf7_mail_sent', function( $contact_form ) {
    $submission = WPCF7_Submission::get_instance();
  
    if ( $submission ) {
    	$data = array();

    	// Already sanitized by CF7 get_posted_data() function
    	$posted_data = $submission->get_posted_data();
    	foreach ( $contact_form->scan_form_tags() as $field ) {
    		if ( ! empty( $field['name'] ) ) {
    			$data[$field['name']] = $posted_data[$field['name']];
    		}
    	}
    	$data['ip'] = $_SERVER['REMOTE_ADDR'];

    	global $wpdb;
    	$wpdb->query( $wpdb->prepare(
    		"INSERT INTO {$wpdb->prefix}cf7db ( form, data, submitted ) VALUES ( %s, %s, %s )", 
    		array( 
	            'form' 		=> $contact_form->id(), 
			   	'data' 		=> serialize( $data ),
			   	'submitted' => current_time( 'mysql' )
			)
		) );
    }
} );

// Add admin menu page in CF7
add_action( 'admin_menu', function() {
	add_submenu_page(
        'wpcf7',
        __( 'Database', 'wpcf7db' ),
        __( 'Database', 'wpcf7db' ),
        'manage_options',
        'wpcf7db',
        'wpcf7db_page'
    );
} );

function wpcf7db_page() {
	?>

	<div class="wrap">
		<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
		<form method="post" action="">

			<?php wp_nonce_field( 'wpcf7db', 'wpcf7db' ); ?>

			<?php
				$args = array (
				    'post_type' 		=> 'wpcf7_contact_form',
				    'posts_per_page' 	=> -1,
				    'orderby' 			=> 'title',
				    'order' 			=> 'ASC',
				);
				$forms = get_posts( $args );
			?>
			
			<table class="form-table">
				<tbody>
					<tr>
						<th scope="row"><label><?php _e( 'Choose your form', 'wpcf7db' ); ?></label></th>
						<td>
							<select id="wpcf7_id" name="wpcf7_id" class="postform">

								<?php foreach ( $forms as $form ) : ?>
								<option value="<?php echo esc_attr( $form->ID ); ?>"><?php echo esc_attr( $form->post_title ); ?></option>
								<?php endforeach; ?>

							</select>

							<?php submit_button( __( 'Select form', 'wpcf7db' ), 'primary', 'submit', false ); ?>

						</td>
					</tr>
				</tbody>
			</table>
		</form>

		<?php do_action( 'wpcf7_table' ); ?>

	</div>

	<?php
}

// Display requested form data
add_action( 'wpcf7_table', function() {
	if ( ! isset( $_POST['wpcf7_id'] ) ) { return; }
	if ( ! wp_verify_nonce( $_POST['wpcf7db'], 'wpcf7db' ) ) { return; }

	global $wpdb;

	// Sanitize POST data
	$wpcf7_id = sanitize_key( $_POST['wpcf7_id'] );
	$wpcf7_id = intval( $wpcf7_id );

	$wpcf7 = WPCF7_ContactForm::get_instance( $wpcf7_id );
	if ( $rows = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM {$wpdb->prefix}cf7db WHERE form = %s", $wpcf7_id ) ) ) {
		?>

		<hr />
		<table id="wpcf7db-table" class="row-border cell-border order-column stripe hover">
			<thead>
				<tr>
					<?php foreach ( $wpcf7->scan_form_tags() as $label ) : ?>
	    				<?php if ( ! empty( $label['name'] ) ) : ?><th><?php echo esc_attr( $label['name'] ); ?></th><?php endif; ?>
	    			<?php endforeach; ?>

	    			<th><?php _e( 'Remote IP', 'wpcf7db' ); ?></th>
	    			<th><?php _e( 'Submitted time', 'wpcf7db' ); ?></th>
	    		</tr>
			</thead>
			<tfoot>
				<tr>
					<?php foreach ( $wpcf7->scan_form_tags() as $label ) : ?>
					<?php if ( ! empty( $label['name'] ) ) : ?><td></td><?php endif; ?>
					<?php endforeach; ?>
					<td></td>
					<td></td>
				</tr>
			</tfoot>
			<tbody>
			
				<?php foreach ( $rows as $row ) : ?>

				<tr data-id="<?php echo esc_attr( $row->id ); ?>">
					<?php foreach ( unserialize( $row->data ) as $field ) : ?>
					<td><?php echo is_array( $field ) ? serialize( $field ) : esc_attr( $field ); ?></td>
					<?php endforeach; ?>

					<td><?php echo date_i18n( get_option( 'date_format' ), strtotime( esc_attr( $row->submitted ) ) ); ?></td>
				</tr>
			
				<?php endforeach; ?>
			</tbody>
		</table>
		<p>
			<?php submit_button( __( 'Delete selected', 'wpcf7db' ), 'delete', 'delete', false ); ?>
			<span class="results"></span>
		</p>

		<?php
	} else {
		?>
		<div class="notice notice-warning">
	        <p><?php _e( 'Sorry, this form hasn\'t submissions yet and is currently empty.', 'wpcf7db' ); ?></p>
	    </div>
		<?php
	}
} );

add_action( 'wp_ajax_wpcf7db_delete', function() {
	if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) { 
		global $wpdb;

		// Sanitize POST data
		$wpcf7_selected = sanitize_key( $_POST['selected'] );
		$wpcf7_selected = intval( $wpcf7_selected );

		$results = $wpdb->query( $wpdb->prepare( "DELETE FROM {$wpdb->prefix}cf7db WHERE id IN (%s);", $wpcf7_selected ) );
		if ( 0 !== $results ) {
			printf( _n( '%s row deleted', '%s rows deleted', $results, 'wpcf7db' ), $results );
		} else {
			printf( __( 'Some errors occurred: %s', 'wpcf7db' ), $wpdb->last_error );
		}
	}
	die();
} );

// Add counter for draft posts
add_action( 'wp_dashboard_setup', function() {
	
	wp_add_dashboard_widget( 'wpcf7db_summary', __( 'Database for CF7 - Summary', 'wpcf7db' ), function() {
		$args = array (
		    'post_type' 		=> 'wpcf7_contact_form',
		    'posts_per_page' 	=> -1,
		    'orderby' 			=> 'title',
		    'order' 			=> 'ASC',
		);
		if ( $forms = get_posts( $args ) ) {
			global $wpdb;
			?>
		
			<table width="100%">
			
			<?php foreach ( $forms as $form ) : ?>

				<?php
					$count = 0;
					if ( $rows = $wpdb->get_results( $wpdb->prepare( "SELECT COUNT(*) AS count FROM {$wpdb->prefix}cf7db WHERE form = %s", esc_attr( $form->ID ) ) ) ) {
						$count = $rows[0]->count;
					}
				?>

				<tr>
					<td><?php echo esc_attr( $form->post_title ); ?>:</td>
					<td class="textright"><strong><?php echo $count; ?></strong></td>
				</tr>
			
			<?php endforeach; ?>

			</table>

			<?php
		}
	} );

} );