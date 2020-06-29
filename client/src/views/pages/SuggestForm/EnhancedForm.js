import {withFormik} from "formik";
import SuggestForm from "./Form";
import {withSnackbar} from "notistack";
import {withRouter} from "react-router-dom";
import {SuggestSrv} from "../../../store/services/SuggestSrv";
import {vldSchema} from "./validationSchema";

const EnhancedForm = withFormik({
    mapPropsToValues: () => {
        return {
            typeVariant: [],
            description: ''
        }
    },

    validationSchema: vldSchema,

    handleSubmit: (values, {setSubmitting, resetForm, ...props}) => {
        const {enqueueSnackbar} = props.props;

        const data = {
            ...values
        };

        setSubmitting(true);
        // send...
        (new SuggestSrv()).send(data).then(res => {
            setSubmitting(false);
            resetForm();

            enqueueSnackbar('OK', {
                variant: 'success',
                autoHideDuration: 5000,
            });
        }).catch(err => {
            setSubmitting(false);
            const message = [400, 403].includes(err.status) ? err.data.message : 'Whoops! Something went wrong...';

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