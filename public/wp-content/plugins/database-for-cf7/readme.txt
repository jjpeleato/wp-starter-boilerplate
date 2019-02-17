=== Database for CF7 ===
Contributors: code4life
Tags: Contact Form 7, CF7, CF7 Database, Database, Save contact form,
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=code4lifeitalia@gmail.com&item_name=Donazione&item_number=Contributo+libero¤cy_code=EUR&lc=it_IT
Requires at least: 4.6
Tested up to: 4.9
Stable tag: 1.2.1
License: GPLv3
License URI: http://www.gnu.org/licenses/gpl-3.0.html

Save CF7 submitted form informations into your WordPress database.

== Description ==
Database for CF7 is a plugin developed to store so simple and automatic all information received via the contact forms on your WordPress. It will thus have an important tool to complete Contact Form 7 plugin With Database for CF7, no message will be lost and you will have a longer list of contacts directly in your administration panel, without having to look for the emails that you need on the various email client installed on your PC!

= Features =
Database for CF7 plugin provide you a lot of extra features, such as:
* Advanced filters
* Advanced search
* Multiple export format
* Multilanguage

For more information, see [Official page](https://code4life.it/shop/plugins/database-for-cf7/).

= Docs & Support =
You can find help in the [support forum](https://wordpress.org/support/plugin/database-for-cf7/) on WordPress.org. If you can't locate any topics that pertain to your particular issue, post a new topic for it.

= Translations =
You can translate Database for CF7 on [translate.wordpress.org](https://translate.wordpress.org/projects/wp-plugins/database-for-cf7).

== Installation ==
1. Upload the entire `database-for-cf7` folder to the `/wp-content/plugins/` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the `Plugins` menu in WordPress.
3. You will find `Database` under the `Contact` menu in your WordPress admin panel.

== Frequently Asked Questions ==

= Where do I see the saved data? =

In the admin page, under CF7 `Contact` menu

= What is the name of the table where the data is stored? =

`wp_cf7db`
Note: if you changed your WordPress MySql table prefix from the default `wp_` to something else, then this table will also have that prefix instead of `wp_`

= If I uninstall the plugin, what happens to its data in the database? =

By default the plugin delete all its data if you uninstall it.
You can always deactivate the plugin without loosing data.

== Screenshots ==
1. Form submitted stored data
2. Form data filters
3. Advanced search

== Changelog ==
For more information, see [Official page](https://code4life.it/shop/plugins/database-for-cf7/).

= v1.2.1 =
* Compatibility check for CF7 v4.8.1

= v1.2.0 =
* Added dashboard widget

= v1.1.3 =
* Improved dependencies checks
* Translation fix

= v1.1.2 =
* Fix security data validation escaping and validating data

= v1.1.1 =
* Fix multilang json for datatables

= v1.1.0 =
* Initial release

== Upgrade Notice ==
= 1.1.2 =
Improved security

= 1.1.1 =
Improved compatibility with multilanguage support