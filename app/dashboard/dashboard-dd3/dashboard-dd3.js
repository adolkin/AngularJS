(function () {
  'use strict';

  var app = angular.module('dashboardModule');

  app.controller('Ddd3Controller', function ($scope) {

    var self = this;

    $scope.models = {
      selected: null,
      lists: {
        "widgetsA": [],
        "widgetsB": [],
      }
    };

    var getRandomColor = function () {
      return {
        color: '#' + Math.floor(Math.random() * 16777215).toString(16)
      }
    };

    // Generate initial model
    for (var i = 1; i <= 5; ++i) {
      $scope.models.lists.widgetsA.push({
        label: "widgets" + i ,
        color: getRandomColor()
      });
      
    }

    for (var i = 6; i <= 10; ++i) {
      $scope.models.lists.widgetsB.push({
        label: "widgets" + i,
        color: getRandomColor()
      });
    }
  })
})()