import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from "@material-ui/core/Typography";
import Toolbar from '@material-ui/core/Toolbar';
import {connect} from "react-redux";
import styled from 'styled-components'

import Logo from "./Logo";
import NavProfile from "./NavProfile";

const StyledAppBar = styled(AppBar)`
    z-index: ${({theme}) => theme.zIndex.drawer + 1};
`

function Header({userInfo, ...props}) {

    const ProfileCtx = (<NavProfile
        isLoading={userInfo.isLoading}
        avatar={userInfo.user.avatar}
        nickname={userInfo.user.nickname}
    />)

    return (
        <StyledAppBar position="fixed" color="default">
            <Toolbar disableGutters style={{padding: '0 4px',}}>
                <Typography style={{flexGrow: 1,}}>
                    <Logo/>
                </Typography>
                {ProfileCtx}
            </Toolbar>
        </StyledAppBar>
    );
}

const mapStateToProps = (store) => ({
    userInfo: store.auth
})

export default connect(mapStateToProps)(Header)