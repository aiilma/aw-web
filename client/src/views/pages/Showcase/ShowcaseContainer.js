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
import {Clear, FullWidthBg, ResponsivePageContent, ResponsivePageFrame, ResponsivePageTemplateContent} from "./ui";
import {DefaultTheme} from "./ui/themes";
import {HeaderBg, HeaderBgTexture, ProfileHeader} from "./ui/header";
import {ContentHasBg, ProfileContentInner,} from "./ui/content";
import LeftCol from "./components/LeftCol";
import RightCol from "./components/RightCol";
import HeaderContent from "./components/HeaderContent";

const ScWrapper = ({theme: Theme, children, ...props}) => {
    return (
        <Theme>
            <ResponsivePageFrame>
                <ResponsivePageContent>
                    <ResponsivePageTemplateContent>
                        {children}
                    </ResponsivePageTemplateContent>
                </ResponsivePageContent>
            </ResponsivePageFrame>
        </Theme>
    )
}

// FICTIVE DATA
const long = {
    bg: {
        resource: RLongBg
    },
    images: {
        primary: RLongPrimaryImage,
        secondaries: [RLongSecondary],
    }
}
const short = {
    bg: {
        resource: RShortBg
    },
    images: {
        primary: RShortPrimary,
        secondaries: [RShortSecondaryOne, RShortSecondaryTwo, RShortSecondaryTree,],
    }
}

class ShowcaseContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                username: `hi, this nmae isn't big enough, so i'll introduce a blank to you`,
                avatar: RAvatarProfile,
            },
            project: long,
        }
    }

    render() {
        const {
            userInfo: {avatar, username},
            project: {images, bg},
        } = this.state

        const {theme} = this.props
        const headersHeight = 224

        return (<>
            <Header/>
            <ToolbarSpacer theme={theme}/>

            <ScWrapper theme={DefaultTheme}>
                <FullWidthBg resource={bg.resource}>

                    {/* test component for animated backgrounds */}
                    {/*{bg.isAnimated && <ProfileAnimatedBg resource={bg.resource}/>}*/}

                    <HeaderBg minHeight={headersHeight}>
                        <HeaderBgTexture>
                            <ProfileHeader>
                                <HeaderContent userName={username} avatar={avatar}/>
                            </ProfileHeader>
                        </HeaderBgTexture>
                    </HeaderBg>
                    <ContentHasBg headersHeight={headersHeight + theme.mixins.toolbar.minHeight}>
                        <ProfileContentInner>
                            <RightCol/>
                            <LeftCol images={images}/>
                            <Clear where={`both`}/>
                        </ProfileContentInner>
                    </ContentHasBg>


                </FullWidthBg>
            </ScWrapper>
        </>)
    }
}

export default withTheme(ShowcaseContainer)