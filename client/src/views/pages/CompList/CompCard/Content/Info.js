import React from 'react'
import Typography from "@material-ui/core/Typography";

const InfoBox = ({value, ...props}) => {

    return (
        <Typography
            component="div" noWrap
            {...props}
        >
            <span title={`${value}`}>{value}</span>
        </Typography>
    )
}

function CompCardInfo({title = "unnamed", price = 0.00, ...props}) {
    return (<>
        <InfoBox
            variant="h5" value={title}
            gutterBottom
        />
        <InfoBox
            variant="body2" value={`${price} $`}
        />
    </>)
}

export default CompCardInfo