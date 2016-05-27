'use strict';

/*
 * componenets/directives/execution-result/execution-result.js
 * Directive for a div content for the execution result
 *
 * (c) 2016 Diego Castillo
 * License: MIT
 */
angular.module('crossover')

.directive('executionResult', [function(){
    return {
        restrict: 'E',
        scope: {
            item: '='
        },
        templateUrl: 'components/directives/execution-result/execution-result.html'
    }
}]);