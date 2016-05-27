'use strict';

/*
 * componenets/directives/item_directives/unit-test-measurement/unit-test-measurement.js
 * Directive for a div content containing the unit test measurement
 *
 * (c) 2016 Diego Castillo
 * License: MIT
 */
angular.module('crossover')

.directive('unitTestMeasurement', [function(){
    return {
        restrict: 'E',
        scope: {
            item: '='
        },
        templateUrl: 'components/directives/crossover-item/item_directives/unit-test-measurement/unit-test-measurement.html'
    }
}]);