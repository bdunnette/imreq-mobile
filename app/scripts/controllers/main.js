'use strict';

angular.module('imreqMobileApp')
  .controller('MainCtrl', function ($scope, $resource) {
    var ImageRequest = $resource('http://160.94.51.184:1337/imagingrequest/:requestId');
    var requests = ImageRequest.query(function () {
        $scope.requests = requests;
    });
  });
