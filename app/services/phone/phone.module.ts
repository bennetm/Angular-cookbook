import phoneSvc from './phone';

export default angular.module('phonecat.services', ['ngResource'])
    .factory('PhoneSvc', phoneSvc);
