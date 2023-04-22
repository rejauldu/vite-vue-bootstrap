<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('/user', ['App\Http\Controllers\UserController', 'user']);
Route::post('/register', ['App\Http\Controllers\Auth\RegisterController', 'register'])->name('register');
Route::post('/login', ['App\Http\Controllers\Auth\LoginController', 'login'])->name('login');
Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::post('/logout', ['App\Http\Controllers\Auth\LoginController', 'logout'])->name('logout');
});
Route::any('/{slug}', ['App\Http\Controllers\AppController', 'app'])->where('slug', '.*');
