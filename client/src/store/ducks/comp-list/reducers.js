import * as types from "./types";

export const initCompList = {
    isFetching: true,
    currentPage: 1,
    total: 0,
    perPage: 8,
    countPages: 0,
    compositions: [],
    isError: false
};

export default function compListReducer(state = initCompList, {type, payload = null}) {
    switch (type) {
        case types.FETCH_LIST:
            return {
                ...state,
                isError: false,
                isFetching: true,
            };
        case types.FETCH_LIST_COMPLETED:
            return {
                ...state,
                isError: false,
                isFetching: false,
                currentPage: payload.currentPage,
                total: payload.total,
                perPage: payload.perPage,
                countPages: payload.countPages,
                compositions: [
                    ...payload.compositions.map(c => ({
                        link: c.link,
                        title: c.title,
                        price: c.price,
                        author: c.author,
                    }))
                ],
            };
        case types.FETCH_LIST_FAILED:
            return {
                ...initCompList,
                isError: true,
                isFetching: false,
            };
        default:
            return state
    }
}