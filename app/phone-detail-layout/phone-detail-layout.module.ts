import { DetailLayoutComponent } from "./phone-detail-layout.component";
import {upgradeAdapter} from "../services/upgrade-adaptor.module";

upgradeAdapter.upgradeNg1Provider('$routeParams');

export default angular.module('phonecat.layout.detail', ['ngAnimate'])
    .directive(
        'phoneDetailLayout',
        <angular.IDirectiveFactory>
            upgradeAdapter.downgradeNg2Component(DetailLayoutComponent)
    ).controller('DetailLayoutController', DetailLayoutComponent);


