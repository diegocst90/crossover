'use strict';

angular.module('crossover.home', ['ui.router'])
    .controller('HomeCtrl', ['$scope','ItemsCollection','ItemObject', function($scope, ItemsCollection, ItemObject) {
        ItemsCollection.addDemoData();

        $scope.items_collection = ItemsCollection.items;
        $scope.viewby = 10;
        $scope.totalItems = $scope.items_collection.length;
        $scope.currentPage = 1;
        $scope.itemsPerPage = $scope.viewby;
        $scope.maxSize = 10; //Number of pager buttons to show

        /*
         * Collapse all details
         */
        $scope.openItemDetails = function(item) {
            item.expanded = !item.expanded;

            for(var i=0 ; i < $scope.items_collection.length; i++) {
                if (typeof $scope.items_collection[i].expanded != 'undefined' && item.data.id != $scope.items_collection[i].data.id) {
                    $scope.items_collection[i].expanded = false;
                }
            }
        };
    }]);