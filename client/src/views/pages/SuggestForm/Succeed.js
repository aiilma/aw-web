import React from 'react';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SecondaryLayout from "../../common/layout/user/SecondaryLayout";

function SuggestFormSucceed(props) {
    return (
        <SecondaryLayout>
            <Box justifyContent="center" m="auto">
                <Box>
                    <Typography align="center" variant="h4">
                        Письмо успешно отправлено. Спасибо :)
                    </Typography>
                </Box>
            </Box>
        </SecondaryLayout>
    );
}

export default SuggestFormSucceed
