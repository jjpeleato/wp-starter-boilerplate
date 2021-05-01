<?php
/**
 * Filter by Tax object
 *
 * Offers method specific to Taxonomy filter
 *
 * @author  YITH
 * @package YITH WooCommerce Ajax Product FIlter
 * @version 4.0.0
 */

if ( ! defined( 'YITH_WCAN' ) ) {
	exit;
} // Exit if accessed directly

if ( ! class_exists( 'YITH_WCAN_Filter_Tax' ) ) {
	/**
	 * Taxonomy Filter Handling
	 *
	 * @since 1.0.0
	 */
	class YITH_WCAN_Filter_Tax extends YITH_WCAN_Filter {

		/**
		 * List of formatted terms for current view
		 *
		 * @var array
		 */
		protected $_formatted_terms;

		/**
		 * Checks whether current filter is active
		 *
		 * @return bool Whether current filter is active.
		 */
		public function is_active() {
			return YITH_WCAN_Query()->is_filtered_by( $this->get_taxonomy() );
		}

		/**
		 * Method that will output content of the filter on frontend
		 *
		 * @return string Template for current filter
		 */
		public function render() {
			$atts = array(
				'filter' => $this,
				'preset' => $this->get_preset(),
			);

			return yith_wcan_get_template( 'filters/filter-tax.php', $atts, false );
		}

		/**
		 * Render start for the filter section or subsection
		 *
		 * @param int $level Current nesting level.
		 * @return string Header template.
		 */
		public function render_start( $level = 0 ) {
			$atts = array(
				'filter' => $this,
				'preset' => $this->get_preset(),
				'level'  => $level,
			);

			return yith_wcan_get_template( 'filters/filter-tax/filter-start.php', $atts, false );
		}

		/**
		 * Render end for the filter section or subsection
		 *
		 * @param int $level Current nesting level.
		 * @return string Footer template.
		 */
		public function render_end( $level = 0 ) {
			$atts = array(
				'filter' => $this,
				'preset' => $this->get_preset(),
				'level'  => $level,
			);

			return yith_wcan_get_template( 'filters/filter-tax/filter-end.php', $atts, false );
		}

		/**
		 * Render every single item in the list
		 *
		 * @param int|WP_Term $term         Term object, or term id.
		 * @param array       $term_options Array of additional options for the term.
		 *
		 * @return string Item template.
		 */
		public function render_item( $term, $term_options = array() ) {
			$design = $this->get_filter_design();
			$default_callback = "render_item_{$design}";

			if ( ! $term instanceof WP_Term ) {
				$term = get_term( $term, $this->get_taxonomy() );
			}

			if ( ! $term || is_wp_error( $term ) ) {
				return '';
			}

			// populate additional options.
			if ( ! isset( $term_options['level'] ) ) {
				$term_options['level'] = 0;
			}

			if ( ! isset( $term_options['additional_classes'] ) ) {
				$term_options['additional_classes'] = array();
			}

			// configure item classes.
			$term_options['additional_classes'][] = "level-{$term_options['level']}";

			if ( ! empty( $term_options['children'] ) ) {
				$hierarchy = $this->get_hierarchical();

				if ( 'collapsed' == $hierarchy ) {
					$term_options['additional_classes'][] = 'hierarchy-collapsable';
					$term_options['additional_classes'][] = 'closed';
				} elseif ( 'expanded' == $hierarchy ) {
					$term_options['additional_classes'][] = 'hierarchy-collapsable';
					$term_options['additional_classes'][] = 'opened';
				}
			}

			if ( ! $term_options['count'] && 'or' === $this->get_adoptive() ) {
				$term_options['additional_classes'][] = 'disabled';
			}

			// allow third party dev change attributes for the item.
			$term_options = apply_filters( 'yith_wcan_tax_filter_item_args', $term_options, $term->term_id, $this );

			// implode additional classes.
			$term_options['additional_classes'] = implode( ' ', $term_options['additional_classes'] );

			if ( method_exists( $this, $default_callback ) ) {
				$item = $this->{$default_callback}( $term, $term_options );
			} else {
				$item = apply_filters( 'yith_wcan_filter_tax_render_item_' . $design, '', $term, $term_options );
			}

			return $item;
		}

		/**
		 * Render every single item in a radio filter
		 *
		 * @param WP_Term $term         The term.
		 * @param array   $term_options Array of term options.
		 * @return string Item HTML template.
		 */
		public function render_item_radio( $term, $term_options ) {
			return $this->render_generic_item( 'radio', $term, $term_options );
		}

		/**
		 * Render every single option in a select filter
		 *
		 * @param WP_Term $term         The term.
		 * @param array   $term_options Array of term options.
		 * @return string Item HTML template.
		 */
		public function render_item_select( $term, $term_options ) {
			return $this->render_generic_item( 'select', $term, $term_options );
		}

		/**
		 * Render every single item in a checkbox filter
		 *
		 * @param WP_Term $term         The term.
		 * @param array   $term_options Array of term options.
		 * @return string Item HTML template.
		 */
		public function render_item_checkbox( $term, $term_options ) {
			return $this->render_generic_item( 'checkbox', $term, $term_options );
		}

		/**
		 * Render every single item in a checkbox filter
		 *
		 * @param WP_Term $term         The term.
		 * @param array   $term_options Array of term options.
		 * @return string Item HTML template.
		 */
		public function render_item_text( $term, $term_options ) {
			return $this->render_generic_item( 'text', $term, $term_options );
		}

		/**
		 * Render every single item in a checkbox filter
		 *
		 * @param WP_Term $term         The term.
		 * @param array   $term_options Array of term options.
		 * @return string Item HTML template.
		 */
		public function render_item_label( $term, $term_options ) {
			$columns = $this->get_column_number();

			$term_options['additional_classes'] .= $term_options['image'] ? " with-image filter-has-{$columns}-column" : '';

			return $this->render_generic_item( 'label', $term, $term_options );
		}

		/**
		 * Render every single item in a checkbox filter
		 *
		 * @param WP_Term $term         The term.
		 * @param array   $term_options Array of term options.
		 * @return string Item HTML template.
		 */
		public function render_item_color( $term, $term_options ) {
			$columns = $this->get_column_number();

			$term_options['additional_classes'] .= " filter-has-{$columns}-column";

			return $this->render_generic_item( 'color', $term, $term_options );
		}

		/**
		 * Render every item that doesn't need special processing; will pick up correct template depending on first param
		 *
		 * @param string  $template     Template for the item.
		 * @param WP_Term $term         The term.
		 * @param array   $term_options Array of term options.
		 * @return string Item HTML template.
		 */
		public function render_generic_item( $template, $term, $term_options ) {
			$atts = array_merge(
				$term_options,
				array(
					'filter' => $this,
					'preset' => $this->get_preset(),
					'term' => $term,
					'show_count' => $this->show_count(),
					'allow_multiple' => 'yes' === $this->get_multiple(),
					'relation' => $this->get_relation(),
					'adoptive' => $this->get_adoptive(),
					'item_id' => "filter_{$this->get_preset()->get_id()}_{$this->get_id()}_{$term->term_id}",
					'item_name' => "filter[{$this->get_preset()->get_id()}][{$this->get_id()}]",
				)
			);

			return yith_wcan_get_template( "filters/filter-tax/items/{$template}.php", $atts, false );
		}

		/**
		 * Render hierarchy of single item, by cycling through its children
		 *
		 * @param array $children Array of children to print.
		 * @param int   $level    Current nesting level.
		 * @return string Hierarchy template
		 */
		public function render_hierarchy( $children, $level = 0 ) {
			$hierarchy = '';

			if ( empty( $children ) || ! in_array( $this->get_hierarchical(), array( 'collapsed', 'expanded', 'open' ) ) || ! in_array( $this->get_filter_design(), array( 'checkbox', 'radio', 'text' ) ) ) {
				return $hierarchy;
			}

			$level ++;

			if ( 'select' !== $this->get_filter_design() ) {
				$hierarchy .= $this->render_start( $level );
			}

			foreach ( $children as $term_id => $term_options ) {
				$term_options['level'] = $level;
				$hierarchy .= $this->render_item( $term_id, $term_options );
			}

			if ( 'select' !== $this->get_filter_design() ) {
				$hierarchy .= $this->render_end( $level );
			}

			return $hierarchy;
		}

		/**
		 * Render count for a specific term
		 *
		 * @param WP_Term $term  Current term.
		 * @param int     $count Count to render.
		 * @return string Count template
		 */
		public function render_term_count( $term, $count ) {
			$count = apply_filters( 'yith_wcan_term_count', $count, $term );

			return $this->render_count( $count );
		}

		/* === TERMS UTILS === */

		/**
		 * Checks is a term should be considered active
		 *
		 * @param WP_Term $term Current term.
		 * @return bool
		 */
		public function is_term_active( $term ) {
			return YITH_WCAN_Query()->is_term( $this->get_taxonomy(), $term );
		}

		/**
		 * Checks whether current filter has terms relevant to current query
		 *
		 * @return bool
		 */
		public function has_relevant_terms() {
			return ! ! $this->get_formatted_terms();
		}

		/**
		 * Returns a formatted list of terms, matching current selection and according to hierarchy options
		 *
		 * @return array term_id=>term_options
		 */
		public function get_formatted_terms() {
			if ( ! empty( $this->_formatted_terms ) ) {
				return $this->_formatted_terms;
			}

			$hide_empty = 'yes' === yith_wcan_get_option( 'yith_wcan_hide_empty_terms', 'no' );
			$terms = $this->get_terms_options();
			$children = array();
			$result = array();

			$sorted_terms = get_terms(
				array_merge(
					array(
						'taxonomy' => $this->get_taxonomy(),
						'include'  => array_keys( $terms ),
						'order'    => $this->get_order(),
						'number'   => apply_filters( 'yith_wcan_filter_tax_term_limit', 0 ),
						'fields'   => 'ids',
						'hide_empty' => $hide_empty,
					),
					'term_order' === $this->get_order_by() ? array(
						'orderby'  => 'include',
					) : array(
						'orderby' => $this->get_order_by(),
					),
					'parents_only' === $this->get_hierarchical() ? array( 'parent' => 0 ) : array()
				)
			);

			if ( ! empty( $sorted_terms ) ) {
				foreach ( $sorted_terms as $term_id ) {
					if ( ! isset( $terms[ $term_id ] ) ) {
						continue;
					}

					$term = $terms[ $term_id ];

					// set hierarchical data.
					$children_result = $this->_get_term_children( $term_id );

					$term['children'] = $children_result['formatted_children'];
					$term['products'] = $children_result['products'];

					// set count.
					$term['count'] = count( $term['products'] );

					// if we need to remove empty terms, skip here when count is 0.
					if ( $this->_is_term_hidden( $term ) ) {
						continue;
					}

					// populate children array.
					$children = array_merge( $children, $children_result['children'] );

					$result[ $term_id ] = $term;
				}

				// remove duplicated results, when showing hierarchical layout.
				if ( ! empty( $children ) && ! empty( $result ) && in_array( $this->get_hierarchical(), array( 'collapsed', 'expanded', 'open' ) ) && in_array( $this->get_filter_design(), array( 'checkbox', 'radio', 'text' ) ) ) {
					foreach ( $result as $term_id => $term_options ) {
						if ( ! in_array( $term_id, $children ) ) {
							continue;
						}

						unset( $result[ $term_id ] );
					}
				}
			}

			$this->_formatted_terms = $result;

			return $result;
		}

		/**
		 * Retrieves url to filter by the passed term
		 *
		 * @param WP_Term $term Current term.
		 * @return string Url to filter by passed term
		 */
		public function get_term_url( $term ) {
			$param = array( $this->get_formatted_taxonomy() => $term->slug );

			if ( $this->is_term_active( $term ) ) {
				$url = YITH_WCAN_Query()->get_filter_url( array(), $param, $this->get_relation() );
			} else {
				$url = YITH_WCAN_Query()->get_filter_url( $param, array(), $this->get_relation() );
			}

			return $url;
		}

		/**
		 * Recursively populate children hierarchy for terms
		 *
		 * @param int $term_id Term id.
		 * @return array Children hierarchy with options
		 */
		protected function _get_term_children( $term_id ) {
			$terms = $this->get_terms_options();
			$formatted_children = array();
			$children = array();
			$products = $this->_get_term_products( $term_id );

			$child_terms = get_terms(
				array_merge(
					array(
						'taxonomy' => $this->get_taxonomy(),
						'include'  => array_keys( $terms ),
						'parent'   => $term_id,
						'order'    => $this->get_order(),
						'fields'   => 'ids',
					),
					'term_order' === $this->get_order_by() ? array(
						'orderby'  => 'include',
					) : array(
						'orderby' => $this->get_order_by(),
					)
				)
			);

			foreach ( $child_terms as $child_id ) {
				if ( ! isset( $terms[ $child_id ] ) ) {
					continue;
				}

				$child = $terms[ $child_id ];

				// set hierarchical data.
				$children_result = $this->_get_term_children( $child_id );
				$child['children'] = $children_result['formatted_children'];

				// set count.
				$child['count'] = count( $children_result['products'] );

				if ( $this->_is_term_hidden( $child ) ) {
					continue;
				}

				$formatted_children[ $child_id ] = $child;

				$children[] = $child_id;
				$children   = array_merge( $children, $children_result['children'] );
				$products   = array_unique( array_merge( $products, $children_result['products'] ) );
			}

			return array(
				'children' => $children,
				'formatted_children' => $formatted_children,
				'products' => $products,
			);
		}

		/**
		 * Retrieves products for passed term_id that matches current query
		 *
		 * @param int $term_id Term id.
		 * @return array Array of matcihing product ids.
		 */
		protected function _get_term_products( $term_id ) {
			$filter_by_current_values = 'yes' === $this->get_multiple() && 'and' === $this->get_relation();
			$products = YITH_WCAN_Query()->get_query_relevant_term_objects( $this->get_taxonomy(), $term_id, $filter_by_current_values );

			return $products;
		}

		/**
		 * Count products for passed term_id that matches current query
		 *
		 * @param int $term_id Term id.
		 * @return int Count of matching product ids.
		 */
		protected function _count_term_products( $term_id ) {
			return count( $this->_get_term_products( $term_id ) );
		}

		/**
		 * Checks whether term should be hidden
		 *
		 * @param array $term_options Array describing term and its options.
		 * @return bool Whther to hide term or not
		 */
		protected function _is_term_hidden( $term_options ) {
			// hide when term doesn't match current selection.
			if ( 'hide' === $this->get_adoptive() && ! $term_options['count'] && empty( $term_options['children'] ) ) {
				return true;
			}

			return false;
		}
	}
}
