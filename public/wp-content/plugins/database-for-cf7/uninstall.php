<?php

// Exit if accessed directly
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) { exit; }

global $wpdb;

// Delete table
$wpdb->query( "DROP TABLE IF EXISTS {$wpdb->prefix}cf7db;" );