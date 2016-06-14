import PhoneListComponent from './phone-list.component';

export default angular.module('phonecat.components.phoneList', [])
    .component('phoneList', new PhoneListComponent())
;