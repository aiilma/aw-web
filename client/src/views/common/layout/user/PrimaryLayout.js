import React from 'react';
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Container from "@material-ui/core/Container";
import {ToolbarSpacer} from "../../../ui/layout";

const Bg = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Main = styled(Container)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: ${({theme}) => theme.palette.background.default};
`

function PrimaryLayout({children, ...props}) {

    return (
        <Bg>
            <CssBaseline/>
            <Header/>
            <Main component="main" maxWidth="xl">
                <ToolbarSpacer/>
                {children}
            </Main>
            <Footer/>
        </Bg>
    );
}

export default PrimaryLayout;
