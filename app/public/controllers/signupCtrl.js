angular.module("myApp").controller('signupCtrl',function ($scope,$state) {
  console.log("entered signup controller...");
  $scope.signFunction=function () {
    $state.go('login');
  };
});
