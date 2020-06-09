import React from "react";
import styled from "styled-components";
import RemoveIcon from '@material-ui/icons/Remove';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";

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
    const {attrOpened, onChange} = props;

    return (<Switch
        checked={attrOpened}
        color="default" size="small" edge="start" disableRipple
        onChange={onChange}
    />)
})`
`;
