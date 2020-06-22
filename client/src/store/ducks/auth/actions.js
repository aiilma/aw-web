import * as types from "./types";

const steamLogin = () => ({
    type: types.STEAM_LOGIN
});
const steamLoginCompleted = () => ({
    type: types.STEAM_LOGIN_COMPLETED
});
const steamLoginFailed = payload => ({
    type: types.STEAM_LOGIN_FAILED,
    payload
});


const steamLogout = () => ({
    type: types.STEAM_LOGOUT
});
const steamLogoutCompleted = () => ({
    type: types.STEAM_LOGOUT_COMPLETED,
});
const steamLogoutFailed = payload => ({
    type: types.STEAM_LOGOUT_FAILED,
    payload
});


const setUser = () => ({
    type: types.SET_USER
});
const setUserCompleted = payload => ({
    type: types.SET_USER_COMPLETED,
    payload
});
const setUserFailed = payload => ({
    type: types.SET_USER_FAILED,
    payload
});

export {
    steamLogin, steamLoginCompleted, steamLoginFailed,
    steamLogout, steamLogoutCompleted, steamLogoutFailed,
    setUser, setUserCompleted, setUserFailed
}