angular.module("myApp").controller('lionIntroCtrl',function ($scope,$state) {
  console.log("entered lionIntro controller...");

  $scope.next=function () {
    $state.go('lionIntro1');
  };
  $scope.previous=function () {
    $state.go('junglepage1');
  };
});
