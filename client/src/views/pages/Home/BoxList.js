import React from 'react'
import BoxVariant from "./BoxVariant";
import styled from 'styled-components'

const StyledBoxList = styled.div`
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin: auto;
        justify-content: center;
`

const BoxList = ({images, ...props}) => (
    <StyledBoxList>
        {images.map(image => <BoxVariant key={image.title} image={image}/>)}
    </StyledBoxList>
)

export default BoxList