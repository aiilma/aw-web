import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import {Avatar as MaterialAvatar} from "@material-ui/core";
import {Menu as MaterialMenu} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import UserApi from '../../../../store/utils/UserApi'
import LoginButton from "./LoginButton";
import Skeleton from "@material-ui/lab/Skeleton";
import styled from 'styled-components'
import {connect} from "react-redux";
import {logout} from "../../../../store/ducks/auth/operations";
import history from "../../../../store/utils/history";
import MenuItem from "@material-ui/core/MenuItem";

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
})``;

const Menu = (props) => {
    const {items, open, handleClose, anchorEl} = props;

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
        {
            items.map((item, id) => <MenuItem key={`MenuItem_${id}`} onClick={item.handler}>{item.caption}</MenuItem>)
        }
    </MaterialMenu>)
};

function NavProfile(props) {
    const {
        logout,
        userInfo: {user: {avatar, nickname, roles}, isLoading}
    } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutHandler = () => {
        handleClose();
        logout()
    };

    const menuItems = [
        // +(заказы, статистика, настройки)
        {
            caption: 'Logout',
            handler: logoutHandler,
        }
    ];

    if (roles && UserApi.hasRole('admin', roles)) {
        const goToAdmin = () => {
            handleClose();
            history.push('/admin')
        };

        menuItems.push({
            caption: 'Admin Panel',
            handler: goToAdmin,
        })
    }

    const menu = (<Menu
        items={menuItems}
        open={open} anchorEl={anchorEl}
        handleClose={handleClose}
    />);

    // on logout
    if (UserApi.isAuthenticated && isLoading) {

        return (
            <>
                <Avatar
                    nickname={nickname} avatar={avatar} isLoading={true}
                    handler={handleMenu}
                />
                {menu}
            </>
        )
    }

    // on staying logged in as always
    if (UserApi.isAuthenticated && !isLoading) {

        return (
            <>
                <Avatar
                    nickname={nickname} avatar={avatar} isLoading={false}
                    handler={handleMenu}
                />
                {menu}
            </>
        )
    }

    // when logged in
    if (!UserApi.isAuthenticated && isLoading) {

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

    // when on guesting
    if (!UserApi.isAuthenticated && !isLoading) {

        return (
            <LoginButton/>
        )
    }
}

const mapStateToProps = (store) => ({
    userInfo: store.auth
});

export default connect(mapStateToProps, {logout})(withRouter(NavProfile))