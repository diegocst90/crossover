'use strict';

angular.module('crossover.contact')

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.
            state('contact', {
                url: '/contact',
                templateUrl: 'modules/contact/contact.html',
                controller: 'ContactCtrl'
            })
    }])