<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\User;
use Faker\Generator as Faker;

$factory->define(User::class, function (Faker $faker) {
    return [
        'nickname' => $faker->userName,
        'steamid' => $faker->numerify('#################'),
        'avatar' => $faker->imageUrl($width = 640, $height = 480),
    ];
});
