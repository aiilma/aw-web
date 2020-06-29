import SecondaryLayout from "../../common/layout/user/SecondaryLayout";
import React from "react";
import SuggestFormControls from "./Controls/Controls";
import {PagePreloader} from "../../ui/layout";
import {FormWrapper} from "../../ui/form/form";
import {ControlWrapper, TypeVariants} from "../../ui/controls/controls";
import {Placeholder} from "../../ui/inputs/inputs";
import {FastField} from "formik";
import Checkbox from "@material-ui/core/Checkbox";


const SuggestForm = (props) => {
    const {
        handleSubmit, handleReset, handleBack, isSubmitting
    } = props;

    return (
        <>
            {(isSubmitting) && <PagePreloader opacity={90}/>}
            <SecondaryLayout>
                <FormWrapper caption="Cover letter to designers">
                    <form noValidate onSubmit={handleSubmit}>

                        <ControlWrapper>
                            {/*/!*type variant*!/*/}
                            <FastField name={`typeVariant`}>
                                {({field, form: {errors: errs, touched: tchd, values: vls}}) => <TypeVariants
                                    error={errs.typeVariant} touched={tchd.typeVariant}
                                    label={`Variant:`} isFetching={false}
                                    handleChecked={(childVal) => (vls.typeVariant).includes(childVal)}
                                    {...field}
                                >
                                    <Checkbox value="long" cap={'Long'}/>
                                    <Checkbox value="short" cap={'Short'}/>
                                </TypeVariants>}
                            </FastField>

                            {/*<TextInput*/}
                            <FastField component={Placeholder} name="description" label="Description" multiline/>
                        </ControlWrapper>


                        <SuggestFormControls
                            onReset={handleReset}
                            onBack={handleBack}
                            isSumbitting={isSubmitting}
                        />
                    </form>
                </FormWrapper>
            </SecondaryLayout>
        </>
    );
};

export default SuggestForm
