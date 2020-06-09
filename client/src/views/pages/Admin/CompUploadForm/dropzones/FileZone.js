import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components'
import {getIn} from "formik";
import Alert from "@material-ui/lab/Alert/Alert";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";

const FileZoneWrapper = styled(({className, ...props}) => {
    return <div className={className} {...props}>
        {props.children}
    </div>
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
  
  & input[type=file] {
    display:none;
  }
 `;

class FileZone extends Component {
    constructor(props) {
        super(props);
        this.fileUpload = React.createRef(); // ссылка на DOM элемент загрузки файла
    }

    showFileUpload = () => {
        // инициировать клик по дропзоне, если элемент в DOM уже замонтировался
        this.fileUpload && this.fileUpload.current.click();
    };

    render() {
        const {
            zoneText, accept, name,
            values, touched, errors,
            setFieldValue, setFieldTouched
        } = this.props;
        const file = getIn(values, `${name}`);

        // файл имеется/загружен И нет ошибок при загрузке
        const fileName = !!file && !!getIn(errors, `${name}`) === false ? file.name : null;

        return (<Box mt={2}>
            <FileZoneWrapper onClick={this.showFileUpload}>
                <input
                    accept={accept}
                    type="file" ref={this.fileUpload}
                    id={name} name={name}
                    onChange={(e) => {
                        setFieldTouched(name, true);
                        setFieldValue(name, e.target.files[0])
                    }}
                />
                <Typography variant="body1">{zoneText}</Typography>
            </FileZoneWrapper>

            <Collapse in={!!getIn(errors, name) && !!getIn(touched, name)}>
                <Alert variant="filled" severity="warning">{getIn(errors, name)}</Alert>
            </Collapse>

            {fileName}
        </Box>);
    }
}

export default FileZone