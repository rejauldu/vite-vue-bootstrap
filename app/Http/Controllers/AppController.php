<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    function app(Request $request) {
        return view('app');
    }
}
