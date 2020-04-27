<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\{Composition, Suggestion};


class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'nickname', 'steamid', 'avatar'
    ];

    protected $hidden = ['id'];

    protected $casts = [
    ];

    /* RELATIONS */

    public function compositions()
    {
        return $this->hasMany(Composition::class, 'author_id', 'id');
    }

    public function suggests()
    {
        return $this->hasMany(Suggestion::class, 'author_id', 'id');
    }
}
