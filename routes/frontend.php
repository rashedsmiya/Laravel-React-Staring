<?php

use App\Http\Controllers\Frontend\FrontendController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('/', [FrontendController::class, 'index'])->name('home');
});

Route::middleware('guest')->group(function () {
    Route::get('/remodeling', [FrontendController::class, 'remodeling'])->name('remodeling');
    Route::get('/how-it-works', [FrontendController::class, 'howItWorks'])->name('how-it-works');
});
