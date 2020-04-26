import * as types from "./types";

const initialState = {
    message: '',
    isError: false,
}

export default function errorReducer(state = initialState, {type, payload = null}) {
    switch (type) {
        case types.SET_HTTP_ERROR:
            return executeError(state, payload);
        case types.RESET_HTTP_ERROR:
            return resetError(state, payload);
        default:
            return state;
    }
};

const executeError = (state, payload) => {
    return {
        ...state,
        isError: true,
        message: payload.message
    };
}

const resetError = (state, payload) => {
    return {
        ...state,
        isError: false,
        message: ''
    };
}