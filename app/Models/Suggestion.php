<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Suggestion extends Model
{

    protected $fillable = [
        "code", "variant", "description", "author_id"
    ];

    protected $casts = [
        'variant' => 'json',
    ];

    /* RELATIONS */
    public function author()
    {
        return $this->belongsTo(User::class, 'author_id', 'id');
    }
}