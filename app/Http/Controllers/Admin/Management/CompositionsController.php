<?php

namespace App\Http\Controllers\Admin\Management;

use App\Http\Controllers\Controller;
use App\Models\Composition;
use App\Models\TypeVariant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Opis\JsonSchema\Schema;
use Opis\JsonSchema\Validator;

class CompositionsController extends Controller
{
    protected $pathToVldSchema = null;
    protected $imagesRepository = null;
    protected $thumbImgName = "__static.gif";
    protected $demoImgName = "__dynamic.gif";
    protected $bgName = "__background";
    protected $projectName = "__parcel.zip";

    public function __construct()
    {
        $this->pathToVldSchema = storage_path('/app/schemas/composition-upload.json');
        $this->imagesRepository = public_path("/storage/images/comps");
    }

    public function upload(Request $request)
    {
        $user = auth()->user();
        $user->makeVisible('id');

        // if the current user has permission
        if ($user->can('create', Composition::class)) {
            // данные с формы...
            $data = (object)[
                'variant' => $request->has('typeVariant') ? $request->input('typeVariant') : null,
                'bg' => $request->has('bglink') ? $request->input('bglink') : null,
                'title' => $request->has('title') ? $request->input('title') : null,
                'price' => $request->has('price') ? json_decode($request->input('price')) : null,
                'attchs' => (object)[],
                'ph' => $request->has('ph') ? json_decode($request->input('ph')) : null,
            ];
            $fileNames = ['image', 'sourceProject'];
            foreach ($fileNames as $fName) {
                if ($request->has($fName)) {
                    $f = $request->file($fName);
                    $data->attchs->{$fName} = (object)[];

                    $data->attchs->{$fName}->name = $f->getClientOriginalName();
                    $data->attchs->{$fName}->size = $f->getSize();
                    $data->attchs->{$fName}->mime = $f->getClientMimeType();
                }
            }
            // преобразование числовых типов из строки внутри мета-информации аттрибутов
            foreach ($data->ph as $key => $input) {
                $data->ph[$key]->attrs->max->value = (int)$input->attrs->max->value;
                $data->ph[$key]->attrs->min->value = (int)$input->attrs->min->value;
            }

            // валидация данных
            $schema = Schema::fromJsonString(File::get($this->pathToVldSchema));
            $result = (new Validator())->schemaValidation($data, $schema);

            if ($result->hasErrors()) {
                //return response()->json($result->getFirstError()->keywordArgs(), 200);
                //return response()->json($result->hasErrors(), 200);
                //return response()->json($result->getFirstError()->dataPointer(), 200);
                $error = $result->getFirstError();
                $inputName = $error->dataPointer()[0];
                return response()->json(['message' => "Incorrect value for {$inputName} specified"], 400);
            }


            // подготовка данных к добавлению в БД
            $uploadedAt = now();
            $compAlias = $this->generateCompLink($user->steamid, $uploadedAt->timestamp, $data->title);

            // суффикс ссылки на фон, если она была указана
            $bgSuffix = null;
            if ($bgUrl = $data->bg) {
                $bgFileFormat = ".webm";
                if (!strpos($bgUrl, $bgFileFormat)) $bgFileFormat = ".jpg"; // если URL указывает на не анимацию, значит это JPG картинка

                $steamCdnBgMatch = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/";
                $cutLen = strlen($steamCdnBgMatch);
                $bgSuffix = substr($bgUrl, $cutLen);

                // save background to directory by alias
                if (!$contents = @file_get_contents($bgUrl)) {
                    return response()->json(['message' => "Wrong URL to a steam background was specified"], 400);
                }

                Storage::disk('compAssets')->put("/$compAlias/{$this->bgName}{$bgFileFormat}", $contents);
            }

            // retrieving ID of type variant by its name
            $typeVariant = TypeVariant::firstWhere('name', $data->variant);
            $tvId = $typeVariant->id;

            $ph = [];
            foreach ($data->ph as $item) {
                $ph[$item->name] = [
                    "rules" => [
                        "min" => $item->attrs->min->value,
                        "max" => $item->attrs->max->value,
                        "required" => $item->attrs->required,
                    ]
                ];
            }

            // сохранить превью композиции и сгенерировать тумбочку на базе анимации
            $distDir = "$this->imagesRepository/$compAlias";
            $dynamicImg = $request->file('image')->move($distDir, $this->demoImgName);
            $staticImg = Image::make($dynamicImg->getRealPath());
            Storage::disk('compAssets')->put("/$compAlias/$this->thumbImgName", $staticImg->encode('gif'));
            $staticImg->destroy();
            // сохранить проект композиции в директорию
            Storage::disk('compSources')->put("/$compAlias/$this->projectName", file_get_contents($request->file('sourceProject')->getRealPath()));


            $this->save($compAlias, $bgSuffix, $data->title, $data->price, $tvId, $ph, [], $user->id, $uploadedAt, null);

            return response()->json(['message' => 'OK'], 200);

        } else {
            return response()->json(['message' => "No access."], 403);
        }
    }

    private function generateCompLink($steamid, $uploadedAtTS, $compTitle)
    {
        // steamid / upload date / title
        do {
            $fullCode = md5(uniqid($steamid, 1) . uniqid($uploadedAtTS, 1) . uniqid($compTitle, 1));
            $link = substr($fullCode, 0, 16);
        } while (Composition::where('link', '=', $link)->exists());

        return $link;
    }

    private function save($alias, $bgSuffix, $title, $price, $typeVariantId, $ph, $badges, $authorId, $publishedAt, $expiresAt)
    {
        $composition = [
            "link" => $alias,
            "bg" => $bgSuffix,
            'title' => $title,
            'price' => $price,
            'type_variant_id' => $typeVariantId,
            'ph' => $ph,
            'badges' => $badges,
            "author_id" => $authorId,
            'published_at' => $publishedAt,
            'expires_at' => $expiresAt,
        ];

        return Composition::create($composition);
    }
}
