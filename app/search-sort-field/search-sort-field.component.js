"use strict";
var search_sort_field_controller_1 = require("./search-sort-field.controller");
var SearchComponent = (function () {
    function SearchComponent() {
        this.bindings = {
            onSearchTermChange: '&',
            onSortOrderChange: '&',
            initialSortOrder: '<',
            initialSearchTerm: '<'
        };
        this.controller = search_sort_field_controller_1.default;
        this.templateUrl = 'app/search-sort-field/search-sort-field.html';
    }
    return SearchComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchComponent;
//# sourceMappingURL=search-sort-field.component.js.map