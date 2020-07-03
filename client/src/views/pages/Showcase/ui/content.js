import React from "react";
import styled, {css} from "styled-components";
import {FullWidthBg} from "./index";

const Content = styled.div`
    position: relative;
    background: radial-gradient(farthest-side at top right,var(--gradient-right),transparent 500px),
    radial-gradient(farthest-corner at top left,var(--gradient-left),transparent 600px),
    radial-gradient(farthest-corner at bottom right,var(--gradient-background-right),transparent 500px),
    radial-gradient(farthest-corner at bottom left,var(--gradient-background-left),transparent 600px);
    background-color: var(--gradient-background);
    background-repeat: no-repeat;
    padding: 12px 12px 64px 12px;
    width: 952px;
    margin: 0 auto;
    font-size: 13px;
    min-height: calc(100vh - ${(props) => props.headersHeight || 288}px);
    
    
    @media screen and (max-width: 910px) {
        width: auto;
        font-size: inherit;
    }
`
// min-height: calc(100vh - 300px);

const ContentHasBg = styled(Content)`
    background: radial-gradient(farthest-side at top right,var(--gradient-right),transparent 500px),
    radial-gradient(farthest-corner at top left,var(--gradient-left),transparent 600px),
    radial-gradient(farthest-corner at bottom right,var(--gradient-background-right),transparent 500px),
    radial-gradient(farthest-corner at bottom left,var(--gradient-background-left),transparent 600px);
    background-color: var(--gradient-background);
    margin-top: 0px;
    overflow: hidden;
    padding-top: 16px;
    
    margin-left: auto;
    margin-right: auto;
`

const ProfileContentInner = styled.div`
    position: relative;
    
    ${FullWidthBg} & {
        @media screen and (max-width: 910px) {
            padding-bottom: 120px;
        }
    }
`


const CommonBetweenCols = css`
    @media screen and (max-width: 910px) {
        float: none;
        width: auto;
        padding: 0 1%;
    }
`


export {
    ContentHasBg, ProfileContentInner, CommonBetweenCols
}

//------------------

