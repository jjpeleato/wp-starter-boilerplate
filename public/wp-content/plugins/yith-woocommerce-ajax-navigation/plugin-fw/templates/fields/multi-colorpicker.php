<?php
/**
 * This file belongs to the YIT Plugin Framework.
 *
 * This source file is subject to the GNU GENERAL PUBLIC LICENSE (GPL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @var array $field
 */

!defined( 'ABSPATH' ) && exit; // Exit if accessed directly

wp_enqueue_style( 'wp-color-picker' );

extract( $field );
if ( ! isset( $colorpickers ) ){
    return;
}
$class = !empty( $class ) ? $class : 'yith-plugin-fw-multi-colorpicker';
?>
<div class="<?php echo esc_attr( $class )?>">

<?php
foreach ( $colorpickers as $colorpicker  ):
	$colorpicker['type'] = 'colorpicker';
	$colorpicker['title'] = $colorpicker['name'];
	$colorpicker['name'] = $name."[{$colorpicker['id']}]";
	$colorpicker['value'] = isset( $value[$colorpicker['id']] ) ? $value[$colorpicker['id']] : $colorpicker['default'];
	$colorpicker['id']   = $name."_".$colorpicker['id'];
?>
<div class="yith-single-colorpicker colorpicker">
	<label for="<?php echo esc_attr($colorpicker['id']  )?>"><?php echo esc_html($colorpicker['title']) ?></label>
	<?php echo yith_plugin_fw_get_field( $colorpicker, true, false ); ?>
	</div>

<?php endforeach;?>
</div>