"use strict";
var ListLayoutController = (function () {
    function ListLayoutController(PhoneSvc) {
        var _this = this;
        PhoneSvc.query().subscribe(function (phones) {
            _this.phones = phones;
        });
        this.orderProp = 'age';
        this.query = '';
    }
    ListLayoutController.prototype.onNewSearchTerm = function (newSearchTerm) {
        this.query = newSearchTerm;
    };
    ;
    ListLayoutController.prototype.onNewSortOrder = function (newSortOrder) {
        this.orderProp = newSortOrder;
    };
    ;
    ListLayoutController.$inject = ['PhoneSvc'];
    return ListLayoutController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListLayoutController;
//# sourceMappingURL=phone-list-layout.controller.js.map