angular.module('app').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('app', {
        url: '/',
        templateUrl: __dirname + '/views/app.html',
        controller: 'appCtrl'
      })
      .state('app.home', {
        url: 'home',
        templateUrl: __dirname + '/components/home/home.html',
        controller: 'homeCtrl'
      })
      .state('app.settings', {
        url: 'settings',
        templateUrl: __dirname + '/components/settings/settings.html',
        controller: 'settingsCtrl'
      });
  }
]);
