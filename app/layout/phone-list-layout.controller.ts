import {PhoneSvc} from "../services/phone/phone.service";

export default class ListLayoutController {

    static $inject = ['PhoneSvc'];

    phones: any[];
    orderProp: string;
    query: string;

    constructor(PhoneSvc: PhoneSvc) {
        PhoneSvc.query().subscribe(phones => {
            this.phones = phones;
        });
        this.orderProp = 'age';
        this.query = '';
    }
    onNewSearchTerm(newSearchTerm: string) {
        this.query = newSearchTerm;
    };
    onNewSortOrder(newSortOrder: string) {
        this.orderProp = newSortOrder;
    };
}
