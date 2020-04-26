import React from 'react';
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import PublishIcon from '@material-ui/icons/Publish';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Header from "../../components/header/Header";
import Drawer from "../../components/drawer/Drawer";
import {ToolbarSpacer} from "../../../ui/layout";

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

function AdminLayout({children, ...props}) {

    const links = [{
        text: 'Dashboard',
        to: '/admin',
        icon: <DashboardIcon/>,
    }, {
        text: 'Upload Compsition',
        to: '/admin/comps/upload',
        icon: <PublishIcon/>,
    }]

    return (
        <Bg>
            <CssBaseline/>
            <Header/>
            <Drawer links={links}/>
            <Main component="main" maxWidth="xl">
                <ToolbarSpacer/>
                {children}
                <ToolbarSpacer/>
            </Main>
        </Bg>
    );
}

export default AdminLayout;
