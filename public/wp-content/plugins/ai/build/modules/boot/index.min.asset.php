<?php
$core_asset = ABSPATH . WPINC . '/js/dist/script-modules/boot/index.min.asset.php';
if ( file_exists( $core_asset ) ) {
	return require $core_asset;
}
return array('dependencies' => array('react-jsx-runtime'), 'version' => 'wp-build-fallback');