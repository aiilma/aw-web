import React from "react";
import styled, {css} from "styled-components";
import {CommonBetweenCols} from "./content";
import {SteamLink} from "./index";

const LeftColWrapper = styled.div`
    width: 652px;
    float: left;
    ${CommonBetweenCols}
`

const ProfileCustomizationArea = styled.div`
`

const ProfileCustomization = styled.div`
    position: relative;
    background-position: top left;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px);
    border-radius: 0px;
    padding: 0px 0px 0px 0px;
    margin-bottom: 12px;
    font-size: 13px;
    overflow: hidden;
`

const ProfileCustomizationMyArt = styled(ProfileCustomization)`
`

const ProfileCustomizationHeader = styled((props) => <div {...props}>{props.label}</div>)`
    font-family: "Motiva Sans", Sans-serif;
    font-weight: 200; /* thin */

    background: var(--color-showcase-header);
    background: linear-gradient(90deg, var(--gradient-showcase-header-left) 0%, var(--color-showcase-header) 90%);
    padding: 5px 10px 5px 10px;
    color: #ffffff;
    font-size: 16px;
    line-height: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
    ${ProfileCustomizationMyArt} & {
        font-family: "Motiva Sans", Sans-serif;
        font-weight: 200; /* thin */
    
        background: var(--color-showcase-header);
        background: linear-gradient(90deg, var(--gradient-showcase-header-left) 0%, var(--color-showcase-header) 90%);
        padding: 5px 10px 5px 10px;
        color: #ffffff;
        font-size: 16px;
        line-height: 30px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`

const ProfileCustomizationBlock = styled.div`
    position: relative;
    border-radius: 5px;
    padding: 20px 10px 11px 10px;
    margin-bottom: 0px;
    font-size: 13px;
    overflow: hidden;
    
    ${ProfileCustomizationMyArt} & {
        position: relative;
        border-radius: 5px;
        padding: 15px 10px 11px 10px;
        margin-bottom: 0px;
        font-size: 13px;
        overflow: hidden;
    }
`


// SCREENSHOT SHOWCASE
// *******************
// *******************
// *******************
// *******************
// *******************
// SCREENSHOT SHOWCASE

const ScShowCase = styled.div`
`

const ScSlotMixin = css`
    display: block;
    float: left;
    position: relative;
`

const ScShowCaseSc = styled(({src, ...props}) => {
    return <SteamLink {...props}>
        <img width="100%" src={src}/>
    </SteamLink>
})`
    cursor: pointer;
    border: 1px solid #000000;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    
    &:hover {
        border: 1px solid #97C0E3;
    }
    
    & img {
        display: block;
    }
`

const ScShowCasePrimary = styled.div`
    width: 508px;
    max-width: calc(83% - 7px);
    float: left;
    margin-right: 7px;
    
    & ${ScShowCaseSc} {
        margin-bottom: 4px;
    }
`

const ScShowCasePrimaryScSlot = styled(ScShowCasePrimary)`
    ${ScSlotMixin}
    
    & ${ScShowCaseSc} img {
        max-width: 506px;
    }
`


const ScShowcaseItemName = styled(({desc = '', ...props}) => <div {...props}>{desc}</div>)`
    word-wrap: break-word;
`

const ScShowcaseStats = styled.div`
    line-height: 24px;
`

const ScShowcaseStatsItem = styled(({src, count, ...props}) => {
    return <span {...props}>
        <img src={src} alt={`Icon`}/>{count}
    </span>
})`
    margin-right: 12px;
    cursor: default;

    ${ScShowcaseStats} & {
        vertical-align: text-bottom;
    }
`

//right

const ScShowCaseRightCol = styled.div`
    overflow: hidden;
    max-width: 17%;
    width: 102px;
    text-align: center;
    
    & ${ScShowCaseSc} img {
        max-width: 100px;
    }
`

const ScShowCaseSmallSc = styled.div`
    float: none;
    margin-bottom: 11px;   
`

const ScShowCaseSmallScSlot = styled(ScShowCaseSmallSc)`
    ${ScSlotMixin}
`


export {
    LeftColWrapper, ProfileCustomizationArea, ProfileCustomizationMyArt,
    ProfileCustomizationHeader, ProfileCustomizationBlock,
    ScShowCase, ScShowCasePrimaryScSlot, ScShowCaseSc, ScShowcaseItemName, ScShowcaseStats, ScShowcaseStatsItem,
    ScShowCaseRightCol, ScShowCaseSmallScSlot
}