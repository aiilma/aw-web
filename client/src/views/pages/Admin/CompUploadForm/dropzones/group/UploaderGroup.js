import React from "react";
import Box from "@material-ui/core/Box";
import Uploader, {MEGABYTE} from "../Uploader";

const UploaderGroup = (props) => {
    const {
        uploads: {image, sourceProject},
        setFieldValue
    } = props

    const img = {
        zoneText: 'Preview image',
        mimes: ['image/gif'],
        minSize: MEGABYTE,
        maxSize: 15 * MEGABYTE,
    }
    const srcProj = {
        zoneText: 'Source project',
        mimes: ['application/x-compressed', 'application/x-zip-compressed', 'application/zip', 'multipart/x-zip'],
        minSize: MEGABYTE,
        maxSize: 50 * MEGABYTE,
    }


    return (
        <Box mt={2} mb={2}>
            <Box mt={2}>
                <Uploader
                    name='image'
                    zoneText={img.zoneText} accept={img.mimes.join()}
                    minSize={img.minSize} maxSize={img.maxSize}
                    uploads={image} setFieldValue={setFieldValue}
                />
            </Box>
            <Box mt={2}>
                <Uploader
                    name='sourceProject'
                    zoneText={srcProj.zoneText} accept={srcProj.mimes.join()}
                    minSize={srcProj.minSize} maxSize={srcProj.maxSize}
                    uploads={sourceProject} setFieldValue={setFieldValue}
                />
            </Box>
        </Box>
    )
}

export default UploaderGroup
