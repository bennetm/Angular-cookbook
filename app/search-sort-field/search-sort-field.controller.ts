export interface ISearchComponentBindings {

    onSearchTermChange : (object) => any;
    onSortOrderChange: (object) => any;
    initialSortOrder :string;
    initialSearchTerm: string;
}

export interface ISearchComponentController extends ISearchComponentBindings {
    searchTerm : string;
    sortOrder : string;
    onTermChange(string) : void;
    onOrderChange(string) : void;
}
export default class SearchController implements ISearchComponentController {

    public searchTerm: string ;
    public sortOrder: string ;

    public initialSortOrder: string;
    public initialSearchTerm: string;
    public onSearchTermChange : (object) => any;
    public onSortOrderChange: (object) => any;

    constructor() {
        this.searchTerm = this.initialSearchTerm;
        this.sortOrder = this.initialSortOrder;

    }
    onTermChange(queryString: string) : void {
        this.onSearchTermChange({newSearchTerm: queryString});
    };
    onOrderChange(orderString: string) : void {
        this.onSortOrderChange( {newSortOrder: orderString} );
    };
}


