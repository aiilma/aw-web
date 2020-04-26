import React from 'react'
import {Route} from 'react-router'
// import PrimaryLayout from "../views/layout/PrimaryLayout";


const PublicRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
            <Component {...props}/>
        // <PrimaryLayout>
        // </PrimaryLayout>
    )}/>
);


export default PublicRoute;