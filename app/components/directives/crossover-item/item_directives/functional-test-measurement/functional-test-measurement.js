'use strict';

/*
 * componenets/directives/item_directives/functional-test-measurement/functional-test-measurement.js
 * Directive for a div content containing the functional test measurement
 *
 * (c) 2016 Diego Castillo
 * License: MIT
 */
angular.module('crossover')

.directive('functionalTestMeasurement', [function(){
    return {
        restrict: 'E',
        scope: {
            item: '='
        },
        templateUrl: 'components/directives/crossover-item/item_directives/functional-test-measurement/functional-test-measurement.html'
    }
}]);