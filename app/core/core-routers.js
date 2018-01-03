(function () {
  var app = angular.module('core-routers', [
    'ui.router',
    'uiRouterStyles',
  ])

  app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'core/login/login.html'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'core/register/register.html',
      })
  });
})();