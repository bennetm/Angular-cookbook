"use strict";
var phone_detail_layout_component_1 = require("./phone-detail-layout.component");
var upgrade_adaptor_module_1 = require("../services/upgrade-adaptor.module");
upgrade_adaptor_module_1.upgradeAdapter.upgradeNg1Provider('$routeParams');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('phonecat.layout.detail', ['ngAnimate'])
    .directive('phoneDetailLayout', upgrade_adaptor_module_1.upgradeAdapter.downgradeNg2Component(phone_detail_layout_component_1.DetailLayoutComponent)).controller('DetailLayoutController', phone_detail_layout_component_1.DetailLayoutComponent);
//# sourceMappingURL=phone-detail-layout.module.js.map