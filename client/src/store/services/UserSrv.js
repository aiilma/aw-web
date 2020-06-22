import {AWSrv} from "./AWSrv";
import LS from "../utils/LS";

export class UserSrv extends AWSrv {
    async getSteamLink() {
        const res = await this.getResource(`/login/steam`)
        return res.url
    }

    async auth(params) {
        return await this.getResource(`/login/steam/callback${params}`)
    }

    async logout() {
        return await this.postResource(`/logout`)
    }

    async me() {
        return await this.getResource(`/user`)
    }

    isAuth() {
        return localStorage.getItem(LS._AUTH_TOK)
    }
    hasRole(role, roles) {
        return !!roles.includes(role);
    }
}