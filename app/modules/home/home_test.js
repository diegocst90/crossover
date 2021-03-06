'use strict';

describe('crossover.home module', function() {

    beforeEach(module('crossover.home'));

    describe('Home controller', function(){

        beforeEach(function() {
            module('crossover.items');
        });

        it('should load Home controller', inject(function($rootScope, $controller) {
            //spec body
            var scope = $rootScope.$new();
            var homeCtrl = $controller('HomeCtrl', {$scope: scope});
            expect(homeCtrl).toBeDefined();
        }));

        it('should close other details if user will open another item', inject(function($rootScope, $controller, ItemObject) {
            //spec body
            var scope = $rootScope.$new();
            var homeCtrl = $controller('HomeCtrl', {$scope: scope});

            var item1 = new ItemObject({id: 'DEMO1'});
            var item2 = new ItemObject({id: 'DEMO2'});
            scope.items_collection = [item1, item2];

            scope.openItemDetails(scope.items_collection[1]);

            //Check if it's expanded
            expect(scope.items_collection[1].expanded).toBe(true);

            //Check if it's expanded and the previous collapsed
            scope.openItemDetails(scope.items_collection[0]);
            expect(scope.items_collection[0].expanded).toBe(true);
            expect(scope.items_collection[1].expanded).toBe(false);
        }));

    });
});