'use strict';

angular.module('crossover.version', [
  'crossover.version.interpolate-filter',
  'crossover.version.version-directive'
])

.value('version', '0.1');
