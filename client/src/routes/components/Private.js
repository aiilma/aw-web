import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {me} from "../../store/ducks/auth/operations";
import {connect} from "react-redux";
import UserApi from "../../store/utils/UserApi";
import {withSnackbar} from "notistack";
// import SecondaryLayout from "../views/layout/SecondaryLayout";


const PrivateRoute = ({component: Component, ...rest}) => {
    // React.useEffect(() => {
    //     rest.me()
    //         .then(data => {
    //             setLoggedIn(data)})
    //         .catch(err => setLoggedIn(err));
    //     // eslint-disable-next-line
    // }, []);
    // if (!loggedIn) {
    //     return null;
    // }

    // console.log(loggedIn.id)

    if (!UserApi.isAuthenticated) {
        rest.enqueueSnackbar('You must be logged in.', {
            variant: 'info',
            autoHideDuration: 5000,
        })
    }

    return (
        <Route {...rest} render={props => (
            !UserApi.isAuthenticated ? (
                <Redirect
                    to={{
                        pathname: '/',
                        state: {from: props.location}
                    }}
                />
            ) : <Component {...props} />
        )}
        />
    )
};

export default withSnackbar(connect(null, {me})(PrivateRoute))
