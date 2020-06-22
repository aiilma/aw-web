import React from 'react';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PrimaryLayout from "../../common/layout/user/PrimaryLayout";

export default function ErrorPage({...props}) {
    const {message} = !!props.location.state && props.location.state
    return (
        <PrimaryLayout>
            <Box justifyContent="center" m="auto">
                <Box>
                    <Typography align="center" variant="h4">
                        Whoops! Something has gone wrong...
                    </Typography>
                </Box>
                <Box>
                    {!!message && (
                        <Typography align="center" variant="h6">
                            {message}
                        </Typography>
                    )}
                </Box>
            </Box>
        </PrimaryLayout>
    );
}
