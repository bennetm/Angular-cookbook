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
var PhoneListComponent = (function () {
    function PhoneListComponent() {
    }
    PhoneListComponent.prototype.getPhones = function () {
        return this.sortPhones(this.filterPhones(this.phones));
    };
    PhoneListComponent.prototype.filterPhones = function (phones) {
        var _this = this;
        if (!this.query || !phones.length) {
            return phones;
        }
        var phonesCpy = [];
        phones.forEach(function (arrayItem) {
            if (arrayItem.name.toLowerCase().indexOf(_this.query.toLowerCase()) >= 0 ||
                arrayItem.snippet.toLowerCase().indexOf(_this.query.toLowerCase()) >= 0) {
                phonesCpy.push(arrayItem);
            }
        });
        return phonesCpy;
    };
    /*private filterPhones(phones: IPhoneData[]) {
        if (phones && this.query) {
            return phones.filter(phone => {
                let name = phone.name.toLowerCase();
                let snippet = phone.snippet.toLowerCase();
                let searchTerm = this.query.toLowerCase();
                return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
            });
        }
        return phones;
    }*/
    PhoneListComponent.prototype.sortPhones = function (phones) {
        var _this = this;
        if (phones && this.orderProp) {
            return phones
                .slice(0) // Make a copy
                .sort(function (a, b) {
                if (a[_this.orderProp] < b[_this.orderProp]) {
                    return -1;
                }
                else if ([b[_this.orderProp] < a[_this.orderProp]]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        return phones;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PhoneListComponent.prototype, "phones", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PhoneListComponent.prototype, "query", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PhoneListComponent.prototype, "orderProp", void 0);
    PhoneListComponent = __decorate([
        core_1.Component({
            selector: 'phone-list',
            templateUrl: 'app/phone-list/phone-list.template.html'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PhoneListComponent);
    return PhoneListComponent;
}());
exports.PhoneListComponent = PhoneListComponent;
//# sourceMappingURL=phone-list.component.js.map