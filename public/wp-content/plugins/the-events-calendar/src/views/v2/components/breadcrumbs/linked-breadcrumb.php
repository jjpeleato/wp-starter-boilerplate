<?php
/**
 * View: Linked Breadcrumb
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/v2/components/breadcrumbs/linked-breadcrumb.php
 *
 * See more documentation about our views templating system.
 *
 * @link http://m.tri.be/1aiy
 *
 * @version 4.9.11
 *
 * @var array $breadcrumb Data for breadcrumb.
 */
?>
<li class="tribe-events-c-breadcrumbs__list-item">
	<a
		href="<?php echo esc_url( $breadcrumb['link'] ); ?>"
		class="tribe-events-c-breadcrumbs__list-item-link"
		data-js="tribe-events-view-link"
	>
		<?php echo esc_html( $breadcrumb['label'] ); ?>
	</a>
</li>
