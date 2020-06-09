<?php

namespace App\Http\Controllers\Admin\Management;

use App\Http\Controllers\Controller;

class CompositionsController extends Controller
{
    public function upload()
    {
        return response()->json(['ok' => 'hai'], 200);
    }
}
