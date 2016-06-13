angular.module('phonecatComponents.searchSortField')
    .controller('SearchSortFieldCtrl', function ($scope) {
        var ctrl = this;

        ctrl.searchTerm = ctrl.inputSearchTerm();
        ctrl.sortOrder = ctrl.inputSortOrder();

        ctrl.onTermChange = function() {
            ctrl.onSearchTermChange({newSearchTerm: ctrl.searchTerm});
        }

        ctrl.onOrderChange = function() {
            ctrl.onSortOrderChange({newSortOrder: ctrl.sortOrder});
        }

    });
