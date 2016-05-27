'use strict';

/*
 * componenets/directives/item_directives/metrics-measurement/metrics-measurement.js
 * Directive for a div content containing the metrics measurement information
 *
 * (c) 2016 Diego Castillo
 * License: MIT
 */
angular.module('crossover.directives')

.directive('metricsMeasurement', [function(){
    return {
        restrict: 'E',
        scope: {
            itemMetrics: '='
        },
        templateUrl: 'components/directives/crossover-item/item_directives/metrics-measurement/metrics-measurement.html'
    }
}]);