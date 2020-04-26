import * as types from "./types";

export const initCompList = {
    compositions: [],
    isFetching: false,
}

function compListReducer(state = initCompList, {type, payload = null}) {
    switch (type) {
        case types.CLEAR_LIST:
            return {
                ...state,
                compositions: [],
                form: {},
            }
        case types.FETCH_LIST:
            return {
                ...state,
                form: {},
                isFetching: true,
            }
        case types.FETCH_LIST_COMPLETED:
            // console.log(payload.data)
            return {
                ...state,
                compositions: [
                    ...payload.data.map(c => {
                        return {
                            link: c.link,
                            title: c.title,
                            price: c.price,
                            author: c.author,
                        }
                    })
                ],
                form: {},
                isFetching: false,
            }
        case types.FETCH_LIST_FAILED:

            return {
                ...state,
                isFetching: false,
                compositions: [],
            }
        default:
            return state
    }
}

export default compListReducer