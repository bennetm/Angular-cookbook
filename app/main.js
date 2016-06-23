"use strict";
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var app_component_1 = require('./app.component');
var phone_service_1 = require("./services/phone/phone.service");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    router_deprecated_1.ROUTER_PROVIDERS,
    { provide: common_1.APP_BASE_HREF, useValue: '!' },
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
    phone_service_1.PhoneSvc
]);
//# sourceMappingURL=main.js.map