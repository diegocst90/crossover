'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/view1');
    });
