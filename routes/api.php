<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Compositions\CompositionController;
use App\Http\Controllers\Suggestion\SuggestionController;


Route::get('/login/steam', [AuthController::class, 'steamLoginUrl']);
Route::get('/login/steam/callback', [AuthController::class, 'steamLoginCallback']);
Route::post('/logout', [AuthController::class, 'logout']);


Route::get('/compositions', [CompositionController::class, 'index']);
Route::group(['middleware' => ['auth:airlock']], function () {
    Route::post('/suggest', [SuggestionController::class, 'store']);
    Route::get('/user', function (Request $request) {
        return response()->json($request->user()->only('id', 'nickname', 'steamid', 'avatar'));
    });
});