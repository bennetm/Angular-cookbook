angular.module('phonecatComponents.phoneDetail')
    .controller('PhoneDetailsController', function ($scope) {
            var ctrl = this;

            ctrl.onImgSelect = function(url) {
                ctrl.onImageChange({newImgUrl: url});
            }
        }
    );