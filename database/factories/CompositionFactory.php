<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Composition;
use Faker\Generator as Faker;
use \Carbon\Carbon;

$factory->define(Composition::class, function (Faker $faker) {
    $limiter = random_int(0, 5);
    $ph = [];

    for ($i = 0; $i < $limiter; $i++) {
        $name = $faker->word;

        $ph[$name] = [
            'rules' => [
                'min' => $faker->boolean(50) ? random_int(0, 5) : 0,
                'max' => $faker->boolean(50) ? random_int(10, 20) : 50,
                'required' => $faker->boolean(50),
            ],
        ];
    }

    $dateRequired = $faker->boolean(50);
    $publishedAt = ($dateRequired) ? Carbon::now() : null;
    $expiresAt = ($dateRequired) ? Carbon::now()->addHours(random_int(1, 1000)) : null;

    $linkAlias = $faker->regexify('[A-Za-z0-9]{16}');
    $repository = public_path() . '/storage/images/comps';
    $path = "$repository/$linkAlias";

    if (File::isDirectory($repository)) {
        File::deleteDirectory($repository);
    }
    File::makeDirectory($path, 0777, true, true);

    $pathToTestDir = storage_path() . '/app/test';
    $thumbImgName = "__static.gif";
    $demoImgName = "__dynamic.gif";
    File::copy("$pathToTestDir/$thumbImgName", "$path/$thumbImgName");
    File::copy("$pathToTestDir/$demoImgName", "$path/$demoImgName");


    return [
        'link' => $linkAlias,
        'title' => $faker->word,
        'price' => $faker->randomNumber(2),
        'ph' => json_encode($ph),
        'badges' => json_encode([]),
        'published_at' => $publishedAt,
        'expires_at' => $expiresAt,
    ];
});
