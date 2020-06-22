import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {UserSrv} from "../store/services/UserSrv";

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const userSrv = new UserSrv()

    return (
        <Route {...rest} render={props => (
            userSrv.isAuth() && restricted ?
                <Redirect to="/account"/>
                : <Component {...props} />
        )}/>
    );
};

export default PublicRoute;
