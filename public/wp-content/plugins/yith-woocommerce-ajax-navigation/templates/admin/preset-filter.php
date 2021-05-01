<?php
/**
 * Preset filter - Admin view
 *
 * @author  YITH
 * @package YITH WooCommerce Ajax Product Filter
 * @version 4.0.0
 */

/**
 * @var $preset bool|YITH_WCAN_Preset
 * @var $filter YITH_WCAN_Filter
 * @var $id     int
 */

if ( ! defined( 'YITH_WCAN' ) ) {
	exit;
} // Exit if accessed directly
?>

<div id="filter_<?php echo esc_attr( $id ); ?>" class="yith-toggle-row ui-sortable-handle" data-item_key="<?php echo esc_attr( $id ); ?>">
	<div class="yith-toggle-title">
		<span class="title-arrow material-icons">keyboard_arrow_right</span>
		<h3 class="title">
				<?php
				$title = $filter->get_title();

				if ( $title ) {
					echo esc_html( $title );
				} else {
					echo sprintf( '<span class="no-title">%s</span>', _x( '&lt; no title &gt;', '[Admin] Message shown when filter has empty title', 'yith-woocommerce-ajax-navigation' ) );
				}
				?>
		</h3>
		<?php
		yith_plugin_fw_get_field(
			array(
				'id'    => "filters_{$id}_enabled",
				'name'  => "filters[{$id}][enabled]",
				'value' => $filter->is_enabled() ? 'yes' : 'no',
				'type'  => 'onoff',
			),
			true
		);
		?>
		<span class="show-on-hover delete material-icons">delete_outline</span>
		<span class="show-on-hover clone material-icons">filter_none</span>
	</div>
	<div class="yith-toggle-content">
		<?php
		$fields = $filter->get_fields();

		if ( ! empty( $fields ) ) :
			foreach ( $fields as $field_slug => $field ) :
				$field_id = "filters_{$id}_{$field_slug}";
				$field_name = "filters[{$id}][{$field_slug}]";

				$field_args = array_merge(
					$field,
					array(
						'index'  => $id,
						'id'     => $field_id,
						'name'   => $field_name,
						'filter' => $filter,
						'value'  => method_exists( $filter, "get_{$field_slug}" ) ? $filter->{"get_{$field_slug}"}() : '',
					)
				);

				// special case for terms.
				if ( 'terms' === $field_slug ) {
					$field_args['options'] = $filter->get_terms( 'id=>name' );
				}

				?>
				<div class="yith-toggle-content-row">
					<label for="<?php echo esc_attr( $field_id ); ?>"><?php echo esc_html( $field['label'] ); ?></label>
					<?php yith_plugin_fw_get_field( $field_args, true ); ?>

					<?php if ( ! empty( $field['desc'] ) ) : ?>
						<span class="description"><?php echo esc_html( $field['desc'] ); ?></span>
					<?php endif; ?>
				</div>
				<?php
			endforeach;
		endif;
		?>
		<div class="yith-toggle-content-buttons">
			<div class="spinner"></div>
			<button class="save button-primary" class="button-primary"><?php echo esc_html_x( 'Save Filter', '[Admin] Save filter button, in new/edit preset page', 'yith-woocommerce-ajax-navigation' ); ?></button>
			<button class="delete button-secondary" class="button-secondary yith-delete-button"><?php echo esc_html_x( 'Delete Filter', '[Admin] Delete filter button, in new/edit preset page', 'yith-woocommerce-ajax-navigation' ); ?></button>
		</div>
	</div>
</div>
