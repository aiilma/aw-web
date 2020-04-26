import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import {Avatar as MaterialAvatar} from "@material-ui/core";
import {Menu as MaterialMenu} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../../../store/ducks/auth/operations";
import UserApi from '../../../../store/utils/UserApi'
import LoginButton from "./LoginButton";
import Skeleton from "@material-ui/lab/Skeleton";
import styled from 'styled-components'
import history from "../../../../store/utils/history";

const Avatar = styled((props) => {
    return (
        (<IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={props.handler}
            color="inherit"
        >
            {props.isLoading ? (
                    <Skeleton
                        variant="circle"
                        width={32} height={32}
                    />
                ) :
                (<MaterialAvatar
                    alt={props.nickname}
                    src={props.avatar}
                    style={{width: 32, height: 32,}}
                />)}
        </IconButton>)
    )
})``

const Menu = ({...props}) => {
    const {logout, open, handleClose, anchorEl} = props

    return (<MaterialMenu
        id="menu-appbar" anchorEl={anchorEl} keepMounted elevation={0} getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={open} onClose={handleClose} style={{top: '5px'}}
    >
        {/*+(заказы, статистика, настройки)*/}
        <MenuItem onClick={() => {
            handleClose()
            history.push('/admin')
        }}>Admin Panel</MenuItem>
        <MenuItem onClick={() => {
            handleClose()
            logout()
        }}>Logout</MenuItem>
    </MaterialMenu>)
}

function NavProfile({logout, ...props}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menu = (
        <Menu
            open={open}
            handleClose={handleClose}
            anchorEl={anchorEl}
            logout={logout}
        />
    )

    // on logout
    if (UserApi.isAuthenticated && props.isLoading) {

        return (
            <>
                <Avatar
                    nickname={props.nickname} avatar={props.avatar} isLoading={true}
                    handler={handleMenu}
                />
                {menu}
            </>
        )
    }

    // on staying logged in as always
    if (UserApi.isAuthenticated && !props.isLoading) {

        return (
            <>
                <Avatar
                    nickname={props.nickname} avatar={props.avatar} isLoading={false}
                    handler={handleMenu}
                />
                {menu}
            </>
        )
    }

    // on login
    if (!UserApi.isAuthenticated && props.isLoading) {

        return (
            <>
                <Avatar
                    isLoading={true}
                    handler={handleMenu}
                />
                {menu}
            </>
        )
    }

    // on guesting
    if (!UserApi.isAuthenticated && !props.isLoading) {

        return (
            <>
                <LoginButton/>
            </>
        )
    }
}

export default connect(null, {logout})(withRouter(NavProfile))
