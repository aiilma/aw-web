import React from "react";
import {TextInput} from "../../../../../ui/inputs/inputs";
import Box from "@material-ui/core/Box";
import AttrContainer from "../attr/AttrContainer";
import {Attributer, Remover} from "./adornments";
import Collapse from "@material-ui/core/Collapse";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import {AttributeCaption} from "../../../../../ui/form/form";

function AdditionalInput(props) {
    const [attrOpened, setAttrOpened] = React.useState(true)

    const onShowAttr = () => {
        setAttrOpened(!attrOpened)
    };

    const onRemoveInput = (e, deleteKey) => {
        e.preventDefault()
        //
        // const obj = {
        //     //    фейковый объект (нужен кусок state заместо obj)
        // }
        // const clone = Object.assign({}, obj);
        // delete clone[deleteKey];
        // return clone;
    }


    const startAdornment = (
        <Switch
            checked={attrOpened}
            onChange={onShowAttr}
            color="default" size="small"
            disableRipple
            edge="start"
        />
    )
    // const startAdornment = <Attributer attrOpened={attrOpened} onShow={onShowAttr}/>
    const endAdornment = <Remover onRemove={onRemoveInput}/>

    return (
        <Box mt={2}>
            <TextInput
                label="Additional placeholder's name"
                InputProps={{startAdornment, endAdornment}}
            />
            <Collapse in={attrOpened}>
                <AttrContainer/>
            </Collapse>
        </Box>
    );
}

export default AdditionalInput
