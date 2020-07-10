import {AWSrv} from "./AWSrv";

export class AdminSrv extends AWSrv {
    PREFIX = `/admin`

    async uploadComp(data) {
        const {typeVariant, bglink, title, price, uploads, ph} = data;
        const formData = new FormData();

        formData.append('typeVariant', typeVariant);
        formData.append('bglink', bglink);
        formData.append('title', title);
        formData.append('price', price);
        formData.append('image', uploads.image);
        formData.append('sourceProject', uploads.sourceProject);
        formData.append('ph', JSON.stringify(ph));

        return await this.postResource(`${this.PREFIX}/comps/upload`, formData)
    }
}