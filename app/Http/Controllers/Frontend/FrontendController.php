<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class FrontendController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('frontend/home');
    }

    public function remodeling(): Response
    {
        return Inertia::render('frontend/remodeling');
    }

    public function howItWorks(): Response
    {
        return Inertia::render('frontend/howitworks');
    }

    public function about(): Response
    {
        return Inertia::render('frontend/about');
    }

    public function contact(): Response
    {
        return Inertia::render('frontend/contact');
    }

    public function trackOrders(): Response
    {
        return Inertia::render('frontend/track-orders');
    }
}
