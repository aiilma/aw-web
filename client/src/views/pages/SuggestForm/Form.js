import SecondaryLayout from "../../common/layout/user/SecondaryLayout";
import React from "react";
import SuggestFormControls from "./Controls/Controls";
import Grid from "@material-ui/core/Grid";
import {PagePreloader} from "../../ui/layout";
import {FormWrapper} from "../../ui/form/form";
import {ControlWrapper, TypeVariantsCB} from "../../ui/controls/controls";
import {Placeholder} from "../../ui/inputs/inputs";
import Box from "@material-ui/core/Box";


const SuggestForm = (props) => {
    const {
        touched, errors,
        handleSubmit, handleReset, handleBack, isSubmitting
    } = props;

    return (
        <>
            {(isSubmitting) && <PagePreloader opacity={90}/>}
            <SecondaryLayout>
                <FormWrapper caption="Cover letter to designers">
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container>
                            <ControlWrapper>

                                {/*type variant*/}
                                <TypeVariantsCB
                                    touched={touched} errors={errors}
                                />

                                {/*<TextInput*/}
                                <Box mt={2}>
                                    <Placeholder name="description" label="Description" multiline/>
                                </Box>

                            </ControlWrapper>
                        </Grid>
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
}

export default SuggestForm
