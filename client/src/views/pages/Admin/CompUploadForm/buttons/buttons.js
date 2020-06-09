import React from "react";
import {Btn, ButtonsGroup} from "../../../../ui/buttons/buttons";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/core/SvgIcon/SvgIcon";

export function FormControlGroup(props) {
    const [disabled, setDisabled] = React.useState(false);

    if (props.isSubmitting) setDisabled(true);

    return (
        <ButtonsGroup>
            <Btn variant="outlined" onClick={props.onBack} disabled={disabled}>Back</Btn>
            <Btn variant="contained" onClick={props.onReset} disabled={disabled}>Reset</Btn>
            <Btn variant="contained" type="submit" label="Submit" disabled={disabled}>Publish</Btn>
        </ButtonsGroup>
    )
}


export function AddInputBtn(props) {
    const {addPlaceholder, disabled} = props;

    return (
        <Box mt={2}>
            <Grid container>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon/>}
                        fullWidth
                        onClick={addPlaceholder}
                        disabled={disabled}
                    >
                        Add Placeholder
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
