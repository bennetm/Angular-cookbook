"use strict";
var phone_service_1 = require("./phone.service");
var upgrade_adaptor_module_1 = require("../upgrade-adaptor.module");
var http_1 = require("@angular/http");
/* */
upgrade_adaptor_module_1.upgradeAdapter.addProvider(http_1.HTTP_PROVIDERS);
upgrade_adaptor_module_1.upgradeAdapter.addProvider(phone_service_1.PhoneSvc);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('phonecat.services', [])
    .factory('PhoneSvc', upgrade_adaptor_module_1.upgradeAdapter.downgradeNg2Provider(phone_service_1.PhoneSvc));
//# sourceMappingURL=phone.module.js.map