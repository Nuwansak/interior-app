<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::get('/products', [ProductController::class, 'index']);
Route::post('/products', [ProductController::class, 'store']);
Route::put('/products/{id}', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);


Route::get('/test', function () {
    return \App\Models\Product::create([
        'name' => 'Chair',
        'category' => 'Living Room',
        'price' => 120,
        'image' => 'chair1.png',
        'rating' => 4.5
    ]);
});




Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
