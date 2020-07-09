import React, {Component} from 'react'
import {withTheme} from '@material-ui/core/styles';
import {ToolbarSpacer} from "../../ui/layout";
import Header from "../../common/components/header/Header";
import {Clear, FullWidthBg, ResponsivePageContent, ResponsivePageFrame, ResponsivePageTemplateContent} from "./ui";
import {DefaultTheme} from "./ui/themes";
import {HeaderBg, HeaderBgTexture, ProfileHeader} from "./ui/header";
import {ContentHasBg, ProfileContentInner,} from "./ui/content";
import LeftCol from "./components/LeftCol";
import RightCol from "./components/RightCol";
import HeaderContent from "./components/HeaderContent";
import {connect} from "react-redux";

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


class ShowcaseContainer extends Component {

    render() {
        const {
            theme,
            scState: {project},
            userState: {user}
        } = this.props

        const headersHeight = 224

        return (<>
            <Header/>
            <ToolbarSpacer theme={theme}/>

            <ScWrapper theme={DefaultTheme}>
                <FullWidthBg resource={project.bg.resource}>

                    {/* test component for animated backgrounds */}
                    {/*{bg.isAnimated && <ProfileAnimatedBg resource={bg.resource}/>}*/}

                    <HeaderBg minHeight={headersHeight}>
                        <HeaderBgTexture>
                            <ProfileHeader>
                                <HeaderContent
                                    userName={user.nickname}
                                    avatar={user.avatar.replace(`_medium`, `_full`)}/>
                            </ProfileHeader>
                        </HeaderBgTexture>
                    </HeaderBg>
                    <ContentHasBg headersHeight={headersHeight + theme.mixins.toolbar.minHeight}>
                        <ProfileContentInner>
                            <RightCol/>
                            <LeftCol images={project.images}/>
                            <Clear where={`both`}/>
                        </ProfileContentInner>
                    </ContentHasBg>


                </FullWidthBg>
            </ScWrapper>
        </>)
    }
}

const mapStateToProps = (store) => ({
    scState: store.showcase,
    userState: store.auth
})

export default connect(mapStateToProps, null)(withTheme(ShowcaseContainer))