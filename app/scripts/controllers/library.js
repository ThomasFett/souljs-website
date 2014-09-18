'use strict';

/**
 * @ngdoc function
 * @name souljsWebsiteApp.controller:LibraryCtrl
 * @description
 * # LibraryCtrl
 * Controller of the souljsWebsiteApp
 */
angular.module('souljsWebsiteApp')
  .controller('LibraryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
