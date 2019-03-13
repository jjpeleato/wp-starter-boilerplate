<?php
declare(strict_types=1);

namespace Deployer;

require 'recipe/common.php';

/**
 * Loads environment variables
 */
require_once __DIR__ . '/vendor/autoload.php';
use Dotenv\Dotenv;
$dotenv = Dotenv::create(__DIR__);
$dotenv->load();

// Environments
define("DEPLOY_CONFIG", [
	'basic' => [
		'application' => getenv('DEP_APPLICATION'),
		'repository' => getenv('DEP_REPOSITORY'),
		'shared_files' => [
			'public/.htaccess',
			'public/.htpasswd',
			'public/wp-config.php'
		],
		'shared_dirs' => [
			'public/wp-content/uploads'
		],
		'writable_dirs' => [
			'public/wp-content/uploads'
		],
		'clear_paths' => [
			'deploy.php'
		]
	],
	'pre' => [
		'hostname' => getenv('DB_HOST'),
		'port' => getenv('DB_HOST'),
		'user' => getenv('DB_HOST'),
		'http_user' => getenv('DB_HOST'),
		'deploy_path' => getenv('DB_HOST')
	],
	'pro' => [
		'hostname' => getenv('DB_HOST'),
		'port' => getenv('DB_HOST'),
		'user' => getenv('DB_HOST'),
		'http_user' => getenv('DB_HOST'),
		'deploy_path' => getenv('DB_HOST')
	]
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

// Hosts
localhost('localhost')
	->stage('local')
	->set('http_user', 'www-data')
	->set('deploy_path', '/app/www/{{application}}');

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
	->set('branch', 'develop')
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

// Custom task
desc('Install NPM packages and run gulp task');
task('deploy:build', '
    npm install --save-dev;
    ./node_modules/.bin/gulp;
');

desc('Set the owner and group according http_user');
task('deploy:owner', function () {
	run('chown ' . DEPLOY_CONFIG['pro']['http_user'] . ': ' . DEPLOY_CONFIG['pro']['deploy_path'] . ' -R');
})->onStage('pro');

desc('Restart Apache service');
task('restart:apache', function () {
	run('service apache2 restart');
})->onStage('pro');

desc('Restart PHP-FPM service');
task('restart:php-fpm', function () {
	run('service php7.3-fpm restart');
})->onStage('pro');

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

// If deploy is successfully
after('deploy', 'deploy:build');
after('deploy', 'deploy:owner');
//after('deploy', 'restart:apache');
//after('deploy', 'restart:php-fpm');
