<?php
/**
 * Widget: Events List Event
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/v2/widgets/events-list/event.php
 *
 * See more documentation about our views templating system.
 *
 * @link http://m.tri.be/1aiy
 *
 * @version 5.2.1
 *
 * @var WP_Post            $event   The event post object with properties added by the `tribe_get_event` function.
 * @var array<string,bool> $display Associative array of display settings for event meta.
 *
 * @see tribe_get_event() For the format of the event object.
 */

$container_classes = [ 'tribe-common-g-row', 'tribe-events-widget-events-list__event-row' ];
$container_classes['tribe-events-widget-events-list__event-row--featured'] = $event->featured;

$event_classes = tribe_get_post_class( [ 'tribe-events-widget-events-list__event' ], $event->ID );
?>
<div <?php tribe_classes( $container_classes ); ?>>

	<?php $this->template( 'widgets/events-list/event/date-tag', [ 'event' => $event ] ); ?>

	<div class="tribe-events-widget-events-list__event-wrapper tribe-common-g-col">
		<article <?php tribe_classes( $event_classes ) ?>>
			<div class="tribe-events-widget-events-list__event-details">

				<header class="tribe-events-widget-events-list__event-header">
					<?php $this->template( 'widgets/events-list/event/date', [ 'event' => $event ] ); ?>
					<?php $this->template( 'widgets/events-list/event/title', [ 'event' => $event ] ); ?>
				</header>

				<?php // $this->template( 'widgets/events-list/event/cost', [ 'event' => $event, 'display' => $display ] ); ?>
				<?php // $this->template( 'widgets/events-list/event/venue', [ 'event' => $event, 'display' => $display ] ); ?>
				<?php // $this->template( 'widgets/events-list/event/organizer', [ 'event' => $event, 'display' => $display ] ); ?>

			</div>
		</article>
	</div>

</div>
