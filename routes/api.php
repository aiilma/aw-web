<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Compositions\CompositionController;
use App\Http\Controllers\Suggestion\SuggestionController;
use App\Http\Controllers\Admin\Management\CompositionsController as AdminCompositionsController;


Route::get('/login/steam', [AuthController::class, 'steamLoginUrl']);
Route::get('/login/steam/callback', [AuthController::class, 'steamLoginCallback']);
Route::post('/logout', [AuthController::class, 'logout']);


Route::get('/compositions', [CompositionController::class, 'index']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user', [AuthController::class, 'getUser']);

    Route::post('/suggest', [SuggestionController::class, 'store']);

    // admin
    Route::group(['prefix' => 'admin'], function () {
        Route::post('/comps/upload', [AdminCompositionsController::class, 'upload']);
    });
});