<?php
/**
 * Preset filter - Term options
 *
 * @author  YITH
 * @package YITH WooCommerce Ajax Product Filter
 * @version 4.0.0
 */

/**
 * @var $id int
 * @var $taxonomy string
 * @var $terms array
 */

if ( ! defined( 'YITH_WCAN' ) ) {
	exit;
} // Exit if accessed directly
?>


<div class="terms-wrapper">
	<?php
	if ( ! empty( $terms ) ) :
		foreach ( $terms as $term_id => $term_options ) :
			$term = get_term( $term_id, $taxonomy );

			if ( ! $term || is_wp_error( $term ) ) {
				continue;
			}

			$term_name = $term->name;

			YITH_WCAN()->admin->filter_term_field( $id, $term_id, $term->name, $term_options );
		endforeach;
	endif;
	?>
</div>
