"use strict";
//import CheckmarkPipe from './services/checkmark/checkmark.pipe.module';
var phone_module_1 = require('./services/phone/phone.module');
var phone_list_layout_module_1 = require('./phone-list-layout/phone-list-layout.module');
var phone_detail_layout_module_1 = require('./phone-detail-layout/phone-detail-layout.module');
var search_sort_field_module_1 = require('./search-sort-field/search-sort-field.module');
var phone_list_module_1 = require('./phone-list/phone-list.module');
var phone_detail_module_1 = require('./phone-detail/phone-detail.module');
var animations_module_1 = require('./animations/animations.module');
var upgrade_adaptor_module_1 = require('./services/upgrade-adaptor.module');
configure.$inject = ['$locationProvider', '$routeProvider'];
function configure($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
        when('/phones', {
        template: '<phone-list-layout>loading... </phone-list-layout>',
        controller: 'ListLayoutController',
        controllerAs: 'ctrl'
    }).
        when('/phones/:phoneId', {
        template: '<phone-detail-layout>loading..</phone-detail-layout>',
        controller: 'DetailLayoutController',
        controllerAs: 'ctrl'
    }).
        otherwise('/phones');
}
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'ngAnimate',
    phone_module_1.default.name,
    animations_module_1.default.name,
    phone_list_layout_module_1.default.name,
    phone_detail_layout_module_1.default.name,
    search_sort_field_module_1.default.name,
    phone_list_module_1.default.name,
    phone_detail_module_1.default.name,
])
    .config(configure);
// Bootstrap the Angular 1.5 app
//angular.bootstrap(document.documentElement, ['phonecatApp']);
upgrade_adaptor_module_1.upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
//# sourceMappingURL=main.js.map