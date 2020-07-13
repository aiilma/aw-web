<?php

namespace App\Http\Controllers\Compositions;

use App\Http\Controllers\BaseController;
use App\Models\Composition;
use Illuminate\Http\Request;

class CompositionController extends BaseController
{
    public function index(Request $request)
    {
        $minLim = 4;
        $maxLim = 8;
        $page = $request->get('page');
        $columns = ['link', 'title', 'price', 'author_id'];

        $query = Composition::select($columns)->with(['author' => function ($user) {
            $user->select('id', 'nickname', 'steamid');
        }]);

        $comps = $query->paginate($maxLim);
        $lastPage = $comps->lastPage();

        if ($page > $lastPage) {
            $comps = $query->paginate($maxLim, '*', 'page', 1);
        }

        return response()->json($comps, 200);
    }

    public function getCompByAlias(Request $request)
    {
        $query = Composition::where('link', $request->alias);

        // not found
        if (!$query->exists()) {
            $result = ['message' => "There's no such composition."];
            return response()->json($result, 404);
        }

        $columns = ['link', 'type_variant_id', 'bg'];
        $queryRes = $query->select($columns)->first();
        $result = [
            'link' => $queryRes->link,
            'bg' => $queryRes->bg,
            'typeVariantName' => $queryRes->typeVariant->name,
        ];

        return response()->json($result);
    }
}
