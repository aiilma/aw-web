import {AWSrv} from "./AWSrv";
import queryString from "query-string";

export class CompositionSrv extends AWSrv {
    getAllComps = async (page = 1) => {
        const url = queryString.stringifyUrl({
            url: `/compositions`,
            query: {page}
        });

        const res = await this.getResource(`${url}`)
        return this._transformComps(res)
    }

    getCompByAlias = async (alias) => {
        const res = await this.getResource(`/c/${alias}`)
        return this._transformComp(res)
    }

    _transformComps = (res) => {
        const {current_page, last_page, per_page, total, data} = res;

        return {
            compositions: data,
            currentPage: current_page,
            perPage: per_page,
            total: total,
            countPages: last_page
        }
    }

    _transformComp = (res) => {
        const {link, bg, typeVariantName} = res;

        return {
            link, bg,
            type: typeVariantName
        }
    }
}