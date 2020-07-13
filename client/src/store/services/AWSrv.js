import axios from 'axios'
import LS from "../utils/LS";

const BaseApi = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER}/api`
})

const Api = () => {
    let token = localStorage.getItem(LS._AUTH_TOK);

    if (token)
        BaseApi.defaults.headers.common[`Authorization`] = `Bearer ${token}`;

    return BaseApi
}


export class AWSrv {

    getResource = async (url) => {
        try {
            const res = await Api().get(url)
            return res.data;
        } catch (err) {
            if (err.response) {
                // server
                // console.log(err.response.data);
                throw new Error(`Could not fetch ${url}, received ${err.response.status}`)
            } else if (err.request) {
                // network
                throw new Error(`Could not fetch ${url}. Request issue`)
            } else {
                throw new Error(`Could not fetch ${url}. Bad request's settings: ${err.message}`)
            }
        }
    }

    postResource = async (url, data) => {
        try {
            const res = await Api().post(url, data)
            return res.data;
        } catch (err) {
            if (err.response) {
                // server
                // console.log(err.response.data);
                throw new Error(`Could not send ${url}, received ${err.response.status}`)
            } else if (err.request) {
                // network
                throw new Error(`Could not send ${url}. Request issue`)
            } else {
                throw new Error(`Could not send ${url}. Bad request's settings: ${err.message}`)
            }
        }
    }

}