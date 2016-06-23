import { upgradeAdapter } from '../services/upgrade-adaptor.module';
import {PhoneDetailComponent} from '../phone-detail/phone-detail.component';

export default angular.module('phonecat.phone.detail', ['ngAnimate'])
    .directive(
        'phone-detail',
        <angular.IDirectiveFactory>
            upgradeAdapter.downgradeNg2Component(PhoneDetailComponent)
    );
