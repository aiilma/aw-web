import React from "react";
import Grid from "@material-ui/core/Grid";
import {PagePreloader} from "../../../ui/layout";
import {FormWrapper} from "../../../ui/form/form";
import {ControlWrapper, TypeVariantsCB} from "../../../ui/controls/controls";
import AdminLayout from "../../../common/layout/admin/AdminLayout";
import InputGroup from "./inputs/group/InputGroup";
import UploaderGroup from "./dropzones/group/UploaderGroup";
import AdditionalInputGroup from "./additional/group/AdditionalInputGroup";
import {FormControlGroup} from "./buttons/buttons";

const CompUploadForm = (props) => {
    const {
        touched, errors, values,
        handleSubmit, handleReset, handleBack, isSubmitting, setFieldValue
    } = props;

    window.vals = values.uploads

    return (
        <>
            {(isSubmitting) && <PagePreloader opacity={90}/>}
            <AdminLayout>
                <FormWrapper caption="Upload Composition">
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container>
                            <ControlWrapper>

                                <TypeVariantsCB touched={touched} errors={errors}/>
                                <InputGroup/>

                                <UploaderGroup setFieldValue={setFieldValue} uploads={values.uploads}/>

                                <AdditionalInputGroup/>

                            </ControlWrapper>
                        </Grid>

                        <FormControlGroup
                            onReset={handleReset}
                            onBack={handleBack}
                            isSumbitting={isSubmitting}
                        />
                    </form>
                </FormWrapper>
            </AdminLayout>
        </>
    );
}

export default CompUploadForm
