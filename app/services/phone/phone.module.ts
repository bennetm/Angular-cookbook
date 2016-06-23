import {PhoneSvc} from "./phone.service";
import { upgradeAdapter } from "../upgrade-adaptor.module";
import {HTTP_PROVIDERS} from "@angular/http";

/* */
upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.addProvider(PhoneSvc);


export default angular.module('phonecat.services',[])
    .factory('PhoneSvc', upgradeAdapter.downgradeNg2Provider(PhoneSvc));