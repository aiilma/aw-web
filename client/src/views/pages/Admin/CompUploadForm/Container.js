import React, {Component} from 'react';
import EnhancedForm from "./EnhancedForm";

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


export default CompUploadFormContainer
