"use strict";
var phone_detail_controller_1 = require('./phone-detail.controller');
var PhoneDetailComponent = (function () {
    function PhoneDetailComponent() {
        this.bindings = {
            phone: '<',
            mainImageUrl: '<',
            onImageChange: '&'
        };
        this.templateUrl = './phone-detail/phone-detail.html';
        this.controller = phone_detail_controller_1.default;
    }
    return PhoneDetailComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PhoneDetailComponent;
//# sourceMappingURL=phone-detail.component.js.map