import React from "react";
import {Btn, ButtonsGroup} from "../../../ui/buttons/buttons";

function SuggestFormControls(props) {
    const [disabled, setDisabled] = React.useState(false)

    if (props.isSubmitting) setDisabled(true)

    return (
        <ButtonsGroup>
            <Btn variant="outlined" onClick={props.onBack} disabled={disabled}>Back</Btn>
            <Btn variant="contained" onClick={props.onReset} disabled={disabled}>Reset</Btn>
            <Btn variant="contained" type="submit" label="Submit" disabled={disabled}>Send</Btn>
        </ButtonsGroup>
    )
}

export default SuggestFormControls
