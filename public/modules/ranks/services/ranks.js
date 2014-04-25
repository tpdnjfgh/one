'use strict';

//Ranks service used to communicate Ranks REST endpoints
angular.module('ranks').factory('Ranks', ['$resource', function($resource) {
    return $resource('ranks/:rankId', {
        rankId: '@_id'
    }, {
        update: {
            method: 'PUT'
        },
        query: {
          method: 'GET',
          params: { sort: '-votes', limit: 100 },
          isArray: true 
        }
    });
}]);