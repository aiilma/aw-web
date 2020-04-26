import axios from 'axios'

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_SERVER;

const fetch = (url, method, body) => {

    const options = {
        method,
        headers: requestHeaders(),
    };
    // console.log(body)

    if (method === "POST") {
        return axios.post(url, JSON.stringify(body), options)
            .then(res => parseStatus(res.status, res.data), err => parseStatus(err.response.status, err.response.data))
            .catch((err) => Promise.reject(err))
    }
    if (method === "GET") {
        return axios.get(url, options)
            .then(res => parseStatus(res.status, res.data), err => parseStatus(err.response.status, err.response.data))
            .catch((err) => Promise.reject(err))
    }
};

export default fetch

function parseStatus(status, res) {
    return new Promise((resolve, reject) => {
        if (status >= 200 && status < 300) {
            resolve(res);
        } else {
            reject({status, message: res.message});
        }
    });
}

function requestHeaders() {
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }

    // let token = document.head.querySelector('meta[name="csrf-token"]');
    // if (!!token) {
    //     headers['X-CSRF-TOKEN'] = token.content;
    // }

    return headers
}
