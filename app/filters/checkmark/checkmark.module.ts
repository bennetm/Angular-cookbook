import checkmarkFilter from './checkmark.filter';

export default angular.module('phonecat.filters', [])
    .filter('checkmark', checkmarkFilter);