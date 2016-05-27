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
                build: {progress: 0.64},
                metrics: {progress: 0.22}
            }
        });
        var build3 = new ItemObject({
            id: 'ID305',
            type: 'build',
            code: 'GUTH-EPD',
            owner: 'diegocst90',
            time_started: 5304534545,
            result_status: 2,
            measures: {
                build: {progress: 1},
                unit_test: {progress: 1},
                metrics: {progress: 1},
                functional_test: {progress: 0.95}
            }
        });

        var build4 = new ItemObject({
            id: 'ID306',
            type: 'firewall',
            code: 'GUTH-EPD',
            owner: 'picmonic',
            time_started: 5314534545,
            result_status: 2,
            measures: {
                build: {progress: 1},
                unit_test: {progress: 1},
                metrics: {progress: 1},
                functional_test: {progress: 1}
            }
        });
        var build5 = new ItemObject({
            id: 'ID307',
            type: 'build',
            code: 'UX-7053',
            owner: 'diegocst90',
            time_started: 404934923,
            result_status: 3,
            measures: {
                build: {progress: 0.56},
                unit_test: {progress: 0.13},
                metrics: {progress: 0.35},
                functional_test: {progress: 0.45}
            }
        });

        var build6 = new ItemObject({
            id: 'ID308',
            type: 'firewall',
            code: 'PSD-3DE',
            owner: 'picmonic',
            time_started: 404934923,
            result_status: 3,
            measures: {
                build: {progress: 0.26},
                unit_test: {progress: 0.83},
                metrics: {progress: 0.85},
                functional_test: {progress: 0.15}
            }
        });

        ItemsCollection.addItems([build1, build2, build3, build4, build5, build6]);
        $scope.items_collection = ItemsCollection.items;

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