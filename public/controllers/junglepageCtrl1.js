angular.module("myApp").controller('junglepageCtrl1',function ($scope,$state) {
  console.log("entered junglepage1 controller...");

  $scope.clicked=function () {
    $state.go('lionIntro');
  };
});
