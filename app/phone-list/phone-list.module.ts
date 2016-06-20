import { upgradeAdapter } from '../services/upgrade-adaptor.module';
import {PhoneListComponent} from "../phone-list/phone-list.component";

export default angular.module('phonecat.phone.list', [])
    .directive(
        'phoneList',
        <angular.IDirectiveFactory>
            upgradeAdapter.downgradeNg2Component(PhoneListComponent)
    );
