<?php
/**
 * The Content AI module.
 *
 * @since      1.0.71
 * @package    RankMath
 * @subpackage RankMath
 * @author     Rank Math <support@rankmath.com>
 */

namespace RankMath\ContentAI;

use RankMath\Helper;
use RankMath\CMB2;
use RankMath\Traits\Hooker;
use MyThemeShop\Helpers\Arr;
use MyThemeShop\Helpers\WordPress;

defined( 'ABSPATH' ) || exit;

/**
 * Content_AI class.
 */
class Content_AI {
	use Hooker;

	/**
	 * Class constructor.
	 */
	public function __construct() {
		if ( ! Helper::has_cap( 'content_ai' ) ) {
			return;
		}

		$this->filter( 'rank_math/settings/general', 'add_settings' );
		$this->action( 'rest_api_init', 'init_rest_api' );
		$this->action( 'rank_math/admin/enqueue_scripts', 'editor_scripts', 20 );
		$this->action( 'wp_footer', 'editor_scripts', 11 );
		$this->action( 'elementor/editor/before_enqueue_scripts', 'elementor_enqueue', 11 );
		$this->filter( 'rank_math/metabox/post/values', 'add_metadata', 10, 2 );
		$this->action( 'cmb2_admin_init', 'add_content_ai_metabox', 11 );
	}

	/**
	 * Load the REST API endpoints.
	 */
	public function init_rest_api() {
		$rest = new Rest();
		$rest->register_routes();
	}

	/**
	 * Add module settings in the General Settings panel.
	 *
	 * @param  array $tabs Array of option panel tabs.
	 * @return array
	 */
	public function add_settings( $tabs ) {
		Arr::insert(
			$tabs,
			[
				'content-ai' => [
					'icon'  => 'rm-icon rm-icon-target',
					'title' => esc_html__( 'Content AI', 'rank-math' ),
					'desc'  => esc_html__( 'Get sophisticated AI suggestions for related Keywords, Questions & Links to include in the SEO meta & Content Area. Supports 80+ Countries.', 'rank-math' ),
					'file'  => dirname( __FILE__ ) . '/views/options.php',
				],
			],
			8
		);

		return $tabs;
	}

	/**
	 * Add link suggestion metabox.
	 */
	public function add_content_ai_metabox() {
		if ( ! $this->can_add_tab() || 'classic' !== Helper::get_current_editor() ) {
			return;
		}

		$id  = 'rank_math_metabox_content_ai';
		$cmb = new_cmb2_box(
			[
				'id'               => $id,
				'title'            => esc_html__( 'Rank Math Content AI', 'rank-math' ),
				'object_types'     => array_keys( Helper::get_accessible_post_types() ),
				'context'          => 'side',
				'priority'         => 'high',
				'mb_callback_args' => [ '__block_editor_compatible_meta_box' => false ],
			]
		);

		CMB2::pre_init( $cmb );

		// Move content AI metabox below the Publish box.
		$this->reorder_content_ai_metabox( $id, $cmb->object_type() );
	}


	/**
	 * Enqueue assets for post/term/user editors.
	 *
	 * @return void
	 */
	public function editor_scripts() {
		if ( ! $this->can_add_tab() ) {
			return;
		}

		$editor = Helper::get_current_editor();
		if ( ! $editor ) {
			return;
		}

		$dep = [
			'classic'   => 'rank-math-metabox',
			'gutenberg' => 'rank-math-gutenberg',
			'elementor' => 'rank-math-elementor',
			'divi'      => 'rank-math-divi',
		];

		wp_register_style( 'rank-math-common', rank_math()->plugin_url() . 'assets/admin/css/common.css', null, rank_math()->version );
		wp_enqueue_style(
			'rank-math-content-ai',
			rank_math()->plugin_url() . 'includes/modules/content-ai/assets/css/content-ai.css',
			[ 'rank-math-common' ],
			rank_math()->version
		);

		wp_enqueue_script(
			'rank-math-content-ai',
			rank_math()->plugin_url() . 'includes/modules/content-ai/assets/js/content-ai.js',
			[
				$dep[ $editor ],
			],
			rank_math()->version,
			true
		);
	}

	/**
	 * Enqueue Elementor style.
	 */
	public function elementor_enqueue() {
		if ( ! $this->can_add_tab() ) {
			return;
		}

		wp_enqueue_style(
			'rank-math-content-ai-dark',
			rank_math()->plugin_url() . 'includes/modules/content-ai/assets/css/content-ai-dark.css',
			[ 'rank-math-elementor-dark' ],
			rank_math()->version
		);
	}

	/**
	 * Add meta data to use in gutenberg.
	 *
	 * @param array  $values Aray of tabs.
	 * @param Screen $screen Sceen object.
	 *
	 * @return array
	 */
	public function add_metadata( $values, $screen ) {
		$countries = [];
		foreach ( Helper::choices_contentai_countries() as $value => $label ) {
			$countries[] = [
				'value' => $value,
				'label' => $label,
			];
		}

		$values['contentAiCountry'] = Helper::get_settings( 'general.content_ai_country', 'all' );
		$values['countries']        = $countries;
		$values['ca_credits']       = get_option( 'rank_math_ca_credits' );
		$values['ca_keyword']       = '';

		$keyword = $screen->get_meta( $screen->get_object_type(), $screen->get_object_id(), 'rank_math_ca_keyword' );
		if ( empty( $keyword ) ) {
			return $values;
		}

		$data    = get_option( 'rank_math_ca_data' );
		$country = empty( $keyword['country'] ) ? '' : $keyword['country'];
		if (
			! empty( $data[ $country ] ) &&
			! empty( $data[ $country ][ $keyword['keyword'] ] )
		) {
			$values['ca_data'] = $data[ $country ][ $keyword['keyword'] ];
		}

		$values['ca_keyword'] = $keyword;

		return $values;
	}

	/**
	 * Reorder the Content AI metabox in Classic editor.
	 *
	 * @param string $id        Metabox ID.
	 * @param string $post_type Current post type.
	 * @return void
	 */
	private function reorder_content_ai_metabox( $id, $post_type ) {
		$user          = wp_get_current_user();
		$order         = (array) get_user_option( 'meta-box-order_' . $post_type, $user->ID );
		$order['side'] = ! isset( $order['side'] ) ? '' : $order['side'];

		if ( false !== strpos( $order['side'], $id ) ) {
			$order['side'] = str_replace( $id . ',', '', $order['side'] );
		}

		if ( false === strpos( $order['side'], 'submitdiv' ) ) {
			$order['side'] = 'submitdiv,' . $order['side'];
		}

		if ( ',' === substr( $order['side'], -1 ) ) {
			$order['side'] = substr( $order['side'], 0, -1 );
		}

		$current_order = [];
		$current_order = explode( ',', $order['side'] );

		$key = array_search( 'submitdiv', $current_order, true );
		if ( false === $key ) {
			return;
		}

		$new_order = array_merge(
			array_slice( $current_order, 0, $key + 1 ),
			[ $id ]
		);

		if ( count( $current_order ) > $key ) {
			$new_order = array_merge(
				$new_order,
				array_slice( $current_order, $key + 1 )
			);
		}

		$order['side'] = implode( ',', array_unique( $new_order ) );
		update_user_option( $user->ID, 'meta-box-order_' . $post_type, $order, true );
	}

	/**
	 * Whether to load Content AI data.
	 */
	private function can_add_tab() {
		return in_array( WordPress::get_post_type(), (array) Helper::get_settings( 'general.content_ai_post_types' ), true );
	}
}
