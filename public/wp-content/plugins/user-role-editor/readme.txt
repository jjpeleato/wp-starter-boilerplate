=== User Role Editor ===
Contributors: shinephp
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=vladimir%40shinephp%2ecom&lc=RU&item_name=ShinePHP%2ecom&item_number=User%20Role%20Editor%20WordPress%20plugin&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted
Tags: user, role, editor, security, access, permission, capability
Requires at least: 4.0
Tested up to: 5.2.2
Stable tag: 4.51.2
Requires PHP: 5.5
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

User Role Editor WordPress plugin makes user roles and capabilities changing easy. Edit/add/delete WordPress user roles and capabilities.

== Description ==

User Role Editor WordPress plugin allows you to change user roles and capabilities easy.
Just turn on check boxes of capabilities you wish to add to the selected role and click "Update" button to save your changes. That's done. 
Add new roles and customize its capabilities according to your needs, from scratch of as a copy of other existing role. 
Unnecessary self-made role can be deleted if there are no users whom such role is assigned.
Role assigned every new created user by default may be changed too.
Capabilities could be assigned on per user basis. Multiple roles could be assigned to user simultaneously.
You can add new capabilities and remove unnecessary capabilities which could be left from uninstalled plugins.
Multi-site support is provided.

To read more about 'User Role Editor' visit [this page](http://www.shinephp.com/user-role-editor-wordpress-plugin/) at [shinephp.com](http://shinephp.com)


Do you need more functionality with quality support in a real time? Do you wish to remove advertisements from User Role Editor pages? 
[Buy Pro version](https://www.role-editor.com). 
[User Role Editor Pro](https://www.role-editor.com) includes extra modules:
<ul>
<li>Block selected admin menu items for role.</li>
<li>Hide selected front-end menu items for no logged-in visitors, logged-in users, roles.</li>
<li>Block selected widgets under "Appearance" menu for role.</li>
<li>Show widgets at front-end for selected roles.</li>
<li>Block selected meta boxes (dashboard, posts, pages, custom post types) for role.</li>
<li>"Export/Import" module. You can export user role to the local file and import it to any WordPress site or other sites of the multi-site WordPress network.</li> 
<li>Roles and Users permissions management via Network Admin  for multisite configuration. One click Synchronization to the whole network.</li>
<li>"Other roles access" module allows to define which other roles user with current role may see at WordPress: dropdown menus, e.g assign role to user editing user profile, etc.</li>
<li>Manage user access to editing posts/pages/custom post type using posts/pages, authors, taxonomies ID list.</li>
<li>Per plugin users access management for plugins activate/deactivate operations.</li>
<li>Per form users access management for Gravity Forms plugin.</li>
<li>Shortcode to show enclosed content to the users with selected roles only.</li>
<li>Posts and pages view restrictions for selected roles.</li>
<li>Admin back-end pages permissions viewer</li>
</ul>
Pro version is advertisement free. Premium support is included.

== Installation ==

Installation procedure:

1. Deactivate plugin if you have the previous version installed.
2. Extract "user-role-editor.zip" archive content to the "/wp-content/plugins/user-role-editor" directory.
3. Activate "User Role Editor" plugin via 'Plugins' menu in WordPress admin menu. 
4. Go to the "Users"-"User Role Editor" menu item and change your WordPress standard roles capabilities according to your needs.

== Frequently Asked Questions ==
- Does it work with WordPress in multi-site environment?
Yes, it works with WordPress multi-site. By default plugin works for every blog from your multi-site network as for locally installed blog.
To update selected role globally for the Network you should turn on the "Apply to All Sites" checkbox. You should have superadmin privileges to use User Role Editor under WordPress multi-site.
Pro version allows to manage roles of the whole network from the Netwok Admin.

To read full FAQ section visit [this page](http://www.shinephp.com/user-role-editor-wordpress-plugin/#faq) at [shinephp.com](shinephp.com).

== Screenshots ==
1. screenshot-1.png User Role Editor main form
2. screenshot-2.png Add/Remove roles or capabilities
3. screenshot-3.png User Capabilities link
4. screenshot-4.png User Capabilities Editor
5. screenshot-5.png Bulk change role for users without roles
6. screenshot-6.png Assign multiple roles to the selected users

To read more about 'User Role Editor' visit [this page](http://www.shinephp.com/user-role-editor-wordpress-plugin/) at [shinephp.com](shinephp.com).

= Translations =

If you wish to check available translations or help with plugin translation to your language visit this link
https://translate.wordpress.org/projects/wp-plugins/user-role-editor/


== Changelog =

= [4.51.2] 15.07.2019 =
* Fix: Dialog button labels inside User Role Editor ('Cancel' buttons especially) were shown with not correct translation or not translated at all. Thanks to @lucaboccianti for [this bug report](https://wordpress.org/support/topic/buttons-delete-role-cancel-dont-delete-role-inverted-functions-italian/).
* Update: Roles inside WordPress roles dropdown lists are sorted by alphabet. 

= [4.51.1] 15.06.2019 =
* Fix: Superadmin could not revoke capabilities from 'administrator' role under WordPress multisite.

= [4.51] 21.05.2019 =
* New: Bulk actions were added to the Users page: "Add Role", "Revoke Role". Select role from the related drop-down menu and add/revoke it to/from the list of pre-selected users.
* Update: Bulk grant roles feature ("Grant roles" button at the "Users" page) and Bulk grant role to users without role ("Without role" button at the "Users" page) are protected by 'promote_users' capability instead of 'edit_users', exactly the same way as WordPress itself does for its "Change role to".
* Update: 'load-users.php' action is used instead of 'admin_init' to load support code for "Without role" and "Grant roles" button at the "Users" page.
* Update: URE ignores now a capability without ID in case it was added to the database somehow (other plugin bug, etc.). Such incorrect empty capability is removed from the capabilities list as a result after any role update.

= [4.50.2] 01.04.2019 =
* Fix: WordPress multisite: PHP Notice "wpmu_new_blog is deprecated since version 5.1.0! Use wp_insert_site instead." was removed. URE uses 'wp_initialize_site' action now instead of deprecated 'wpmu_new_blog'. This fix provides correct roles replication from the main blog/site to a new created blog/site.

= [4.50.1] 16.03.2019 =
* Fix: WP Multisite: Users->Capabilities->Update: "Fatal error: Uncaught Error: Call to undefined method URE_Editor::check_blog_user() in /wp-content/plugins/user-role-editor/includes/classes/editor.php on line 576" was fixed. 
* Fix: WooCommerce group was not shown under "Custom capabilities" section.

= [4.50] 03.03.2019 =
* PHP version 5.5 was marked as required.
* Update: General code restructure and optimization.
* Update: URE_Base_Lib::get_blog_ids() returns null, if it's called under WordPress single site (not multisite).
* Update: URE_Editor::prepare_capabilities_to_save() : "Invalid argument supplied for foreach()" warning was excluded in case there was no valid data structures initialization.
* Update: 'administrator' role protection was enhanced. URE always does not allow to revoke capability from 'administrator' role. That was possible earlier after the 'administrator' role update.
* Update: 2 new actions 'ure_settings_tools_show' and 'ure_settings_tools_exec' allows to extends the list of sections available at the Settings->User Role Editor->Tools tab.

File changelog.txt contains the full list of changes.

== Additional Documentation ==

You can find more information about "User Role Editor" plugin at [this page](http://www.shinephp.com/user-role-editor-wordpress-plugin/)

I am ready to answer on your questions about plugin usage. Use [plugin page comments](http://www.shinephp.com/user-role-editor-wordpress-plugin/) for that.

== Upgrade Notice ==

= [4.51.1] 15.06.2019 =
* Fix: Superadmin could not revoke capabilities from 'administrator' role under WordPress multisite.





