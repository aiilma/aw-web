<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\BaseController;
use App\Models\Role;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Laravel\Socialite\Facades\Socialite;

//use App\Models\SocialAccount;

class AuthController extends BaseController
{
    /**
     * Redirect the user to the Steam authentication page.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function steamLoginUrl()
    {
        $url = response()->json([
            'url' => Socialite::driver('steam')->stateless()->redirect()->getTargetUrl(),
        ]);

        return $url;
    }

    /**
     * Obtain the user information from Steam.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function steamLoginCallback()
    {
        DB::beginTransaction();
        try {
            $steamUser = Socialite::driver('steam')->stateless()->user();

            $steamid = $steamUser->getId();
            $nickname = $steamUser->getNickname();
            $avatar = $steamUser->getAvatar();

            $user = User::where('steamid', '=', $steamid)->first();

            if (!$user) {
                // создание нового пользователя
                $user = new User();
                $user->nickname = $nickname;
                $user->steamid = $steamid;
                $user->avatar = $avatar;
                $user->save();

                $roleId = Role::select('id')->where('name', 'user')->first();
                $user->roles()->attach($roleId);
            } else {
                // update timestamp
                $user->touch();
            }

            // Manually login user
            $this->guard()->loginUsingId($user->id);

            DB::commit();

            $user = $user->only(['id', 'nickname', 'steamid', 'avatar', 'roles']);
            $user['roles'] = $user['roles']->map(function ($role) {
                return $role->name;
            });
            return response()->json($user, 200);

        } catch (Exception $e) {
            DB::rollBack();
            Log::error($e);

            return response()->json(['message' => 'Timeout of steam auth'], 408);
        }
    }

    public function getUser(Request $request)
    {
        $user = $request->user()->only(['id', 'nickname', 'steamid', 'avatar', 'roles']);
        $user['roles'] = $user['roles']->map(function ($role) {
            return $role->name;
        });
        return response()->json($user);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logged Out'], 200);
    }

    protected function guard()
    {
        return Auth::guard();
    }
}
