<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class HeroSectionController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/hero-section/index');
    }
}
