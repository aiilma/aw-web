import {initCompleted, initFailed, init} from './actions'
import {me} from "../auth/operations";
import UserApi from "../../utils/UserApi"
import {handleHTTPError} from "../error/operations";

const initApp = () => (dispatch) => {
    const promises = []

    dispatch(init())

    if (UserApi.isAuthenticated) {
        const authPromise = dispatch(me())
        promises.push(authPromise)
    }

    return Promise.all(promises)
        .then(() => {
            dispatch(initCompleted())
        })
        .catch(err => {
            dispatch(initFailed())
            dispatch(handleHTTPError(err))
        })
}

export {initApp}