import React, {Component} from 'react';
import {connect} from "react-redux";
import EnhancedForm from "./EnhancedForm";

import {makeRequest} from "../../../store/ducks/suggest-form/operations";


class SuggestFormContainer extends Component {

    handleBack() {
        this.props.history.goBack()
    }

    render() {
        const {makeRequest} = this.props

        return (
            <EnhancedForm
                handleBack={this.handleBack.bind(this)}
                makeRequest={makeRequest}
            />
        );
    }
}


export default connect(null, {makeRequest})(SuggestFormContainer)