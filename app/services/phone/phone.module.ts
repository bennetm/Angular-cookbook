import {PhoneSvc} from "./phone.service";
import { upgradeAdapter } from "../upgrade-adaptor.module";

upgradeAdapter.addProvider(PhoneSvc);

export default angular.module('phonecat.services',[])
    .factory('PhoneSvc', upgradeAdapter.downgradeNg2Provider(PhoneSvc));