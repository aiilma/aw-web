import React from 'react';
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../components/header/Header";
import Container from "@material-ui/core/Container";
import {ToolbarSpacer} from "../../../ui/layout";
import PaletteIcon from '@material-ui/icons/Palette';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Drawer from "../../components/drawer/Drawer";

const Bg = styled.div`
    display: flex;
    flex-direction: row;    
    min-height: 100vh;
`

const Main = styled(Container)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: ${({theme}) => theme.palette.background.default};
`

function SecondaryLayout({children, ...props}) {

    const links = [{
        text: 'Compositions',
        to: '/compositions',
        icon: <PaletteIcon/>,
    }, {
        text: 'Suggest',
        to: '/suggest',
        icon: <BorderColorIcon/>,
    }]

    return (
        <Bg>
            <CssBaseline/>
            <Header/>
            <Drawer links={links}/>
            <Main component="main" maxWidth="xl">
                <ToolbarSpacer />
                {children}
                <ToolbarSpacer />
            </Main>
        </Bg>
    );
}

export default SecondaryLayout;
