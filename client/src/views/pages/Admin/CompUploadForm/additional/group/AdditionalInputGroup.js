import React from 'react';
import Box from "@material-ui/core/Box";
import AdditionalInput from "../inputs/AdditionalInput";
import {AddInputBtn} from "../../buttons/buttons";

function AdditionalInputGroup(props) {
    return (
        <Box mt={2} mb={2}>

            <AdditionalInput/>
            <AddInputBtn/>

        </Box>
    );
}

export default AdditionalInputGroup;
