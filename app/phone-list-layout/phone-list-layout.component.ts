import {Component, Injectable} from '@angular/core';
import {IPhoneData, PhoneSvc} from "../services/phone/phone.service";
import {PhoneListComponent} from "../phone-list/phone-list.component";
import SearchSortFieldComponent from "../search-sort-field/search-sort-field.component";

@Component({
    selector: 'phone-list-layout',
    templateUrl: 'app/phone-list-layout/phone-list-layout.template.html',
    directives: [SearchSortFieldComponent, PhoneListComponent]
})
@Injectable()
export class PhoneListLayoutComponent {
    
    static $inject = ['PhoneSvc'];

    phones: IPhoneData[];
    query: string = '';
    orderProp: string = 'name';

    constructor(private phone: PhoneSvc) {
        phone.query().subscribe(phones => {
            this.phones = phones;
        });
    }
    onNewSearchTerm($event) {
        this.query = $event;
    };
    onNewSortOrder($event) {
        this.orderProp = $event;
    };
}
