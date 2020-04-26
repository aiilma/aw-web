import React from 'react'
import Grid from "@material-ui/core/Grid";
import CompCard from "./CompCard/CompCard";


function CompList({compositions = '', ...props}) {
    const compositionNodes = compositions.map((compInfo, id) => <CompCard key={id} info={compInfo}/>)

    return (
        <Grid container spacing={4}>
            {compositionNodes}
        </Grid>
    );
}

export default CompList