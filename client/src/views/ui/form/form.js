import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import {Spacer} from "../layout";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Title = ({text, ...props}) => {
    return (
        <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom={true}>
            {text}
        </Typography>
    )
}

const Wrapper = styled(Container)`
        width: auto;
        margin-left: ${({theme}) => theme.spacing(2)}px;
        margin-right: ${({theme}) => theme.spacing(2)}px;
        ${({theme}) => theme.breakpoints.up(600 + theme.spacing(2) * 2)} {
            width: 600px;
            margin-left: auto;
            margin-right: auto;
        };
`

const FormWrapper = ({caption = "Безымянный", size = "xl", children, ...props}) => {
    return (
        <>
            <Spacer/>
            <Wrapper maxWidth={size}>
                <InnerFormSpacer>
                    <Title text={caption}/>
                    {children}
                </InnerFormSpacer>
            </Wrapper>
        </>
    )
}


const InnerFormSpacer = styled(Paper)`
        margin-bottom: ${({theme}) => theme.spacing(3)}px;
        padding: ${({theme}) => theme.spacing(2)}px;
        ${({theme}) => theme.breakpoints.up(600 + theme.spacing(3) * 2)} {
            margin-bottom: ${({theme}) => theme.spacing(6)}px;
            padding: ${({theme}) => theme.spacing(3)}px;
        },
`

const AttributeCaption = styled(({className, ...props}) => (
    <Typography className={className}>{props.children}</Typography>))`
    color: rgb(255, 152, 0);
    padding-top: 8px;
    padding-left: 16px;
    padding-right: 16px;
`

export {Title, Wrapper, FormWrapper, InnerFormSpacer, AttributeCaption}
