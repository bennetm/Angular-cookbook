import { upgradeAdapter } from '../services/upgrade-adaptor.module';
import SearchSortFieldComponent from "./search-sort-field.component";


export default angular.module('phonecat.components.search', [])
    .directive('searchSortField',
        <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(SearchSortFieldComponent));
