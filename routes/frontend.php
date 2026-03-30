<?php

use App\Http\Controllers\Frontend\FrontendController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('/', [FrontendController::class, 'index'])->name('home');
});

Route::middleware('guest')->group(function () {
    Route::get('/remodeling', [FrontendController::class, 'remodeling'])->name('remodeling');
    Route::get('/how-it-works', [FrontendController::class, 'howItWorks'])->name('how-it-works');
    Route::get('/about', [FrontendController::class, 'about'])->name('about');
    Route::get('/contact', [FrontendController::class, 'contact'])->name('contact');
    Route::get('/track-orders', [FrontendController::class, 'trackOrders'])->name('track-orders');
});
