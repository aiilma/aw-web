import React, {Suspense} from 'react';
import Routes from "./routes";
import {connect} from "react-redux";
import {initApp} from "./store/ducks/app/operations";
import {PagePreloader} from "./views/ui/layout";
import StyleProvidersBundle from "./views/common/theme/StyleProvidersBundle";

class App extends React.Component {

    componentDidMount() {
        this.props.initApp()
    }

    render() {
        return (
            <StyleProvidersBundle>
                <Suspense fallback={<PagePreloader opacity={90}/>}>
                    {!this.props.initialized && <PagePreloader opacity={90}/>}
                    <Routes/>
                </Suspense>
            </StyleProvidersBundle>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initApp})(App)
