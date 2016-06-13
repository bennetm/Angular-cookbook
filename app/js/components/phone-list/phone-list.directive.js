angular.module('phonecatComponents.phoneList').directive('phoneList', function() {
    return {
        scope: {},
        controller: 'PhoneListController',
        controllerAs: 'ctrl',
        templateUrl: './js/components/phone-list/phone-list.html',
        bindToController: {
            inputUnorderedList: '&',
            inputQuery: '=',
            inputSortOrder: '='
        }
    }
});