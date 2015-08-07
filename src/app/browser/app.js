angular.module('app', [
  'ngResource',
  'ui.bootstrap',
  'ui.router',
  'ngAnimate',
  'ngSanitize',
  'duScroll'
]);

angular.module('app').constant('appConfig', {
  VERSION: '@@VERSION',
  ENV: '@@ENV'
});

angular.module('app').run([
  '$rootScope',
  '$state',
  '$stateParams',
  function($rootScope, $state, $stateParams) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.currentDate = new Date();

    $rootScope.meta = {
      title: 'Mongotron'
    };

    $rootScope.setMetaTitle = function(title) {
      $rootScope.meta.title = title;
    };
  }
]);
