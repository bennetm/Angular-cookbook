
angular.module('phonecatComponents')
    .directive('searchSortField', function() {
        return {
            scope: {},
            controller: 'SearchSortFieldCtrl',
            controllerAs: 'ctrl',
            templateUrl: './js/components/search-sort-field/search-sort-field.html',
            bindToController: {
                inputSearchTerm: '&',
                onSearchTermChange: '&',
                inputSortOrder: '&',
                onSortOrderChange: '&'
            }
        }

    }
);