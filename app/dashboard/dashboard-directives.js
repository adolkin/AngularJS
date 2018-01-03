(function () {
  var app = angular.module('dashboard-directives', []);
  
  app.controller("DashboardController", ['$scope', function ($scope) {
    $scope.title = " ";

    $scope.setTitle = function (newTitle) {
      $scope.title = newTitle;
    };
  }]);

  app.directive("dashboardHeader", function () {
    return {
      restrict: 'E',
      templateUrl: "dashboard/dashboard-header/dashboard-header.html",
      css: 'styles/dashboard-header.css'
    };
  });

  app.directive("dashboardSidebar", function () {
    return {
      restrict: 'E',
      templateUrl: "dashboard/dashboard-sidebar/dashboard-sidebar.html",
      css: 'styles/dashboard-sidebar.css'
    };
  });

  app.directive("dashboardItemTable", function() {
    return {
      restrict: 'E',
      templateUrl: "dashboard/dashboard-item/dashboard-item-table/dashboard-item-table.html",
      css: 'styles/dashboard-item-table.css'
    };
  })

  app.directive("dashboardItemComment", function() {
    return {
      restrict: 'E',
      templateUrl: "dashboard/dashboard-comment/dashboard-item-comment/dashboard-item-comment.html"
    };
  })
  
})()