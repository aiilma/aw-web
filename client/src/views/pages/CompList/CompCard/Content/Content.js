import React from 'react'
import CardContent from "@material-ui/core/CardContent";
import styled from 'styled-components'
import Grid from "@material-ui/core/Grid";
import CompCardBadgeList from "./BadgeList";
import CompCardInfo from "./Info";

const CompCardContent = styled(({title, price, badges = [], ...props}) => {
    return (
        <CardContent>
            <Grid container justify="flex-start" wrap="nowrap">
                <Grid item xs={12} sm={6}>
                    <CompCardInfo title={title} price={price}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CompCardBadgeList badges={badges}/>
                </Grid>
            </Grid>
        </CardContent>
    )
})`
    flex-grow: 1;
    text-align: left;
    padding-bottom: 0;
`

export default CompCardContent