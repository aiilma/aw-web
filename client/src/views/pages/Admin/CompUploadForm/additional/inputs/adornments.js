import React from "react";
import styled from "styled-components";
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import RemoveIcon from '@material-ui/icons/Remove';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

const AttributeIcon = styled(({className}) => {
    return (
        <EditAttributesIcon className={className}/>
    )
})`
color: ${({color}) => color}
`;

export const Remover = styled(({className, ...props}) => {
    const {onRemove} = props;

    return (
        <InputAdornment position="end" className={className}>
            <IconButton onClick={onRemove}>
                <RemoveIcon/>
            </IconButton>
        </InputAdornment>
    )
})`
& .MuiIconButton-root {
padding: 0;
}
`;

export const Attributer = styled(({className, ...props}) => {
    const {attrOpened, onShow} = props;

    return (
        <InputAdornment position="start" className={className}>
            <IconButton onClick={onShow} disableRipple>
                {attrOpened ? <AttributeIcon color="orange"/> : <AttributeIcon/>}
            </IconButton>
        </InputAdornment>
    )
})`
& .MuiIconButton-root {
background-color: transparent;
padding: 0;
}
`;
