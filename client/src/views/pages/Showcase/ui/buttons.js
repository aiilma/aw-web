import React from 'react'
import styled from "styled-components";

const BtnProfileAction = styled(({className, caption, handler, ...props}) => {
    return <div
        className={className}
        onClick={handler}
        {...props}
    >
        {caption}
    </div>
})`
    border-radius: 2px;
    color: lightgray !important;
    padding: 1px;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    background-color: var(--btn-background);
    transition: all 0.1s ease-in-out;
    
    & > span {
        border-radius: 2px;
        display: block;
        background-color: var(--btn-background);
    }
    
    &:hover, &.focus {
        text-decoration: none;
        color: #fff;
        background-color: var(--btn-background-hover);
        filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.25));
    }
    
    &:hover > span, &.focus > span {
        background-color: var(--btn-background-hover);
        color: #fff;
    }
    
    ${(props) => props.size === `medium` && `
        &, & > span {
            padding: 0 15px;
            font-size: 15px;
            line-height: 30px;
        }
    `}
`

export {BtnProfileAction}