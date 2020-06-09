import React from "react";
import {PagePreloader} from "../../../ui/layout";
import {FormWrapper} from "../../../ui/form/form";
import {ControlWrapper, TypeVariantsCB} from "../../../ui/controls/controls";
import AdminLayout from "../../../common/layout/admin/AdminLayout";
import {AddInputBtn, FormControlGroup} from "./buttons/buttons";
import {FastField} from "formik";
import {Placeholder} from "../../../ui/inputs/inputs";
import InputAdornment from "@material-ui/core/InputAdornment";
import {generateKey} from "../../../../store/utils/helpers";
import {PROPERTIES} from "./rules";
import Checkbox from "@material-ui/core/Checkbox";
import FileZone from "./dropzones/FileZone";
import AddInput from "./additional/AdditionalInput";
import Dropzones from "./dropzones/uploaders";

const CompUploadForm = (props) => {
    const {
        values,
        handleSubmit, handleReset, handleBack, isSubmitting, setFieldValue
    } = props;

    /*ДОБАВОЧНЫЕ ПОЛЯ*/
    const {
        ADDINPUT_MAX_LEN, ADDINPUT_MIN_LEN, ADDINPUT_MAX_CNT,
        FILE_FORMATS: {image: imgMimes, srcProject: spMimes},
    } = PROPERTIES;
    const isPhLimitExceed = values.ph.length >= ADDINPUT_MAX_CNT; // если добавлено больше полей, чем можно добавить
    // добавить поле-плейсхолдер
    const addPlaceholder = () => {
        const initialInputState = {
            key: generateKey('addInput'),
            name: '',
            attrs: {
                min: {
                    value: `${ADDINPUT_MIN_LEN + 1}`,
                },
                max: {
                    value: `${ADDINPUT_MAX_LEN - 1}`,
                },
                required: true,
            },
        };

        // засетать в стейт подготовленный объект...
        !isPhLimitExceed && setFieldValue(`ph`, [...values.ph, initialInputState])
    };
    // удалить поле-плейсхолдер
    const removePlaceholder = (key) => {
        const idx = values.ph.findIndex((input) => input.key === key);

        const newPh = [
            ...values.ph.slice(0, idx),
            ...values.ph.slice(idx + 1)
        ];

        setFieldValue(`ph`, newPh)
    };

    return (<>
        {(isSubmitting) && <PagePreloader opacity={90}/>}
        <AdminLayout>
            <FormWrapper caption="Upload Composition">
                <form noValidate onSubmit={handleSubmit}>

                    <ControlWrapper>
                        {/*type variants*/}
                        <FastField name={`typeVariant`}>
                            {({field, form: {errors: errs, touched: tchd, values: vls}}) => <TypeVariantsCB
                                error={errs.typeVariant} touched={tchd.typeVariant} value={vls.typeVariant}
                                label={`Variant:`} isFetching={false}
                                {...field}
                            >
                                <Checkbox value="long" cap={'Long'}/>
                                <Checkbox value="short" cap={'Short'}/>
                            </TypeVariantsCB>}
                        </FastField>


                        {/*text fields*/}
                        <FastField component={Placeholder} name="title" label="Title"/>
                        <FastField component={Placeholder} name="price" label="Price"
                                   startAdornment={<InputAdornment position="start">$</InputAdornment>}/>


                        {/* uploaders */}
                        <Dropzones>
                            <FileZone name={`uploads.image`} zoneText={`Select preview image`}
                                      accept={imgMimes.join()}/>
                            <FileZone name={`uploads.sourceProject`} zoneText={`Select source project`}
                                      accept={spMimes}/>
                        </Dropzones>


                        {/*additional inputs*/}
                        {values.ph.map((inputInfo, idx) =>
                            <AddInput key={inputInfo.key} inputId={idx} // 0, 1, 2 - индексы для удаления
                                      removePlaceholder={() => removePlaceholder(inputInfo.key)}
                                      {...inputInfo}
                            />
                        )}

                        {/*кнопка добавления нового поля*/}
                        <AddInputBtn
                            addPlaceholder={addPlaceholder}
                            disabled={isPhLimitExceed}
                        />
                    </ControlWrapper>

                    <FormControlGroup
                        onReset={handleReset} onBack={handleBack}
                        isSumbitting={isSubmitting}
                    />

                </form>
            </FormWrapper>
        </AdminLayout>
    </>);
};

export default CompUploadForm
