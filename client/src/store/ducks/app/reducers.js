import * as types from "./types";

export const initialState = {
    initialized: false,
    isError: false
}

function appReducer(state = initialState, {type, payload = null}) {
    switch (type) {
        case types.APP_INIT:
            return {
                ...state,
                initialized: false,
                isError: false,
            }
        case types.APP_INIT_COMPLETED:
            return {
                ...state,
                initialized: true,
                isError: false,
            }
        case types.APP_INIT_FAILED:
            return {
                ...state,
                initialized: false,
                isError: true,
            }
        default:
            return state
    }
}


export default appReducer