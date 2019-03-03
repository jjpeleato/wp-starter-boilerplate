<?php
declare(strict_types=1);

/**
 * This file adds the functions for the development.
 *
 * @author  jjpeleato
 */

/**
 * Add assets CSS and JS
 */
function add_assets() {
	/**
	 * Register and Enqueue CSS
	 */
	wp_register_style(
		'custom-style',
		get_stylesheet_directory_uri() . '/assets/css/custom-style.min.css',
		array('style'),
		'1.0.0',
		'all'
	);
	wp_enqueue_style( 'custom-style' );

    /**
     * Register and Enqueue JS
     */
    wp_register_script(
    	'custom-js',
		get_stylesheet_directory_uri() . '/assets/js/custom.min.js',
		array( 'jquery' ),
		'1.0.0',
		true
	);
    wp_enqueue_script( 'custom-js' );
}
add_action( 'wp_enqueue_scripts', 'add_assets' );
