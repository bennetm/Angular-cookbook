interface PhoneRouteParams {
    phoneId: string
}

export default class DetailLayoutController {
    static $inject = ['$routeParams', 'PhoneSvc'];
    public phone : any;
    public mainImageUrl: string;

    constructor($routeParams : PhoneRouteParams, PhoneSvc : any) {
        this.phone = PhoneSvc.get({phoneId: $routeParams.phoneId});
        //this.mainImageUrl = this.phone.images[0];
    }

    setImage(url: string) {
        this.mainImageUrl = url;
    }
}
