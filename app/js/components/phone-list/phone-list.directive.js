angular.module('phonecatComponents').directive('search-sort-io', function() {
    return {
        scope: {},
        controller: 'PhoneListCtrl',
        controllerAs: 'ctrl',
        templateUrl: './js/components/phone-list/phone-list.html',
        bindToController: {
            inputUnorderedList: '&',
            inputQuery: '&',
            inputSortOrder: '&'
        }
    }
});