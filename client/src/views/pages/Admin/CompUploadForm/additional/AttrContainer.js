import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Placeholder} from "../../../../ui/inputs/inputs";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {AttributeCaption} from "../../../../ui/form/form";
import {FastField, getIn} from "formik";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";

const AttrContainer = (props) => {
    const {name, setAttrOpened} = props;

    return (<>
        <AttributeCaption>Attributes:</AttributeCaption>

        <List dense disablePadding>
            {/* min */}
            <ListItem>
                <Grid item xs>
                    <FastField name={`${name}.min.value`}>
                        {({field, form}) => {
                            !!getIn(form.errors, field.name) && setAttrOpened(true);
                            return (<Placeholder label={`Minimum`}
                                                 size={`small`}
                                                 field={field} form={form}
                            />)
                        }}
                    </FastField>
                </Grid>
            </ListItem>

            {/* max */}
            <ListItem>
                <Grid item xs>
                    <FastField name={`${name}.max.value`}>
                        {({field, form}) => {
                            !!getIn(form.errors, field.name) && setAttrOpened(true);
                            return (<Placeholder label={`Maximum`}
                                                 size={`small`}
                                                 field={field} form={form}
                            />)
                        }}
                    </FastField>
                </Grid>
            </ListItem>

            <ListItem>
                <Grid item xs>
                    <FastField name={`${name}.required`}>{
                        ({field}) => (<FormControlLabel
                            control={<Checkbox
                                color="primary" size={`small`}
                                checked={field.value} {...field}
                            />}
                            label={<Typography variant='caption'>{`Required`}</Typography>}
                            labelPlacement={"end"}
                        />)
                    }</FastField>
                </Grid>
            </ListItem>
        </List>
    </>)
};

export default AttrContainer
