import * as yup from "yup";

export const PROPERTIES = {
    DESC_MIN_LEN: 10,
    DESC_MAX_LEN: 3072,
};

export const NECESSARIES = (() => {
    const vldTypeVariant = () => {
        return yup.array()
            .required("Required")
            .typeError('Wrong type')
    };

    const vldDesc = (min, max) => {
        return yup.string()
            .required("Required")
            .typeError('Must be a string')
            .min(min, `Minimal length is ${min} characters`).max(max, `Maximum length is exceeded`)
    };

    return {vldTypeVariant, vldDesc,};
})();