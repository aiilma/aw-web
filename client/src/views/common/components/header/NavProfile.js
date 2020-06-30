import React, {useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import {Avatar as MaterialAvatar, Menu as MaterialMenu} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import LoginButton from "./LoginButton";
import Skeleton from "@material-ui/lab/Skeleton";
import styled from 'styled-components'
import {connect} from "react-redux";
import history from "../../../../store/utils/history";
import MenuItem from "@material-ui/core/MenuItem";
import {logout} from "../../../../store/ducks/auth/operations";
import {UserSrv} from "../../../../store/services/UserSrv";

const Avatar = styled(({nickname, avatar, handler, isLoading, ...props}) => {
    return (
        (<IconButton
            aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true"
            color="inherit" title={nickname}
            onClick={handler}
        >
            {isLoading ? (
                    <Skeleton
                        variant="circle"
                        width={32} height={32}
                    />
                ) :
                (<MaterialAvatar
                    src={avatar} alt={nickname}
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

const NavProfile = props => {
    const {
        logout,
        userInfo: {user: {avatar, nickname, roles}, isLoading}
    } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const userSrv = new UserSrv()

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const menuItems = [
        // +(заказы, статистика, настройки)
        {
            caption: 'Logout',
            handler: () => {
                handleClose();
                logout()
            },
        }
    ];

    // ADMIN
    if (!!roles && userSrv.hasRole('admin', roles)) {
        menuItems.unshift({
            caption: 'Admin Panel',
            handler: () => {
                handleClose();
                history.push('/admin')
            },
        })
    }

    const menu = (<Menu
        items={menuItems}
        open={open} anchorEl={anchorEl}
        handleClose={handleClose}
    />);


    // authenticated + logout
    if (userSrv.isAuth()) {
        return (<>
            <Avatar
                nickname={nickname} avatar={avatar} isLoading={isLoading}
                handler={handleMenu}
            />
            {menu}
        </>)
    }

    // on signing OR guesting
    if (!userSrv.isAuth()) {
        return isLoading ? (<>
            <Avatar
                isLoading={true}
                handler={handleMenu}
            />
            {menu}
        </>) : <LoginButton/>
    }

};

const mapStateToProps = (store) => ({
    userInfo: store.auth
});

export default connect(mapStateToProps, {logout})(withRouter(NavProfile))