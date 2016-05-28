'use strict';

/*
 * componenets/directives/stop-event/stop-event.js
 * Directive for stop propagation of events
 *
 * (c) 2016 Diego Castillo
 * License: MIT
 */
angular.module('crossover.directives')

.directive('stopEvent', function() {
    function stopEvent(e) {
        //Stop propagation to parent elements
        e.stopPropagation();
    }

    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        element.on('click', stopEvent);
      }
    };
});