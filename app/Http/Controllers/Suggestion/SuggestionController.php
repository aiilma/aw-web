<?php

namespace App\Http\Controllers\Suggestion;

use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use App\Models\{Suggestion, User};
use Opis\JsonSchema\{
    Validator, ValidationResult, ValidationError, Schema
};
use File;

class SuggestionController extends BaseController
{
    private $maxCount = 1;

    public function __construct()
    {
//        $this->maxCount = 200;
        $this->maxCount = 3;
    }

    public function store(Request $request)
    {
        $user = auth()->user();
        $user->makeVisible('id');
        $activeSuggests = $user->suggests()->whereNull('status')->get();

        if ($activeSuggests->count() < $this->maxCount) {
            $typeVariant = $request->input('typeVariant');
            $description = $request->input('description');

            $data = [
                'variant' => $typeVariant,
                'description' => $description,
            ];

            $pathToSchema = storage_path('/app/schemas/suggestion.json');
            $schema = Schema::fromJsonString(File::get($pathToSchema));
            $validator = new Validator();
            $result = $validator->schemaValidation((object)$data, $schema);

            if ($result->hasErrors()) {
                $error = $result->getFirstError();
                $inputName = $error->dataPointer()[0];
                return response()->json(['message' => "incorrect value for {$inputName} specified"], 400);

            }

            $fullCode = md5(uniqid($user->steamid, 1));
            $code = substr($fullCode, 0, 12);

            Suggestion::create([
                "code" => $code,
                "variant" => $typeVariant,
                "description" => $description,
                "author_id" => $user->id
            ]);

            return response()->json(['message' => 'OK'], 200);
        } else {
            return response()->json(['message' => "Limit of active cover letters is exceeded"], 403);
        }
    }
}
