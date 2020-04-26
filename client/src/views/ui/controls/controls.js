import React from "react";
import Icon from "@material-ui/core/Icon";
import {Field} from "formik";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import {InnerPreloader} from "../layout";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert/Alert";

export function CompIcon(props) {
    return (
        <Icon style={{textAlign: 'center', fontSize: '7.5rem',}}>
            <img {...props} height="100%" width="100%" alt="Composition Icon"/>
        </Icon>
    );
}

export function ControlWrapper({xs = 12, ...props}) {
    return (
        <Grid item xs={xs} {...props}>
            {props.children}
        </Grid>
    );
}

export const CompVariantCB = ({disabled = false, ...props}) => {
    const icon = props.value === 'long' ? `/storage/icons/long_icon.svg` : `/storage/icons/short_icon.svg`
    const checkedIcon = props.value === 'long' ? `/storage/icons/long_icon_active.svg` : `/storage/icons/short_icon_active.svg`

    return (
        <Field name={props.name}>
            {({field, form}) => (
                <FormControlLabel
                    control={
                        <Checkbox
                            {...props}
                            icon={<CompIcon src={icon}/>} checkedIcon={<CompIcon src={checkedIcon}/>}
                            color="default" style={{borderRadius: 0,}}
                            checked={field.value.includes(props.value)}
                            onChange={form.handleChange} onBlur={form.handleBlur}
                        />
                    }
                    label={props.label}
                    labelPlacement="bottom"
                    disabled={disabled}
                />
            )}
        </Field>
    )
}

export const CompVariantRB = ({disabled = false, ...props}) => {
    const icon = props.value === 'long' ? `/storage/icons/long_icon.svg` : `/storage/icons/short_icon.svg`
    const checkedIcon = props.value === 'long' ? `/storage/icons/long_icon_active.svg` : `/storage/icons/short_icon_active.svg`

    return (
        <Field name={props.name}>
            {({field, form}) => {
                return (
                    <FormControlLabel
                        control={
                            <Radio
                                {...props}
                                icon={<CompIcon src={icon}/>} checkedIcon={<CompIcon src={checkedIcon}/>}
                                color="default" style={{borderRadius: 0,}}
                                checked={field.value === props.value}
                                onChange={form.handleChange} onBlur={form.handleBlur}
                            />
                        }
                        label={props.label}
                        labelPlacement="bottom"
                        disabled={disabled}
                    />
                )
            }}
        </Field>
    );
};

export const TypeVariantsCB = ({touched, errors, isFetching, ...props}) => {
    return (
        <TypeVariantsWrapper
            touched={touched}
            errors={errors}
            isFetching={isFetching}
        >
            <CompVariantCB name="typeVariant" value="long" label="Long"/>
            <CompVariantCB name="typeVariant" value="short" label="Short"/>
        </TypeVariantsWrapper>
    )
}

export const TypeVariantsRB = ({variant, touched, errors, isFetching, ...props}) => {
    return (
        <TypeVariantsWrapper
            touched={touched}
            errors={errors}
            isFetching={isFetching}
        >
            <CompVariantRB name="typeVariant" value="long" label="Длинный"
                           disabled={variant === 3}/>
            <CompVariantRB name="typeVariant" value="short" label="Короткий"
                           disabled={variant === 2}/>
        </TypeVariantsWrapper>
    )
}

export const TypeVariantsWrapper = ({touched, errors, isFetching, ...props}) => {
    return (
        <Box style={{backgroundColor: '#303030'}} p={1}>
            <FormLabel component="legend" style={{margin: '1rem 0', textAlign: 'center',}}>
                Variant:
            </FormLabel>

            <FormGroup row style={{justifyContent: 'center',}}>
                {
                    !!isFetching ?
                        <>
                            <InnerPreloader/>
                            <InnerPreloader/>
                        </>
                        :
                        props.children
                }
            </FormGroup>

            <Collapse in={!!errors["typeVariant"] && !!touched["typeVariant"]}>
                <Alert variant="filled" severity="warning">{errors["typeVariant"]}</Alert>
            </Collapse>
        </Box>
    )
}
