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
}
