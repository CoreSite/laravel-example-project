<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title', 'body', 'enable'
    ];

    public function user()
    {
        return $this->hasOne(User::class);
    }
}
