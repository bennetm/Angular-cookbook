angular.module('phonecatComponents.phoneList')
    .controller('PhoneListController', function ($scope) {
            var ctrl = this;
            ctrl.phones  = ctrl.inputUnorderedList();
        }
    );