import {Component, Injectable} from '@angular/core';
import {PhoneData, PhoneSvc} from "../services/phone/phone.service";
import {PhoneListComponent} from "../phone-list/phone-list.component";
import SearchSortFieldComponent from "../search-sort-field/search-sort-field.component";

@Component({
    selector: 'phone-list-layout',
    templateUrl: '/app/phone-list-layout/phone-list-layout.template.html',
    directives: [PhoneListComponent, SearchSortFieldComponent]
})
@Injectable()
export class PhoneListLayoutComponent {

    static $inject = ['PhoneSvc'];

    phones: PhoneData[];
    query: string;
    orderProp: string;

    constructor(private phone: PhoneSvc) {
        phone.query().subscribe(phones => {
            this.phones = phones;
        });
        this.query = '';
        this.orderProp = 'name';
    }
    onNewSearchTerm($event) {
        this.query = $event;
        this.phone.query().subscribe(phones => {
            this.phones = phones;
        });
        console.log("Parent comp " + $event);
    };
    onNewSortOrder($event) {
        this.orderProp = $event;
        this.phone.query().subscribe(phones => {
            this.phones = phones;
        });
        //console.log("Parent comp " + $event);
    };

}
