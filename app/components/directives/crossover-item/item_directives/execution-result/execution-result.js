'use strict';

/*
 * componenets/directives/item_directives/execution-result/execution-result.js
 * Directive for a div content containing the execution result
 *
 * (c) 2016 Diego Castillo
 * License: MIT
 */
angular.module('crossover.directives')

.directive('executionResult', [function(){
    return {
        restrict: 'E',
        scope: {
            item: '='
        },
        templateUrl: 'components/directives/crossover-item/item_directives/execution-result/execution-result.html'
    }
}]);