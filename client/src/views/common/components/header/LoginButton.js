import React from 'react';
import Button from "@material-ui/core/Button";

class LoginButton extends React.Component {

    constructor(props) {
        super(props)
        const steamLoginUrl = process.env.REACT_APP_STEAM_LOGIN_URL
        this.state = {
            steamLoginUrl
        }
    }

    // componentDidMount() {
    //     axios.get('/api/login/steam')
    //         .then((data) => {
    //             this.setState({
    //                 steamLoginUrl: data.url
    //             })
    //         })
    //         .catch((error) => this.setState({
    //             steamLoginUrl: error
    //         }));
    // }

    render() {
        return (
            <>
                {this.state.steamLoginUrl && (
                    <Button href={this.state.steamLoginUrl} color="inherit">Login</Button>
                )}
            </>
        )

    }
}


export default LoginButton
