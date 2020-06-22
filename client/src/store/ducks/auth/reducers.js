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
    isError: null
};

export default function authReducer(state = initialState, {type, payload = null}) {
    switch (type) {
        case types.STEAM_LOGIN:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case types.STEAM_LOGIN_COMPLETED:
            return {
                ...state,
                isLoading: false,
                isError: false,
            };
        case types.STEAM_LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };


        case types.STEAM_LOGOUT:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case types.STEAM_LOGOUT_COMPLETED:
            return {
                ...state,
                isLoading: false,
                isError: false,
            };
        case types.STEAM_LOGOUT_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };


        case types.SET_USER:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case types.SET_USER_COMPLETED:
            return {
                ...state,
                isLoading: false,
                isError: false,
                user: {
                    ...(payload)
                },
            };
        case types.SET_USER_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
                user: user,
            };
        default:
            return state;
    }
};