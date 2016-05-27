'use strict';

/*
 * componenets/directives/crossover-item/crossover-item.js
 * Directive for a single item
 *
 * (c) 2016 Diego Castillo
 * License: MIT
 */
angular.module('crossover.directives')

.directive('crossoverItem', [function(){
    return {
        restrict: 'E',
        scope: {
            item: '='
        },
        templateUrl: 'components/directives/crossover-item/crossover-item.html'
    }
}]);