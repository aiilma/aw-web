import * as types from "./types";

const user = {
    id: null,
    nickname: null,
    steamid: null,
    avatar: null,
    roles: null
};

const initialState = {
    user,
    isLoading: false,
    error: null
};

export default function authReducer(state = initialState, {type, payload = null}) {
    switch (type) {
        case types.STEAM_LOGIN:
            return {
                ...state,
                isLoading: true,
            };
        case types.STEAM_LOGIN_COMPLETED:
            return authLogin(state, payload);
        case types.STEAM_LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
            };
        case types.STEAM_LOGOUT:
            return {
                ...state,
                isLoading: true
            };
        case types.STEAM_LOGOUT_COMPLETED:
            return authLogout(state);
        case types.STEAM_LOGOUT_FAILED:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};

const authLogin = (state, payload) => {
    return {
        ...state,
        isLoading: false,
        user: {
            ...(payload)
        }
    }
};

const authLogout = (state) => {

    return {
        ...state,
        isLoading: false,
        user
    }
};