<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TypeVariant extends Model
{
    protected $fillable = [
        'name', 'slots_count'
    ];

    public $timestamps = false;
}