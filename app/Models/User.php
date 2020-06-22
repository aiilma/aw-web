<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'nickname', 'steamid', 'avatar'
    ];

    protected $hidden = ['id'];

    protected $casts = [
    ];

    /* RELATIONS */
    public function roles()
    {
        return $this->belongsToMany(Role::class, 'user_roles');
    }

    public function compositions()
    {
        return $this->hasMany(Composition::class, 'author_id', 'id');
    }

    public function suggests()
    {
        return $this->hasMany(Suggestion::class, 'author_id', 'id');
    }
}
