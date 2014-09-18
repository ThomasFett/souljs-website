'use strict';

/**
 * @ngdoc function
 * @name souljsWebsiteApp.controller:CreatorCtrl
 * @description
 * # CreatorCtrl
 * Controller of the souljsWebsiteApp
 */
angular.module('souljsWebsiteApp')
  .controller('CreatorCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // TODO: Remove this dummy sound creation!
    soul.initSoul();
    soul.createStaticSound();
  });

