import React from 'react'
import {withRouter} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import styled from 'styled-components'
import CompCardContent from "./Content/Content";

const CompCardPreview = styled(CardMedia)`
    margin: auto;
    padding: 20px 16px 0;
`

const CompCardWrapper = styled(Card)`
        height: 100%;
        display: flex;
        flex-direction: column;

        box-shadow: inset 0 2px 5px 5px rgba(0,0,0,.65);
        
        &:hover {
            box-shadow: inset 0 2px 5px 5px rgba(0,0,0,.65);
        }
`

function CompCard({info, ...props}) {
    const [isDemoMode, setIsDemoMode] = React.useState(false);
    const {link, title, price} = info
    const pathToImages = `/storage/images`

    const [thumbImg, setThumb] = React.useState(`${pathToImages}/comps/${link}/__static.gif`);
    const [demoImg, setDemo] = React.useState(`${pathToImages}/comps/${link}/__dynamic.gif`);

    return (
        <Grid item xs={12} sm={10} md={6} lg={4} xl={3}>
            <CompCardWrapper>

                <CardActionArea disableRipple>
                    <CompCardPreview
                        component="img"
                        height="320"
                        image={isDemoMode ? demoImg : thumbImg} alt={title}
                        onMouseEnter={() => setIsDemoMode(true)}
                        onMouseLeave={() => setIsDemoMode(false)}
                        onError={() => isDemoMode ? setDemo(`${pathToImages}/default_comp_thumb.png`) : setThumb(`${pathToImages}/default_comp_thumb.png`)}
                    />
                </CardActionArea>

                <CompCardContent
                    title={title}
                    price={price}
                />

                <CardActions>
                    {/*<IconButton component={Link} to={`/compositions/${link}`} aria-label="order">*/}
                    {/*    <ShoppingCartIcon fontSize="small"/>*/}
                    {/*</IconButton>*/}
                    {/*<IconButton component={Link} to={`/showcase/${link}`} aria-label="view">*/}
                    {/*    <VisibilityIcon fontSize="small"/>*/}
                    {/*</IconButton>*/}
                </CardActions>

            </CompCardWrapper>
        </Grid>
    );
}

export default withRouter(CompCard)