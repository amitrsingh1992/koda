angular.module("myApp").controller('junglepageCtrl',function ($scope,$state) {
  console.log("entered junglepage controller...");
  $scope.clicked=function () {
    $state.go('junglepage1');
  };
});
