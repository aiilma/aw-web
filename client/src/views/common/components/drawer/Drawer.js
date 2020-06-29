import React from 'react';
import {Drawer as MaterialDrawer} from '@material-ui/core';
import DrawerList from "./DrawerList";
import {withRouter} from "react-router-dom";
import styled from 'styled-components'
import {ToolbarSpacer} from "../../../ui/layout";

const DrawerWrapper = styled((props) => {
    return (
        <MaterialDrawer
            className={props.className}
            variant="permanent"
        >
            <ToolbarSpacer/>
            {props.children}
        </MaterialDrawer>
    )
})`
width: ${({width}) => width}px;
flex-shrink: 0;
> div {
width: ${({width}) => width}px;
}
`;


const Drawer = (props) => {
    const {links} = props;

    return (
        <DrawerWrapper width={240}>
            <DrawerList linkItems={links}/>
        </DrawerWrapper>
    );
};

export default withRouter(Drawer)
