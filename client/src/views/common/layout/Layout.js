import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import PaletteIcon from '@material-ui/icons/Palette';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import {Header, Footer, Content, Drawer} from '../components'
import {Background} from "../../ui/layout";

const Layout = ({user, ...props}) => {
    const links = [{
        text: 'Compositions',
        to: '/compositions',
        icon: <PaletteIcon/>,
    }, {
        text: 'Suggest',
        to: '/suggest',
        icon: <BorderColorIcon/>,
    }]

    return (
        <Background>
            <Header user/>
            {(user.isAuthenticated && props.location.pathname !== '/') && <Drawer links={links}/>}
            <Content>
                {props.children}
                <Footer/>
            </Content>
        </Background>
    );
}

const mapStateToProps = (store) => ({
    user: store.user
})

export default connect(mapStateToProps)(withRouter(Layout))
