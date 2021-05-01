<?php
class WPCF7SAdmin
{
    public function __construct()
    {
        add_filter('manage_wpcf7s_posts_columns', array($this, 'set_columns'), 999);
        add_action('manage_wpcf7s_posts_custom_column', array($this, 'column'), 10, 2);
        add_action('restrict_manage_posts', array($this, 'filters'));
        add_action('manage_posts_extra_tablenav', array($this, 'extra_tablenav'));

        add_action('add_meta_boxes', array($this, 'meta_boxes'), 25);

        add_action('pre_get_posts', array($this, 'admin_posts'));
        add_action('pre_get_posts', array($this, 'set_post_order'));

        add_action('wp', array($this, 'export_request'));

        add_filter('page_row_actions', array($this, 'action_row'), 25, 2);
        add_action('admin_enqueue_scripts', array($this, 'scripts'));

        add_filter('views_edit-wpcf7s', array($this, 'views'), 999);

        add_filter('gettext', array($this, 'custom_status'), 20, 2);
    }

    /**
     * Replace the default post status
     */
    public function custom_status($translations = '', $text = '')
    {
        global $pagenow, $post_type;
        if ('wpcf7s' === $post_type && is_admin() && 'edit.php' == $pagenow && 'Published' === $text) {
            $translations = __('Submitted', 'contact-form-submissions');
        }
        return $translations;
    }

    /**
     * Change the default post sort
     */
    public function set_post_order($query)
    {
        global $pagenow, $post_type;
        if ('wpcf7s' === $post_type && is_admin() && 'edit.php' == $pagenow && !isset($_GET['orderby'])) {
            $query->set('orderby', 'date');
            $query->set('order', 'DESC');
        }
    }

    /**
     * Change the default quick post links
     */
    public function views($views)
    {
        if (isset($views['publish'])) {
            $views['publish'] = str_replace(__('Published', 'contact-form-submissions'), __('Submitted', 'contact-form-submissions'), $views['publish']);
        }
        $keep_views = array('all', 'publish', 'trash');
        // remove others
        foreach (array_keys($views) as $key) {
            if (!in_array($key, $keep_views)) {
                unset($views[$key]);
            }
        }

        return $views;
    }

    /**
     * Add dropdowns to filter the posts
     */
    public function filters()
    {
        //execute only on the 'post' content type
        global $post_type;
        if ($post_type == 'wpcf7s') {
            $args = array(
                'post_type'      =>'wpcf7_contact_form',
                'posts_per_page' => '-1'
            );
            $forms = get_posts($args); ?>
            <select name="wpcf7_contact_form">
                <option value="0"><?php _e('Contact Form', 'contact-form-submissions'); ?></option>
                <?php foreach ($forms as $post) {
                ?>
                    <?php $selected = ($post->ID == filter_var($_GET['wpcf7_contact_form'], FILTER_SANITIZE_NUMBER_INT)) ? 'selected' : ''; ?>
                    <option value="<?php echo $post->ID; ?>" <?php echo $selected; ?>><?php echo $post->post_title; ?></option>
                <?php
            } ?>
            </select>
            <?php

        }
    }

    /**
     * Enqueue stylesheet
     */
    public function scripts()
    {
        // only enqueue if your on the submissions page
        if ('wpcf7s' === get_post_type() || (isset($_GET['post_type']) && 'wpcf7s' === $_GET['post_type'])) {
            wp_enqueue_style('wpcf7s-style', plugins_url('/css/admin.css', WPCF7S_FILE));
        }
    }

    /**
     * Change the post actions
     */
    public function action_row($actions, $post)
    {
        global $post_type;
        if ('wpcf7s' === $post_type) {
            // remove defaults
            unset($actions['edit']);
            unset($actions['inline hide-if-no-js']);

            $actions = array_merge(array('aview' => '<a href="' . get_edit_post_link($post->ID) . '">'.__('View', 'contact-form-submissions').'</a>'), $actions);
        }
        return $actions;
    }

    /**
     * Query posts by a specific form
     */
    public function admin_posts($query)
    {
        global $post_type;
        if ($query->is_admin && 'wpcf7s' === $post_type && $query->is_main_query()) {
            if(isset($_GET['wpcf7_contact_form'])){
                $form_id = filter_var($_GET['wpcf7_contact_form'], FILTER_SANITIZE_NUMBER_INT);
            }
            if (!empty($form_id)) {
                $query->set('meta_query', array(
                    array(
                        'key'     => 'form_id',
                        'value'    => $form_id,
                        'compare' => '='
                    )
                ));
            }
        }
    }

    /**
     * Change the default table columns
     */
    public function set_columns($columns)
    {
        $columns = array(
            'cb'            => '<input type="checkbox">',
            'submission'    => __('Submission', 'contact-form-submissions'),
            'form'          => __('Contact Form', 'contact-form-submissions')
        );

        // dynamically add cols if the user selects a form
        if (isset($_GET['wpcf7_contact_form']) && !empty($_GET['wpcf7_contact_form'])) {
            $form_id = filter_var($_GET['wpcf7_contact_form'], FILTER_SANITIZE_NUMBER_INT);

            $wpcf7s_columns = $this->get_available_columns($form_id);

            foreach ($wpcf7s_columns as $meta_key) {
                $columns[$meta_key] = str_replace('wpcf7s_posted-', '', $meta_key);
            }
        }

        $columns['date'] = __('Date', 'contact-form-submissions');

        return $columns;
    }

    /**
     * Output values in custom columns
     */
    public function column($column, $post_id)
    {
        $form_id = get_post_meta($post_id, 'form_id', true);
        $post_parent = wp_get_post_parent_id($post_id);
        $nested = ($post_parent > 0) ? '&mdash; ' : '';

        switch ($column) {

            case 'form':
                ?><a href="<?php echo add_query_arg(array('page'=>'wpcf7', 'post'=>$form_id, 'action'=>'edit'), admin_url('admin.php')); ?>"><?php echo get_the_title($form_id); ?></a><?php
                break;
            case 'sent':
                ?><a href="<?php echo add_query_arg(array('page'=>'wpcf7', 'post'=>$form_id, 'action'=>'edit'), admin_url('admin.php')); ?>"><?php echo get_the_title($form_id); ?></a><?php
                break;
            case 'submission':
                ?>
                <strong>
                <a class="row-title" href="<?php echo get_edit_post_link($post_id); ?>">
                    <?php echo $nested . htmlspecialchars(get_post_meta($post_id, 'sender', true)); ?>
                </a>
                </strong>
                <?php
                break;
            default:
                echo esc_html(get_post_meta($post_id, $column, true));
                break;
        }
    }

    /**
     * Register custom metaboxes
     */
    public function meta_boxes()
    {
        global $post_id;

        add_meta_box('wpcf7s_mail', __('Mail', 'contact-form-submissions'), array($this, 'mail_meta_box'), 'wpcf7s', 'normal');
        add_meta_box('wpcf7s_posted', __('Posted', 'contact-form-submissions'), array($this, 'posted_meta_box'), 'wpcf7s', 'normal');

        add_meta_box('wpcf7s_actions', __('Overview', 'contact-form-submissions'), array($this, 'actions_meta_box'), 'wpcf7s', 'side');
        remove_meta_box('submitdiv', 'wpcf7s', 'side');

        // only show the meta box if the post has files
        $files = $this->get_mail_files($post_id);
        if(!empty($files)){
            add_meta_box('wpcf7s_files', __('Files', 'contact-form-submissions'), array($this, 'files_meta_box'), 'wpcf7s', 'normal');
        }
    }

    /**
     * Output for the mail metabox
     */
    public function mail_meta_box($post)
    {
        $form_id = get_post_meta($post->ID, 'form_id', true);
        $sender = esc_html(get_post_meta($post->ID, 'sender', true));
        $sender_mailto = preg_replace('/([a-zA-Z0-9_\-\.]*@\\S+\\.\\w+)/', '<a href="mailto:$1">$1</a>', $sender);
        $recipient = esc_html(get_post_meta($post->ID, 'recipient', true));
        $recipient_mailto = preg_replace('/([a-zA-Z0-9_\-\.]*@\\S+\\.\\w+)/', '<a href="mailto:$1">$1</a>', $recipient);
        $subject = esc_html(get_post_meta($post->ID, 'subject', true));

        $body = apply_filters('the_content', esc_html($post->post_content));

        $additional_headers = esc_html(get_post_meta($post->ID, 'additional_headers', true)); ?>
        <table class="form-table contact-form-submission">
            <tbody>
                <tr>
                    <th scope="row"><?php _e('Contact Form', 'contact-form-submissions'); ?></th>
                    <td><a href="<?php echo add_query_arg(array('page'=>'wpcf7', 'post'=>$form_id, 'action'=>'edit'), admin_url('admin.php')); ?>"><?php echo get_the_title($form_id); ?></a></td>
                </tr>
                <tr>
                    <th scope="row"><?php _e('Sender', 'contact-form-submissions'); ?></th>
                    <td><?php echo $sender_mailto; ?></td>
                </tr>
                <tr>
                    <th scope="row"><?php _e('Recipient', 'contact-form-submissions'); ?></th>
                    <td><?php echo $recipient_mailto; ?></td>
                </tr>
                <tr>
                    <th scope="row"><?php _e('Subject', 'contact-form-submissions'); ?></th>
                    <td><?php echo $subject; ?></td>
                </tr>
                <tr>
                    <th scope="row"><?php _e('Body', 'contact-form-submissions'); ?></th>
                    <td><?php echo $body; ?></td>
                </tr>
                <?php if (!empty($additional_headers)) {
            ?>
                    <tr>
                        <th scope="row"><?php _e('Additional Headers', 'contact-form-submissions'); ?></th>
                        <td><?php echo nl2br($additional_headers); ?></td>
                    </tr>
                <?php
        } ?>
            </tbody>
        </table>

        <?php

    }
    /**
     * Output for the posted values metabox
     */
    public function posted_meta_box($post)
    {
        $values = $this->get_mail_posted_fields($post->ID); ?>
        <table class="form-table contact-form-submission">
            <tbody>
                <?php foreach ($values as $key => $value) {
                  // check if the value is serialized and unserialize it
                  $posted_field = is_serialized($value[0]) ? implode(', ', unserialize($value[0])) : $value[0];
                  $posted_field = esc_html($posted_field);
            ?>
                    <tr>
                        <th scope="row"><?php _e(str_replace('wpcf7s_posted-', '', $key), 'contact-form-submissions'); ?></th>
                        <td><?php echo $posted_field; ?></td>
                    </tr>
                <?php
        } ?>
            </tbody>
        </table>

        <?php

    }

    public function files_meta_box($post)
    {
        global $contact_form_submissions;

        $values = $this->get_mail_files($post->ID);

        $image_exts = array( 'jpg', 'jpeg', 'jpe', 'gif', 'png' ); ?>
        <table class="form-table contact-form-submission">
            <tbody>
                <?php foreach ($values as $key => $files) {
            ?>
                    <tr>
                        <th scope="row"><?php _e(str_replace('wpcf7s_file-', '', $key), 'contact-form-submissions'); ?></th>
                        <td><?php foreach ($files as $file_path) {
                            $file_type = wp_check_filetype($file_path);

                            $wpcf7s_dir = $contact_form_submissions->get_wpcf7s_url();
                            $file_url = $wpcf7s_dir . '/' . $post->ID . '/' . $file_path;

                            if(in_array($file_type['ext'], $image_exts)){
                                printf('<a href="%1$s" target="_blank"><img width="100" class="contact-form-submission-image" src="%1$s" /></a>', $file_url);
                            } else {
                                printf('<a href="%1$s" target="_blank">Open File</a>', $file_url);
                            }
                        } ?></td>
                    </tr>
                <?php
        } ?>
            </tbody>
        </table>

        <?php

    }

    /**
     * Output for the actions metabox
     */
    public function actions_meta_box($post)
    {
        $datef = __('M j, Y @ H:i');
        $date = date_i18n($datef, strtotime($post->post_date)); ?>
        <div id="minor-publishing">

            <div id="misc-publishing-actions">
                <div class="misc-pub-section curtime misc-pub-curtime">
                    <span id="timestamp"><?php _e('Submitted', 'contact-form-submissions'); ?> : <strong><?php echo $date; ?></strong></span>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <?php

    }

    /**
     * Get the posted data for a form
     *
     * @param  integer $post_id the form post ID
     *
     * @return array            the form values
     */
    public function get_mail_posted_fields($post_id = 0)
    {
        $posted = array();
        $post_meta = get_post_meta($post_id);
        $posted = array_intersect_key(
            $post_meta,
            array_flip(array_filter(array_keys($post_meta), function ($key) {
                return preg_match('/^wpcf7s_posted-/', $key);
            }))
        );

        $posted = apply_filters('wpcf7s_posted_values', $posted);

        return $posted;
    }

    /**
     * Get the posted files for a form
     *
     * @param  integer $post_id the form post ID
     *
     * @return array            the form values
     */
    public function get_mail_files($post_id = 0)
    {
        $posted = array();
        $post_meta = get_post_meta($post_id);
        if($post_meta){
            $posted = array_intersect_key(
                $post_meta,
                array_flip(array_filter(array_keys($post_meta), function ($key) {
                    return preg_match('/^wpcf7s_file-/', $key);
                }))
            );
        }

        $posted = apply_filters('wpcf7s_posted_files', $posted);

        return $posted;
    }

    /**
     * Get the fields from a form
     *
     * @param  integer $form_id the form post ID
     *
     * @return array|boolean    the form keys
     */
    public function get_available_columns($form_id = 0)
    {
        global $wpdb;

        $post_id = $wpdb->get_var("SELECT post_id FROM $wpdb->postmeta WHERE meta_key = 'form_id' AND meta_value = $form_id LIMIT 1;");

        $columns = $wpdb->get_col("SELECT meta_key FROM $wpdb->postmeta WHERE post_id = $post_id AND meta_key LIKE '%wpcf7s_%' GROUP BY meta_key");

        return $columns;
    }
    /**
     * Add an export button to the wp-list-table view
     *
     * @param  string $which top or bottom of the table
     *
     */
    public function extra_tablenav()
    {
        $screen = get_current_screen();
        if ('wpcf7s' === $screen->post_type){
            ?>
            <div class="alignleft actions wpcf7s-export">
                <button type="submit" name="wpcf7s-export" value="1" class="button-primary" title="<?php _e('Export the current set of results as CSV', 'contact-form-submissions'); ?>"><?php _e('Export to CSV', 'contact-form-submissions'); ?></button>
            </div>
            <?php
        }
    }

    /**
     * Handle requests to export all submissions from the admin view
     */
    public function export_request(){
        if(isset($_GET['wpcf7s-export']) && !empty($_GET['wpcf7s-export']) && is_admin()) {

            // get charset
            $charset = get_bloginfo( 'charset' );

            // output headers so that the file is downloaded rather than displayed
            header('Content-Type: text/csv');
            header('Content-Disposition: attachment; filename=contact-form-submissions.csv');
            header('Content-Transfer-Encoding: binary');

            // create a file pointer connected to the output stream
            $output = fopen('php://output', 'w');

            // add BOM to fix UTF-8 in Excel
            fputs($output, ( chr(0xEF) . chr(0xBB) . chr(0xBF) ));

            // use the existing query but get all posts
            global $wp_query;
            $args = array_merge( $wp_query->query_vars, array('posts_per_page' => '-1', 'fields' => 'ids'));
            $submissions = get_posts($args);
            $csv_rows = array();
            $columns = array();
            foreach($submissions as $post_id) {

                $values = $this->get_mail_posted_fields($post_id);

                foreach($values as $key => $value) {
                    // Fix serialize field (select/radio inputs)
                    if(!empty($value)){
                        foreach ($value as &$single){
                            if(is_serialized($single)){
                                $single=implode(', ', unserialize($single));
                            }
                        }
                    }

                    if(is_array($value)){
                        $value = implode(', ', $value);
                    }

                    $value = sanitize_text_field($value);
                    if(function_exists('mb_convert_encoding')){
                        $value = mb_convert_encoding($value, $charset);
                    }
                    $values[$key] = $value;

                    // if we havent already stored this column, save it now
                    if(!in_array($key, $columns)){
                        $columns[] = $key;
                    }
                }

                // add file attachments
                $files=array();
                $files_key =$this->get_mail_files($post_id);
                $upload_dir = wp_upload_dir();
                $upload_dir = $upload_dir['baseurl'];
                if(!empty($files_key)){
                    foreach($files_key as $keyFile => $valueFile) {
                        $files=array();
                        if(!empty($valueFile)){
                            foreach ($valueFile as $singleFile){
                                $files[] = "$upload_dir/wpcf7-submissions/$post_id/$singleFile";
                            }
                        }
                        $files = implode(',', $files);
                        if(function_exists('mb_convert_encoding')){
                            $value = mb_convert_encoding($files, $charset);
                        }
                        $values[$keyFile] = $files;

                        // if we havent already stored this column, save it now
                        if(!in_array($keyFile, $columns)){
                            $columns[] = $keyFile;
                        }
                    }
                }

                $contact_form_id = get_post_meta($post_id, 'form_id', true);
                $csv_rows[] = array_merge(array('id'=> $post_id, 'submission_date'=> get_the_date('Y-m-d H:i:s', $post_id), 'form_name' => get_the_title($contact_form_id)), $values);
            }
            // add default columns
            $pretty_columns = $columns = array_merge( array("id", "submission_date", "form_name"), $columns);
            foreach($pretty_columns as $key => $column) {
                // remove the plugin's prepended keys
                $pretty_columns[$key] = str_replace(array('wpcf7s_posted-', 'wpcf7s_file-'), '', $column);
            }
            fputcsv($output,$pretty_columns);

            foreach($csv_rows as $key => $row){
                foreach($columns as $column){
                    $row_values[$column] = $row[$column];
                }
                fputcsv($output,$row_values);
            }

            fclose($output);
            exit();
        }
    }
}
