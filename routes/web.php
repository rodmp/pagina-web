<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::group(['prefix' => 'oauth'], function () {
    Route::get('install', 'MainController@install');

    Route::get('load', 'MainController@load');

    Route::get('uninstall', function () {
        echo 'uninstall';
        return app()->version();
    });

    Route::get('remove-user', function () {
        echo 'remove-user';
        return app()->version();
    });
});

Route::get('error', 'MainController@error');

Route::any('/bc-api/{endpoint}', 'API\BigCommerceController@proxyBigCommerceAPIRequest')
    ->where('endpoint', 'v2\/.*|v3\/.*');

Route::get('/{any}', function () {
    return view('main');
})->where('any', '.*');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');