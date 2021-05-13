<?php
declare(strict_types=1);

namespace Deployer;

require 'recipe/common.php';
require 'recipe/slack.php';

/**
 * Loads environment variables
 */
require_once __DIR__ . '/vendor/autoload.php';
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Environments
define("DEPLOY_CONFIG", [
	'basic' => [
		'application' => $_ENV['DEP_APPLICATION'],
		'repository' => $_ENV['DEP_REPOSITORY'],
		'slack_webhook' => $_ENV['DEP_SLACK_HOOK'],
		'shared_files' => [
			'public/.htaccess',
			'public/.htpasswd',
			'public/wp-config.php',
			'public/wp-content/advanced-cache.php',
			'public/wp-content/wp-cache-config.php',
		],
		'shared_dirs' => [
			'public/wp-content/uploads',
			'public/wp-content/cache',
			'public/wp-content/ewww',
		],
		'writable_dirs' => [
			'public/wp-content/uploads',
			'public/wp-content/cache',
			'public/wp-content/ewww',
		],
		'clear_paths' => [
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
			'gulpfile.babel.js',
			'LICENSE',
			'package.json',
			'package-lock.json',
			'phpcs.xml',
			'phpcs.xml.dist',
			'README.md',
			'validate.sh',
		],
	],
	'dev' => [
		'hostname' => $_ENV['DEP_DEV_HOSTNAME'],
		'port' => (int) $_ENV['DEP_DEV_PORT'],
		'user' => $_ENV['DEP_DEV_USER'],
		'http_user' => $_ENV['DEP_DEV_HTTP_USER'],
		'deploy_path' => $_ENV['DEP_DEV_DEPLOY_PATH'],
	],
	'pre' => [
		'hostname' => $_ENV['DEP_PRE_HOSTNAME'],
		'port' => (int) $_ENV['DEP_PRE_PORT'],
		'user' => $_ENV['DEP_PRE_USER'],
		'http_user' => $_ENV['DEP_PRE_HTTP_USER'],
		'deploy_path' => $_ENV['DEP_PRE_DEPLOY_PATH'],
	],
	'pro' => [
		'hostname' => $_ENV['DEP_PRO_HOSTNAME'],
		'port' => (int) $_ENV['DEP_PRO_PORT'],
		'user' => $_ENV['DEP_PRO_USER'],
		'http_user' => $_ENV['DEP_PRO_HTTP_USER'],
		'deploy_path' => $_ENV['DEP_PRO_DEPLOY_PATH'],
	],
]);

// Project name
set('application', DEPLOY_CONFIG['basic']['application']);

// Project repository
set('repository', DEPLOY_CONFIG['basic']['repository']);

// Basic configurations
set('allow_anonymous_stats', false);
set('timezone', 'Europe/Madrid');
set('keep_releases', 4); // Number to keep releases
set('writable_mode', 'chown'); // chmod, chown, chgrp or acl.
set('ssh_type', 'native');
set('ssh_multiplexing', true);
set('git_tty', true); // Allocate tty for git clone. Default value is false.

// Windows Compatibility
if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
	set('ssh_multiplexing', false);
	set('git_tty', false);
}

// Shared files/dirs between deploys
set('shared_files', DEPLOY_CONFIG['basic']['shared_files']);
set('shared_dirs', DEPLOY_CONFIG['basic']['shared_dirs']);

// Writable dirs by web server
set('writable_dirs', DEPLOY_CONFIG['basic']['writable_dirs']);

// Delete directories or files
set('clear_paths', DEPLOY_CONFIG['basic']['clear_paths']);

// Slack
set('slack_webhook', DEPLOY_CONFIG['basic']['slack_webhook']);

// Hosts
localhost('localhost')
	->stage('local')
	->set('http_user', 'www-data')
	->set('deploy_path', '/app/www/{{application}}');

host('dev')
	->stage('dev')
	->hostname(DEPLOY_CONFIG['dev']['hostname'])
	->port(DEPLOY_CONFIG['dev']['port'])
	->user(DEPLOY_CONFIG['dev']['user'])
	->set('http_user', DEPLOY_CONFIG['dev']['http_user'])
	->forwardAgent(true)
	->multiplexing(true)
	->set('writable_use_sudo', false) // Using sudo in writable commands?
	->set('cleanup_use_sudo', false) // Using sudo in cleanup commands?
	->set('branch', 'develop')
	->set('deploy_path', DEPLOY_CONFIG['dev']['deploy_path']);

host('pre')
	->stage('pre')
	->hostname(DEPLOY_CONFIG['pre']['hostname'])
	->port(DEPLOY_CONFIG['pre']['port'])
	->user(DEPLOY_CONFIG['pre']['user'])
	->set('http_user', DEPLOY_CONFIG['pre']['http_user'])
	->forwardAgent(true)
	->multiplexing(true)
	->set('writable_use_sudo', false) // Using sudo in writable commands?
	->set('cleanup_use_sudo', false) // Using sudo in cleanup commands?
	->set('branch', 'master')
	->set('deploy_path', DEPLOY_CONFIG['pre']['deploy_path']);

host('pro')
	->stage('pro')
	->hostname(DEPLOY_CONFIG['pro']['hostname'])
	->port(DEPLOY_CONFIG['pro']['port'])
	->user(DEPLOY_CONFIG['pro']['user'])
	->set('http_user', DEPLOY_CONFIG['pro']['http_user'])
	->forwardAgent(true)
	->multiplexing(true)
	->set('writable_use_sudo', false) // Using sudo in writable commands?
	->set('cleanup_use_sudo', false) // Using sudo in cleanup commands?
	->set('branch', 'master')
	->set('deploy_path', DEPLOY_CONFIG['pro']['deploy_path']);

// NPM custom tasks
desc('Install NPM packages and run gulp task on DEV environment');
task('deploy:build:dev', '
    npm install --save-dev;
    npm run gulp:dev;
')->onStage('dev');

desc('Install NPM packages and run gulp task on PRE environment');
task('deploy:build:pre', '
    npm install --save-dev;
    npm run gulp:dev;
')->onStage('pre');

desc('Install NPM packages and run gulp task on PRO environment');
task('deploy:build:pro', '
    npm install --save-dev;
    npm run gulp:prod;
')->onStage('pro');

// COMPOSER custom tasks
desc('Run phpcodesniffer task');
task('deploy:phpcs', '
    cp phpcs.xml.dist phpcs.xml;
    composer install;
    composer cs;
')->onStage('dev', 'pre', 'pro');

// OWNER Custom tasks
desc('Set the owner and group according http_user on DEV environment');
task('deploy:owner:dev', function () {
	run('chown ' . DEPLOY_CONFIG['dev']['http_user'] . ': ' . DEPLOY_CONFIG['dev']['deploy_path'] . ' -R');
})->onStage('dev');

desc('Set the owner and group according http_user on PRE environment');
task('deploy:owner:pre', function () {
	run('chown ' . DEPLOY_CONFIG['pre']['http_user'] . ': ' . DEPLOY_CONFIG['pre']['deploy_path'] . ' -R');
})->onStage('pre');

desc('Set the owner and group according http_user on PRO environment');
task('deploy:owner:pro', function () {
	run('chown ' . DEPLOY_CONFIG['pro']['http_user'] . ': ' . DEPLOY_CONFIG['pro']['deploy_path'] . ' -R');
})->onStage('pro');

// PERMISSIONS Custom tasks
desc('Set the write permissions for the group on DEV environment');
task('deploy:permissions:dev', function () {
	run('find ' . DEPLOY_CONFIG['dev']['deploy_path'] . ' -type d -exec chmod -R 0755 {} \;');
	run('find ' . DEPLOY_CONFIG['dev']['deploy_path'] . ' -type f -exec chmod -R 0644 {} \;');
})->onStage('dev');

desc('Set the write permissions for the group on PRE environment');
task('deploy:permissions:pre', function () {
	run('find ' . DEPLOY_CONFIG['pre']['deploy_path'] . ' -type d -exec chmod -R 0755 {} \;');
	run('find ' . DEPLOY_CONFIG['pre']['deploy_path'] . ' -type f -exec chmod -R 0644 {} \;');
})->onStage('pre');

desc('Set the write permissions for the group on PRO environment');
task('deploy:permissions:pro', function () {
	run('find ' . DEPLOY_CONFIG['pro']['deploy_path'] . ' -type d -exec chmod -R 0755 {} \;');
	run('find ' . DEPLOY_CONFIG['pro']['deploy_path'] . ' -type f -exec chmod -R 0644 {} \;');
})->onStage('pro');

// SERVER Custom tasks
desc('Restart Apache service');
task('restart:apache', function () {
	run('service apache2 restart');
})->onStage('dev', 'pre', 'pro');

desc('Restart PHP-FPM service');
task('restart:php-fpm', function () {
	run('service php7.4-fpm restart');
})->onStage('dev', 'pre', 'pro');

// Tasks
desc('Deploy your project');
task('deploy', [
	'deploy:info',
	'deploy:prepare',
	'deploy:lock',
	'deploy:release',
	'deploy:update_code',
	'deploy:shared',
	'deploy:writable',
	'deploy:vendors',
	'deploy:clear_paths',
	'deploy:symlink',
	'deploy:unlock',
	'cleanup',
	'success'
]);

// If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// If deploy is in progress
after('deploy:vendors', 'deploy:phpcs');
after('deploy:vendors', 'deploy:build:dev');
after('deploy:vendors', 'deploy:build:pre');
after('deploy:vendors', 'deploy:build:pro');

// If deploy is successfully
after('deploy', 'deploy:owner:dev');
after('deploy', 'deploy:owner:pre');
after('deploy', 'deploy:owner:pro');
after('deploy', 'deploy:permissions:dev');
after('deploy', 'deploy:permissions:pre');
after('deploy', 'deploy:permissions:pro');
//after('deploy', 'restart:apache');
//after('deploy', 'restart:php-fpm');

// Slack
before('deploy', 'slack:notify');
after('deploy:failed', 'slack:notify:failure');
after('success', 'slack:notify:success');
