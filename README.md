# WordPress: Starter boilerplate

WordPress base repository for any project.

## Environment

- LOCAL: ~
- LOCAL ADMIN: ~
- DEV: ~
- DEV ADMIN: ~
- PRE: ~
- PRE ADMIN: ~
- PRO: ~
- PRO ADMIN: ~

## Project

Built with WordPress platform using the following technologies: HTML 5, Bootstrap 4, JavaScript, jQuery, CSS3, SASS & Compass, Lando (Docker), NPM or Yarn, Gulp v.4 and Deployer.

For your projects I recommend underscores theme. More information about:

- Website: https://underscores.me/
- Theme: https://github.com/automattic/_s

**Note:** You can install the WooCommerce boilerplate and not sassify if it is ecommerce.

### Installing dependencies

- You have to install **Lando**: https://docs.devwithlando.io/

If Lando's tools does not work for you, there is another way. You must install the environment manually: XAMP, Composer, Node.JS, NPM or Yarn and Gulp CLI.

For more information visit:

- XAMP: https://www.apachefriends.org/es/index.html
- Composer: https://getcomposer.org/
- Node and NPM: https://nodejs.org/es/
- Yarn: https://yarnpkg.com/es-ES/
- Gulp: https://gulpjs.com/

**Note:** If you work with Windows < 10. To execute the commands, we recommend installing **Cygwin** http://www.cygwin.com/

**Note:** If you work with Windows 10. To execute the commands, we recommend installing **WSL 2** with Ubuntu https://docs.microsoft.com/es-es/windows/wsl/install-win10

**Note:** I recommend installing the following IDE for PHP Programming: Visual Studio Code (https://code.visualstudio.com/) or PHPStorm (recommended) (https://www.jetbrains.com/phpstorm/).

### Project skeleton

```
├─ .husky/ # Husky directory (git-hooks)
├─ assets/ # Front-end directory
│  ├─ acf/
│  ├─ font/
│  ├─ img/
│  ├─ js/
│  ├─ scss/
│  ├─ .htaccess.dist
│  └─ .htpasswd.dist
├─ gulp/
│  ├─ task/
│  └─ config.js # Paths and configuration Gulp system.
├─ private/
├─ public/ # WordPress directory
├─ .babelrc
├─ .editorconfig
├─ .env.dist
├─ .gitignore
├─ .jshintignore
├─ .jshintrc
├─ .lando.yml
├─ .stylelintignore
├─ .stylelintrc
├─ composer.json
├─ deploy.php
├─ deploy.sh
├─ deploy-exclude-list.txt
├─ gulpfile.babel.js
├─ LICENSE
├─ package.json
├─ phpcs.xml
├─ README.md
└─ validate.sh
```

### Installing

1. Open the `README.md` and rename the name of client, name of project and description.
2. Open the `lando.yml` and rename the project and proxy name.
3. If required.
	- Download and install the main theme. Recommended: https://underscores.me/
4. Add the following path `public/wp-content/themes/[theme]/assets` into `.gitignore` file.
5. Open the `gulp/config.js` and rename the `theme` const according theme path.
6. Copy the `public/wp-config-sample.php` to `public/wp-config.php`.
    - Add the following code:
    ```php
   <?php
    define( 'WP_MEMORY_LIMIT', '256M' );
    define( 'AUTOMATIC_UPDATER_DISABLED', true );
    define( 'WP_ENVIRONMENT', 'dev' );
    define( 'WP_CACHE', false );
    define( 'DISALLOW_FILE_EDIT', true );
    ...
    define( 'WP_DEBUG', true );
    define( 'WP_DEBUG_LOG', true );
    define( 'WP_DEBUG_DISPLAY', true );
    ...
    ```
    - Change these credentials:
        - `define( 'DB_NAME', 'wordpress' );`
        - `define( 'DB_USER', 'wordpress' );`
        - `define( 'DB_PASSWORD', 'wordpress' );`
        - `define( 'DB_HOST', 'database' );`
        - `define( 'DB_CHARSET', 'utf8mb4' );`
        - `define( 'DB_COLLATE', 'utf8mb4_general_ci' );`
    - Change Authentication Unique Keys and Salts. Open the link `https://api.wordpress.org/secret-key/1.1/salt/`, copy and replace in the correct section.
    - Change table prefix. Only numbers, letters, and underscores. For example: `$table_prefix = 'j28p_';`
7. Copy the `assets/.htaccess.dist` to `public/.htaccess` and to remove the code that you do not need.
8. Open the `phpcs.xml` and rename the `ao-apolo` according theme path.
9. If required. Copy the `.env.dist` to `.env` and look the vars according Deployer file `deploy.php`.
10. Open your terminal and browse to the root location of your project.
11. Run `$lando start`.
	- The project has a .lando.yml file with all the environment settings.
	- The command starts the installation process when it finishes, you can see all the URLs to access.
12. Run: `$lando composer install`.
13. Run: `$lando npm install --save-dev` or `$lando yarn install --dev`.
14. Run: `$lando npm run prepare`.
15. End. Happy developing.

### Developing with NPM or Yarn, Gulp. PHP_CodeSniffer and Deployer

- Open your terminal and browse to the root location of your project.
- If required. Run: `$lando npm install --save-dev` or `$lando yarn install --dev` then: `$lando npm run prepare`
- To work with and compile your Sass and JS files on the fly start: `$lando gulp` or `$lando npm run gulp:dev`
- Gulp actions commands list:
    - `$lando gulp clean` Delete all files.
    - `$lando gulp css` Compile SASS to CSS and validate SASS according Stylelint (https://stylelint.io/). Not concat.
    - `$lando gulp cssAssets` Copy CSS assets to public directory.
    - `$lando gulp cssCritical` Copy critical CSS assets to public directory.
    - `$lando gulp cssWithConcat` Concat and compile SASS to CSS and validate SASS according Stylelint (https://stylelint.io/).
    - `$lando gulp fontAssets` Copy fonts assets to public directory.
    - `$lando gulp images` Copy and minify PNG, JPEG, GIF and SVG images with imagemin.
    - `$lando gulp imagesAssets` Copy and minify PNG, JPEG, GIF and SVG assets images with imagemin.
    - `$lando gulp js` Validate the code with JSHint. Minify the JS files.
    - `$lando gulp jsAssets` Copy JS assets to public directory.
    - `$lando gulp jsWithConcat` Validate the code with Jshint. Concat and minify the JS files.
    - `$lando gulp validate` Validate JS with JSHint (https://jshint.com/) and SCSS according Stylint (https://stylelint.io/).
    - `$lando gulp validateJs` Validate JS with JSHint (https://jshint.com/).
    - `$lando gulp validateScss` Validate SCSS according Stylint (https://stylelint.io/).
    - `$lando gulp watch` Compile SASS to CSS and concat and minify JS files in real-time.
- NPM actions commands list:
	- `$lando npm run prepare` Enable Git hooks. **Important: Run always after npm install.**
	- `$lando npm run gulp:dev` Compile for development environment.
	- `$lando npm run gulp:prod` Compile for production environment.
	- `$lando npm run gulp:validate` Run validate JS and SCSS files.
- If required. Run: `$lando composer install`.
- If you deploy with Deployer. Copy the `.env.dist` to `.env` and you add the server credentials and git repository.
- Deployer actions commands list:
    - `$lando dep deploy local` Deploy to the local machine in the docker container.
    - `$lando dep deploy dev` Deploy to the dev production server.
    - `$lando dep deploy pre` Deploy to the pre production server.
    - `$lando dep deploy pro` Deploy to the production server.
- If you work with PHP CodeSniffer. If required run `$lando phpcs --config-set installed_paths /path/to/wpcs`
	- `$lando phpcs` or `$lando composer cs` Runs the phpcs
	- `$lando phpcbf` or `$lando composer cs:fix`  Runs the phpcbf
- **Important**. Run the shell script to validate PHP, JS and SCSS files:
	- `$sh validate.sh`

### Technologies and tools

The present project uses several technologies and tools for the automation and development process. For more information and learning visit the following links.

1. WordPress: https://wordpress.org/
2. Lando: https://docs.devwithlando.io/
3. Docker: https://www.docker.com/
4. Git: https://git-scm.com/
5. Apache: https://www.apache.org/
6. MariaDB: https://mariadb.org/
7. MySQL: https://www.mysql.com/
8. PHP: https://www.php.net/
9. Composer: https://getcomposer.org/
10. PHP_CodeSniffer: https://github.com/squizlabs/PHP_CodeSniffer
11. PhpMyAdmin: https://www.phpmyadmin.net/
12. Deployer: https://deployer.org/
13. Node.js: https://nodejs.org/
14. NPM: https://www.npmjs.com/
15. Yarn: https://yarnpkg.com/
16. Gulp: https://gulpjs.com/
17. Mailhog: https://github.com/mailhog/MailHog
18. EditorConfig: https://editorconfig.org/
19. Husky: https://www.npmjs.com/package/husky
20. Human.txt: http://humanstxt.org/

**Note:** Thanks all people to work on these projects.

### Clarifications

1. It is very important that if you deploy the project to publish. The **DocumentRoot** on the VirtualHost has to point to the **public/** directory.
2. It is very important that if you deploy the project to publish with **Deployer**. The **DocumentRoot** on the VirtualHost has to point to the **current/public/** directory.
3. At the moment you can not update the `gulp-imagemin` package because it generates an error. I will investigate in the following commitments.
4. You can not update the `stylelint`, `stylelint-config-standard` and `stylelint-scss` because `gulp-stylelint` package cannot work with them.

### Others clarifications

1. It is possible that on Mac OS the Gulp tasks do not run the correct form. In this case install NodeJS, NPM and Gulp-cli in your OS and execute the tasks outside the Docker containers.

## Finally

**Remove all themes or plugins that you don't use.**

More information on the following commits. If required.

Grettings **@jjpeleato**.
