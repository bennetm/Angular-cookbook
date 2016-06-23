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
var phone_service_1 = require("../services/phone/phone.service");
var phone_list_component_1 = require("../phone-list/phone-list.component");
var search_sort_field_component_1 = require("../search-sort-field/search-sort-field.component");
var PhoneListLayoutComponent = (function () {
    function PhoneListLayoutComponent(phone) {
        var _this = this;
        this.phone = phone;
        this.query = '';
        this.orderProp = 'name';
        phone.query().subscribe(function (phones) {
            _this.phones = phones;
        });
    }
    PhoneListLayoutComponent.prototype.onNewSearchTerm = function ($event) {
        this.query = $event;
    };
    ;
    PhoneListLayoutComponent.prototype.onNewSortOrder = function ($event) {
        this.orderProp = $event;
    };
    ;
    PhoneListLayoutComponent = __decorate([
        core_1.Component({
            selector: 'phone-list-layout',
            templateUrl: 'app/phone-list-layout/phone-list-layout.template.html',
            directives: [search_sort_field_component_1.default, phone_list_component_1.PhoneListComponent]
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [phone_service_1.PhoneSvc])
    ], PhoneListLayoutComponent);
    return PhoneListLayoutComponent;
}());
exports.PhoneListLayoutComponent = PhoneListLayoutComponent;
//# sourceMappingURL=phone-list-layout.component.js.map