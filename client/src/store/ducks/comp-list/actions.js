import * as types from "./types";

export const fetchList = (path) => {
    return {
        type: types.FETCH_LIST,
        meta: {
            async: true,
            blocking: true,
            path: path,
            method: "GET",
        },
    }
};

export const clearList = () => {
    return {
        type: types.CLEAR_LIST
    }
};