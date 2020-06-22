import React, {Suspense} from 'react';
import Routes from "./routes";
import {connect} from "react-redux";
import {initApp} from "./store/ducks/app/operations";
import {PagePreloader} from "./views/ui/layout";
import StyleProvidersBundle from "./views/common/theme/StyleProvidersBundle";
import Alert from "@material-ui/lab/Alert";

class App extends React.Component {

    componentDidMount() {
        const {initApp} = this.props
        initApp()
    }

    render() {
        const {initialized, isError} = this.props;
        const errorMessage = isError ? <Alert severity="error">{`Something has gone wrong`}</Alert> : null;
        const loader = !initialized ? <PagePreloader opacity={90}/> : null;
        const canShowRoutes = initialized && !isError;
        const routes = canShowRoutes ? <Routes/> : null;

        return (
            <StyleProvidersBundle>
                <Suspense fallback={loader}>
                    {errorMessage}
                    {loader}
                    {routes}
                </Suspense>
            </StyleProvidersBundle>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    isError: state.app.isError,
})

export default connect(mapStateToProps, {initApp})(App)
