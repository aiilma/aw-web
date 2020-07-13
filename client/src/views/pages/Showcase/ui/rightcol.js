import React from "react";
import styled from "styled-components";
import {Clear, Ellipsis, SteamLink} from "./index";
import {CommonBetweenCols} from "./content";

const RightColWrapper = styled.div`
    background-color: #101214;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px);
    padding: 10px;
    border-radius: 0px;
    width: 268px;
    float: right;
    ${CommonBetweenCols}
`

const ResponsiveCountLinkArea = styled.div`
    @media screen and (max-width: 910px) {
        margin: 0 -4px;
    }
`

const ProfileItemLinks = styled(({className, children, ...props}) => {
    return <div className={className} {...props}>
        {children}
        <Clear where={`left`}/>
    </div>
})`
    margin-bottom: 40px;
    
    @media screen and (max-width: 910px) {
        margin-bottom: 12px;
    }
`

const CountLinkLabel = styled(({label, ...props}) => <span {...props}>{label}</span>)`
`
const ProfileCountLinkTotal = styled(({count, ...props}) => <span {...props}>{count}</span>)`
    font-family: "Motiva Sans", Sans-serif;
    font-weight: 200; /* thin */

    color: #9b9b9b;
    font-size: 24px;
    
    @media screen and (max-width: 910px) {
        font-size: 20px;
    }
`

const ProfileCountLink = styled(({className, label = 'undefined', count = 0, handler, ...props}) => {
    return <div className={className} {...props}>
        <SteamLink onClick={handler}>
            <CountLinkLabel label={label}/>&nbsp;
            <ProfileCountLinkTotal count={count}/>&nbsp;
        </SteamLink>
    </div>
})`
    font-size: 14px;
    margin-bottom: 4px;
    min-height: 29px;
    ${Ellipsis}
    
    & ${SteamLink}:hover ${CountLinkLabel} {
        text-decoration: underline;
    }
    
    @media screen and (max-width: 910px) {
        font-size: inherit;
    }
    @media screen and (max-width: 910px) {
        background: rgba(0, 0, 0, 0.5);
        display: block;
        float: left;
        padding: 8px;
        margin: 0 4px 4px 4px;
        height: 29px;
    }
    @media screen and (min-width: 661px) and (max-width: 910px) {
        width: calc(25% - 16px - 8px);
    }
    @media screen and (min-width: 521px) and ( max-width: 660px ) {
        width: calc(33% - 16px - 8px);
    }
    @media screen and (max-width: 520px) {
        width: calc(50% - 16px - 8px);
    }
`

export {
    RightColWrapper, ResponsiveCountLinkArea, ProfileItemLinks, ProfileCountLink
}