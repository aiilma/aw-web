import * as types from './types'

export const init = () => ({
    type: types.APP_INIT
})

export const initCompleted = () => ({
    type: types.APP_INIT_COMPLETED
})

export const initFailed = () => ({
    type: types.APP_INIT_FAILED
})