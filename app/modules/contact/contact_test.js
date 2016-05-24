'use strict';

describe('crossover.contact module', function() {

    beforeEach(module('crossover.contact'));

    describe('Contact controller', function(){

        it('should load Contact controller', inject(function($rootScope, $controller) {
            //spec body
            var scope = $rootScope.$new();
            var contactCtrl = $controller('ContactCtrl', {$scope: scope});
            expect(contactCtrl).toBeDefined();
        }));

    });
});