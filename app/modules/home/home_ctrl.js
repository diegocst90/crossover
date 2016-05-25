'use strict';

angular.module('crossover.home', ['ui.router'])
    .controller('HomeCtrl', ['$scope','ItemsCollection','ItemObject', function($scope, ItemsCollection, ItemObject) {
        ItemsCollection.setItems([]);

        var build1 = new ItemObject({
            code: 'ABC',
            owner: 'xxx'
        });

        ItemsCollection.addItem(build1);

        $scope.items_collection = ItemsCollection.getItems();
    }]);