import {Component, EventEmitter, Injectable, Input, Output} from '@angular/core';

@Component({
    selector: 'search-sort-field',
    templateUrl: '/app/search-sort-field/search-sort-field.template.html',
})
@Injectable()
export default class SearchSortFieldComponent  {

    @Output() onOrderChanged = new EventEmitter<string>() ;
    @Output() onQueryTermChanged = new EventEmitter<string>();

    _query: string = '';
    _orderProp: string = '';

    @Input()
    set query(query: string) {
        this._query = query.trim();
    }
    @Input()
    set orderProp(orderProp: string) {
        this._orderProp = (orderProp && orderProp.trim()) || 'age';
    }
    get query() { return this._query}
    get orderProp() { return this._orderProp }

}
