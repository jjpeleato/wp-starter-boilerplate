<?php
/*
Plugin Name: Contact Form Submissions
Description: Never miss an enquiry again! Save all Contact Form 7 submissions in your database.
Version:     1.7.1
Author:      Jason Green
License:     GPLv3
Domain Path: /languages
Text Domain: contact-form-submissions
*/

define('WPCF7S_DIR', realpath(dirname(__FILE__)));
define('WPCF7S_FILE', 'contact-form-submissions/contact-form-submissions.php');

require_once WPCF7S_DIR . '/Submissions.php';
require_once WPCF7S_DIR . '/Admin.php';

/**
 * Save the WPCF7Submissions class for later
 */
function contact_form_submissions_init()
{
    global $contact_form_submissions;
    $contact_form_submissions = new WPCF7Submissions();
}
add_action('init', 'contact_form_submissions_init', 9);

/**
 * Save the WPCF7SAdmin class for later
 */
function contact_form_submissions_admin_init()
{
    global $contact_form_submissions_admin;
    $contact_form_submissions_admin = new WPCF7SAdmin();
}
add_action('admin_init', 'contact_form_submissions_admin_init');

/**
 * Load language file
 */
function contact_form_submissions_textdomain()
{
    load_plugin_textdomain('contact-form-submissions', false, basename( dirname( __FILE__ ) ) . '/languages/');

}
add_action('plugins_loaded', 'contact_form_submissions_textdomain');
