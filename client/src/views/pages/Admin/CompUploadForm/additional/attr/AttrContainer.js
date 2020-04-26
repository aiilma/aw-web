import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Placeholder} from "../../../../../ui/inputs/inputs";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {AttributeCaption} from "../../../../../ui/form/form";

const AttrRuleCB = ({value, label, checked, ...props}) => {
    return (
        <FormControlLabel
            value={value}
            control={<Checkbox color="primary" checked={checked}/>}
            label={label}
            labelPlacement={"end"}
        />
    )
}

const AttrContainer = (props) => {
    return (
        <div>
            <AttributeCaption>Attributes:</AttributeCaption>
            <List dense disablePadding>
                <ListItem>
                    <AttrRuleCB value="min" label="Minimum" checked={true}/>
                    <Placeholder name="minimum" size="small"/>
                </ListItem>
                <ListItem>
                    <AttrRuleCB value="max" label="Maximum" checked={false}/>
                </ListItem>
                <ListItem>
                    <AttrRuleCB value="required" label="Required" checked={true}/>
                </ListItem>
            </List>
        </div>
    )
}

export default AttrContainer
