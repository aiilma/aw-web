import {fetchComp, fetchCompCompleted, fetchCompFailed} from './actions'
import {CompositionSrv} from "../../services/CompositionSrv";

const compSrv = new CompositionSrv()

const fetchCompData = (alias) => dispatch => {
    dispatch(fetchComp())

    return compSrv.getCompByAlias(alias)
        .then((res) => {
            dispatch(fetchCompCompleted(res))
            return res
        })
        .catch(err => {
            dispatch(fetchCompFailed(err))
            throw err
        })
}

export {fetchCompData}