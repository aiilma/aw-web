import React, {Component} from 'react'
import {withTheme} from '@material-ui/core/styles';
import {ToolbarSpacer} from "../../ui/layout";
import Header from "../../common/components/header/Header";
import {
    FullWidthBg,
    ProfileAnimatedBg,
    ResponsivePageContent,
    ResponsivePageFrame,
    ResponsivePageTemplateContent
} from "./ui";
import {DefaultTheme} from "./ui/themes";
import {HeaderBg, HeaderBgTexture, ProfileHeader} from "./ui/header";
import {ContentHasBg, ProfileContentInner,} from "./ui/content";
import LeftCol from "./components/LeftCol";
import RightCol from "./components/RightCol";
import HeaderContent from "./components/HeaderContent";
import {connect} from "react-redux";
import {fetchCompData} from "../../../store/ducks/showcase/operations";

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

    componentDidMount() {
        const alias = this.props.match.params.alias
        this.props.fetchCompData(alias)
    }

    render() {
        const {
            theme,
            scState: {project},
            userState: {user}
        } = this.props

        const steamCdnBase = `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/`
        const headersHeight = 224

        return (<>
            <Header/>
            <ToolbarSpacer theme={theme}/>

            <ScWrapper theme={DefaultTheme}>
                <FullWidthBg bg={project.bg && `${steamCdnBase}${project.bg}`}>

                    {/* animated background */}
                    {project.bg && project.bg.match(`.webm`) && <ProfileAnimatedBg resource={`${steamCdnBase}${project.bg}`}/>}

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
                            <LeftCol type={project.type} link={project.link}/>
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

export default connect(mapStateToProps, {fetchCompData})(withTheme(ShowcaseContainer))