<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::group(['namespace' => 'API', 'prefix' => 'oauth'], function () {
    Route::get('install', 'BigCommerceController@install');

    Route::get('load', 'BigCommerceController@load');

    Route::get('uninstall', function () {
        echo 'uninstall';
        return app()->version();
    });

    Route::get('remove-user', function () {
        echo 'remove-user';
        return app()->version();
    });
});

Route::any('/bc-api/{endpoint}', 'API\BigCommerceController@proxyBigCommerceAPIRequest')
    ->where('endpoint', 'v2\/.*|v3\/.*');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});