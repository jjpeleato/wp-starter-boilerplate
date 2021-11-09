<?php
/**
 * Filter options
 *
 * @author  YITH
 * @package YITH\AjaxProductFilter\Options
 * @version 4.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly


return array(
	'premium' => array(
		'home' => array(
			'type'   => 'custom_tab',
			'action' => 'yith_wcan_premium_tab',
		),
	),
);
