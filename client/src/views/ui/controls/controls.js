import React from "react";
import Icon from "@material-ui/core/Icon";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import {InnerPreloader} from "../layout";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert/Alert";

export function CompIcon(props) {
    return (<Icon style={{textAlign: 'center', fontSize: '7.5rem',}}>
        <img {...props} height="100%" width="100%" alt="Composition Icon"/>
    </Icon>);
}

export function ControlWrapper({xs = 12, ...props}) {
    return (<Grid container>
        <Grid item xs={xs} {...props}>
            {props.children}
        </Grid>
    </Grid>);
}

export function TypeVariants(props) {
    const {
        error, touched,
        name, label, isFetching,
        children,
        handleChecked, onBlur, onChange,
    } = props;

    return (<Box style={{backgroundColor: '#303030'}} p={1}>
        <FormLabel component="legend" style={{margin: '1rem 0', textAlign: 'center',}}>
            {label}
        </FormLabel>

        <FormGroup row style={{justifyContent: 'center',}}>{
            !!isFetching ?
                <>
                    <InnerPreloader/>
                    <InnerPreloader/>
                </> : <>
                    {React.Children.map(children, child => {
                        const disabled = !!child.props.disabled;
                        const icon = child.props.value === 'long' ? `/storage/icons/long_icon.svg` : `/storage/icons/short_icon.svg`;
                        const checkedIcon = child.props.value === 'long' ? `/storage/icons/long_icon_active.svg` : `/storage/icons/short_icon_active.svg`;
                        const item = React.cloneElement(child, {
                            name, checked: handleChecked(child.props.value),
                            color: "default", style: {borderRadius: 0,},
                            icon: <CompIcon src={icon}/>, checkedIcon: <CompIcon src={checkedIcon}/>,
                            onBlur, onChange: (e) => {
                                onBlur(e);
                                onChange(e)
                            },
                        });

                        return (<FormControlLabel
                            control={item} disabled={disabled}
                            labelPlacement="bottom" label={child.props.cap}
                        />)
                    })}
                </>
        }</FormGroup>

        <Collapse in={!!error && !!touched}>
            <Alert variant="filled" severity="warning">{error}</Alert>
        </Collapse>
    </Box>);
}
