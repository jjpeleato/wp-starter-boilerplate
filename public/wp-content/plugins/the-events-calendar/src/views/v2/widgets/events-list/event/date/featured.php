<?php
/**
 * Widget: Events List Event Featured Icon
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/v2/widgets/events-list/event/date/featured.php
 *
 * See more documentation about our views templating system.
 *
 * @link http://m.tri.be/1aiy
 *
 * @version 5.2.1
 *
 * @var WP_Post $event The event post object with properties added by the `tribe_get_event` function.
 *
 * @see tribe_get_event() For the format of the event object.
 */

if ( empty( $event->featured ) ) {
	return;
}
?>
<em
	class="tribe-events-widget-events-list__event-datetime-featured-icon"
	aria-label="<?php esc_attr_e( 'Featured', 'the-events-calendar' ); ?>"
	title="<?php esc_attr_e( 'Featured', 'the-events-calendar' ); ?>"
>
</em>
<span class="tribe-events-widget-events-list__event-datetime-featured-text tribe-common-a11y-visual-hide">
	<?php esc_html_e( 'Featured', 'the-events-calendar' ); ?>
</span>
