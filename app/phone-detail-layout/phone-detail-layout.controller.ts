import {PhoneSvc} from "../services/phone/phone.service";

interface PhoneRouteParams {
    phoneId:string
}

export default class DetailLayoutController {
    static $inject = ['$routeParams', 'PhoneSvc'];
    public phone: any;
    public mainImageUrl:string;

    constructor($routeParams:PhoneRouteParams, PhoneSvc:PhoneSvc) {
        PhoneSvc.get($routeParams.phoneId).subscribe((phone => {
            this.phone = phone;
        }));
    }

    setImage(url:string) {
        this.mainImageUrl = url;
    }
}
