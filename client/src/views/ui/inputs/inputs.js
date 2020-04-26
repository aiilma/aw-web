import styled from "styled-components";
import {TextField} from "@material-ui/core";
import {Field, getIn} from "formik";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert/Alert";
import React from "react";
import {ControlWrapper} from "../controls/controls";

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

export const PlaceholderList = ({inputs, ...props}) => {
    return Object.keys(inputs).map((inputName, id) => (
            <Placeholder
                key={id}
                name={`ph.${inputName}`}
                label={inputs[inputName].label}
            />
        )
    )
}

export const Placeholder = (props) => {
    const {name, label = ''} = props

    return (
        <Field name={name} label={label}>
            {({field, form}) => {
                const isErrorWhenTouched = getIn(form.errors, field.name) && getIn(form.touched, field.name)
                const errorMessage = getIn(form.errors, field.name)

                return (<>
                    <TextInput
                        onChange={form.handleChange}
                        {...field} {...props}
                    />

                    <Collapse in={isErrorWhenTouched}>
                        <Alert variant="filled" severity="warning">{errorMessage}</Alert>
                    </Collapse>
                </>)
            }}
        </Field>
    );
};
