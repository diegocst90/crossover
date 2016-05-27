'use strict';

// Declare app level module which depends on views, and components
angular.module('crossover', [
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'chart.js',
  'components.services.items',
  'crossover.home',
  'crossover.contact',
  'crossover.version'
]).
config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
});
