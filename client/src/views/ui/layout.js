import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {Pagination as MaterialPagination} from "@material-ui/lab";
import PaginationItem from "@material-ui/lab/PaginationItem";
import {Link} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import {withTheme} from "@material-ui/core";

const StyledBackground = styled.div`
    ${({theme}) => `
        display: flex;
        height: 100vh;
        flex-grow: 1;
        background: ${theme.palette.background.default};
    `}
`

export const Background = withTheme((props) => {
    const theme = props.theme

    return (
        <StyledBackground theme={theme}>
            {props.children}
        </StyledBackground>
    );
})

export const ToolbarSpacer = styled.div`
    toolbar: ${({theme}) => theme.mixins.toolbar};
`

export const Spacer = styled.div`
    padding: ${({theme}) => theme.spacing(4, 0)};
`


export const PageCaption = styled((props) => {
    return (<Spacer>
        <Container maxWidth="xl">
            <Typography component="h1" variant="h5" align="left" color="textPrimary">
                {props.title}
            </Typography>
        </Container>
    </Spacer>)
})``

export const ContentWrapper = styled(Container).attrs({
    maxWidth: 'xl',
})`
        padding-top: ${({theme}) => theme.spacing(1)}px;
        padding-bottom: ${({theme}) => theme.spacing(1)}px;
        background-color: rgba(33,33,33,.95);
        border-radius: 20px;
`


export const Pagination = styled(({className, countPages, ...props}) => {
    return (
        <div
            className={className}
        >
            {countPages > 1 ? (<MaterialPagination {...props} />) : null}
        </div>
    )
})
    .attrs({
        renderItem: (item) => (
            <PaginationItem
                component={Link}
                to={`/compositions${item.page === 1 ? '' : `?page=${item.page}`}`}
                {...item}
            />)
    })`
        padding: ${({theme, spacing = 2}) => theme.spacing(spacing)}px 0;
    `


export const PagePreloader = styled.div`
    display: block;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width 100%;
    height: 100%;
    min-width: 1000px;
    background-color: rgba(33, 33, 33, ${({opacity = 95}) => opacity}%);
    background-image: url("https://hello-site.ru//main/images/preloads/tail-spin.svg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 96px;
`

export const Preloader = styled.div`
    display: block;
    position: relative;
    width: 100%;
    min-height: 96px;
    background-image: url("https://hello-site.ru//main/images/preloads/tail-spin.svg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 96px;
`

export const InnerPreloader = styled(({size = 48, ...props}) => {
    return <div className={props.className}>
        <CircularProgress size={size} color="inherit"/>
    </div>
})`
display: inline-block;
margin: 0px ${({theme, sideMargin = 4}) => theme.spacing(sideMargin)}px;
`

// export const Notification = styled(({key, ...props}) => {
//         console.log(props)
//         return <div className={props.className}>
//             <div>hef</div>
//         </div>
//     }
// )`
// color: white;
// `
