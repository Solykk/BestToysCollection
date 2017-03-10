/* Controllers */

var BTCControllers = angular.module('BTCControllers', []);

BTCControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'name';
    $scope.arey = ["first","second","third","forth","fifth"];


    $scope.checkboxModel = {
      value1:  "",
      value2:  ""
    };
    $scope.firstVal = "first";
    $scope.secondVal = "second";
    $scope.filterByCategory = function(phoneItem){
      if($scope.checkboxModel.value1 == "" && $scope.checkboxModel.value2 == "" ){
        return  phoneItem | $scope.arey[0] || $scope.arey[1]|| $scope.arey[2] || $scope.arey[3] || $scope.arey[4];
      } else {
        return phoneItem.category == $scope.checkboxModel.value1 || phoneItem.category == $scope.checkboxModel.value2;
      }
    }
  }]);

BTCControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);


