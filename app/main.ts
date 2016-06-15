import checkmark from './filters/checkmark/checkmark.module';
import phone from './services/phone/phone.module';
import phone_list_layout from './layout/phone-list-layout.module';
import phone_detail_layout from './layout/phone-detail-layout.module';
import search_sort_field from './search-sort-field/search-sort-field.module';
import phone_list from './phone-list/phone-list.module';
import phone_detail from './phone-detail/phone-detail.module';
import animations from './animations/animations.module';
import { HTTP_PROVIDERS } from '@angular/http';
import { upgradeAdapter } from './services/upgrade-adaptor.module';



configure.$inject = ['$locationProvider', '$routeProvider'];


function configure($locationProvider: angular.ILocationProvider,
                    $routeProvider: angular.route.IRouteProvider) {
        //$locationProvider.hashPrefix('!');
        $routeProvider.
        when('/phones', {
            templateUrl: 'app/layout/phone-list-layout.html',
            controller: 'ListLayoutController',
            controllerAs: 'ctrl'
        }).
        when('/phones/:phoneId', {
            templateUrl: 'app/layout/phone-detail-layout.html',
            controller: 'DetailLayoutController',
            controllerAs: 'ctrl'
        }).
        otherwise('/phones');
    }


var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    phone.name,
    animations.name,
    phone_list_layout.name,
    phone_detail_layout.name,
    search_sort_field.name,
    phone_list.name,
    phone_detail.name,
    checkmark.name
])
    .config(configure);

// Bootstrap the Angular 1.5 app
//angular.bootstrap(document.documentElement, ['phonecatApp']);

/* */
upgradeAdapter.addProvider(HTTP_PROVIDERS);

upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
