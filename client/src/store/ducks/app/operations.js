import {init, initCompleted, initFailed} from './actions'
import {me} from "../auth/operations";
import {UserSrv} from "../../services/UserSrv";

const initApp = () => (dispatch) => {
    const promises = [];
    const userSrv = new UserSrv();

    dispatch(init());

    if (!!userSrv.isAuth()) {
        const authPromise = dispatch(me());
        promises.push(authPromise)
    }

    return Promise.all(promises)
        .then(() => dispatch(initCompleted()))
        .catch(err => {
            dispatch(initFailed());
            throw err
        })
}

export {initApp}