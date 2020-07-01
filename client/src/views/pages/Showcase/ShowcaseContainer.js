import React, {Component} from 'react'
import {withTheme} from '@material-ui/core/styles';

import RAvatarProfile from "./assets/avatar.jpg";
import RLongBg from "./assets/long_bg.jpg";
import RShortBg from "./assets/short_bg.jpg";
import RLongPrimaryImage from "./assets/long_primary.gif";
import RLongSecondary from "./assets/long_secondary.jpg";
import RShortPrimary from "./assets/short_primary.jpg";
import RShortSecondaryOne from "./assets/short_secondary1.jpg";
import RShortSecondaryTwo from "./assets/short_secondary2.jpg";
import RShortSecondaryTree from "./assets/short_secondary3.jpg";
import {ToolbarSpacer} from "../../ui/layout";
import Header from "../../common/components/header/Header";
import SteamBackground from "./SteamBackground";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileContent from "./ProfileContent/ProfileContent";


const a = {
    background: RLongBg,
    images: {
        primary: RLongPrimaryImage,
        secondaries: [RLongSecondary],
    }
}
const b = {
    background: RShortBg,
    images: {
        primary: RShortPrimary,
        secondaries: [RShortSecondaryOne, RShortSecondaryTwo, RShortSecondaryTree,],
    }
}

class ShowcaseContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userInfo: {username: 'solid8_', avatar: RAvatarProfile,},
            project: a,
        }

    }

    render() {
        return (<>
            <Header/>
            <ToolbarSpacer theme={this.props.theme}/>

            <SteamBackground bg={this.state.project.background}>
                <ProfileHeader userInfo={this.state.userInfo}/>
                <ProfileContent images={this.state.project.images}/>
            </SteamBackground>

        </>)
    }
}

export default withTheme(ShowcaseContainer)