"use strict";
var checkmark_module_1 = require('./filters/checkmark/checkmark.module');
var phone_module_1 = require('./services/phone/phone.module');
var phone_list_layout_module_1 = require('./layout/phone-list-layout.module');
var phone_detail_layout_module_1 = require('./layout/phone-detail-layout.module');
var search_sort_field_module_1 = require('./search-sort-field/search-sort-field.module');
var phone_list_module_1 = require('./phone-list/phone-list.module');
var phone_detail_module_1 = require('./phone-detail/phone-detail.module');
var animations_module_1 = require('./animations/animations.module');
configure.$inject = ['$locationProvider', '$routeProvider'];
function configure($locationProvider, $routeProvider) {
    //$locationProvider.hashPrefix('!');
    $routeProvider.
        when('/phones', {
        templateUrl: './layout/phone-list-layout.html',
        controller: 'ListLayoutController',
        controllerAs: 'ctrl'
    }).
        when('/phones/:phoneId', {
        templateUrl: './layout/phone-detail-layout.html',
        controller: 'DetailLayoutController',
        controllerAs: 'ctrl'
    }).
        otherwise('/phones');
}
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    animations_module_1.default.name,
    phone_module_1.default.name,
    phone_list_layout_module_1.default.name,
    phone_detail_layout_module_1.default.name,
    search_sort_field_module_1.default.name,
    phone_list_module_1.default.name,
    phone_detail_module_1.default.name,
    checkmark_module_1.default.name
])
    .config(configure);
// Bootstrap the Angular 1.5 app
angular.bootstrap(document.documentElement, ['phonecatApp']);
//# sourceMappingURL=app.config.js.map