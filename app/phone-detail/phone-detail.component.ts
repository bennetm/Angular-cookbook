import PhoneDetailController from './phone-detail.controller';

export default class PhoneDetailComponent implements ng.IComponentOptions {

    public bindings: any;
    public controller: any;
    public templateUrl: string;

    constructor() {
        this.bindings = {
            phone : '<',
            mainImageUrl : '<',
            onImageChange : '&'
        };
        this.templateUrl = 'app/phone-detail/phone-detail.html';
        this.controller = PhoneDetailController;
    }

}