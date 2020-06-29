import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from "@material-ui/core/Typography";
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components'

import Logo from "./Logo";
import NavProfile from "./NavProfile";

const StyledAppBar = styled(AppBar)`
    z-index: ${({theme}) => theme.zIndex.drawer + 1};
`;

function Header() {

    return (
        <StyledAppBar position="fixed" color="default">
            <Toolbar disableGutters style={{padding: '0 4px',}}>

                <Typography style={{flexGrow: 1,}}>
                    <Logo/>
                </Typography>

                <NavProfile/>

            </Toolbar>
        </StyledAppBar>
    );
}

export default Header