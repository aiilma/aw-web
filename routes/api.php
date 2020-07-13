<?php

use App\Http\Controllers\Admin\Management\CompositionsController as AdminCompositionsController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Compositions\CompositionController;
use App\Http\Controllers\Suggestion\SuggestionController;
use Illuminate\Support\Facades\Route;


Route::get('/login/steam', [AuthController::class, 'steamLoginUrl']);
Route::get('/login/steam/callback', [AuthController::class, 'steamLoginCallback']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/user', [AuthController::class, 'me'])->middleware('auth:sanctum');

Route::get('/compositions', [CompositionController::class, 'index']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/c/{alias}', [CompositionController::class, 'getCompByAlias']);
    Route::post('/suggest', [SuggestionController::class, 'store']);

    // admin
    Route::group(['prefix' => 'admin'], function () {
        Route::post('/comps/upload', [AdminCompositionsController::class, 'upload']);
    });
});









