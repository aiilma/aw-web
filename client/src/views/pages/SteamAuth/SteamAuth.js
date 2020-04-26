import React from 'react'
import {connect} from "react-redux";
import {login} from "../../../store/ducks/auth/operations";
import {PrimaryLayout} from "../../common";
import {Redirect} from "react-router-dom";

class SteamAuth extends React.Component {
    componentDidMount() {
        const authParams = this.props.location.search
        this.props.login(authParams)
    }

    render() {
        // const {loading, error, data} = this.state;
        const loading = false
        const error = null

        if (loading) {
            return <div>Loading....</div>;
        }

        if (error) {
            return (
                <div>
                    <p>Error:</p>
                    <code className="Code-block">{error.toString()}</code>
                </div>
            );
        }

        return (
            <PrimaryLayout>
                <Redirect
                    to={{
                        pathname: '/',
                        state: {from: this.props.location}
                    }}
                />
            </PrimaryLayout>
        );
    }
}

export default connect(null, {login})(SteamAuth);
