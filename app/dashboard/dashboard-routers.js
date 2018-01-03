(function () {
  var app = angular.module('dashboard-routers', [
    'ui.router',
    'uiRouterStyles',
  ])

  app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'dashboard/dashboard.html',
        data: {
          css: 'styles/dashboard.css'
        },
        redirectTo: 'dashboard.home'
      })
      .state('dashboard.home', {
        url: '/home',
        templateUrl: 'dashboard/dashboard-home/dashboard-home.html',
        data: {
          css: 'styles/dashboard-home.css'
        }
      })
      .state('dashboard.dd1', {
        url: '/dd1',
        templateUrl: 'dashboard/dashboard-dd1/dashboard-dd1.html',
        data: {
          css: 'styles/dashboard-dd1.css'
        }
      })
      .state('dashboard.dd2', {
        url: '/dd2',
        templateUrl: 'dashboard/dashboard-dd2/dashboard-dd2.html',
        data: {
          css: 'styles/dashboard-dd2.css'
        }
      })
      .state('dashboard.dd3', {
        url: '/dd3',
        templateUrl: 'dashboard/dashboard-dd3/dashboard-dd3.html',
        data: {
          css: 'styles/dashboard-dd3.css'
        }
      })
  });

  app.run(['$rootScope', '$state', function ($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function (evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params, { location: 'replace' })
      }
    });
  }]);

})();