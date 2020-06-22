import history from "../../utils/history";
import LS from "../../utils/LS";
import {
    setUser, setUserCompleted, setUserFailed,
    steamLogin, steamLoginCompleted, steamLoginFailed,
    steamLogout, steamLogoutCompleted, steamLogoutFailed
} from "./actions";
import {UserSrv} from "../../services/UserSrv";

const userSrv = new UserSrv()

const me = () => dispatch => {
    dispatch(setUser());

    return userSrv.me()
        .then((u) => dispatch(setUserCompleted(u)))
        .catch((err) => {
            dispatch(setUserFailed(err))
            throw err
        })
};


const login = (params) => (dispatch) => {
    if (!!params) {

        dispatch(steamLogin());

        return userSrv.auth(params)
            .then(token => {
                localStorage.setItem(LS._AUTH_TOK, token);

                dispatch(steamLoginCompleted())
                dispatch(me())

                history.push(`/compositions`)
            })
            .catch(err => {
                dispatch(steamLoginFailed(err))
                throw err
            })
    }
};

const logout = () => dispatch => {
    dispatch(steamLogout());

    userSrv.logout()
        .then(() => {
            dispatch(steamLogoutCompleted())
            localStorage.removeItem(LS._AUTH_TOK)
            history.push(`/`)
        })
        .catch(err => {
            dispatch(steamLogoutFailed(err))
            throw err
        });
};

export {
    login, logout, me
}
