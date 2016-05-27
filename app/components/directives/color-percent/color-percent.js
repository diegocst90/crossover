'use strict';

/*
 * componenets/directives/color-percent/color-percent.js
 * Directive for a span colorful depending on the value provided
 *
 * (c) 2016 Diego Castillo
 * License: MIT
 */
angular.module('crossover')

.directive('colorPercent', [function(){
    return {
        restrict: 'E',
        scope: {
            percent: '='
        },
        templateUrl: 'components/directives/color-percent/color-percent.html'
    }
}]);