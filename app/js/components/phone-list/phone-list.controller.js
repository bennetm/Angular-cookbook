angular.module('phonecatComponents')
    .controller('PhoneListCtrl', function ($scope) {
            var ctrl = this;
            var phones  = ctrl.inputUnorderedList();
            var term = ctrl.inputSearchTerm();
            var sortOrder = ctrl.inputSortOrder();
        }
    );