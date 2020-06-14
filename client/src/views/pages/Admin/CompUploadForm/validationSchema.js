import {ADDITIONAL, NECESSARIES, PROPERTIES} from "./rules";
import * as yup from "yup";

const {
    ADDINPUT_MAX_LEN, ADDINPUT_MIN_LEN,
    TITLE_MIN_LEN, TITLE_MAX_LEN,
    PRICE_MIN_LEN, PRICE_MAX_LEN
} = PROPERTIES;
const {
    vldTypeVariant, vldTitle, vldPrice,
    vldFileImage, vldFileSourceProject
} = NECESSARIES;
const {
    vldName, vldMin, vldMax, vldRequired
} = ADDITIONAL;

export const vldSchema = (values) => {
    return yup.object().shape({
        typeVariant: vldTypeVariant(),
        title: vldTitle(TITLE_MIN_LEN, TITLE_MAX_LEN),
        price: vldPrice(PRICE_MIN_LEN, PRICE_MAX_LEN),
        uploads: yup.object().shape({
            image: vldFileImage(),
            sourceProject: vldFileSourceProject(),
        }),
        ph: yup.array().of(
            yup.object().shape({
                name: vldName(ADDINPUT_MIN_LEN, ADDINPUT_MAX_LEN),
                attrs: yup.object().shape({
                    min: vldMin(ADDINPUT_MIN_LEN, ADDINPUT_MAX_LEN),
                    max: vldMax(ADDINPUT_MIN_LEN, ADDINPUT_MAX_LEN),
                    required: vldRequired()
                }),
            })
        ),
    });
}

export const vldInSchemaHandler = (event, name, setFieldError, fieldHandler) => {
    const {target: {value}} = event;

    yup.reach(vldSchema, name)
        .validate(value)
        .then(() => setFieldError(name, undefined))
        .catch(err => setFieldError(name, err.message));

    fieldHandler(event)
};