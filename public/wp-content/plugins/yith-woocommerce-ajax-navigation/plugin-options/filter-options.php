<?php
/**
 * Filter options
 *
 * @author  YITH
 * @package YITH WooCommerce Ajax Product Filter
 * @version 4.0.0
 */

$supported_taxonomies = YITH_WCAN_Query()->get_supported_taxonomies();
$taxonomy_options     = array();
$term_counts          = array();

if ( ! empty( $supported_taxonomies ) ) {
	foreach ( $supported_taxonomies as $taxonomy_slug => $taxonomy_obj ) {
		$taxonomy_options[ $taxonomy_slug ] = $taxonomy_obj->label;
		$term_counts[ $taxonomy_slug ]      = wp_count_terms( $taxonomy_slug );
	}
}

$supported_types = YITH_WCAN_Filter_Factory::get_supported_types();

return apply_filters(
	'yith_wcan_panel_filter_options',
	array_merge(
		array(
			'title' => array(
				'label' => _x( 'Filter name', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
				'type'  => 'text',
				'class'   => 'heading-field',
				'desc'  => _x( 'Enter a name to identify this filter', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
			),
		),

		$supported_types && 1 < count( $supported_types ) ? array(
			'type'  => array(
				'label'   => _x( 'Filter for', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
				'type'    => 'select',
				'class'   => 'wc-enhanced-select',
				'options' => YITH_WCAN_Filter_Factory::get_supported_types(),
				'desc'  => _x( 'Select the parameters you wish to filter for', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
			),
		) : array(),

		array(
			'taxonomy'  => array(
				'label'   => _x( 'Choose taxonomy', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
				'type'    => 'select',
				'class'   => 'wc-enhanced-select taxonomy',
				'options' => $taxonomy_options,
				'desc'  => _x( 'Select which taxonomy to use for this filter', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
				'custom_attributes' => 'data-counts="' . wc_esc_json( wp_json_encode( $term_counts ) ) . '"',
			),

			'terms'  => array(
				'label'   => _x( 'Choose terms', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
				'type'    => 'select-buttons',
				'multiple' => true,
				'class'   => 'wc-enhanced-select term-search',
				'options' => array(),
				'desc'  => _x( 'Select which terms to use for filtering', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
			),

			'filter_design'  => array(
				'label'   => _x( 'Filter type', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
				'type'    => 'select',
				'class'   => 'wc-enhanced-select',
				'options' => apply_filters(
					'yith_wcan_supported_filter_designs',
					array(
						'checkbox' => _x( 'Checkbox', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
						'select'   => _x( 'Select', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
						'text'     => _x( 'Text', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
						'color'    => _x( 'Color Swatches', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
						'label'    => _x( 'Label', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
					)
				),
				'desc' => _x( 'Select the filter type for this filter', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
			),

			'column_number' => array(
				'label'   => _x( 'Columns number', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
				'type'    => 'number',
				'min'     => 1,
				'step'    => 1,
				'max'     => 8,
				'desc'    => _x( 'Set the number of items per row you want to show for this design', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
			),

			'terms_options' => array(
				'label'   => _x( 'Customize terms', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
				'type'    => 'custom',
				'action'  => 'yith_wcan_terms_options',
			),

			'hierarchical' => array(
				'label'   => _x( 'Show hierarchy', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
				'type'    => 'radio',
				'options' => array(
					'no' => _x( 'No, show all terms in same level', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
					'parents_only' => _x( 'No, show only parent terms', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
					'open' => _x( 'Yes', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
				),
				'desc'  => _x( 'Choose how to show terms hierarchy', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
			),

			'multiple' => array(
				'label'   => _x( 'Allow multiple selection', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
				'type'    => 'onoff',
				'desc'  => _x( 'Enable if the user can select multiple terms when filtering products', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
			),

			'relation' => array(
				'label'   => _x( 'Multiselect relation', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
				'type'    => 'radio',
				'options' => array(
					'and' => _x( 'AND - Results need to match all selected terms at the same time', '[Admin] Filter edit form; logical operator that affects query behaviour', 'yith-woocommerce-ajax-navigation' ),
					'or'  => _x( 'OR - Results need to match at least one of the selected terms', '[Admin] Filter edit form; logical operator that affects query behaviour', 'yith-woocommerce-ajax-navigation' ),
				),
				'desc'  => _x( 'Choose how multiple terms selection should behave', '[Admin] Filter edit form', 'yith-woocommerce-ajax-navigation' ),
			),

		)
	)
);
