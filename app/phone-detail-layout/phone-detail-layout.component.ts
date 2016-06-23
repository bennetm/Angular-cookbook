import { Component, Inject } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import {PhoneSvc, IPhoneData} from "../services/phone/phone.service";
import {PhoneDetailComponent} from "../phone-detail/phone-detail.component";

@Component({
    selector: 'phone-detail-layout',
    templateUrl: 'app/phone-detail-layout/phone-detail-layout.template.html',
    directives: [PhoneDetailComponent]
})
export class DetailLayoutComponent {

    public phone: IPhoneData;
    public mainImageUrl:string;

    constructor(routeParams: RouteParams, phoneSvc: PhoneSvc) {
        phoneSvc.getPhoneDetail(routeParams.get('phoneId')).subscribe(phone => {
            this.phone = phone;
            this.mainImageUrl = phone.images[0];
        });
    }

    setImage($event) {
        this.mainImageUrl = $event;
        //console.log(this.mainImageUrl);
    }
}
