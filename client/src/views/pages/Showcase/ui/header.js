import React from "react";
import styled, {css} from "styled-components";


const HeaderBg = styled.div`
    position: relative;
    max-width: 1018px;
    min-height: ${(props) => props.minHeight}px;
    padding-bottom: 0px;
    margin: 0 auto;

    background-repeat: no-repeat;
    background-position: center bottom;
    
    @media screen and (max-width: 910px) {
        min-width: 0;
    }
`

const HeaderBgTexture = styled.div`
    max-width: 976px;
    min-height: 224px;
    margin: 0 auto;
    background: radial-gradient(farthest-side at bottom right,var(--gradient-right),transparent 500px),
    radial-gradient(farthest-corner at bottom left,var(--gradient-left),transparent 600px);
    background-color: var(--gradient-background);
    background-repeat: no-repeat;
    background-position: center;
    
    @media screen and ( max-width: 700px ) {
        background-size: cover;
    }
`

const ProfileHeader = styled.div`
    position: relative;
    max-width: 926px;
    margin: 0 auto;
    padding-top: 24px;
    
    @media screen and ( max-width: 700px ) {
        padding-top: 8px;
    }
    
    @media screen and ( max-width: 910px ) {
        width: auto;
        padding-left: 8px;
        padding-right: 8px;
    }
`

const ProfileHeaderContent = styled.div`
    position: relative;
    padding-top: 8px;
    padding-right: 8px;
    color: #898989;
    font-size: 13px;
    color: #dcc570;
    
    @media screen and ( max-width: 700px ) {
        padding-top: 0;
    }
`

// ------------------INNER


//username
const ProfileHeaderCenteredPersona = styled(({className, userName = 'undefined', ...props}) => {
    return <div className={className} {...props}>
        <div>
            <span>{userName}</span>
        </div>
    </div>
})`
    ${ProfileHeader} & {
        position: absolute;
        left: 190px;
        right: 286px;
        white-space: nowrap;
        
        @media screen and ( max-width: 700px ) {
            position: static;
            padding-bottom: 8px;
        }
        
        & > div {
            font-weight: normal;
            line-height: 40px;
            font-size: 24px;
            color: #ffffff;
        
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        
            font-family: "Motiva Sans", Sans-serif;
            font-weight: 200; /* thin */
        }
    }
`

//avatar
const PlayerAvatar = styled(({className, children, ...props}) => {
    return <div className={className} {...props}>
        {children}
    </div>
})`
    width: 34px;
    height: 34px;
    position: relative;
    border-radius: 0;
    padding: 1px;
    
    & img {
        width: 32px;
        height: 32px;
        padding: 1px;
        border-radius: 0;
        border: none;
    }
`
const PlayerAvatarHeaderSize = styled(PlayerAvatar)`
    position: relative;
    width: 166px;
    height: 166px;
    
    ${ProfileHeader} & {
        float: left;
        margin-right: 18px;
        
        @media screen and ( max-width: 700px ) {
            max-width: 40%;
        }
        
        @media screen and ( max-width: 460px ) {
            max-width: none;
            width: 125px;
            height: 125px;
        }
    }
`
const PlayerAvatarAutoSizeInner = styled.div`
    ${PlayerAvatarHeaderSize} & {
        position: absolute;
        top: 2px;
        right: 2px;
        bottom: 2px;
        left: 2px;
        
        & img {
            /* override the gradient behind the image (it won't show anyway) */
            background: none;
            filter: none;
        
            /* fix space appearing beneath image */
            display: block;
        
            padding: 0;
            width: 100%;
            height: 100%;
        }
    }
`

//badge
const BadgeInfo = styled.div`
    float: right;
    
    @media screen and ( max-width: 700px ) {
        float: none;
        overflow: hidden;
    }
    
    @media screen and ( max-width: 460px ) {
        float: none;
        overflow: visible;
    }
`
const BadgeInfoArea = styled.div`
    width: 268px;
    
    @media screen and ( max-width: 460px ) {
        float: none;
        overflow: hidden;
        max-width: 50%;
        max-width: calc(100% - 125px - 20px);
    }
`
const BadgeInfoActions = styled.div`
    white-space: nowrap;
    
    @media screen and ( max-width: 460px ) {
        clear: both;
        padding-top: 8px;
        text-align: center;
    }
`

const ProfileHeaderBadgeInfo = styled.div`
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.3);
    height: 123px;
    margin-bottom: 13px;
    
    @media screen and ( max-width: 460px ) {
        ${BadgeInfoArea} & {
            margin-bottom: 0;
        }
    }
`

//summary
const HeaderSummary = styled.div`
    overflow: hidden;
    padding-right: 18px;
    
    @media screen and ( max-width: 700px ) {
        clear: both;
        padding: 8px;
    }
`
const UserNameSpacer = styled.div`
    height: 52px;
    
    @media screen and ( max-width: 700px ) {
        ${ProfileHeader} ${HeaderSummary} & {
            display: none;
        }
    }
`
const ProfileSummary = styled.div`
    ${ProfileHeader} & {
        line-height: 18px;
        height: 57px;
        overflow: auto;
        margin-bottom: 8px;
        color: #dcc570;
        padding-left: 5px;
        
        ${(props) => props.noexpand && `
            height: 76px;
            
            @media screen and ( max-width: 700px ) {
                height: auto;
            }
        `}
    }
`


export {
    HeaderBg, HeaderBgTexture, ProfileHeader, ProfileHeaderContent,
    ProfileHeaderCenteredPersona,
    PlayerAvatarHeaderSize, PlayerAvatarAutoSizeInner,
    BadgeInfo, BadgeInfoArea, BadgeInfoActions,
    ProfileHeaderBadgeInfo,
    HeaderSummary, UserNameSpacer, ProfileSummary

}

//------------------

