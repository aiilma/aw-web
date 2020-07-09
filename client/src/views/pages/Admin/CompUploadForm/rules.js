import * as yup from "yup";

const FILE_MB_IN_BYTES = 1048576;

export const PROPERTIES = {
    ADDINPUT_MIN_LEN: 1,
    ADDINPUT_MAX_LEN: 32,
    ADDINPUT_MAX_CNT: 5,

    TITLE_MIN_LEN: 1,
    TITLE_MAX_LEN: 32,

    PRICE_MIN_LEN: 5,
    PRICE_MAX_LEN: 99999,

    FILE_FORMATS: {
        image: ['image/gif'],
        srcProject: ['application/x-compressed', 'application/x-zip-compressed', 'application/zip', 'multipart/x-zip'],
    },
    FILE_IMAGE_MIN_SIZE: 0.01 * FILE_MB_IN_BYTES,
    // FILE_IMAGE_MIN_SIZE: FILE_MB_IN_BYTES,
    FILE_IMAGE_MAX_SIZE: 15 * FILE_MB_IN_BYTES,
    FILE_SP_MIN_SIZE: 0.0001 * FILE_MB_IN_BYTES,
    // FILE_SP_MIN_SIZE: FILE_MB_IN_BYTES,
    FILE_SP_MAX_SIZE: 50 * FILE_MB_IN_BYTES,
};
export const NECESSARIES = (() => {
    const _bytesToSize = bytes => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return '0 Byte';
        let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`;
    };

    // mime, minSize, maxSize
    const _vldFile = (opts) => {
        const {formats, minSize, maxSize} = opts;

        return yup.mixed()
            .required("Required")
            .test("fileFormat", "Unsupported Format",
                value => value && formats.includes(value.type)
            )
            .test("fileMinSize", () => `Min file size is ${_bytesToSize(minSize)}`,
                value => value && value.size >= minSize
            )
            .test("fileMaxSize", () => `Max file size is ${_bytesToSize(maxSize)}`,
                value => value && value.size <= maxSize
            )
    };

    const vldTypeVariant = () => {
        return yup.string()
            .required("Required")
            .typeError('Wrong type')
    };

    const vldTitle = (min, max) => {
        return yup.string()
            .required("Required")
            .typeError('Must be a string')
            .min(min, `Minimal length is ${min} characters`).max(max, `Maximum length is exceeded`)
    };

    // https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/542680/a01441c54ae4f6df2391dad9aaead8479aeeb9fc.jpg
    const vldBgLink = () => {
        return yup.string()
            .typeError('Must be a string')
            .url(`The url isn't valid`)
            .matches(/^https:\/\/steamcdn-a\.akamaihd\.net\/steamcommunity\/public\/images\/items\/[0-9]{6}\/.*\.jpg$/g, `This is not a steam's background link`)
    };

    const vldPrice = (moreThan, lessThan) => {
        return yup.number()
            .required("Required")
            .typeError('Must be a number')
            .moreThan(moreThan, `Must be more than ${moreThan}`).lessThan(lessThan, `Must be less than ${lessThan}`)
    };

    const vldFileImage = () => {
        const {
            FILE_FORMATS: {image: formats},
            FILE_IMAGE_MIN_SIZE: minSize, FILE_IMAGE_MAX_SIZE: maxSize
        } = PROPERTIES;

        return _vldFile({formats, minSize, maxSize})
    };

    const vldFileSourceProject = () => {
        const {
            FILE_FORMATS: {srcProject: formats},
            FILE_SP_MIN_SIZE: minSize, FILE_SP_MAX_SIZE: maxSize
        } = PROPERTIES;

        return _vldFile({formats, minSize, maxSize})
    };

    return {
        vldTypeVariant, vldBgLink, vldTitle, vldPrice,
        vldFileImage, vldFileSourceProject
    };

})();
export const ADDITIONAL = (() => {
    const vldName = (min, max) => {
        return yup.string()
            .required("Required")
            .typeError('Must be a string')
            .min(min, `Minimal length is ${min} characters`).max(max, `Maximum length is exceeded`)
    };

    const _getMinMax = (moreThan, lessThan, opts) => {
        const {message} = opts;

        return yup.object().shape({
            value: yup.number()
                .required(`Required`)
                .typeError('Must be a number')
                .moreThan(moreThan, `Must be more than ${moreThan}`)
                .lessThan(lessThan, `Must be less than ${lessThan}`)
        }).test({
            name: 'minLessThanMax',
            test: function () {
                const {min, max} = this.parent;
                return min.value < max.value ? true : this.createError({
                    message: message,
                    path: `${this.path}.value`
                })
            }
        })
    };
    const vldMin = (moreThan, lessThan) => {
        return _getMinMax(moreThan, lessThan, {
            message: `Must be less than max value`,
        })
    };
    const vldMax = (moreThan, lessThan) => {
        return _getMinMax(moreThan, lessThan, {
            message: `Must be more than min value`,
        })
    };
    const vldRequired = () => {
        return yup.boolean().typeError('Must be required or not')
    };

    return {
        vldName,
        vldMin, vldMax, vldRequired
    };
})();