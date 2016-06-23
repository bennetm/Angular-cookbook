import { upgradeAdapter } from '../services/upgrade-adaptor.module';
import {PhoneListLayoutComponent} from "./phone-list-layout.component";

export default angular.module('phonecat.layout.list', [])
    .directive(
        'phoneListLayout',
        <angular.IDirectiveFactory>
            upgradeAdapter.downgradeNg2Component(PhoneListLayoutComponent)
    ).controller('ListLayoutController', PhoneListLayoutComponent);
