import React, {Component} from 'react';
import EnhancedForm from "./EnhancedForm";

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

export default SuggestFormContainer