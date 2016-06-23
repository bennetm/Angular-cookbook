"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var phone_service_1 = require("../services/phone/phone.service");
var phone_detail_component_1 = require("../phone-detail/phone-detail.component");
var DetailLayoutComponent = (function () {
    function DetailLayoutComponent(routeParams, phoneSvc) {
        var _this = this;
        phoneSvc.getPhoneDetail(routeParams.get('phoneId')).subscribe(function (phone) {
            _this.phone = phone;
            _this.mainImageUrl = phone.images[0];
        });
    }
    DetailLayoutComponent.prototype.setImage = function ($event) {
        this.mainImageUrl = $event;
        //console.log(this.mainImageUrl);
    };
    DetailLayoutComponent = __decorate([
        core_1.Component({
            selector: 'phone-detail-layout',
            templateUrl: 'app/phone-detail-layout/phone-detail-layout.template.html',
            directives: [phone_detail_component_1.PhoneDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, phone_service_1.PhoneSvc])
    ], DetailLayoutComponent);
    return DetailLayoutComponent;
}());
exports.DetailLayoutComponent = DetailLayoutComponent;
//# sourceMappingURL=phone-detail-layout.component.js.map