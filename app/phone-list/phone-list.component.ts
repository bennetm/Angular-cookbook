import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import {PhoneData, PhoneSvc} from "../services/phone/phone.service";

@Component({
    selector: 'phone-list',
    templateUrl: '/app/phone-list/phone-list.template.html'
})
export class PhoneListComponent {

    @Input() phones: PhoneData[];
    @Input() query: string;
    @Input() orderProp: string;

    getPhones(): PhoneData[] {
        return this.sortPhones(this.filterPhones(this.phones));
    }
    private filterPhones(phones: PhoneData[]) {
        if (phones && this.query) {
            return phones.filter(phone => {
                let name = phone.name.toLowerCase();
                let snippet = phone.snippet.toLowerCase();
                return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
            });
        }
        return phones;
    }
    private sortPhones(phones: PhoneData[]) {
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
    /*ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        let log: string[] = [];
        for (let propName in changes) {
            let changedProp = changes[propName];
            let from = JSON.stringify(changedProp.previousValue);
            let to =   JSON.stringify(changedProp.currentValue);
            log.push( `${propName} changed from ${from} to ${to}`);
        }
        console.log(log.join( ' '));
    }*/
}
