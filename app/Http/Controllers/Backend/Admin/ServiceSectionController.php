<?php

namespace App\Http\Controllers\Backend\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ServiceSectionController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/service-section/index');
    }
}
