import {withFormik} from "formik";
import CompUploadForm from "./Form";
import {withSnackbar} from "notistack";
import {withRouter} from "react-router-dom";
import {vldSchema} from "./validationSchema";

const EnhancedForm = withFormik({
    mapPropsToValues: () => {
        return {
            typeVariant: [],
            title: '',
            price: '',
            uploads: {
                image: null,
                sourceProject: null,
            },
            ph: [],
        }
    },

    validationSchema: vldSchema,

    handleSubmit: (values, {setSubmitting, resetForm,}) => {
        // const {makeRequest, enqueueSnackbar} = props.props

        const data = {
            ...values
        }
        console.log(data);

        setSubmitting(true);
        setSubmitting(false);


        // send...
        // makeRequest(data).then((res) => {
        //     setSubmitting(false)
        //
        //     resetForm({
        //     //
        //     })
        //
        //     enqueueSnackbar('OK', {
        //         variant: 'success',
        //         autoHideDuration: 5000,
        //     });
        // }).catch(err => {
        //     setSubmitting(false)
        //     const message = [400, 403].includes(err.status) ? err.message : 'Whoops! Something went wrong...'
        //
        //     enqueueSnackbar(message, {
        //         variant: 'error',
        //         autoHideDuration: 5000,
        //     });
        // })

    },
    enableReinitialize: true,
    // validateOnBlur: false,
    // validateOnChange: false,

    displayName: 'AdminCompUploadForm',
})(CompUploadForm);

export default withSnackbar(withRouter(EnhancedForm))
