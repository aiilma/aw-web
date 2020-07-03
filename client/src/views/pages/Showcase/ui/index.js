import React from "react";
import styled, {css} from "styled-components";

const ProfilePageMixin = css`
    position: relative;
    min-width: 950px;
    background-image: url('https://steamcommunity-a.akamaihd.net/public/images/profile/2020/bg_dots.png');
    background-position: center top;
    background-repeat: no-repeat;
    background-color: #000000;
    
    @media screen and (max-width: 910px) {
        min-width: 0;
    }
`
const HasBgMixin = css`
    background-image: none;
    background-color: #000000;
    background-position: center top;
    background-repeat: no-repeat;
    
    @media ( max-width: 1920px ) {
        background-size: auto;
    }
    
    @media screen and (-webkit-min-device-pixel-ratio: 0) {
        background-position: 49.999% 0;
    }
`

const Ellipsis = css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

//-----------------

const SteamLink = styled.span`
    color: #ebebeb;
    text-decoration: none;
    cursor: pointer;
`
const SteamBody = styled.div`
    background:  #1b2838;
    text-align: left;
    color: #8F98A0;
    font-size: 14px;
    margin:0;
    padding:0;
    min-height: 100%;
    height: auto;
    position: relative;
    font-family:Arial, Helvetica, Verdana, sans-serif;
`
const FlatPage = styled(SteamBody)`
    position: relative;
    min-height: 100%;
`
const ProfilePage = styled(FlatPage)`
    ${ProfilePageMixin}
`
const HasProfileBg = styled(ProfilePage)`
    ${HasBgMixin}
`

//-----------------

const ResponsivePageFrame = styled.div`
    position: relative;
    
    ${FlatPage} & {
        position: static;
    }
`
const ResponsivePageContent = styled.div`
    @media screen and (max-width: 910px)
    {
        position: relative;
        z-index: 10;
    }
`
const ResponsivePageTemplateContent = styled.div`
    @media screen and (max-width: 910px)
    {
        padding-bottom: 120px;
        min-height: calc( 100vh - 120px );
        
        ${ProfilePage} & {
            padding-bottom: 0;
        }
    }
`

//-------------------
const FullWidthBg = styled.div`
    ${ProfilePageMixin}
    ${HasBgMixin}
    background-size: 100%;
    background-image: url(${(props) => props.resource || `https://steamcommunity-a.akamaihd.net/public/images/profile/2020/bg_dots.png`});
`
//-------------------

const ProfileAnimatedBg = styled(({className, resource, ...props}) => {
    const {poster, webm, mp4} = resource

    return <div className={className} {...props}>
        <video playsInline autoPlay muted loop poster={poster}>
            <source src={webm} type="video/webm"/>
            <source src={mp4} type="video/mp4"/>
        </video>
    </div>
})`
    position: absolute;

    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    overflow: hidden;
    
    & > video {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 1920px;
        
        ${FullWidthBg} & {
            width: 100%;
            
            @media ( max-width: 1920px ) {
                width: 1920px;
            }
        }
    }
`

const Clear = styled.div`
    clear: ${(props) => props.where};
`

export {
    Clear, Ellipsis,
    SteamLink,
    SteamBody, HasProfileBg,
    ResponsivePageFrame, ResponsivePageContent, ResponsivePageTemplateContent,
    FullWidthBg,
    ProfileAnimatedBg,
}

//------------------

