"use strict";
var DetailLayoutController = (function () {
    function DetailLayoutController($routeParams, PhoneSvc) {
        var _this = this;
        PhoneSvc.get($routeParams.phoneId).subscribe((function (phone) {
            _this.phone = phone;
        }));
    }
    DetailLayoutController.prototype.setImage = function (url) {
        this.mainImageUrl = url;
    };
    DetailLayoutController.$inject = ['$routeParams', 'PhoneSvc'];
    return DetailLayoutController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DetailLayoutController;
//# sourceMappingURL=phone-detail-layout.controller.js.map