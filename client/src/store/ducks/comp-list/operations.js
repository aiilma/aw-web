import {fetchList, fetchListCompleted, fetchListFailed} from './actions'
import {CompositionSrv} from "../../services/CompositionSrv";
import customHistory from "../../utils/history";

const compSrv = new CompositionSrv()

const getCompList = (page) => dispatch => {
    dispatch(fetchList())

    return compSrv.getAllComps(page)
        .then((res) => {
            dispatch(fetchListCompleted(res))
            customHistory.push(`/compositions${res.currentPage === 1 ? '' : `?page=${res.currentPage}`}`)
            return res
        })
        .catch(err => {
            dispatch(fetchListFailed(err))
            throw err
        })
}

export {getCompList}