'use strict';

angular.module('crossover.home')

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.
            state('home', {
                //no_responsive makes the charts in Unit Tests and Functional tests avoid waiting for user to open them
                //which causes Protractor to wait forever until the app synchronizes
                url: '/home?no_responsive',
                templateUrl: 'modules/home/home.html',
                controller: 'HomeCtrl'
            })
    }])