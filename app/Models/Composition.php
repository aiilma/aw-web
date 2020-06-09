<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Composition extends Model
{
    protected $hidden = ['id', 'author_id'];

    protected $fillable = [
        'link', 'title', 'price', 'type_variant_id',
        'ph', 'images', 'badges', 'src_file',
        'author_id', 'expires_at'
    ];

    protected $dates = [
        'published_at', 'expires_at'
    ];

    public $timestamps = false;
    protected $casts = [
        'published_at' => 'datetime:Y-m-d H:i:s',
        'expires_at' => 'datetime:Y-m-d H:i:s',
        'ph' => 'array',
        'images' => 'array',
    ];

    /* RELATIONS */
    public function author()
    {
        return $this->belongsTo(User::class, 'author_id', 'id');
    }
}
