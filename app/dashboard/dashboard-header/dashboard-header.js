(function () {
  'use strict';
  angular
    .module('dashboardModule')
    .controller('DashboardHeaderController', DashboardHeaderController)

  function DashboardHeaderController($scope) {
    $scope.models = {
      selected: null,
      lists: {
        "url": [{
          label: "Register",
          path: "register"
        }, {
          label: "Login",
          path: "login"
        }, {
          label: "Dashboard",
          path: "dashboard"
        }]
      }
    };
  }
})()