<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\BaseController;
use App\Models\{User, Role};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends BaseController
{
    public function steamLoginUrl()
    {
        $url = [
            'url' => Socialite::driver('steam')->stateless()->redirect()->getTargetUrl(),
        ];

        return response()->json($url);
    }

    public function steamLoginCallback()
    {
        $steamUser = Socialite::driver('steam')->stateless()->user();
        $user = null;

        DB::transaction(function () use ($steamUser, &$user) {
            $steamid = $steamUser->getId();
            $username = $steamUser->getNickname();
            $avatar = $steamUser->getAvatar();

            $user = User::where('steamid', '=', $steamid)->first();

            if (!$user) {
                // создание нового пользователя
                $user = new User();
                $user->steamid = $steamid;
                $user->nickname = $username;
                $user->avatar = $avatar;
                $user->save();

                $roleId = Role::select('id')->where('name', 'user')->first(); // attach a new role
                $user->roles()->attach($roleId);
            } else {
                // update user's info + timestamp data activity
                $user->nickname = $username;
                $user->avatar = $avatar;
                $user->touch();
            }
        });

        return $user->createToken($user->nickname)->plainTextToken;
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json('logout', 201);
    }

    public function me(Request $request)
    {
        // prepare data for response...
        $user = $request->user()->only(['id', 'nickname', 'steamid', 'avatar', 'roles']);
        $user['roles'] = $user['roles']->map(function ($role) {
            return $role->name;
        });

        return $user;
    }
}
