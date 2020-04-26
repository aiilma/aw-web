import React from 'react'
import {Route} from "react-router-dom";

const AdminRoute = ({component: Component, ...rest}) => {
    // условие + действие

    return (
        <Route {...rest} render={props => <Component {...props} />}/>
    )
};

export default AdminRoute
