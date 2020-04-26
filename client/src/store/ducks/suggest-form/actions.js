import * as types from './types'

export const makeSuggest = (data) => {
    return {
        type: types.MAKE_SUGGEST,
        payload: data,
        meta: {
            async: true,
            blocking: true,
            path: `/suggest`,
            method: "POST",
            body: data
        }
    }
}