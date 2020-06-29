import React from 'react'
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components'

const BoxBtn = styled(ButtonBase)`
        will-change: transform;
        width: 450px;
        height: 300px;
        position: relative;
        margin: 6% 3%;
        box-shadow: 0 2px 2px 1px rgba(0, 0, 0, .95);
        transition: all .15s ease-in-out;
        transform: rotate(${({rotate}) => rotate}deg);
        
        ${({theme}) => `
            ${theme.breakpoints.down('xs')} {
                    width: 100% !important;
                    height: 100px;
                }
        `}
        
        &:hover {
            box-shadow: 0 5px 8px 2px rgba(0, 0, 0, .95);
            z-index: 1;
        }
        
        &:active {
            color: rgba(255, 255, 255, .95);
            box-shadow: 0 5px 8px 2px rgba(243, 156, 18, .95);
            transition: all .75s ease-in-out;
        }
`

// imageSrc
const Image = styled.span`
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-size: cover;
        background-position: center 40%;
        background-image: url('${({image}) => image}');
`

//imageBackdrop
const Backdrop = styled.span`
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0.4;
        
        background-color: ${({theme}) => theme.palette.common.black};
        transition: ${({theme}) => theme.transitions.create('opacity')};
        
        ${BoxBtn}:hover & {
            opacity: 0.15;
        }
`

const TitleWrapper = styled.span`
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({theme}) => theme.palette.common.white};
`
const Title = styled(Typography)`
    position: relative;
    padding: ${({theme}) => `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`};
    
    ${BoxBtn}:hover & {
        border: 4px solid currentColor;
    }
`


const BoxVariant = React.memo(({image, ...props}) => {

    return (
        <BoxBtn component={Link} to={image.to} rotate={image.rotate} focusRipple p={5}>
            <Image image={`/storage/images/${image.url}`}/>
            <Backdrop/>
            <TitleWrapper>
                <Title component="span" variant="subtitle1" color="inherit">
                    {image.title}
                </Title>
            </TitleWrapper>
        </BoxBtn>
    )
})

export default BoxVariant