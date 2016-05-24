'use strict';

angular.module('crossover.home', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
    $stateProvider.
        state('home', {
            url: '/home',
            templateUrl: 'modules/home/home.html',
            controller: 'HomeCtrl'
        })
}])

.controller('HomeCtrl', [function() {

}]);