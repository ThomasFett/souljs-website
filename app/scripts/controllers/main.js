'use strict';

/**
 * @ngdoc function
 * @name souljsWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the souljsWebsiteApp
 */
angular.module('souljsWebsiteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
