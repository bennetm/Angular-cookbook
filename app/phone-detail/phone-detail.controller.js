"use strict";
var PhoneDetailController = (function () {
    function PhoneDetailController() {
    }
    PhoneDetailController.prototype.onImageSelect = function (url) {
        this.onImageChange({ newImgUrl: url });
    };
    return PhoneDetailController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PhoneDetailController;
//# sourceMappingURL=phone-detail.controller.js.map