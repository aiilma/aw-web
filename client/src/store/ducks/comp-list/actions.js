import * as types from "./types";

const fetchList = () => ({
    type: types.FETCH_LIST,
})

const fetchListCompleted = (payload) => ({
    type: types.FETCH_LIST_COMPLETED,
    payload
})

const fetchListFailed = (payload) => ({
    type: types.FETCH_LIST_FAILED,
    payload
})

export {fetchList, fetchListCompleted, fetchListFailed}