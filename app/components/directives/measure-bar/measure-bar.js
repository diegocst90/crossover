'use strict';

/*
 * componenets/directives/measure-bar/measure-bar.js
 * Measure bar for metrics, builds and tests
 *
 * (c) 2016 Diego Castillo
 * License: MIT
 */
angular.module('crossover.directives')

.directive('measureBar', [function(){
    return {
        restrict: 'E',
        scope: {
            measureData: '='
        },
        templateUrl: 'components/directives/measure-bar/measure-bar.html'
    }
}]);