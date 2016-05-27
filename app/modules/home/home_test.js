'use strict';

describe('crossover.home module', function() {

    beforeEach(module('crossover.home'));

    describe('Home controller', function(){

        beforeEach(module('crossover.items'));

        it('should load Home controller', inject(function($rootScope, $controller) {
            //spec body
            var scope = $rootScope.$new();
            var homeCtrl = $controller('HomeCtrl', {$scope: scope});
            expect(homeCtrl).toBeDefined();
        }));

    });
});