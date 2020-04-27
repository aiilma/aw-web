<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Two\InvalidStateException;
use App\Models\User;
use App\Models\SocialAccount;
//use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Exception;
use App\Http\Controllers\BaseController;

class AuthController extends BaseController
{
    /**
     * Redirect the user to the Steam authentication page.
     *
     * @return \Illuminate\Http\Response
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
     * @return \Illuminate\Http\Response
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
                $user = new User();
                $user->nickname = $nickname;
                $user->steamid = $steamid;
                $user->avatar = $avatar;
                $user->save();
            } else {
                $user->touch();
            }

            // Manually login user
            $this->guard()->loginUsingId($user->id);

            DB::commit();

            return response()->json(auth()->user(), 200);

        } catch (Exception $e) {
            DB::rollBack();
            Log::error($e);

            return response()->json(['message' => 'Timeout of steam auth'], 408);
        }
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
