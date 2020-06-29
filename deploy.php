<?php
namespace Deployer;

require 'recipe/laravel.php';

set('default_stage', 'production');

// Project name
set('application', 'artworch');

// Project repository
set('repository', 'git@bitbucket.org:vitalymo/artworch.git');
set('git_tty', true); // [Optional] Allocate tty for git on first deployment (clone)
set('keep_releases', 2);
set('allow_anonymous_stats', false);
add('shared_files', [
    '.env'
]);
add('shared_dirs', [
    'storage'
]);
add('writable_dirs', [
    'bootstrap/cache',
    'storage',
    'storage/app',
    'storage/app/public',
    'storage/framework',
    'storage/framework/cache',
    'storage/framework/sessions',
    'storage/framework/views',
    'storage/logs',
]);

// hosts
host('')
    ->user('')
    ->port(22)
    ->stage('production')
//    ->configFile('./ssh/config');
//    ->identityFile('./ssh/id_rsa.ppk');
//    ->forwardAgent(true)
//    ->multiplexing(true)
//    ->addSshOption('UserKnownHostsFile', '/dev/null')
//    ->addSshOption('StrictHostKeyChecking', 'no')
    ->set('deploy_path', '~/www/artworch.com');

// tasks
task('upload:env', function () {
    upload('.env.production', '{{deploy_path}}/shared/.env');
})->desc('Environment setup');

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

task('deploy', [
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'upload:env',
    'deploy:shared',
    'deploy:vendors',
    'deploy:writable',
    'artisan:storage:link',
    'artisan:view:clear',
    'artisan:cache:clear',
    'artisan:config:cache',
//    'artisan:migrate',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
]);