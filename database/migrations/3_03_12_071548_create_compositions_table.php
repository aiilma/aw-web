<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompositionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compositions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('link', 16)->unique();
            $table->string('title', 32)->default('unnamed');
            $table->decimal('price', 8, 2)->unsigned()->default(0.00);
            $table->bigInteger('type_variant_id')->unsigned()->nullable();
            $table->json('ph')->nullable();
            $table->json('images');
            $table->json('badges')->nullable();
            $table->string('src_file', 64)->unique();
            $table->bigInteger('author_id')->unsigned();
            $table->timestamp('published_at')->nullable();
            $table->dateTime('expires_at')->nullable();

            $table->foreign('type_variant_id')->references('id')->on('type_variants')->onDelete('cascade');
            $table->foreign('author_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('compositions');
    }
}
