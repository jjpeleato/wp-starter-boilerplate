<?php
/**
 * Preset edit page - Admin view
 *
 * @author  YITH
 * @package YITH WooCommerce Ajax Product Filter
 * @version 4.0.0
 */

/**
 * @var $preset bool|YITH_WCAN_Preset
 */

if ( ! defined( 'YITH_WCAN' ) ) {
	exit;
} // Exit if accessed directly
?>

<?php
$preset_id = $preset ? $preset->get_id() : false;
?>

<div id="yith_wcan_panel_filter-preset-edit" class="yith-plugin-fw yit-admin-panel-container">
	<div class="yit-admin-panel-content-wrap">
		<form id="plugin-fw-wc" method="post" action="admin.php?action=yith_wcan_save_preset">
			<span class="view-all-presets">
				<a href="<?php echo $this->get_panel_url( 'filter-preset' ); ?>">
					<?php echo esc_html_x( '< back to preset list', '[Admin] Back link in new preset page', 'yith-woocommerce-ajax-navigation' ); ?>
				</a>
			</span>
			<h2>
				<?php
				if ( $preset ) {
					echo esc_html_x( 'Edit filter preset', '[ADMIN] Title for new preset page', 'yith-woocommerce-ajax-navigation' );
				} else {
					echo esc_html_x( 'Add new filter preset', '[ADMIN] Title for new preset page', 'yith-woocommerce-ajax-navigation' );
				}
				?>
			</h2>

			<?php do_action( 'yith_wcan_preset_edit_before_title', $preset_id, $preset ); ?>

			<table class="form-table">
				<tbody>
				<tr valign="top" class="yith-plugin-fw-panel-wc-row text">
					<th scope="row" class="titledesc">
						<label for="preset_title"><?php echo esc_html_x( 'Preset name', '[Admin] Label in new preset page', 'yith-woocommerce-ajax-navigation' ); ?></label>
					</th>
					<td class="forminp forminp-text">
						<div class="yith-plugin-fw-field-wrapper yith-plugin-fw-text-field-wrapper">
							<input type="text" name="preset_title" id="preset_title" value="<?php echo $preset ? esc_attr( $preset->get_title() ) : ''; ?>"/>
						</div>
						<span class="description">
							<?php echo esc_html_x( 'Enter a name to identify this filter preset', '[Admin] Label in new preset page', 'yith-woocommerce-ajax-navigation' ); ?>
						</span>
					</td>
				</tr>
				</tbody>
			</table>

			<?php do_action( 'yith_wcan_preset_edit_before_filters', $preset_id, $preset ); ?>

			<?php include( YITH_WCAN_DIR . 'templates/admin/preset-filters.php' ); ?>

			<?php do_action( 'yith_wcan_preset_edit_after_filters', $preset_id, $preset ); ?>

			<p class="submit">
				<input type="submit" id="submit" class="button button-primary" value="<?php echo esc_attr_x( 'Save preset', '[Admin] Preset save button, in new/edit preset page', 'yith-woocommerce-ajax.navigation' ); ?>"/>
				<input type="hidden" name="id" id="preset_id" value="<?php echo $preset ? esc_attr( $preset->get_id() ) : ''; ?>"/>
				<input type="hidden" name="post_ID" id="post_ID" value="<?php echo $preset ? esc_attr( $preset->get_id() ) : ''; ?>"/>
				<input type="hidden" name="paged" id="paged" value="<?php echo $preset && $preset->needs_pagination() ? 1 : 0; ?>"/>
				<?php wp_nonce_field( 'save_preset' ); ?>
			</p>
		</form>
	</div>
</div>
