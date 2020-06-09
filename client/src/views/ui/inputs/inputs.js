import styled from "styled-components";
import {TextField} from "@material-ui/core";
import {getIn} from "formik";
import React from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert/Alert";

export const TextInput = styled(({disableFullWidth = false, className, ...props}) => (
    <TextField
        className={className}
        fullWidth={!disableFullWidth}
        {...props}
    />
)).attrs({
    variant: 'outlined',
})`
  background-color: #303030;

  label.Mui-focused {
    color: white;
  }
  .MuiOutlinedInput-root {
    border-radius: 0;
    &:hover fieldset {
      border-color: white;
    }
    &.focused fieldset {
      border-color: white;
    }
  }
  .MuiOutlinedInput-root.Mui-focused fieldset {
    border-color: white;
  }
`;
// #4CAF50 green
// #ef5350 red

export const PlaceholderList = ({inputs}) => {
    return Object.keys(inputs).map((inputName, id) => (
            <Placeholder
                key={id}
                name={`ph.${inputName}`}
                label={inputs[inputName].label}
            />
        )
    )
};

export const Placeholder = ({
                                field, form: {errors, touched},
                                label = '', startAdornment = null, endAdornment = null, ...props
                            }) => {

    return (<Box mt={2}>
        <TextInput
            InputProps={{startAdornment, endAdornment,}} label={label}
            {...field} {...props}
        />

        <Collapse in={!!getIn(errors, field.name) && !!getIn(touched, field.name)}>
            <Alert variant="filled" severity="warning">{getIn(errors, field.name)}</Alert>
        </Collapse>
    </Box>)
};
