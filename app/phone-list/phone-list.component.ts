import { Component, Injectable, Input, OnChanges, SimpleChange } from '@angular/core';
import {IPhoneData, PhoneSvc} from "../services/phone/phone.service";

@Component({
    selector: 'phone-list',
    templateUrl: 'app/phone-list/phone-list.template.html'
})
@Injectable()
export class PhoneListComponent  {

    @Input() phones:IPhoneData[];
    @Input() query:string;
    @Input() orderProp:string;

    getPhones():IPhoneData[] {
        return this.sortPhones(this.filterPhones(this.phones));
    }
    private filterPhones(phones: IPhoneData[]) : IPhoneData[] {
        if (!this.query || !phones.length ) {
            return phones;
        }
        var phonesCpy: IPhoneData[] = [];
        phones.forEach( arrayItem => {
            if (arrayItem.name.toLowerCase().indexOf(this.query.toLowerCase()) >= 0 ||
                arrayItem.snippet.toLowerCase().indexOf(this.query.toLowerCase()) >= 0) {
                phonesCpy.push(arrayItem);
            }
        });
        return phonesCpy;
    }
    /*private filterPhones(phones: IPhoneData[]) {
        if (phones && this.query) {
            return phones.filter(phone => {
                let name = phone.name.toLowerCase();
                let snippet = phone.snippet.toLowerCase();
                let searchTerm = this.query.toLowerCase();
                return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
            });
        }
        return phones;
    }*/
    private sortPhones(phones: IPhoneData[]) {
        if (phones && this.orderProp) {
            return phones
                .slice(0) // Make a copy
                .sort((a, b) => {
                    if (a[this.orderProp] < b[this.orderProp]) {
                        return -1;
                    } else if ([b[this.orderProp] < a[this.orderProp]]) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
        }
        return phones;
    }
}