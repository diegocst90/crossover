'use strict';

angular.module('crossover.home', ['ui.router'])
    .controller('HomeCtrl', ['$scope', '$rootScope', '$stateParams','ItemsCollection','ItemObject', function($scope, $rootScope, $stateParams, ItemsCollection, ItemObject) {
        if ($stateParams.no_responsive) {
            $rootScope.chartsResponsive = false;
        }

        /* Initialize View */
        $scope.initializeView = function() {
            $scope.items_collection = ItemsCollection.items;
            $scope.viewby = 10;
            $scope.totalItems = $scope.items_collection.length;
            $scope.currentPage = 1;
            $scope.itemsPerPage = $scope.viewby;
            $scope.maxSize = 10; //Number of pager buttons to show
        };

        ItemsCollection.loadDemoData().then(function successCallback(response) {
            var item;
            for (var i=0; i < response.data.length; i++) {
                item = new ItemObject(response.data[i]);
                ItemsCollection.addItem(item);
            }

            $scope.initializeView();
        }, function errorCallback(response) {
            alert('There was an error trying to get the items. Please try again');
            console.log('There was an error trying to load the items');
        });

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