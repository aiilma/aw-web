import {
    authLogin,
    authLogout,
    authLoginCompleted,
    authLogoutCompleted,
    authLoginFailed,
    authLogoutFailed,
} from "./actions";
import {fetch} from "../../utils";
import UserApi from "../../utils/UserApi";
import history from "../../utils/history";

const me = () => dispatch => {
    dispatch(authLogin());

    return fetch(`/sanctum/csrf-cookie`, "GET")
        .then(() => {
            return fetch(`/api/user`, "GET")
                .then((user) => {
                    UserApi.authenticate(() => dispatch(authLoginCompleted(user)));
                    return user
                })
                .catch(() => {
                    dispatch(logout())
                });
        })
};


const login = (params) => (dispatch) => {
    dispatch(authLogin());

    return fetch(`/sanctum/csrf-cookie`, "GET")
        .then(() => {
            return fetch(`/api/login/steam/callback${params}`, "GET")
                .then((user) => {
                    UserApi.authenticate(() => dispatch(authLoginCompleted(user)))
                })
                .catch(() => {
                    dispatch(authLoginFailed())
                });
        })
};

const logout = () => dispatch => {
    dispatch(authLogout());

    UserApi.logout(() => history.push('/'));

    return fetch(`/api/logout`, "POST")
        .then(() => {
            dispatch(authLogoutCompleted())
        })
        .catch(err => {
            dispatch(authLogoutFailed(err))
        });
};

export {
    login, logout, me
}
