import React from 'react';
import Box from "@material-ui/core/Box";
import {Placeholder} from "../../../../../ui/inputs/inputs";

const InputGroup = (props) => {
    return (
        <Box mt={2} mb={2}>
            {/*images (uploader)*/}
            <Box mt={2}>
                <Placeholder name="title" label="Title"/>
            </Box>
            {/*src_project_file (uploader)*/}
            <Box mt={2}>
                <Placeholder name="price" label="Price"/>
            </Box>
        </Box>
    )
};

export default InputGroup;
