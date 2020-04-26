import styled from 'styled-components'
import Button from "@material-ui/core/Button";

const BaseLink = styled.a`
    color: #FFFFFF;
    text-decoration: none;
`

export const ExtLink = styled(BaseLink)`
`

export const Btn = styled(Button)`
    margin-top: ${({theme}) => theme.spacing(3)}px;
    margin-left: ${({theme}) => theme.spacing(1)}px;
`

export const ButtonsGroup = styled.div`
        display: flex;
        justify-content: flex-start;
                
        ${(props) => props.left && `justify-content: flex-start;`}
        ${(props) => props.center && `justify-content: center;`}
        ${(props) => props.right && `justify-content: flex-end;`}
`
