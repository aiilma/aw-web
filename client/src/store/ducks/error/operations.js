import {
    executeErrorHandler, resetErrorHandler
} from "./actions";
import {logout} from "../auth/operations";

const handleHTTPError = (error) => dispatch => {
    if (error.status !== 401) {
        dispatch(executeErrorHandler(error))
    } else {
        dispatch(logout())
    }
    return Promise.resolve(error)
}

const resetHTTPError = () => dispatch => {
    return dispatch(resetErrorHandler())
}

export {
    handleHTTPError, resetHTTPError
}