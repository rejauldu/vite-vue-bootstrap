<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    function user() {
        if (Auth::check()) {
            $user = Auth::user();
            return response()->json(
                [
                    'user' => $user,
                    'status' => 1
                ]
            );
        }
        return response()->json(
            [
                'message' => 'Login required',
                'status' => 0
            ]
        );
    }
}
