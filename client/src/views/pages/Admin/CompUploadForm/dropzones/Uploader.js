import React from 'react';
import styled from 'styled-components'
import {useDropzone} from 'react-dropzone'
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Field, getIn} from "formik";

export const MEGABYTE = 1000000

const FileList = styled(({className, ...props}) => {
    const {uploads} = props

    const files = uploads.map(file => (
        <ListItem key={file.path}>
            <ListItemText primary={`${file.path}`}/>
        </ListItem>
    ));

    return (
        <div className={className}>
            <List dense disablePadding>
                {files}
            </List>
        </div>
    )
})` 
    & ul li {
        color: rgb(255, 255, 255, 0.7);
    }
`

const Uploader = styled(({className, ...props}) => {
    const {
        accept, minSize, maxSize, zoneText, name,
        uploads, setFieldValue
    } = props

    const formName = `uploads.${name}`
    const {getRootProps, getInputProps} = useDropzone({
        accept,
        minSize, maxSize,
        multiple: false,
        onDrop: acceptedFiles => {
            setFieldValue(formName, acceptedFiles)
        }
    });

    return (
        <>
            <div className={className} {...getRootProps()}>
                <Field name={formName}>
                    {({field, form}) => (
                        <input
                            {...getInputProps()}
                            name={field.name} type="file"
                        />
                    )}
                </Field>
                <Typography variant="body1">{zoneText}</Typography>
            </div>
            <FileList uploads={uploads}/>
        </>
    )
})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px dashed #ff9800;
  border-radius: 2px;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.7);
  outline: none;
  transition: border .24s ease-in-out;
  cursor: pointer;
`

export default Uploader
