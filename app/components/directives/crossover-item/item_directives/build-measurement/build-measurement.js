'use strict';

/*
 * componenets/directives/item_directives/build-measurement/build-measurement.js
 * Directive for a div content containing the build measurement
 *
 * (c) 2016 Diego Castillo
 * License: MIT
 */
angular.module('crossover')

.directive('buildMeasurement', [function(){
    return {
        restrict: 'E',
        scope: {
            itemBuild: '='
        },
        templateUrl: 'components/directives/crossover-item/item_directives/build-measurement/build-measurement.html'
    }
}]);