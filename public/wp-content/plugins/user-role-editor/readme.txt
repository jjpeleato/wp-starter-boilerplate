=== User Role Editor ===
Contributors: shinephp
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=vladimir%40shinephp%2ecom&lc=RU&item_name=ShinePHP%2ecom&item_number=User%20Role%20Editor%20WordPress%20plugin&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted
Tags: user, role, editor, security, access, permission, capability
Requires at least: 4.0
Tested up to: 5.7
Stable tag: 4.59
Requires PHP: 5.6
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

= [4.59] 05.04.2021 =
* Update: PHP constant URE_WP_ADMIN_URL was replaced with direct 'admin_url()' call to respect the 'admin_url' filter applied by the get_admin_url() WordPress API function.
* Update: Editing roles and capabilities granted to selected user ("Capabilities" link under user row at the "Users" list) executes 'add_user_role' or 'remove_user_role' actions only in case it really grants or revokes roles and/or capabilities.
  Previous versions fully revoked and granted again all roles during user permissions update even in case roles list was not changed. It was leaded to the false execution of the mentioned add/remove role actions.

= [4.58.3] 02.03.2021 =
* Update: URE automatically adds custom taxonomies user capabilities to administrator role before opening "Users->User Role Editor" page.
* Fix: Role changes were not saved with option "Confirm role update" switched off.

= [4.58.2] 15.01.2021 =
* Fix: Additional options turned ON for a role was not saved during role update.
* Update: All JavaScript files are loaded with URE plugin version number as a query string for cache busting purpose.

= [4.58.1] 11.01.2021 =
* Fix: User lost assigned role(s) after click "Update" at the user permissions page, opened via "Selected user->Capabilities" or "User Profile->Capabilities->Edit" link.

= [4.58] 11.01.2021 =
* Update: Users->User Role Editor: Update button saves changes via AJAX without full page reload.
* Fix: New user registered via frontend (wp-login.php?action=register) automatically receives additional (other) default role(s) according to selection made at User Role Editor settings "Other default roles" tab.
* Fix: "PHP Deprecated: Required parameter $max_ind follows optional parameter $used in ..\wp-content\plugins\user-role-editor\includes\classes\advertisement.php on line 31" PHP 8.0 notice was fixed.
* Fix: "JQMIGRATE: jquery.fn.resize() event shorthand is deprecated" notice was fixed.
* Fix: "JQMIGRATE: jQuery.fn.click() event shorthand is deprecated" notice was fixed.
* Fix: "JQMIGRATE: Number-typed values are deprecated for jQuery.fn.css( (property name), value )" notice was fixed.

File changelog.txt contains the full list of changes.

== Additional Documentation ==

You can find more information about "User Role Editor" plugin at [this page](http://www.shinephp.com/user-role-editor-wordpress-plugin/)

I am ready to answer on your questions about plugin usage. Use [plugin page comments](http://www.shinephp.com/user-role-editor-wordpress-plugin/) for that.

== Upgrade Notice ==
= [4.56.1] 05.09.2020 =
* New: WordPress multisite: Main site: Users->User Role Editor->Apply to All->Update: 'ure_after_network_roles_update' action hook was added. It is executed after all roles were replicated from the main site to the all other subsites of the network.
* Fix: "Granted Only" filter did not work.
* Fix: Warning was fixed: wp-content/plugins/user-role-editor/js/ure.js: jQuery.fn.attr('checked') might use property instead of attribute.
