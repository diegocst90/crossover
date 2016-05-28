'use strict';

angular.module('crossover.home', ['ui.router'])
    .controller('HomeCtrl', ['$scope', '$rootScope', '$stateParams','ItemsCollection','ItemObject', function($scope, $rootScope, $stateParams, ItemsCollection, ItemObject) {
        //If the no_responsive parameter is provided (Protractor tests) we need to tell Charts.js
        //to avoid rendering responsive charts
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
            //Add every item to the Service list
            var item;
            for (var i=0; i < response.data.length; i++) {
                item = new ItemObject(response.data[i]);
                ItemsCollection.addItem(item);
            }

            $scope.initializeView(); //initialize the page
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
                //only if it's another different element than item
                if (typeof $scope.items_collection[i].expanded != 'undefined' && item.data.id != $scope.items_collection[i].data.id) {
                    $scope.items_collection[i].expanded = false;
                }
            }
        };
    }]);