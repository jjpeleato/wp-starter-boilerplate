<?php
/**
 * Operations and common functions of SuperPWA
 *
 * @since 1.0
 * 
 * @function	superpwa_is_amp()				Check if any AMP plugin is installed
 * @function 	superpwa_get_start_url()		Return Start Page URL
 * @function	superpwa_httpsify()				Convert http URL to https
 * @function	superpwa_is_pwa_ready()			Check if PWA is ready
 * @function 	superpwa_file_exists()			Check if file exists
 * @function	superpwa_is_static()			Check if service worker or manifest is static or dynamic
 * @function	superpwa_get_bloginfo()			Returns WordPress URL v/s Site URL depending on the status of the file. 
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Check if any AMP plugin is installed
 * 
 * @return (string|bool) AMP page url on success, false otherwise
 * 
 * @author Arun Basil Lal
 * @author Maria Daniel Deepak <daniel@danieldeepak.com>
 * 
 * @since 1.2
 * @since 1.9 Added support for tagDiv AMP
 * @since 2.0 require wp-admin/includes/plugin.php if is_plugin_active isn't defined
 */
function superpwa_is_amp() {
	
	if ( ! function_exists( 'is_plugin_active' ) ) {
		require_once( ABSPATH . '/wp-admin/includes/plugin.php' );
	}

	// AMP for WordPress - https://wordpress.org/plugins/amp
	if ( is_plugin_active( 'amp/amp.php' ) ) {
		return defined( 'AMP_QUERY_VAR' ) ? AMP_QUERY_VAR . '/' : 'amp/';
	}

	// AMP for WP - https://wordpress.org/plugins/accelerated-mobile-pages/
	if ( is_plugin_active( 'accelerated-mobile-pages/accelerated-moblie-pages.php' ) ) {
		return defined( 'AMPFORWP_AMP_QUERY_VAR' ) ? AMPFORWP_AMP_QUERY_VAR . '/' : 'amp/';
	}

	// Better AMP - https://wordpress.org/plugins/better-amp/
	if ( is_plugin_active( 'better-amp/better-amp.php' ) ) {
		return 'amp/';
	}

	// AMP Supremacy - https://wordpress.org/plugins/amp-supremacy/
	if ( is_plugin_active( 'amp-supremacy/amp-supremacy.php' ) ) {
		return 'amp/';
	}

	// WP AMP - https://wordpress.org/plugins/wp-amp-ninja/
	if ( is_plugin_active( 'wp-amp-ninja/wp-amp-ninja.php' ) ) {
		return '?wpamp';
	}

	// tagDiv AMP - http://forum.tagdiv.com/tagdiv-amp/
	if ( is_plugin_active( 'td-amp/td-amp.php' ) ) {
		return defined( 'AMP_QUERY_VAR' ) ? AMP_QUERY_VAR . '/' : 'amp/';
	}

	return false;
}

/**
 * Return Start Page URL
 *
 * @param $rel (boolean) False by default. Set to true to return a relative URL (for use in manifest)
 * 
 * @return (string) URL to be set as the start_url in manifest and startPage in service worker
 *
 * @since 1.2
 * @since 1.3.1 Force HTTPS by replacing http:// with https://
 * @since 1.6 Use superpwa_httpsify() to force HTTPS. 
 * @since 1.6 Removed forcing of trailing slash and added dot (.) to the beginning.
 * @since 1.7 Added filter superpwa_manifest_start_url when $rel = true, for use with manifest. First ever filter in SuperPWA.
 */
function superpwa_get_start_url( $rel = false ) {
	
	// Get Settings
	$settings = superpwa_get_settings();
	
	// Start Page
	$start_url = get_permalink( $settings['start_url'] ) ? get_permalink( $settings['start_url'] ) : superpwa_get_bloginfo( 'sw' );
	
	// Force HTTPS
	$start_url = superpwa_httpsify( $start_url );
	
	// AMP URL
	if ( superpwa_is_amp() !== false && isset( $settings['start_url_amp'] ) && $settings['start_url_amp'] == 1 ) {
		$start_url = trailingslashit( $start_url ) . superpwa_is_amp();
	}
	
	// Relative URL for manifest
	if ( $rel === true ) {
		
		// Make start_url relative for manifest
		$start_url = ( parse_url( $start_url, PHP_URL_PATH ) == '' ) ? '.' : parse_url( $start_url, PHP_URL_PATH );
		
		return apply_filters( 'superpwa_manifest_start_url', $start_url );
	}
	
	return $start_url;
}

/**
 * Convert http URL to https
 *
 * @param $url (string) The URL to convert to https
 * 
 * @return (string) Returns the converted URL
 *
 * @since 1.6
 */
function superpwa_httpsify( $url ) {
	return str_replace( 'http://', 'https://', $url );
}

/**
 * Check if PWA is ready
 * 
 * Check for HTTPS.
 * Check if manifest is generated.
 * Check if service worker is generated. 
 * 
 * @return (bool) True if PWA is ready. False otherwise
 * 
 * @author Arun Basil Lal
 * 
 * @since 1.8.1
 * @since 2.0.1 replaced superpwa_get_contents() with superpwa_file_exists() to accommodate dynamic files. 
 */
function superpwa_is_pwa_ready() {
	
	if ( 
		is_ssl() && 
		superpwa_file_exists( superpwa_manifest( 'src' ) ) && 
		superpwa_file_exists( superpwa_sw( 'src' ) ) 
	) {
		return apply_filters( 'superpwa_is_pwa_ready', true );
	}
	
	return false; 
}

/**
 * Check if file exists
 * 
 * Not to be confused with file_exists PHP function. 
 * In SuperPWA context, file exists if the response code is 200. 
 * 
 * @param $file (string) URL to check
 * 
 * @return (bool) True, if file exists. False otherwise. 
 * 
 * @author Arun Basil Lal
 * @author Maria Daniel Deepak <daniel@danieldeepak.com>
 * 
 * @since 2.0.1
 */
function superpwa_file_exists( $file ) {
	
	$response 		= wp_remote_head( $file, array( 'sslverify' => false ) );
	$response_code 	= wp_remote_retrieve_response_code( $response );
	
	if ( 200 === $response_code ) {
		return true;
	}
	
	return false;
}

/**
 * Check if service worker or manifest is static or dynamic
 * 
 * @param (string) $file keyword 'manifest' to test manifest and 'sw' to test service worker. 
 *
 * @return (bool) True if the file is static. False otherwise. 
 * 
 * @author Arun Basil Lal
 * 
 * @since 2.0.1
 */
function superpwa_is_static( $file = 'manifest' ) {
	
	// Get Settings
	$settings = superpwa_get_settings();
	
	switch ( $file ) {
		
		case 'sw':
			
			if ( $settings['is_static_sw'] === 1 ) {
				return true;
			}
			
			return false;
			break;
		
		case 'manifest':
		default: 
			
			if ( $settings['is_static_manifest'] === 1 ) {
				return true;
			}
		
			return false;
			break;
	}
}

/**
 * Returns WordPress URL v/s Site URL depending on the status of the file. 
 * 
 * Static files are generated in the root directory of WordPress. So if static 
 * files are used, the WordPress URL will be needed for many use cases, like
 * offline page, start_url etc. 
 * 
 * The status of the service worker is mostly relevant since the service worker 
 * can work on the folder it is located and its sub folders. Not the folders above
 * its own directory. 
 * 
 * @param (string) $file keyword 'manifest' to test manifest and 'sw' to test service worker. 
 * 
 * @return (string) get_bloginfo( 'wpurl' ) if file is static. get_bloginfo( 'url' ) otherwise. 
 * 
 * @author Arun Basil Lal
 * 
 * @since 2.0.1
 */
function superpwa_get_bloginfo( $file = 'sw' ) {
	
	if ( superpwa_is_static( $file ) ) {
		return get_bloginfo( 'wpurl' );
	}
	
	return get_bloginfo( 'url' );
}