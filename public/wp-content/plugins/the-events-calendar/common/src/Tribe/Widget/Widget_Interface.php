<?php

namespace Tribe\Widget;

/**
 * Interface Widget_Interface
 *
 * @since   5.12.12
 *
 * @package Tribe\Widget
 *
 */
interface Widget_Interface {

	/**
	 * Constructor for V2 Widgets.
	 *
	 * @since 5.12.12
	 *
	 * @param string              $id_base         Optional. Base ID for the widget, lowercase. If left empty,
	 *                                             a portion of the widget's class name will be used. Has to be unique.
	 * @param string              $name            Name for the widget displayed on the configuration page.
	 * @param array<string,mixed> $widget_options  Optional. Widget options. See wp_register_sidebar_widget() for
	 *                                             information on accepted arguments. Default empty array.
	 * @param array<string,mixed> $control_options Optional. Widget control options. See wp_register_widget_control() for
	 *                                             information on accepted arguments. Default empty array.
	 */
	public function __construct( $id_base = '', $name = '', $widget_options = [], $control_options = [] );

	/**
	 * Echoes the widget content.
	 *
	 * @since 5.12.12
	 *
	 * @param array<string,mixed> $args     Display arguments including 'before_title', 'after_title',
	 *                                      'before_widget', and 'after_widget'.
	 * @param array<string,mixed> $instance The settings for the particular instance of the widget.
	 */
	public function widget( $args, $instance );

	/**
	 * Updates a particular instance of a widget.
	 *
	 * This function should check that `$new_instance` is set correctly. The newly-calculated
	 * value of `$instance` should be returned. If false is returned, the instance won't be
	 * saved/updated.
	 *
	 * @since 5.12.12
	 *
	 * @param array<string,mixed> $new_instance New settings for this instance as input by the user via
	 *                                          WP_Widget::form().
	 * @param array<string,mixed> $old_instance Old settings for this instance.
	 *
	 * @return array<string,mixed> Settings to save or bool false to cancel saving.
	 */
	public function update( $new_instance, $old_instance );

	/**
	 * Outputs the settings update form.
	 *
	 * @since 5.12.12
	 *
	 * @param array<string,mixed> $instance Current settings.
	 *
	 * @return string Default return is 'noform'.
	 */
	public function form( $instance );

	/**
	 * Returns the widget slug that allows the widget to be built via the widget class using that slug.
	 *
	 * @since 5.12.12
	 *
	 * @return string The widget slug.
	 */
	public function get_registration_slug();

	/**
	 * Sets the aliased arguments array.
	 *
	 * @see Tribe__Utils__Array::parse_associative_array_alias() The expected format.
	 *
	 * @since 5.12.12
	 *
	 * @param array<string,mixed> $alias_map An associative array of aliases: key as alias, value as mapped canonical.
	 *                         Example: [ 'alias' => 'canonical', 'from' => 'to', 'that' => 'becomes_this' ]
	 */
	public function set_aliased_arguments( array $alias_map );

	/**
	 * Gets the aliased arguments array.
	 *
	 * @since 5.12.12
	 *
	 * @return array<string,string> The associative array map of aliases and their canonical arguments.
	 */
	public function get_aliased_arguments();

	/**
	 * Returns the arguments for the widget parsed correctly with defaults applied.
	 *
	 * @since 5.12.12
	 *
	 * @param array $arguments Set of arguments passed to the widget at hand.
	 *
	 * @return array<string,mixed> The parsed widget arguments map.
	 */
	public function parse_arguments( array $arguments );

	/**
	 * Returns the array of arguments for this widget after applying the validation callbacks.
	 *
	 * @since 5.12.12
	 *
	 * @param array $arguments Set of arguments passed to the widget at hand.
	 *
	 * @return array<string,mixed> The validated widget arguments map.
	 */
	public function validate_arguments( array $arguments );

	/**
	 * Returns the array of callbacks for this widget's arguments.
	 *
	 * @since 5.12.12
	 *
	 * @return array<string,mixed> A map of the widget arguments that have survived validation.
	 */
	public function get_validated_arguments_map();

	/**
	 * Returns a widget arguments after been parsed.
	 *
	 * @since 5.12.12
	 *
	 * @return array<string,mixed> The widget arguments, as set by the user in the widget string.
	 */
	public function get_arguments();

	/**
	 * Get a widget's arguments after they have been been parsed.
	 *
	 * @since 5.12.12
	 *
	 * @param array<string,mixed> $arguments Current set of arguments.
	 *
	 * @return array<string,mixed> The widget arguments, as set by the user in the widget string.
	 */
	public function filter_arguments( $arguments );

	/**
	 * Get a single widget argument after it has been parsed and filtered.
	 *
	 * @since 5.12.12
	 *
	 * @param string|int   $index   Which index we intend to fetch from the arguments.
	 * @param array|mixed  $default Default value if it doesn't exist.
	 *
	 * @uses  Tribe__Utils__Array::get For index fetching and Default.
	 *
	 * @return mixed Value for the Index passed as the first argument.
	 */
	public function get_argument( $index, $default = null );

	/**
	 * Filter a widget argument.
	 *
	 * @since 5.12.12
	 *
	 * @param mixed       $argument The argument value.
	 * @param string|int  $index    Which index we intend to fetch from the arguments.
	 * @param array|mixed $default  Default value if it doesn't exist.
	 *
	 * @uses  Tribe__Utils__Array::get For index fetching and Default.
	 *
	 * @return mixed Value for the Index passed as the first argument.
	 */
	public function filter_argument( $argument, $index, $default = null );

	/**
	 * Get default arguments for a widget.
	 *
	 * @since 5.12.12
	 *
	 * @return array<string,mixed> The map of widget default arguments.
	 */
	public function get_default_arguments();

	/**
	 * Get a widget's default arguments.
	 *
	 * @since 5.12.12
	 *
	 * @param array<string,mixed> $default_arguments Current set of default arguments.
	 *
	 * @return array<string,mixed> The map of widget default arguments.
	 */
	public function filter_default_arguments( array $default_arguments = [] );

	/**
	 * Returns a widget's HTML.
	 *
	 * @since 5.12.12
	 *
	 * @return string The rendered widget's HTML code.
	 */
	public function get_html();
}
