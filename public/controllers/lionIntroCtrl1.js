angular.module("myApp").controller('lionIntroCtrl1',function ($scope,$state) {
  console.log("enter lionIntro1 controller...");

  $scope.next=function () {
    console.log("entered lionintro1 controller");
  };
  $scope.previous=function () {
    $state.go('lionIntro');
  };
});
