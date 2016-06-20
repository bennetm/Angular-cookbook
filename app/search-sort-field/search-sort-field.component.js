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
var SearchSortFieldComponent = (function () {
    function SearchSortFieldComponent() {
        this.onOrderChanged = new core_1.EventEmitter();
        this.onQueryTermChanged = new core_1.EventEmitter();
        this._query = '';
        this._orderProp = '';
    }
    Object.defineProperty(SearchSortFieldComponent.prototype, "query", {
        get: function () { return this._query; },
        set: function (query) {
            this._query = query.trim();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSortFieldComponent.prototype, "orderProp", {
        get: function () { return this._orderProp; },
        set: function (orderProp) {
            this._orderProp = (orderProp && orderProp.trim()) || 'age';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchSortFieldComponent.prototype, "onOrderChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchSortFieldComponent.prototype, "onQueryTermChanged", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SearchSortFieldComponent.prototype, "query", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SearchSortFieldComponent.prototype, "orderProp", null);
    SearchSortFieldComponent = __decorate([
        core_1.Component({
            selector: 'search-sort-field',
            templateUrl: '/app/search-sort-field/search-sort-field.template.html',
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SearchSortFieldComponent);
    return SearchSortFieldComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchSortFieldComponent;
//# sourceMappingURL=search-sort-field.component.js.map