import * as types from "./types";

const project = {
    link: null,
    type: null,
    bg: null,
}

const initialState = {
    project,
    isLoading: false,
    isError: null
};

export default function scReducer(state = initialState, {type, payload = null}) {
    switch (type) {
        case types.FETCH_COMP:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case types.FETCH_COMP_COMPLETED:
            return {
                ...state,
                isLoading: false,
                isError: false,
                project: {
                    ...state.project,
                    link: payload.link,
                    type: payload.type,
                    bg: payload.bg,
                }
            };
        case types.FETCH_COMP_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            return state;
    }
};