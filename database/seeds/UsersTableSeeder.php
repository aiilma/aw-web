<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * Models\User
     * @return void
     */
    public function run()
    {
        factory(User::class, 25)->create();
    }
}
