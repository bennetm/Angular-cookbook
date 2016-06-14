import PhoneDetailComponent from './phone-detail.component';

export default angular.module('phonecat.components.phoneDetail', ['ngAnimate'])
    .component('phoneDetails', new PhoneDetailComponent());