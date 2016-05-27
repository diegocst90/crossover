'use strict';

angular.module('crossover.home', ['ui.router'])
    .controller('HomeCtrl', ['$scope','ItemsCollection','ItemObject', function($scope, ItemsCollection, ItemObject) {
        ItemsCollection.setItems([]);

        var build1 = new ItemObject({
            id: 'ID303',
            type: 'build',
            code: 'ABC',
            owner: 'xxx'
        });
        var build2 = new ItemObject({
            id: 'ID304',
            type: 'firewall',
            code: 'GUTH-XXS',
            owner: 'Dj Tavo',
            result_status: 1,
            measures: {
                metrics: {
                    progress: 0.27,
                    categories: {
                        test: {percent: 0.65, tendency: '+'},
                        maintainability: {percent: 0.24, tendency: '-'},
                        security: {percent: 0.78, tendency: '+'},
                        workmanship: {percent: 0.56, tendency: '-'}
                    }
                },
                build: {
                    progress: 0.67,
                    failed: false,
                    categories: {
                        debug: true,
                        release: true
                    },
                    last_update: 5304534545
                },
                unit_test: {
                    progress: 0.87,
                    failed: false,
                    categories: {
                        passed: 503,
                        failed: 54
                    }
                },
                functional_test: {
                    progress: 0.47,
                    failed: false,
                    categories: {
                        passed: 103,
                        failed: 224
                    }
                }
            }
        });
        var build3 = new ItemObject({
            id: 'ID305',
            type: 'build',
            code: 'GUTH-EPD',
            owner: 'diegocst90',
            time_started: 5304534545,
            result_status: 2
        });

        var build4 = new ItemObject({
            id: 'ID306',
            type: 'firewall',
            code: 'GUTH-EPD',
            owner: 'picmonic',
            time_started: 5314534545,
            result_status: 2
        });
        var build5 = new ItemObject({
            id: 'ID307',
            type: 'build',
            code: 'UX-7053',
            owner: 'diegocst90',
            time_started: 404934923,
            result_status: 3
        });

        var build6 = new ItemObject({
            id: 'ID308',
            type: 'firewall',
            code: 'PSD-3DE',
            owner: 'picmonic',
            time_started: 404934923,
            result_status: 3
        });

        ItemsCollection.addItems([build1, build2, build3, build4, build5, build6]);

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