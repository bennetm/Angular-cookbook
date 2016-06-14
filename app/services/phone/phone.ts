
phoneSvc.$inject = [
    '$resource'
]

export default function phoneSvc($resource: angular.resource.IResourceService) {
        return $resource('phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: {phoneId: 'phones'},
                isArray: true
            }
        });
    }

