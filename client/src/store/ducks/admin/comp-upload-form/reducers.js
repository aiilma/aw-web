import * as types from "./types";

const initialState = {}

export default function uploadCompFormReducer(state = initialState, {type, payload = null}) {
    switch (type) {
        case types.UPLOAD_COMP:
            return {
                ...state,
            }
        case types.UPLOAD_COMP_SUCCESS:
            return {
                ...state,
            }
        case types.UPLOAD_COMP_FAILED:
            return {
                ...state,
            }
        default:
            return state;
    }
};
