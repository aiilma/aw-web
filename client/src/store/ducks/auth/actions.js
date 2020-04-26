import * as types from "./types";

export const authLogin = () => {
    return {
        type: types.STEAM_LOGIN
    }
}

export const authLoginCompleted = (payload) => {
    return {
        type: types.STEAM_LOGIN_COMPLETED,
        payload
    }
}

export const authLoginFailed = (payload) => {
    return {
        type: types.STEAM_LOGIN_FAILED,
        payload
    }
}

export const authLogout = () => {
    return {
        type: types.STEAM_LOGOUT
    }
}

export const authLogoutCompleted = (payload = null) => {
    return {
        type: types.STEAM_LOGOUT_COMPLETED,
        payload
    }
}

export const authLogoutFailed = (payload = null) => {
    return {
        type: types.STEAM_LOGOUT_FAILED,
        payload
    }
}