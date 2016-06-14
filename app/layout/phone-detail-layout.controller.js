"use strict";
var DetailLayoutController = (function () {
    function DetailLayoutController($routeParams, PhoneSvc) {
        this.phone = PhoneSvc.get({ phoneId: $routeParams.phoneId });
        //this.mainImageUrl = this.phone.images[0];
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