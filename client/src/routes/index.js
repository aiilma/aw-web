import React from 'react'
import {
    Router,
    Switch
} from 'react-router-dom'
import history from "../store/utils/history";

import {authRoutes, publicRoutes} from './routes/routes'
import adminRoutes from './routes/admin_routes'

import {PrivateRoute, PublicRoute, AdminRoute} from './components'

const Routes = () => (
    <Router history={history}>
        <Switch>
            {/*ADMIN*/}
            {adminRoutes.map((route, i) => <AdminRoute key={i} {...route} prefix={'/admin'}/>)}

            {/*AUTHENTICATED*/}
            {authRoutes.map((route, i) => route.auth ?
                <PrivateRoute key={i} {...route}/> : <PublicRoute key={i} {...route}/>
            )}

            {/*PUBLIC*/}
            {publicRoutes.map((route, i) => <PublicRoute key={i} {...route}/>)}
        </Switch>
    </Router>
);

export default Routes;
