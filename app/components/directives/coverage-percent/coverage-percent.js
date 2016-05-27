'use strict';

/*
 * componenets/directives/coverage-percent/coverage-percent.js
 * Directive for a horizontal bar filled until the value provided
 *
 * (c) 2016 Diego Castillo
 * License: MIT
 */
angular.module('crossover')

.directive('coveragePercent', [function(){
    return {
        restrict: 'E',
        scope: {
            percent: '='
        },
        templateUrl: 'components/directives/coverage-percent/coverage-percent.html'
    }
}]);