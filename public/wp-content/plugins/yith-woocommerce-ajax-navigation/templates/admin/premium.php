<?php
/**
 * Premium tab
 *
 * @author  YITH
 * @package YITH WooCommerce Ajax Product Filter
 * @version 4.0.0
 */

if ( ! defined( 'YITH_WCAN' ) ) {
	exit;
} // Exit if accessed directly
?>

<style>
	.landing{
		margin-right: 15px;
		border: 1px solid #d8d8d8;
		border-top: 0;
	}
	.section{
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
		background: #fafafa;
	}
	.section h1{
		text-align: center;
		color: #267390;
		font-size: 35px;
		font-weight: 600;
		line-height: normal;
		display: inline-block;
		width: 100%;
		margin: 50px 0 0;
		text-transform: uppercase;
	}
	.section .section-title h2{
		vertical-align: middle;
		padding: 0;
		line-height: 34px;
		font-size: 24px;
		font-weight: 600;
		color: #267390;
		background: none;
		border: none;
	}
	.section p{
		color: #4b4b4b;
		margin: 15px 0;
		font-size: 19px;
		line-height: 32px;
		font-weight: 300;
	}
	.section ul li{
		margin-bottom: 4px;
	}
	.section.section-cta{
		background: #fff;
	}
	.cta-container,
	.landing-container{
		display: flex;
		flex-wrap: wrap;
		max-width: 1500px;
		margin-left: auto;
		margin-right: auto;
		padding: 30px 0;
		align-items: center;
	}
	.landing-container-wide{
		text-align: center;
		flex-direction: column;
	}
	.cta-container{
		display: block;
		max-width: 800px;
	}
	.landing-container:after{
		display: block;
		clear: both;
		content: '';
	}
	.landing-container .col-1,
	.landing-container .col-2{
		float: left;
		box-sizing: border-box;
		padding: 0 15px;
	}
	.landing-container .col-1{
		width: 58.33333333%;
	}
	.landing-container .col-2{
		width: 41.66666667%;
	}
	.landing-container .col-1 img,
	.landing-container .col-2 img,
	.landing-container .col-wide img{
		max-width: 100%;
	}

	.premium-cta{
		color: #4b4b4b;
		border-radius: 10px;
		padding: 30px 25px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
	}
	.premium-cta:after{
		content: '';
		display: block;
		clear: both;
	}
	.premium-cta p{
		margin: 10px 0;
		line-height: 1.5em;
		display: inline-block;
		text-align: left;
	}
	.premium-cta a.button{
		border-radius: 25px;
		float: right;
		background: #e09004;
		box-shadow: none;
		outline: none;
		color: #fff;
		position: relative;
		padding: 10px 50px 8px;
		text-align: center;
		text-transform: uppercase;
		font-weight: 600;
		font-size: 20px;
		line-height: normal;
		border: none;
	}
	.premium-cta a.button:hover,
	.premium-cta a.button:active,
	.wp-core-ui .yith-plugin-ui .premium-cta a.button:focus{
		color: #fff;
		background: #d28704;
		box-shadow: none;
		outline: none;
	}
	.premium-cta .highlight{
		text-transform: uppercase;
		background: none;
		font-weight: 500;
	}

	@media (max-width: 991px) {
		.section {
			margin: 0
		}

		.landing-container .col-1,
		.landing-container .col-2 {
			width: 100%;
			padding: 0 15px;
		}

		.section-odd .landing-container .col-1 {
			order: 0;
		}

		.section-odd .landing-container .col-2 {
			order: 1;
		}

		.premium-cta p {
			width: 100%;
		}

		.premium-cta {
			text-align: center;
		}

		.premium-cta a.button {
			float: none;
		}
	}

	@media (max-width: 480px) {
		.wrap {
			margin-right: 0;
		}

		.section {
			margin: 0;
		}

		.section-odd .col-1 {
			float: left;
			margin-right: -100%;
		}

		.section-odd .col-2 {
			float: right;
			margin-top: 65%;
		}
	}

	@media (max-width: 320px) {
		.premium-cta a.button {
			padding: 9px 20px 9px 70px;
		}

		.section .section-title img {
			display: none;
		}
	}
</style>

<div class="landing">
	<div class="section section-cta section-odd">
		<div class="cta-container">
			<div class="premium-cta">
				<p>
					<?php
					// translators: HIGHLIGHT content should be placed between square brackets [].
					echo wp_kses_post( preg_replace( '/\[([^]]+)]/', '<span class="highlight">$1</span>', _x( 'Upgrade to [premium version] of<br/>[YITH WooCommerce Ajax Product Filter] to benefit<br/>from all features!', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ) ) );
					?>
				</p>
				<a href="<?php echo esc_url( $this->get_premium_landing_uri() ); ?>" target="_blank" class="premium-cta-button button btn">
					<?php echo esc_html_x( 'UPGRADE', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?>
				</a>
			</div>
		</div>
	</div>

	<div class="section section-even clear">
		<h1><?php echo esc_html_x( 'Premium Features', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?></h1>
		<div class="landing-container">
			<div class="col-1">
				<img src="<?php echo esc_url( YITH_WCAN_URL ); ?>assets/images/premium/01.jpg" alt="Mobile Filtering"/>
			</div>
			<div class="col-2">
				<div class="section-title">
					<h2><?php echo esc_html_x( 'Show filters in a modal view which is purposely designed for users visiting your site by smartphones or tablets', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?></h2>
				</div>
				<p>
					<?php echo esc_html_x( "An ever-increasing number of users that visit e-commerce sites and purchase products online will do so using mobile devices.<br>That's why we have carefully developed a filter modal view, specifically optimized for users visiting the shop using a smartphone or tablet. When filtering of your products is required, it will open in a modal view and the user will be able to select them as recommended by the main guidelines about usability and user experience.", '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?>
				</p>
			</div>
		</div>
	</div>

	<div class="section section-odd clear">
		<div class="landing-container landing-container-wide">
			<div class="section-title">
				<h2><?php echo esc_html_x( 'An astonishing filter library that you can activate', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?></h2>
			</div>
			<p>
				<?php echo esc_html_x( 'Based on the research made by the Baymard Institute, there are five essential filters for e-buyers: before buying they want to filter by price, brand, size, color, and rating. YITH WooCommerce Ajax Product Filter includes these and more filters to extensively meet your needs and your customers’ demands too', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?>
			</p>
		</div>
	</div>

	<div class="section section-even clear">
		<div class="landing-container">
			<div class="col-1">
				<img src="<?php echo esc_url( YITH_WCAN_URL ); ?>assets/images/premium/02.jpg" alt="Filter types"/>
			</div>
			<div class="col-2">
				<div class="section-title">
					<h2><?php echo esc_html_x( 'The plugin includes:', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?></h2>
				</div>
				<p>
					<?php
					echo wp_kses_post(
						_x(
							'<b>Filter by category</b>: to let users choose which product category to view<br/>
<b>Filter by tag</b>: to let users filter products by tag<br/>
<b>Filter by price</b>: to let users filter products by a specific price range (based on their budget availability)<br/>
<b>Filter by color and size</b>: you can create filters for all the attributes available in your store, like color and size. For the color filter, you can either choose square or circular color swatches or use custom images to recall a specific pattern, shade or fabric texture<br/>
<b>Filter by rating</b>: to let your users filter products based on other customers’ reviews (most e-buyers want to skip low-rated products and concentrate only on high-rated ones)<br/>
<b>Filter by brand</b>: thanks to the integration with our YITH Brands Add-on plugin, you can also filter products by specific brands<br/>
<b>Show only on-sale products</b>: thanks to this option, your users can filter products and view only those with a discount<br/>
<b>Show only in-stock products</b>: thanks to this option, your users can filter products based on their needs and exclude out-of-stock products from the list',
							'[ADMIN] Premium tab',
							'yith-woocommerce-ajax-navigation'
						)
					);
					?>
				</p>
			</div>
		</div>
	</div>

	<div class="section section-odd clear">
		<div class="landing-container">
			<div class="col-2">
				<div class="section-title">
					<h2><?php echo esc_html_x( 'Choose the style of your filters', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?></h2>
				</div>
				<p>
					<?php echo esc_html_x( 'Choose whether to show filters as checkboxes, radio buttons, select dropdowns, multi-select, labels or images. For example, for the color filter, you can use a text list, color swatches or upload custom images that better represent the product color shades or specific patterns. For product categories, you can also use textual labels or use custom icons to visually represent each of your categories', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?>
				</p>
			</div>
			<div class="col-1">
				<img src="<?php echo esc_url( YITH_WCAN_URL ); ?>assets/images/premium/03.jpg" alt="Filter designs"/>
			</div>
		</div>
	</div>

	<div class="section section-even clear">
		<div class="landing-container">
			<div class="col-1">
				<img src="<?php echo esc_url( YITH_WCAN_URL ); ?>assets/images/premium/04.jpg" alt="Toggles"/>
			</div>
			<div class="col-2">
				<div class="section-title">
					<h2><?php echo esc_html_x( 'Choose whether to show the filters in a toggle or not', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?></h2>
				</div>
				<p>
					<?php
					echo esc_html_x( 'For every filter you can choose whether to show it in a toggle — open or collapsed to optimize the available space — or simply show all the options on the page', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' );
					?>
				</p>
			</div>
		</div>
	</div>

	<div class="section section-odd clear">
		<div class="landing-container">
			<div class="col-2">
				<div class="section-title">
					<h2><?php echo esc_html_x( 'Make filters work in AJAX', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?></h2>
				</div>
				<p>
					<?php echo esc_html_x( 'Allow your users to view the results of the filters and to get feedback in real-time. Or, if you want to, disable the AJAX option and show a button “Apply filters” to show the filtered products', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?>
				</p>
			</div>
			<div class="col-1">
				<img src="<?php echo esc_url( YITH_WCAN_URL ); ?>assets/images/premium/05.jpg" alt="AJAX Filters"/>
			</div>
		</div>
	</div>

	<div class="section section-even clear">
		<div class="landing-container">
			<div class="col-1">
				<img src="<?php echo esc_url( YITH_WCAN_URL ); ?>assets/images/premium/06.jpg" alt="Filtered Results"/>
			</div>
			<div class="col-2">
				<div class="section-title">
					<h2><?php echo esc_html_x( 'Choose where to show the filtered results', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?></h2>
				</div>
				<p>
					<?php
					echo esc_html_x( 'Choose whether to show the filter results on the same page or redirect the user to a new page', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' );
					?>
				</p>
			</div>
		</div>
	</div>

	<div class="section section-odd clear">
		<div class="landing-container">
			<div class="col-2">
				<div class="section-title">
					<h2><?php echo esc_html_x( 'Choose if and where to show the “Reset Filters” button and the selected filters', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?></h2>
				</div>
				<p>
					<?php echo esc_html_x( 'To improve the user experience on your shop you can show the active filters (and choose whether they should appear in the filters panel on top, above the list of products) and a button that allows resetting all the filters in one click and to go back to the original product list', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?>
				</p>
			</div>
			<div class="col-1">
				<img src="<?php echo esc_url( YITH_WCAN_URL ); ?>assets/images/premium/07.jpg" alt="Reset filters/Active filters"/>
			</div>
		</div>
	</div>

	<div class="section section-even clear">
		<div class="landing-container">
			<div class="col-1">
				<img src="<?php echo esc_url( YITH_WCAN_URL ); ?>assets/images/premium/08.jpg" alt="Customization"/>
			</div>
			<div class="col-2">
				<div class="section-title">
					<h2><?php echo esc_html_x( 'Customize the colors of the filters area', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?></h2>
				</div>
				<p>
					<?php
					echo esc_html_x( 'If you choose the plugin style, you can further customize it and choose the background color of the filters area, the text colors and the accent color through which the active options are highlighted', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' );
					?>
				</p>
			</div>
		</div>
	</div>

	<div class="section section-odd clear">
		<div class="landing-container">
			<div class="col-2">
				<div class="section-title">
					<h2><?php echo esc_html_x( 'Customize the loader', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?></h2>
				</div>
				<p>
					<?php echo esc_html_x( 'Use the default loader image or upload your own one, if you want to give it your personal touch', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?>
				</p>
			</div>
			<div class="col-1">
				<img src="<?php echo esc_url( YITH_WCAN_URL ); ?>assets/images/premium/09.jpg" alt="Custom loader"/>
			</div>
		</div>
	</div>

	<div class="section section-even clear">
		<div class="landing-container">
			<div class="col-1">
				<img src="<?php echo esc_url( YITH_WCAN_URL ); ?>assets/images/premium/10.jpg" alt="Custom permalinks"/>
			</div>
			<div class="col-2">
				<div class="section-title">
					<h2><?php echo esc_html_x( 'Choose how to configure the permalinks of the page with the filtered results', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?></h2>
				</div>
				<p>
					<?php
					echo esc_html_x( 'Configure the URL pattern of the pages with active filters: you can choose whether to keep the page URL unchanged, to add the selected filters, or to edit it from the plugin permalinks (this will make the URLs shorter and easier to share)', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' );
					?>
				</p>
			</div>
		</div>
	</div>

	<div class="section section-cta section-odd">
		<div class="cta-container">
			<div class="premium-cta">
				<p>
					<?php
					// translators: HIGHLIGHT content should be placed between square brackets [].
					echo wp_kses_post( preg_replace( '/\[([^]]+)]/', '<span class="highlight">$1</span>', _x( 'Upgrade to [premium version] of<br/>[YITH WooCommerce Ajax Product Filter] to benefit<br/>from all features!', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ) ) );
					?>
				</p>
				<a href="<?php echo esc_url( $this->get_premium_landing_uri() ); ?>" target="_blank" class="premium-cta-button button btn">
					<?php echo esc_html_x( 'UPGRADE', '[ADMIN] Premium tab', 'yith-woocommerce-ajax-navigation' ); ?>
				</a>
			</div>
		</div>
	</div>
</div>