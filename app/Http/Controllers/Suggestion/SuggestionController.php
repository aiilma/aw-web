<?php

namespace App\Http\Controllers\Suggestion;

use App\Http\Controllers\BaseController;
use App\Models\{Suggestion};
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Opis\JsonSchema\{Schema, Validator};

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

        // если количество нерасмотренных рекомендаций пользователя превышает maxCount, то предупреждение
        if ($activeSuggests->count() < $this->maxCount) {
            // данные с формы...
            $data = [
                'variant' => $request->input('typeVariant'),
                'description' => $request->input('description'),
            ];


            // валидация данных
            $pathToVldSchema = storage_path('/app/schemas/suggestion.json');
            $schema = Schema::fromJsonString(File::get($pathToVldSchema));
            $validator = new Validator();
            $result = $validator->schemaValidation((object)$data, $schema);

            if ($result->hasErrors()) {
                $error = $result->getFirstError();
                $inputName = $error->dataPointer()[0];
                return response()->json(['message' => "incorrect value for {$inputName} specified"], 400);
            }

            // генерация кода заявки
            $fullCode = md5(uniqid($user->steamid, 1));
            $code = substr($fullCode, 0, 12);

            // сохранение записи в базу данных
            Suggestion::create([
                "code" => $code,
                "variant" => $data['variant'],
                "description" => $data['description'],
                "author_id" => $user->id
            ]);

            return response()->json(['message' => 'OK'], 200);
        } else {
            return response()->json(['message' => "The limit of the active cover letters is exceeded"], 403);
        }
    }
}
