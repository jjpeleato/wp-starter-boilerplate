<?php
/**
 * Widget: Events List
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/v2/widgets/events-list.php
 *
 * See more documentation about our views templating system.
 *
 * @link http://m.tri.be/1aiy
 *
 * @version 5.2.1
 *
 * @var array<\WP_Post>      $events             The array containing the events.
 * @var string               $rest_url           The REST URL.
 * @var string               $rest_nonce         The REST nonce.
 * @var int                  $should_manage_url  int containing if it should manage the URL.
 * @var array<string>        $container_classes  Classes used for the container of the view.
 * @var array<string,mixed>  $container_data     An additional set of container `data` attributes.
 * @var string               $breakpoint_pointer String we use as pointer to the current view we are setting up with breakpoints.
 * @var array<string,string> $messages           An array of user-facing messages, managed by the View.
 * @var array<string,bool>   $display            An array of whether to display specific event meta or not.
 * @var string               $view_more_link     The URL to view all events.
 */

$event = (object) [
	'ID' => 1234,
	'permalink' => 'https://tri.be/',
	'title' => 'Puppy time',
	'cost' => '$12 - $15',
	'venues' => [
		(object) [
			'post_title' => 'BC Place',
			'address' => '777 Pacific Blvd',
			'city' => 'Vancouver',
			'state_province' => 'BC',
			'zip' => 'V6B 4Y8',
			'country' => 'Canada',
		],
	],
	'featured' => false,
];
$events = [
	$event,
];
$rest_url = 'https://tri.be/';
$rest_nonce = 'a3ghv98awe98';
$should_manage_url = '0';
$container_classes = [ 'tribe-common', 'tribe-events', 'tribe-events-view', 'tribe-events-widget', 'tribe-events-widget--events-list' ];
$container_data = [];
$breakpoint_pointer = 'e1a5c9c2-2781-4fcb-b4fa-0ab738292e04';
$messages = [];
$display = [
	'cost'      => true,
	'venue'     => true,
	'street'    => true,
	'city'      => true,
	'region'    => true,
	'zip'       => true,
	'country'   => true,
	'phone'     => true,
	'organizer' => true,
];
$view_more_link = '#';
?>
<div
	<?php tribe_classes( $container_classes ); ?>
	data-js="tribe-events-view"
	data-view-rest-nonce="<?php echo esc_attr( $rest_nonce ); ?>"
	data-view-rest-url="<?php echo esc_url( $rest_url ); ?>"
	data-view-manage-url="<?php echo esc_attr( $should_manage_url ); ?>"
	<?php foreach ( $container_data as $key => $value ) : ?>
		data-view-<?php echo esc_attr( $key ); ?>="<?php echo esc_attr( $value ); ?>"
	<?php endforeach; ?>
	<?php if ( ! empty( $breakpoint_pointer ) ) : ?>
		data-view-breakpoint-pointer="<?php echo esc_attr( $breakpoint_pointer ); ?>"
	<?php endif; ?>
>
	<div class="tribe-common-l-container">
		<div class="tribe-events-widget-events-list">
			<header class="tribe-events-widget-events-list__header">
				<h3 class="tribe-events-widget-events-list__header-title tribe-common-h6 tribe-common-h--alt">
					<?php
					echo esc_html(
						sprintf(
							/* translators: %1$s: Event (plural). */
							_x( 'Upcoming %1$s', 'Title for events list widget.', 'the-events-calendar' ),
							tribe_get_event_label_plural()
						)
					);
					?>
				</h3>
			</header>

			<?php if ( ! empty( $events ) ) : ?>

				<div class="tribe-events-widget-events-list__events">
					<?php foreach ( $events as $event ) : ?>
						<?php
						$this->template(
							'widgets/events-list/event',
							[
								'event'   => $event,
								'display' => $display,
							]
						);
						?>
					<?php endforeach; ?>
				</div>

				<?php $this->template( 'widgets/events-list/view-more', [ 'view_more_link' => $view_more_link ] ); ?>

			<?php else : ?>

				<?php // get messages component ?>

			<?php endif; ?>
		</div>
	</div>
</div>
