import {withFormik} from "formik";
import CompUploadForm from "./Form";
import {withSnackbar} from "notistack";
import {withRouter} from "react-router-dom";

const EnhancedForm = withFormik({
    mapPropsToValues: (props) => {
        return {
            typeVariant: [],
            title: '',
            price: '',
            uploads: {
                image: [],
                sourceProject: [],
            },
            ph: {
                username: {
                    minimum: 5,
                    maximum: 100,
                    required: true,
                },
                twitch: {
                    minimum: 0,
                    maximum: 100,
                    required: false,
                },
            }
        }
    },

    // Custom sync validation
    validate: (values, {...props}) => {
        const errors = {};
        return errors;
    },

    handleSubmit: (values, {setSubmitting, resetForm, ...props}) => {
        const {makeRequest, enqueueSnackbar} = props.props

        const data = {
            ...values
        }
        console.log(data)

        setSubmitting(true)
        setSubmitting(false)


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

    displayName: 'AdminCompUploadForm',
})(CompUploadForm)

export default withSnackbar(withRouter(EnhancedForm))
