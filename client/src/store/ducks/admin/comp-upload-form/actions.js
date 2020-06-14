import * as types from './types'

export const upload = (data) => {

    return {
        type: types.UPLOAD_COMP,
        payload: data,
        meta: {
            async: true, blocking: true,
            path: `/admin/comps/upload`,
            method: "POST",
            body: data
        }
    }
}