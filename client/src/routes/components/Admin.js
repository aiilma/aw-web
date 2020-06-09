import React from 'react'
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import UserApi from "../../store/utils/UserApi";

const AdminRoute = ({component: Component, ...rest}) => {
    const {userInfo: {user}} = rest;

    if (!user.roles) return null;

    return (
        <Route {...rest} render={props => (
            !UserApi.hasRole('admin', user.roles) ? (
                <Redirect
                    to={{
                        pathname: '/',
                        state: {from: props.location}
                    }}
                />
            ) : <Component {...props} />
        )}/>
    )
};

const mapStateToProps = (store) => ({
    userInfo: store.auth
});

export default connect(mapStateToProps, null)(AdminRoute)