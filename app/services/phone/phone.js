"use strict";
phoneSvc.$inject = [
    '$resource'
];
function phoneSvc($resource) {
    return $resource('app/phones/:phoneId.json', {}, {
        query: {
            method: 'GET',
            params: { phoneId: 'phones' },
            isArray: true
        }
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = phoneSvc;
//# sourceMappingURL=phone.js.map