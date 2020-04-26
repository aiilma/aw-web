import React from 'react';
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledFooter = styled.footer`
    text-align: center;
    margin: auto 0 0;
    background-color: ${({theme}) => theme.palette.background.default};
    padding: ${({theme}) => theme.spacing(2)}px;
`

const Copyright = styled(Typography)``

const Footer = ({...props}) => {
    return (
        <StyledFooter>
            <Copyright variant="body2" color="textSecondary" align="center">
                {`Copyright © Artworch ${new Date().getFullYear()}.`}
            </Copyright>
        </StyledFooter>
    )
}

export default Footer