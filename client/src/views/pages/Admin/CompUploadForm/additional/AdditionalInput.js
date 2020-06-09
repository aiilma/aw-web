import React from "react";
import {Placeholder} from "../../../../ui/inputs/inputs";
import Box from "@material-ui/core/Box";
import {Attributer, Remover} from "./adornments";
import Collapse from "@material-ui/core/Collapse";
import {Field} from "formik";
import AttrContainer from "./AttrContainer";

function AddInput(props) {
    const {inputId, removePlaceholder} = props;
    const [attrOpened, setAttrOpened] = React.useState(true);
    const name = `ph.${inputId}`;

    const startAdornment = <Attributer attrOpened={attrOpened} onChange={() => setAttrOpened(!attrOpened)}/>;
    const endAdornment = <Remover onRemove={removePlaceholder}/>;

    return (<Box mt={5} mb={5}>
        {/*NAME OF ADDITIONAL ATTRIBUTE*/}
        <Field
            component={Placeholder}
            name={`${name}.name`} label="Additional placeholder's name"
            startAdornment={startAdornment} endAdornment={endAdornment}
        />

        {/* ATTRS */}
        <Collapse in={attrOpened}>
            <AttrContainer name={`${name}.attrs`} setAttrOpened={setAttrOpened}/>
        </Collapse>
    </Box>);
}

export default AddInput