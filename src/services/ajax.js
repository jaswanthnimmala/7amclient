import axios from "axios";

export class Ajax {
    static fnSendGetReq(url) {
        return axios.get(url)
    }
    static fnSendPostReq(url, data) {
        return axios.post(url, data)
    }
    static fnSendPutReq(url, data) {
        return axios.put(url, data)
    }
    static fnSendDeleteReq(url, data) {
        return axios.delete(url, data)
    }
}