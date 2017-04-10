angular.module("myApp").controller('loginCtrl',function ($scope,$state) {
  console.log("entered login controller...");
  $scope.loginFunction=function () {
    $state.go('junglepage');
  };
});
