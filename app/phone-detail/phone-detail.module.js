"use strict";
var upgrade_adaptor_module_1 = require('../services/upgrade-adaptor.module');
var phone_detail_component_1 = require('../phone-detail/phone-detail.component');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('phonecat.phone.detail', ['ngAnimate'])
    .directive('phone-detail', upgrade_adaptor_module_1.upgradeAdapter.downgradeNg2Component(phone_detail_component_1.PhoneDetailComponent));
//# sourceMappingURL=phone-detail.module.js.map