import React from 'react'
import {Router, Switch} from 'react-router-dom'
import history from "../store/utils/history";
import {CompList, ErrorPage, HomeContainer, Showcase, SuggestForm} from "../views/pages";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoutes";
import AdminRoute from "./AdminRoute";
import {Dashboard} from "../views/pages/Admin";
import CompUploadForm from "../views/pages/Admin/CompUploadForm/Container";

const Routes = () => {
    const adminPrefix = `/admin`;

    return (
        <Router history={history}>
            <Switch>
                {/*ADMIN*/}
                <AdminRoute exact path={`${adminPrefix}`} component={Dashboard}/>
                <AdminRoute exact path={`${adminPrefix}/comps/upload`} component={CompUploadForm}/>


                {/*AUTHENTICATED*/}
                <PrivateRoute exact path="/suggest" component={SuggestForm}/>
                <PrivateRoute exact path="/showcase/:id" component={Showcase}/>


                {/*PUBLIC*/}
                <PublicRoute
                    exact path="/"
                    component={HomeContainer} restricted={false}
                />
                <PublicRoute
                    exact path="/compositions"
                    component={CompList} restricted={false}
                />
                <PublicRoute
                    exact path="*"
                    component={ErrorPage} restricted={false}
                />
            </Switch>
        </Router>
    );
};

export default Routes;
