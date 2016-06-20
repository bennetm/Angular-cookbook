"use strict";
var upgrade_adaptor_module_1 = require('../services/upgrade-adaptor.module');
var search_sort_field_component_1 = require("./search-sort-field.component");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('phonecat.components.search', [])
    .directive('searchSortField', upgrade_adaptor_module_1.upgradeAdapter.downgradeNg2Component(search_sort_field_component_1.default));
//# sourceMappingURL=search-sort-field.module.js.map