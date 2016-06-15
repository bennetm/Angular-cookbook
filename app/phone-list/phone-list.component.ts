
export default class PhoneListComponent implements ng.IComponentOptions {

    public bindings: any;
    public controller: any;
    public templateUrl: string;

    constructor() {
        this.bindings = {
            inputUnorderedList: '<',
            inputQuery: '<',
            inputSortOrder: '<'
        }
        this.templateUrl = './phone-list/phone-list.html';
    }

}