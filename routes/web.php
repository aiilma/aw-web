<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}', function() {
    $path = public_path() . '/rev-manifest.json';
    $manifest = json_decode(File::get($path));
    $entrypoints = $manifest->entrypoints;
    return view('app', compact('entrypoints'));
//    abort(503, 'Technical works');
})->where('any', '.*');