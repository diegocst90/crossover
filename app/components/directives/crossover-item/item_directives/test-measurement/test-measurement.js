'use strict';

/*
 * componenets/directives/item_directives/test-measurement/test-measurement.js
 * Directive for a div content containing a test measurement
 *
 * (c) 2016 Diego Castillo
 * License: MIT
 */
angular.module('crossover.directives')

.directive('testMeasurement', [function(){
    return {
        restrict: 'E',
        replace: false,
        scope: true,
        templateUrl: 'components/directives/crossover-item/item_directives/test-measurement/test-measurement.html',
        link: function(scope, element, attrs) {
            //Fill scope
            scope.measurementIndex = attrs.measurementIndex;
            scope.title = attrs.title;

            //Get passed and failed or, if missing, default as 0
            if (typeof scope.item.data.measures[attrs.measurementIndex] != 'undefined') {
                scope.passed = scope.item.data.measures[attrs.measurementIndex].categories.passed;
                scope.failed = scope.item.data.measures[attrs.measurementIndex].categories.failed;
            } else {
                scope.passed = 0;
                scope.failed = 0;
            }

            if (!((scope.passed + scope.failed) > 0)) { //empty all?
                scope.passed = 0;
                scope.failed = 1; //1 so the graphic is still rended
            }

            scope.tests_total = scope.passed + scope.failed;
        }
    }
}]);