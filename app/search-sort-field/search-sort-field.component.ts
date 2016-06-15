import SearchController from "./search-sort-field.controller";

export default class SearchComponent implements ng.IComponentOptions {

    public bindings: any;
    public controller: any;
    public templateUrl: string;

    constructor() {
        this.bindings = {
            onSearchTermChange: '&',
            onSortOrderChange: '&',
            initialSortOrder : '<',
            initialSearchTerm: '<'
        };
        this.controller = SearchController;
        this.templateUrl = 'app/search-sort-field/search-sort-field.html';
    }

}



