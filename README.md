# WordPress: Starter boilerplate

WordPress base repository for any project.

## Project

Built with WordPress platform using the following technologies: HTML 5, Bootstrap 4, JavaScript, jQuery, CSS3, SASS & Compass, Lando (Docker), NPM or Yarn, Gulp v.4 and Deployer.

For your projects I recommend underscores theme. More information about:

- Website: https://underscores.me/
- Theme: https://github.com/automattic/_s

**Note:** You can install the WooCommerce boilerplate and not sassify if it is ecommerce.

### Installing dependencies

- You have to install **Lando**: https://docs.devwithlando.io/

If Lando's tools does not work for you, there is another way. You must install the environment manually: XAMP, Node.JS, NPM or Yarn and Gulp CLI.

For more information visit:

- XAMP: https://www.apachefriends.org/es/index.html
- Node and NPM: https://nodejs.org/es/
- Yarn: https://yarnpkg.com/es-ES/
- Gulp: https://gulpjs.com/

**Note:** If you work with Windows. To execute the commands, we recommend installing **Cygwin** http://www.cygwin.com/

**Note:** I recommend installing the following IDE for PHP Programming: Visual Studio Code (https://code.visualstudio.com/) or PHPStorm (recommended) (https://www.jetbrains.com/phpstorm/).

### Installing

1. Open the `lando.yml` and rename the project and proxy name.
2. Download and install the main theme. I recommend: https://underscores.me/
3. Open the `gulp/config.js` and rename the `theme` const according theme path.
4. Cut (don't copy) the `./assets/functions.php` file into root directory of theme and include the following code: `require_once ('assets/functions.php');` on end of `[theme]/functions.php` document. **Note: The logic custom programming write to `assets/functions.php`.**
5. Open your terminal and browse to the root location of your project.
6. Run `$lando start`.
	- The project has a .lando.yml file with all the environment settings.
	- The command starts the installation process when it finishes, you can see all the URLs to access.
7. End. Happy developing.

### Developing with NPM or Yarn, Gulp and Deployer

- Open your terminal and browse to the root location of your project.
- Run: `$lando npm install` or `$lando yarn install` then: `$lando gulp [action]`
- To work with and compile your Sass and JS files on the fly start: `$lando gulp`
- Gulp actions commands list:
    - `$lando gulp validateScss` Validate SASS with stylelint.
    - `$lando gulp css` Compile SASS to CSS.
    - `$lando gulp cssAssets` Copy CSS assets to CSS directory.
    - `$lando gulp fontAssets` Copy FONTS assets to CSS directory.
    - `$lando gulp js` Concat and minify JS files.
    - `$lando gulp validateJs` Validate JS with jshint.
    - `$lando gulp jsAssets` Copy JS assets to CSS directory.
    - `$lando gulp images` CoPY and minify images.
    - `$lando gulp watch` Compile SASS to CSS and concat and minify JS files in real-time.
    - `$lando gulp clean` Delete all files.
- NPM actions commands list:
    - `$lando npm run gulp:dev` Compile for development environment
    - `$lando npm run gulp:prod` Compile for production environment
- Run: `$lando composer install` then: `$lando dep [action]`.
- Deployer actions commands list:
    - `$lando dep deploy local` Deploy to the local machine in the docker container.
    - `$lando dep deploy pre` Deploy to the pre production server.
    - `$lando dep deploy pro` Deploy to the production server.

## Finally

**Remove all themes or plugins that you don't use.**

More information on the following commits. If required.

Grettings **@jjpeleato**.
