"use strict";
var upgrade_adaptor_module_1 = require('../services/upgrade-adaptor.module');
var phone_list_component_1 = require("../phone-list/phone-list.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('phonecat.phone.list', [])
    .directive('phoneList', upgrade_adaptor_module_1.upgradeAdapter.downgradeNg2Component(phone_list_component_1.PhoneListComponent));
//# sourceMappingURL=phone-list.module.js.map