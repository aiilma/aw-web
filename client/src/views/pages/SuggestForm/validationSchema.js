import {PROPERTIES, NECESSARIES} from "./rules";
import * as yup from "yup";

const {
    DESC_MIN_LEN, DESC_MAX_LEN,
} = PROPERTIES;

const {
    vldTypeVariant, vldDesc,
} = NECESSARIES;

export const vldSchema = () => {
    return yup.object().shape({
        typeVariant: vldTypeVariant(),
        description: vldDesc(DESC_MIN_LEN, DESC_MAX_LEN),
    });
}