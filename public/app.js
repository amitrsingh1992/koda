var app = angular.module("myApp",["ui.router"]);

app.config(function ($stateProvider,$urlRouter) {
  $stateProvider
  .state('dashboard',{
    url:'/dashboard',
    templateUrl:'templates/dashboard.html',
    controller:'dashboardCtrl'
  })
  .state('signUp',{
    url:'/signUp',
    templateUrl:'templates/signUp.html',
    controller:'signupCtrl'
  })
  .state('login',{
    url:'/login',
    templateUrl:'templates/login.html',
    controller:'loginCtrl'
  })
  .state('junglepage',{
    url:'/junglepage',
    templateUrl:'templates/junglepage.html',
    controller:'junglepageCtrl'
  })
  .state('lionIntro',{
    url:'/lionIntro',
    templateUrl:'templates/lionIntro.html',
    controller:'lionIntroCtrl'
  });
  $urlRouterProvider.otherwise('login');
});
