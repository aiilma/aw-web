import * as types from "./types";

const fetchComp = () => ({
    type: types.FETCH_COMP
});
const fetchCompCompleted = (payload) => ({
    type: types.FETCH_COMP_COMPLETED,
    payload
});
const fetchCompFailed = payload => ({
    type: types.FETCH_COMP_FAILED,
    payload
});

export {
    fetchComp, fetchCompCompleted, fetchCompFailed
}