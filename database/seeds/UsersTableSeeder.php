<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * Models\User
     * @return void
     */
    public function run()
    {

        DB::statement('SET FOREIGN_KEY_CHECKS = 0');

        User::truncate();
        DB::table('user_roles')->truncate();
        DB::table('roles')->truncate();


        // roles
        $roles = [['name' => 'user'],
            ['name' => 'admin'],];
        DB::table('roles')->insert($roles);


        // users
        $users = factory(User::class, 25)->make()->each(function ($user) use ($roles) {
            // role binding
            DB::table('user_roles')->insert([
                'user_id' => $user->id,
                'role_id' => rand(1, count($roles)),
            ]);
        })->toArray();
        User::insert($users);

        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
