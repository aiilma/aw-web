import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {withSnackbar} from "notistack";
import {UserSrv} from "../store/services/UserSrv";

const PrivateRoute = ({component: Component, ...rest}) => {
    const userSrv = new UserSrv()

    if (!userSrv.isAuth()) {
        rest.enqueueSnackbar('You must be logged in.', {
            variant: 'info',
            autoHideDuration: 5000,
        })
    }

    return (
        <Route {...rest} render={props => (
            userSrv.isAuth() ?
                <Component {...props} />
                : <Redirect to={{
                    pathname: '/',
                    state: {from: props.location}
                }}/>
        )}/>
    );
};

export default withSnackbar(PrivateRoute);
