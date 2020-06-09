import {withFormik} from "formik";
import SuggestForm from "./Form";
import {withSnackbar} from "notistack";
import {withRouter} from "react-router-dom";
import {checkOnMax, checkOnMin, checkOnRequired} from "../../../store/utils/form_helpers";

const EnhancedForm = withFormik({
    mapPropsToValues: () => {
        return {
            typeVariant: [],
            description: ''
        }
    },

    // Custom sync validation
    validate: (values) => {
        const errors = {};

        if (Array.isArray(values.typeVariant) && !values.typeVariant.length) {
            errors["typeVariant"] = "Required"
        }

        let minLimit = 10;
        let maxLimit = 3072;
        if (!checkOnRequired(values.description)) {
            errors["description"] = "Required"
        }
        if (!checkOnMin(values.description, minLimit)) {
            errors["description"] = `Minimal length is ${minLimit} chars`
        }
        if (!checkOnMax(values.description, maxLimit)) {
            errors["description"] = `Maximum length is exceeded`
        }

        return errors;
    },

    handleSubmit: (values, {setSubmitting, resetForm, ...props}) => {
        const {makeRequest, enqueueSnackbar} = props.props;

        const data = {
            ...values
        };

        setSubmitting(true);
        // send...
        makeRequest(data).then(() => {
            setSubmitting(false);

            resetForm({
                typeVariant: [],
                description: ''
            });

            enqueueSnackbar('OK', {
                variant: 'success',
                autoHideDuration: 5000,
            });
        }).catch(err => {
            setSubmitting(false);
            const message = [400, 403].includes(err.status) ? err.message : 'Whoops! Something went wrong...';

            enqueueSnackbar(message, {
                variant: 'error',
                autoHideDuration: 5000,
            });
        })

    },

    enableReinitialize: true,

    displayName: 'SuggestForm',
})(SuggestForm);

export default withSnackbar(withRouter(EnhancedForm))