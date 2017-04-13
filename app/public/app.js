var app = angular.module("myApp",["ui.router"]);

app.config(function ($urlRouterProvider,$stateProvider) {
  $urlRouterProvider.otherwise('junglepage');
  $stateProvider
  // .state('dashboard',{
  //   url:'/dashboard',
  //   templateUrl:'templates/dashboard.html',
  //   // controller:'dashboardCtrl'
  // })
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
  .state('junglepage1',{
    url:'/junglepage1',
    templateUrl:'templates/junglepage1.html',
    controller:'junglepageCtrl1'
  })
  .state('lionIntro',{
    url:'/lionIntro',
    templateUrl:'templates/lionIntro.html',
    controller:'lionIntroCtrl'
  })
  .state('lionIntro1',{
    url:'/lionIntro1',
    templateUrl:'templates/lionIntro1.html',
    controller:'lionIntroCtrl1'
  });
});
