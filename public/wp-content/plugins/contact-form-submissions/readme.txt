=== Plugin Name ===
Contributors: jasongreen
Tags: contact form 7, save contact form, submissions, contact form db, cf7, wpcf7, contact form storage, contact form seven, contact form 7 db, export contact form
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SNHXWSXSPYATE
Requires at least: 3.0.1
Tested up to: 5.7
Stable tag: 1.7.1
Requires PHP: 5.6
License: GPLv3

Never miss an enquiry again! Save & Export your Contact Form 7 submissions.

== Description ==

Easy install, no configuration necessary. Once activated all contact form 7 submissions will be saved so you can view them in wp-admin.

Each submission is stored in the database so they can be easily managed using the default WordPress interface. You can filter subsmissions by searching for keywords, selecting individual contact forms or picking a date range. To show the posted values in the listing table just filter the submissions by a form.

Files are stored in the /wp-content/uploads directory and can be previewed or downloaded from the single submission page.

All submissions can be exported in CSV format using the export button.

Please note this plugin will not work with demo mode enabled.

This plugin has been made with no ads or donation links so you can use this on all your sites.

== Installation ==

1. Upload `contact-form-submissions` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

You will find 'Submissions' menu in your WordPress admin panel under Contact.

== Frequently Asked Questions ==

None yet

== Screenshots ==

1. Submissions overview screen
2. Submissions filtered view
3. Submission detailed screen

== Changelog ==

= 1.7.1 =
* Security fix

= 1.7 =
* Security fixes
* Fixed image upload with contact form 7 code change

= 1.6.4 =
* Added security fix to escape user submitted data

= 1.6.3 =
* Added check for mb_convert_encoding. Updating query to add constant as prefix.

= 1.6.2 =
* Fixed the problem with character encoding when exporting. Thanks to [archie22is](https://wordpress.org/support/users/archie22is/) for the fix.

= 1.6.1 =
* Fixed an issue with character encoding in exports
* Fixed an issue with blank exports

= 1.6 =
* Enabled saving mail2 by default.
* Fixed an issue where mail2 was not being saved.

= 1.5.9 =
* Added security fix to escape user submitted data

= 1.5.8 =
* Disabled saving mail2 by default. Overridable with filter wpcf7s_save_submission_mail2.
* Fixed issue where attachments were not being saved.

= 1.5.7 =
* Fixed an issue where some admins were not able to export submissions.
* Now saves submissions when demo mode is enabled.

= 1.5.6 =
* Export bug fixes and added code filters

= 1.5.5 =
* Minor bug fix

= 1.5.4 =
* Minor bug fixes.
* Credit to @fabriziopera for his contribution.

= 1.5.3 =
* Minor bug fixes

= 1.5.2 =
* Minor bug fixes

= 1.5.1 =
* Added ability to export submissions in csv format

= 1.5 =
* Added support for files

= 1.4.1 =
* Minor bug fix

= 1.4 =
* Added columns to the listing page to show all form posted values when filtering by a contact form

= 1.3.2 =
* Minor bug fix

= 1.3.2 =
* Removed filter that broke some RSS feeds

= 1.3.1 =
* Updated to only save fields that have a value

= 1.3 =
* Updated to now save all posted data seperately. This can be viewed in each Submission page.

= 1.2.2 =
* Minor update to remove PHP warning

= 1.2.1 =
* Security fix: Fixed posts from being loaded when not logged in. Thanks to [aurepons](https://wordpress.org/support/profile/aurepons) for discovering the issue.

= 1.2 =
* Added screenshots
* Added support for large mail text
* Added more support for Internationalization

= 1.1 =
* Added checks for older versions of cf7

= 1.0 =
* First release
