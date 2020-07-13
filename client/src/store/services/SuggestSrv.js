import {AWSrv} from "./AWSrv";

export class SuggestSrv extends AWSrv {
    send = async(data) => {
        return await this.postResource(`/suggest`, data)
    }
}