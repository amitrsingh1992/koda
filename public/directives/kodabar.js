angular.module("myApp").directive('kodabar',function(){
  return {
      replace:true,
      restrict: 'EA',
      templateUrl: 'templates/kodabar.html'
  };
});
