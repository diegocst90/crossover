'use strict';

/*
 * componenets/directives/stop-event/stop-event.js
 * Directive for stop propagation of events
 *
 * (c) 2016 Diego Castillo
 * License: MIT
 */
angular.module('crossover')

.directive('stopEvent', function() {
    function stopEvent(e) {
        e.stopPropagation();
    }

    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        element.on('click', stopEvent);
      }
    };
});