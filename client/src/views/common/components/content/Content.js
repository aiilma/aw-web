import React from 'react';
import {withTheme} from '@material-ui/core/styles';
import styled from 'styled-components'
import {ToolbarSpacer} from "../../../ui/layout";

const Main = styled.main`
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            padding: 0 16px;
`

const FixedToolbar = styled.div`
    min-height: 16px;
`


const Content = React.memo(({toolbared = true, ...props}) => {
        return (
            <Main>
                {toolbared && (<>
                    <ToolbarSpacer theme={props.theme}/>
                    <FixedToolbar/>
                </>)}
                {props.children}
            </Main>
        );
    }
)

export default withTheme(Content)
