'use strict';

var companyObj;
var app = angular.module('mapit', ['ngMap']);
app.controller('mainController', function($scope, $http) {
    $scope.infoVisible = false;
    $http.get('data/companies.json').
    success(function(data) {
        console.log(data);
        companyObj = data;
        $scope.maps = data.data;
    });

    $scope.mapinfo = function() {
        $scope.infoVisible = true;
        $scope.company = $scope.maps[this.index];
    };
});
