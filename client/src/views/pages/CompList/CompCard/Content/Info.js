import React from 'react'
import Typography from "@material-ui/core/Typography";


function CompCardInfo({title, price, ...props}) {
    return (
        <>
            <Typography gutterBottom variant="h5" component="h3" noWrap title={title}>
                {title}
            </Typography>
            <Typography variant="body2" component="p" noWrap title={`${price} $`}>
                {price} $
            </Typography>
        </>
    )
}

export default CompCardInfo