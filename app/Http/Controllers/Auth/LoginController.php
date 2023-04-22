<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    function login(Request $request) {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            $user = User::where('email', $credentials['email'])->first();
            return response()->json(
                [
                    'user' => $user,
                    'message' => 'Logged in Successfully',
                    'status' => 1
                ]
            );
        }
        return response()->json(
            [
                'message' => 'Email or Password does not match',
                'status' => 0
            ]
        );
    }
    function logout() {
        Auth::guard('web')->logout();
        return response()->json(
            [
                'message' => 'Logout Successfully',
                'status' => 1
            ]
        );
    }
}
