<?php
/**
 * The WooCommerce module's product redirection features.
 *
 * @since      1.0.32
 * @package    RankMath
 * @subpackage RankMath\WooCommerce
 * @author     Rank Math <support@rankmath.com>
 */

namespace RankMath\WooCommerce;

use RankMath\Helper;
use RankMath\Traits\Hooker;
use RankMath\Helpers\Sitepress;

defined( 'ABSPATH' ) || exit;

/**
 * WooCommerce class.
 */
class Product_Redirection {

	use Hooker;

	/**
	 * The Constructor.
	 */
	public function __construct() {
		if ( Helper::is_module_active( 'redirections' ) ) {
			$this->filter( 'rank_math/redirection/pre_search', 'pre_redirection', 10, 3 );
			return;
		}

		$this->action( 'wp', 'redirect' );
	}

	/**
	 * Pre-filter the redirection.
	 *
	 * @param string $check    Check.
	 * @param string $uri      Current URL.
	 * @param string $full_uri Full URL.
	 *
	 * @return string|array
	 */
	public function pre_redirection( $check, $uri, $full_uri ) {
		if ( $new_link = $this->get_redirection_url( $uri ) ) { // phpcs:ignore
			return [
				'url_to'      => $new_link,
				'header_code' => 301,
			];
		}

		return $check;
	}

	/**
	 * Redirect product with base to the new link.
	 */
	public function redirect() {
		global $wp;

		if ( $link = $this->get_redirection_url( $wp->request ) ) { // phpcs:ignore
			Helper::redirect( $link, 301 );
			exit;
		}
	}

	/**
	 * Get Product URL.
	 *
	 * @param string $uri Current URL.
	 *
	 * @return string Modified URL
	 */
	private function get_redirection_url( $uri ) {
		if ( ! $this->can_redirect() ) {
			return false;
		}

		$is_product          = is_product();
		$permalink_structure = wc_get_permalink_structure();
		$base                = $is_product ? $permalink_structure['product_base'] : $permalink_structure['category_base'];

		$base     = explode( '/', ltrim( $base, '/' ) );
		$new_link = $uri;

		// Early Bail if new_link length is less then the base.
		if ( count( explode( '/', $new_link ) ) <= count( $base ) ) {
			return false;
		}

		// On Single product page redirect base with shop and product.
		if ( $is_product ) {
			$base[] = 'product';
			$base[] = 'shop';
			Sitepress::get()->remove_home_url_filter();
			$new_link = ! is_feed() ? trim( str_replace( get_home_url(), '', get_permalink() ), '/' ) : $new_link;
			Sitepress::get()->restore_home_url_filter();
		}

		foreach ( array_unique( $base ) as $remove ) {
			if ( '%product_cat%' === $remove ) {
				continue;
			}
			$new_link = preg_replace( "#{$remove}/#i", '', $new_link, 1 );
		}

		$new_link = implode( '/', array_map( 'rawurlencode', explode( '/', $new_link ) ) ); // encode everything but slashes.

		return $new_link === $this->strip_ignored_parts( $uri ) ? false : trailingslashit( home_url( strtolower( $new_link ) ) );
	}

	/**
	 * Remove unneeded parts from the URI.
	 *
	 * @param string $uri Original URI.
	 *
	 * @return string
	 */
	private function strip_ignored_parts( $uri ) {
		$ignore_url_parts = [
			'#/comment-page-([0-9]{1,})$#',
		];

		$ignore_url_parts = $this->do_filter( 'woocommerce/product_redirection_ignore_url_parts', $ignore_url_parts );
		foreach ( $ignore_url_parts as $pattern ) {
			$uri = preg_replace( $pattern, '', $uri );
		}

		return implode( '/', array_map( 'rawurlencode', explode( '/', $uri ) ) );
	}

	/**
	 * Can redirect to the new product link.
	 *
	 * @return bool
	 */
	private function can_redirect() {
		global $wp_query;

		if (
			$this->do_filter( 'woocommerce/product_redirection', true ) &&
			! isset( $_GET['elementor-preview'] ) && // phpcs:ignore
			! isset( $wp_query->query_vars['schema-preview'] ) &&
			( ( Helper::get_settings( 'general.wc_remove_product_base' ) && is_product() ) ||
			( Helper::get_settings( 'general.wc_remove_category_base' ) && is_product_category() ) )
		) {
			return true;
		}

		return false;
	}
}
