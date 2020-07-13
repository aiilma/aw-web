import {AWSrv} from "./AWSrv";
import LS from "../utils/LS";

export class UserSrv extends AWSrv {
    getSteamLink = async () => {
        const res = await this.getResource(`/login/steam`)
        return res.url
    }

    auth = async (params) => {
        return await this.getResource(`/login/steam/callback${params}`)
    }

    logout = async () => {
        return await this.postResource(`/logout`)
    }

    me = async () => {
        return await this.getResource(`/user`)
    }

    isAuth = () => {
        return localStorage.getItem(LS._AUTH_TOK)
    }
    hasRole = (role, roles) => {
        return !!roles.includes(role);
    }
}