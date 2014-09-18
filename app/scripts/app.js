'use strict';

/**
 * @ngdoc overview
 * @name souljsWebsiteApp
 * @description
 * # souljsWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('souljsWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/creator', {
        templateUrl: 'views/creator.html',
        controller: 'CreatorCtrl'
      })
      .when('/library', {
        templateUrl: 'views/library.html',
        controller: 'LibraryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
