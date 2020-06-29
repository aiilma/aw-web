import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from "react-redux";
import {UserSrv} from "../store/services/UserSrv";

const AdminRoute = ({component: Component, ...rest}) => {
    const {userInfo: {user}} = rest;
    const userRoles = user.roles || []
    const userSrv = new UserSrv()

    return (
        <Route {...rest} render={props => (
            userSrv.hasRole(`admin`, userRoles) ?
                <Component {...props} />
                : <Redirect to={{
                    pathname: '/',
                    state: {from: props.location}
                }}/>
        )}/>
    );
};

const mapStateToProps = store => ({
    userInfo: store.auth
})

export default connect(mapStateToProps, null)(AdminRoute)