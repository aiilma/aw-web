import React from 'react';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core';
import {ThemeProvider} from 'styled-components';
import {SnackbarProvider} from "notistack";
import RootTheme from "./RootTheme";
import CssBaseline from "@material-ui/core/CssBaseline";

export default (props) => {
    const theme = RootTheme()

    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={3}>
                    <CssBaseline/>
                    {props.children}
                </SnackbarProvider>
            </ThemeProvider>
        </MuiThemeProvider>
    );
}
