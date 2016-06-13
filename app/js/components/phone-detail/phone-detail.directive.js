angular.module('phonecatComponents.phoneDetail').directive('phoneDetails', function() {
    return {
        scope: {},
        controller: 'PhoneDetailsController',
        controllerAs: 'ctrl',
        templateUrl: './js/components/phone_details/phone_details.html',
        bindToController: {
            phone : '=',
            mainImageUrl : '=',
            onImageChange : '&'
        }
    }
});
