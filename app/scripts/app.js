'use strict';

angular.module('imreqMobileApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute', 
  'ngTouch'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
