<?php
/**
 * Loads the plugin files
 *
 * @since 1.0
 */

// Exit if accessed directly
if ( ! defined('ABSPATH') ) exit;

// Load admin
require_once( SUPERPWA_PATH_ABS . 'admin/basic-setup.php' );
require_once( SUPERPWA_PATH_ABS . 'admin/admin-ui-setup.php' );
require_once( SUPERPWA_PATH_ABS . 'admin/admin-ui-render-settings.php' );
require_once( SUPERPWA_PATH_ABS . 'admin/admin-ui-render-addons.php' );

// 3rd party compatibility
require_once( SUPERPWA_PATH_ABS . '3rd-party/onesignal.php' );

// Load functions
require_once( SUPERPWA_PATH_ABS . 'functions/common.php' );
require_once( SUPERPWA_PATH_ABS . 'functions/filesystem.php' );
require_once( SUPERPWA_PATH_ABS . 'functions/multisite.php' );

// Public folder
require_once( SUPERPWA_PATH_ABS . 'public/manifest.php' );
require_once( SUPERPWA_PATH_ABS . 'public/sw.php' );

// Load bundled add-ons
if ( superpwa_addons_status( 'utm_tracking' ) 		== 'active' ) require_once( SUPERPWA_PATH_ABS . 'addons/utm-tracking.php' );
if ( superpwa_addons_status( 'apple_touch_icons' ) 	== 'active' ) require_once( SUPERPWA_PATH_ABS . 'addons/apple-touch-icons.php' );