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

        it('should close other details if user will open another item', inject(function($rootScope, $controller) {
            var $injector = angular.injector(['crossover.items']);
            var ItemsCollection = $injector.get('ItemsCollection');

            ItemsCollection.addDemoData();

            //spec body
            var scope = $rootScope.$new();
            scope.items_collection = ItemsCollection.items;

            var homeCtrl = $controller('HomeCtrl', {$scope: scope});
            scope.openItemDetails(scope.items_collection[2]);

            //Check if it's expanded
            expect(scope.items_collection[2].expanded).toBe(true);

            //Check if it's expanded and the previous collapsed
            scope.openItemDetails(scope.items_collection[0]);
            expect(scope.items_collection[0].expanded).toBe(true);
            expect(scope.items_collection[2].expanded).toBe(false);
        }));

    });
});