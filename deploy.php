<?php
declare(strict_types=1);

namespace Deployer;

/**
 * Loads environment variables
 */
require_once __DIR__ . '/vendor/autoload.php';
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable( __DIR__ );
$dotenv->load();

/**
 * Load Deployer's files.
 */
require 'recipe/common.php';
require 'contrib/slack.php';

/**
 * Environments.
 */
define(
	'DEPLOY_CONFIG',
	array(
		'basic' => array(
			'application'   => $_ENV['DEP_APPLICATION'],
			'repository'    => $_ENV['DEP_REPOSITORY'],
			'slack_webhook' => $_ENV['DEP_SLACK_HOOK'],
			'shared_files'  => array(
				'public/.htaccess',
				'public/.htpasswd',
				'public/wp-config.php',
				'public/wp-content/advanced-cache.php',
				'public/wp-content/wp-cache-config.php',
			),
			'shared_dirs'   => array(
				'public/wp-content/uploads',
				'public/wp-content/cache',
				'public/wp-content/ewww',
			),
			'writable_dirs' => array(
				'public/wp-content/uploads',
				'public/wp-content/cache',
				'public/wp-content/ewww',
			),
			'clear_paths'   => array(
				'.husky',
				'.git',
				'assets',
				'gulp',
				'node_modules',
				'private',
				'vendor',
				'.babelrc',
				'.editorconfig',
				'.env.dist',
				'.gitignore',
				'.jshintignore',
				'.jshintrc',
				'.lando.yml',
				'.stylelintignore',
				'.stylelintrc',
				'composer.json',
				'composer.lock',
				'deploy.php',
				'deploy.sh',
				'deploy-exclude-list.txt',
				'gulpfile.babel.js',
				'LICENSE',
				'package.json',
				'package-lock.json',
				'phpcs.xml',
				'phpcs.xml.dist',
				'README.md',
				'validate.sh',
			),
		),
		'dev'   => array(
			'hostname'    => $_ENV['DEP_DEV_HOSTNAME'],
			'port'        => (int) $_ENV['DEP_DEV_PORT'],
			'user'        => $_ENV['DEP_DEV_USER'],
			'http_user'   => $_ENV['DEP_DEV_HTTP_USER'],
			'deploy_path' => $_ENV['DEP_DEV_DEPLOY_PATH'],
		),
		'pre'   => array(
			'hostname'    => $_ENV['DEP_PRE_HOSTNAME'],
			'port'        => (int) $_ENV['DEP_PRE_PORT'],
			'user'        => $_ENV['DEP_PRE_USER'],
			'http_user'   => $_ENV['DEP_PRE_HTTP_USER'],
			'deploy_path' => $_ENV['DEP_PRE_DEPLOY_PATH'],
		),
		'prod'  => array(
			'hostname'    => $_ENV['DEP_PROD_HOSTNAME'],
			'port'        => (int) $_ENV['DEP_PROD_PORT'],
			'user'        => $_ENV['DEP_PROD_USER'],
			'http_user'   => $_ENV['DEP_PROD_HTTP_USER'],
			'deploy_path' => $_ENV['DEP_PROD_DEPLOY_PATH'],
		),
	)
);

/**
 * Project name.
 */
set( 'application', DEPLOY_CONFIG['basic']['application'] );

/**
 * Project repository.
 */
set( 'repository', DEPLOY_CONFIG['basic']['repository'] );

/**
 * Basic configurations.
 */
set( 'keep_releases', 4 ); // Number to keep releases.
set( 'writable_mode', 'chown' ); // chmod, chown, chgrp or acl.
set( 'ssh_multiplexing', true );
set( 'slack_webhook', DEPLOY_CONFIG['basic']['slack_webhook'] );

/**
 * Windows compatibility.
 */
if ( strtoupper( substr( PHP_OS, 0, 3 ) ) === 'WIN' ) {
	set( 'ssh_multiplexing', false );
}

/**
 * Shared files/dirs between deploys.
 */
set( 'shared_files', DEPLOY_CONFIG['basic']['shared_files'] );
set( 'shared_dirs', DEPLOY_CONFIG['basic']['shared_dirs'] );

/**
 * Writable dirs by web server.
 */
set( 'writable_dirs', DEPLOY_CONFIG['basic']['writable_dirs'] );

/**
 * Delete directories or files.
 */
set( 'clear_paths', DEPLOY_CONFIG['basic']['clear_paths'] );

/**
 * Environments: localhost, dev, pre and prod.
 */
localhost( 'localhost' )
	->set( 'labels', array( 'stage' => 'local' ) )
	->set( 'http_user', 'www-data' )
	->set( 'deploy_path', '/app/www/{{application}}' );

host( 'dev' )
	->set( 'labels', array( 'stage' => 'dev' ) )
	->setHostname( DEPLOY_CONFIG['dev']['hostname'] )
	->setPort( DEPLOY_CONFIG['dev']['port'] )
	->setRemoteUser( DEPLOY_CONFIG['dev']['user'] )
	->set( 'http_user', DEPLOY_CONFIG['dev']['http_user'] )
	->setForwardAgent( true )
	->setSshMultiplexing( true )
	->set( 'writable_use_sudo', false ) // Using sudo in writable commands?
	->set( 'cleanup_use_sudo', false ) // Using sudo in cleanup commands?
	->set( 'branch', 'develop' )
	->set( 'deploy_path', DEPLOY_CONFIG['dev']['deploy_path'] );

host( 'pre' )
	->set( 'labels', array( 'stage' => 'pre' ) )
	->setHostname( DEPLOY_CONFIG['pre']['hostname'] )
	->setPort( DEPLOY_CONFIG['pre']['port'] )
	->setRemoteUser( DEPLOY_CONFIG['pre']['user'] )
	->set( 'http_user', DEPLOY_CONFIG['pre']['http_user'] )
	->setForwardAgent( true )
	->setSshMultiplexing( true )
	->set( 'writable_use_sudo', false ) // Using sudo in writable commands?
	->set( 'cleanup_use_sudo', false ) // Using sudo in cleanup commands?
	->set( 'branch', 'master' )
	->set( 'deploy_path', DEPLOY_CONFIG['pre']['deploy_path'] );

host( 'prod' )
	->set( 'labels', array( 'stage' => 'prod' ) )
	->setHostname( DEPLOY_CONFIG['prod']['hostname'] )
	->setPort( DEPLOY_CONFIG['prod']['port'] )
	->setRemoteUser( DEPLOY_CONFIG['prod']['user'] )
	->set( 'http_user', DEPLOY_CONFIG['prod']['http_user'] )
	->setForwardAgent( true )
	->setSshMultiplexing( true )
	->set( 'writable_use_sudo', false ) // Using sudo in writable commands?
	->set( 'cleanup_use_sudo', false ) // Using sudo in cleanup commands?
	->set( 'branch', 'master' )
	->set( 'deploy_path', DEPLOY_CONFIG['prod']['deploy_path'] );

/**
 * NPM custom tasks.
 */
task(
	'deploy:build',
	function () {
		run( 'cd {{current_path}} && npm install --save-dev' );

		$stage = get( 'labels' )['stage'];
		if ( 'prod' === $stage ) {
			run( 'cd {{current_path}} && npm run gulp:prod' );
		} else {
			run( 'cd {{current_path}} && npm run gulp:dev' );
		}
	}
)
	->desc( 'Install NPM packages and run gulp task on current environment' )
	->verbose();

/**
 * COMPOSER custom tasks.
 */
task(
	'deploy:phpcs',
	function () {
		run( 'cd {{current_path}} && composer install' );
		run( 'cd {{current_path}} && composer cs' );
	}
)
	->desc( 'Run phpcodesniffer task' )
	->verbose();

/**
 * OWNER Custom tasks.
 */
task(
	'deploy:owner',
	function () {
		$stage = get( 'labels' )['stage'];
		if ( 'dev' === $stage ) {
			run( 'chown ' . DEPLOY_CONFIG['dev']['http_user'] . ': ' . DEPLOY_CONFIG['dev']['deploy_path'] . ' -R' );
		} elseif ( 'pre' === $stage ) {
			run( 'chown ' . DEPLOY_CONFIG['pre']['http_user'] . ': ' . DEPLOY_CONFIG['pre']['deploy_path'] . ' -R' );
		} elseif ( 'prod' === $stage ) {
			run( 'chown ' . DEPLOY_CONFIG['prod']['http_user'] . ': ' . DEPLOY_CONFIG['prod']['deploy_path'] . ' -R' );
		} else {
			echo "Ups! deploy:owner task has not run.\n";
		}
	}
)
	->desc( 'Set the owner and group according http_user on DEV environment' )
	->verbose();

/**
 * PERMISSIONS Custom tasks.
 */
task(
	'deploy:permissions',
	function () {
		$stage = get( 'labels' )['stage'];
		if ( 'dev' === $stage ) {
			run( 'find ' . DEPLOY_CONFIG['dev']['deploy_path'] . ' -type d -exec chmod -R 0755 {} \;' );
			run( 'find ' . DEPLOY_CONFIG['dev']['deploy_path'] . ' -type f -exec chmod -R 0644 {} \;' );
		} elseif ( 'pre' === $stage ) {
			run( 'find ' . DEPLOY_CONFIG['pre']['deploy_path'] . ' -type d -exec chmod -R 0755 {} \;' );
			run( 'find ' . DEPLOY_CONFIG['pre']['deploy_path'] . ' -type f -exec chmod -R 0644 {} \;' );
		} elseif ( 'prod' === $stage ) {
			run( 'find ' . DEPLOY_CONFIG['prod']['deploy_path'] . ' -type d -exec chmod -R 0755 {} \;' );
			run( 'find ' . DEPLOY_CONFIG['prod']['deploy_path'] . ' -type f -exec chmod -R 0644 {} \;' );
		} else {
			echo "Ups! deploy:permissions task has not run.\n";
		}
	}
)
	->desc( 'Set the write permissions for the group on DEV environment' );

/**
 * SERVER Custom tasks.
 */
task(
	'restart:apache',
	function () {
		$stage = get( 'labels' )['stage'];
		if ( 'prod' !== $stage ) {
			return;
		}

		run( 'service apache2 restart' );
	}
)
	->desc( 'Restart Apache service' );

task(
	'restart:php-fpm',
	function () {
		$stage = get( 'labels' )['stage'];
		if ( 'prod' !== $stage ) {
			return;
		}

		run( 'service php7.4-fpm restart' );
	}
)
	->desc( 'Restart PHP-FPM service' );

/**
 * Main tasks.
 */
task(
	'deploy',
	array(
		'deploy:prepare',
		'deploy:vendors',
		'deploy:symlink',
		'deploy:unlock',
		'deploy:clear_paths',
		'deploy:cleanup',
		'deploy:success',
	)
)
	->desc( 'Deploy your project' );

/**
 * If deploy fails automatically unlock.
 */
after( 'deploy:failed', 'deploy:unlock' );

/**
 * If deploy is in progress.
 */
after( 'deploy:unlock', 'deploy:build' );
after( 'deploy:unlock', 'deploy:phpcs' );

/**
 * If deploy is successfully.
 */
after( 'deploy', 'deploy:owner' );
after( 'deploy', 'deploy:permissions' );
// after('deploy', 'restart:apache');
// after('deploy', 'restart:php-fpm');

/**
 * Slack tasks.
 */
before( 'deploy', 'slack:notify' );
after( 'deploy:failed', 'slack:notify:failure' );
after( 'deploy:success', 'slack:notify:success' );
