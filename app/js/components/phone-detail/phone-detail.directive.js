angular.module('phonecatComponents.phoneDetail').directive('phoneDetails', function() {
    return {
        scope: {},
        controller: 'PhoneDetailsController',
        controllerAs: 'ctrl',
        templateUrl: './js/components/phone-detail/phone-detail.html',
        bindToController: {
            phone : '=',
            mainImageUrl : '=',
            onImageChange : '&'
        }
    }
});
