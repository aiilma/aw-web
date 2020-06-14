import {withFormik} from "formik";
import CompUploadForm from "./Form";
import {withSnackbar} from "notistack";
import {withRouter} from "react-router-dom";
import {vldSchema} from "./validationSchema";
import * as yup from "yup";

const EnhancedForm = withFormik({
    mapPropsToValues: () => {
        return {
            typeVariant: undefined,
            title: '',
            price: '',
            uploads: {
                image: null,
                sourceProject: null,
            },
            ph: [],
        }
    },

    validationSchema: () => {
        return yup.lazy(values => {
            return vldSchema(values)
        })
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
            resetForm();

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

    displayName: 'AdminCompUploadForm',
})(CompUploadForm);

export default withSnackbar(withRouter(EnhancedForm))
