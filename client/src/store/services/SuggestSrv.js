import {AWSrv} from "./AWSrv";

export class SuggestSrv extends AWSrv {
    async send(data) {
        return await this.postResource(`/suggest`, data)
    }
}