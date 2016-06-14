export default class ListLayoutController {

    static $inject = ['PhoneSvc'];

    phones: any[];
    orderProp: string;
    query: string;

    constructor(Phone: any) {
        this.phones = Phone.query();
        this.orderProp = 'name';
        this.query = '';
    }
    onNewSearchTerm(newSearchTerm: string) {
        this.query = newSearchTerm;
    };
    onNewSortOrder(newSortOrder: string) {
        this.orderProp = newSortOrder;
    };
}
