/* Services */

var BTCServices = angular.module('BTCServices', ['ngResource']);

BTCServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true},

    });
  }]);

