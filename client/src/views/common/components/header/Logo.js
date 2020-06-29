import React from 'react'
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import styled from 'styled-components'

const LogoStyled = styled(({className, ...props}) => {
    return (
        <IconButton className={className}
                    component={Link} to="/" color='inherit' disableRipple={true}
        >
            {
                <img src={props.src} width={props.size} height={props.size} alt={props.alt}/>
            }
        </IconButton>
    )
})`
margin-right: 4px;
&:hover {background-color: rgba(255, 255, 255, 0);}
`

const Logo = (props) => <LogoStyled src={`/storage/images/logo_light.svg`} size={32}
                                    alt={`${process.env.REACT_APP_TITLE}`}/>

export default Logo