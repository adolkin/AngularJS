(function () {
  'use strict';

  var app = angular
    .module('dashboardModule')

  app.controller("SidebarController", function ($scope) {

    $scope.models = {
      selected: null,
      lists: {
        "url": [{
          label: "Home",
          path: "dashboard.home"
        }, {
          label: "DD1",
          path: "dashboard.dd1"
        }, {
          label: "DD2",
          path: "dashboard.dd2"
        }, {
          label: "DD3",
          path: "dashboard.dd3"
        }]
      }
    };
  })
})()