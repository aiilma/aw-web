import React, {Component} from 'react';
import {connect} from "react-redux";
import EnhancedForm from "./EnhancedForm";
import {makeRequest} from "../../../../store/ducks/admin/comp-upload-form/operations";


class CompUploadFormContainer extends Component {

    // вернуться назад
    handleBack() {
        this.props.history.goBack()
    }

    render() {
        const {makeRequest} = this.props;

        return (
            <EnhancedForm
                handleBack={this.handleBack.bind(this)}
                makeRequest={makeRequest}
            />
        );
    }
}


export default connect(null, {makeRequest})(CompUploadFormContainer)
