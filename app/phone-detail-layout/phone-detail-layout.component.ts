import { Component, Inject } from '@angular/core';
import {PhoneSvc, IPhoneData} from "../services/phone/phone.service";
import {PhoneDetailComponent} from "../phone-detail/phone-detail.component";

@Component({
    selector: 'phone-detail-layout',
    templateUrl: 'app/phone-detail-layout/phone-detail-layout.template.html',
    directives: [PhoneDetailComponent]
})
export default class DetailLayoutComponent {
    static $inject = ['$routeParams', 'PhoneSvc'];

    public phone: IPhoneData;
    public mainImageUrl:string;

    constructor(@Inject('$routeParams') $routeParams: angular.route.IRouteParamsService, phoneSvc: PhoneSvc) {
        phoneSvc.getPhoneDetail($routeParams['phoneId']).subscribe(phone => {
            this.phone = phone;
            this.mainImageUrl = phone.images[0];
        });
    }

    setImage($event) {
        this.mainImageUrl = $event;
        //console.log(this.mainImageUrl);
    }
}
