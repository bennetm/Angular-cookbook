"use strict";
var upgrade_adaptor_module_1 = require('../services/upgrade-adaptor.module');
var phone_list_layout_component_1 = require("./phone-list-layout.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('phonecat.layout.list', [])
    .directive('phoneListLayout', upgrade_adaptor_module_1.upgradeAdapter.downgradeNg2Component(phone_list_layout_component_1.PhoneListLayoutComponent)).controller('ListLayoutController', phone_list_layout_component_1.PhoneListLayoutComponent);
//# sourceMappingURL=phone-list-layout.module.js.map