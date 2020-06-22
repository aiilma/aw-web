<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\Composition;

class CompositionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // compositions
        $typeVariantIds = DB::table('type_variants')->select('id', 'slots_count')->get()->toArray();
        $userIds = DB::table('users')->select('id')->get()->toArray();

        $comps = factory(Composition::class, 1)->make()
            ->each(function ($comp) use ($typeVariantIds, $userIds) {
                $typeVariant = Arr::random($typeVariantIds);
                $tvId = $typeVariant->id;
                $typeVariantSwither = [$tvId, null];
                $tvKey = array_rand($typeVariantSwither);
                $authorId = Arr::random($userIds)->id;

                $comp->makeVisible('author_id');
                $comp->type_variant_id = $typeVariantSwither[$tvKey];
                $comp->author_id = $authorId;
            })->toArray();

        Composition::insert($comps);
    }
}
