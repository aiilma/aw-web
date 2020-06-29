import React from "react";
import Box from "@material-ui/core/Box";
import {FastField} from "formik";

function Dropzones(props) {
    const {children} = props;

    return (<Box mt={2} mb={2}>
        {React.Children.map(children, child => {
            return (<FastField name={child.props.name}>{
                ({field, form: {values, touched, errors, setFieldValue, setFieldTouched}}) => React.cloneElement(child, {
                    values, touched, errors,
                    setFieldValue, setFieldTouched,
                    ...field,
                })
            }</FastField>)
        })}
    </Box>);
}

export default Dropzones