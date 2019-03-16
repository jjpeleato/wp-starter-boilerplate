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

### Project skeleton

```
├─ assets/ # Front-end directory
│  ├─ font/
│  ├─ img/
│  ├─ js/
│  ├─ scss/
│  ├─ .htaccess.dist
│  ├─ .htpasswd.dist
│  └─ functions.php.dist
├─ gulp/
│  ├─ task/
│  └─ config.js # Paths and configuration Gulp system.
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
├─ gulpfile.babel.js
├─ LICENSE
├─ package.json
└─ README.md
```

### Installing

1. Open the `lando.yml` and rename the project and proxy name.
2. Download and install the main theme. I recommend: https://underscores.me/
3. Open the `gulp/config.js` and rename the `theme` const according theme path.
4. Cut (don't copy) the `./assets/functions.php` file into root directory of theme and include the following code: `require_once ('core/functions.php');` on end of `[theme]/functions.php` document. **Note: The logic custom programming write to `core/functions.php`.**
5. Open your terminal and browse to the root location of your project.
6. Run `$lando start`.
	- The project has a .lando.yml file with all the environment settings.
	- The command starts the installation process when it finishes, you can see all the URLs to access.
7. End. Happy developing.

### Developing with NPM or Yarn, Gulp and Deployer

- Open your terminal and browse to the root location of your project.
- If required. Run: `$lando npm install --save-dev` or `$lando yarn install --dev` then: `$lando gulp [action]`
- To work with and compile your Sass and JS files on the fly start: `$lando gulp`
- Gulp actions commands list:
    - `$lando gulp validateScss` Validate SASS with stylelint.
    - `$lando gulp css` Compile SASS to CSS.
    - `$lando gulp cssAssets` Copy CSS assets to CSS directory.
    - `$lando gulp fontAssets` Copy FONTS assets to CSS directory.
    - `$lando gulp js` Concat and minify JS files.
    - `$lando gulp validateJs` Validate JS with jshint.
    - `$lando gulp jsAssets` Copy JS assets to CSS directory.
    - `$lando gulp images` Copy and minify images.
    - `$lando gulp watch` Compile SASS to CSS and concat and minify JS files in real-time.
    - `$lando gulp clean` Delete all files.
- NPM actions commands list:
    - `$lando npm run gulp:dev` Compile for development environment
    - `$lando npm run gulp:prod` Compile for production environment
- If required. Run: `$lando composer install` then: `$lando dep [action]`.
- If you deploy with Deployer. Copy the `.env.dist` to `.env` and you add the server credentials and git repository.
- Deployer actions commands list:
    - `$lando dep deploy local` Deploy to the local machine in the docker container.
    - `$lando dep deploy pre` Deploy to the pre production server.
    - `$lando dep deploy pro` Deploy to the production server.

### Technologies and tools

The present project uses several technologies and tools for the automation and development process. For more information and learning visit the following links.

1. WordPress: https://wordpress.org/
2. Git: https://git-scm.com/
3. Lando: https://docs.devwithlando.io/
4. Deployer: https://deployer.org/
5. Composer: https://getcomposer.org/
6. NPM: https://www.npmjs.com/
7. Yarn: https://yarnpkg.com/
8. Sass: https://sass-lang.com/
9. Gulp: https://gulpjs.com/
10. Babel: https://babeljs.io/
11. Bootstrap: https://getbootstrap.com/
12. EditorConfig: https://editorconfig.org/
13. Stylelint: https://stylelint.io/
14. Jshint: https://jshint.com/
15. Human.txt: http://humanstxt.org/

**Note:** Thanks a lot of developers that to work on this projects.

### Clarifications

1. It is very important that if you deploy the project to publish. The **DocumentRoot** on the VirtualHost has to point to the **public/** directory.
1. It is very important that if you deploy the project to publish with **Deployer**. The **DocumentRoot** on the VirtualHost has to point to the **public/current/** directory.

### Others clarifications

1. It is possible that on Mac OS the Gulp tasks do not run the correct form. In this case install NodeJS, NPM and Gulp-cli in your OS and execute the tasks outside the Docker containers.

## Finally

**Remove all themes or plugins that you don't use.**

More information on the following commits. If required.

Grettings **@jjpeleato**.
