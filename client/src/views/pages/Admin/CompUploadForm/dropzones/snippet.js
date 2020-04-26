import React from 'react';
import { Formik } from "formik";
import Dropzone from "react-dropzone";

const dropzoneStyle = {
    width: "100%",
    height: "auto",
    borderWidth: 2,
    borderColor: "rgb(102, 102, 102)",
    borderStyle: "dashed",
    borderRadius: 5,
}

const App = () => (
    <div className="container">
        <Formik
            initialValues={{
                files: [],
            }}
            onSubmit={(values) => {
                alert(
                    JSON.stringify(
                        {
                            files: values.files.map(file => ({
                                fileName: file.name,
                                type: file.type,
                                size: `${file.size} bytes`
                            })),
                        },
                        null,
                        2
                    )
                );
            }}
            render={({ values, handleSubmit, setFieldValue }) => (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Multiple files</label>
                        <Dropzone style={dropzoneStyle} accept="image/*" onDrop={(acceptedFiles) => {
                            // do nothing if no files
                            if (acceptedFiles.length === 0) { return; }

                            // on drop we add to the existing files
                            setFieldValue("files", values.files.concat(acceptedFiles));
                        }}>
                            {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                                if (isDragActive) {
                                    return "This file is authorized";
                                }

                                if (isDragReject) {
                                    return "This file is not authorized";
                                }

                                if (values.files.length === 0) {
                                    return <p>Try dragging a file here!</p>
                                }

                                return values.files.map((file, i) => (<div key={i} file={file} />));
                            }}
                        </Dropzone>
                    </div>
                    <button type="submit" className="btn btn-primary">submit</button>
                </form>
            )} />
    </div>
);
