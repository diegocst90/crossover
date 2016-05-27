/**
 * Created by diego on 5/27/16.
 */
'use strict';

describe('crossover.directives metricsMeasurement', function() {
    var $compile,
        $rootScope,
        $scope;

    // Load the myApp module, which contains the directive
    beforeEach(module('crossover.items'), module('crossover'));

    beforeEach(function() {
        module('crossover.directives');
        module('crossover-html2');
    });

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
    }));

    //Test if section is properly set
    it('should show a \'Up Green Arrow\' if its Test category tends to rise', function() {
        var $injector = angular.injector(['crossover.items']);
        var ItemObject = $injector.get('ItemObject');

        // Compile a piece of HTML containing the directive
        $scope.item = new ItemObject({
            id: 'ID303',
            type: 'firewall',
            code: 'DOER0-323',
            owner: 'diegocst90',
            result_status: 2,
            measures: {
                metrics: {
                    progress: 0.45,
                    failed: false,
                    categories: {
                        test: {percent: 0.54, tendency: '+'}
                    }
                }
            }
        });
        var element = $compile("<metrics-measurement item-metrics=\"item.data.measures.metrics\"></metrics-measurement>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        var queryResult = element[0].querySelectorAll('.test-block');
        var pDOM = angular.element(queryResult[0]);
        expect(pDOM.attr('class')).toContain("sprite-arrow-up-green");
    });

    //Test if section is properly set
    it('should show a \'Right Yellow Arrow\' if its Security category tends to rise', function() {
        var $injector = angular.injector(['crossover.items']);
        var ItemObject = $injector.get('ItemObject');

        // Compile a piece of HTML containing the directive
        $scope.item = new ItemObject({
            id: 'ID303',
            type: 'build',
            code: 'DOER0-323',
            owner: 'diegocst90',
            result_status: 2,
            measures: {
                metrics: {
                    progress: 0.45,
                    failed: false,
                    categories: {
                        security: {percent: 0.74, tendency: '+'}
                    }
                }
            }
        });
        var element = $compile("<metrics-measurement item-metrics=\"item.data.measures.metrics\"></metrics-measurement>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        var queryResult = element[0].querySelectorAll('.security-block');
        var pDOM = angular.element(queryResult[0]);
        expect(pDOM.attr('class')).toContain("sprite-arrow-right-yellow");
    });

    //Test if section is properly set
    it('should show \'Down Red Arrow\' section if its Maintainability category tends to drop', function() {
        var $injector = angular.injector(['crossover.items']);
        var ItemObject = $injector.get('ItemObject');

        // Compile a piece of HTML containing the directive
        $scope.item = new ItemObject({
            id: 'ID303',
            type: 'build',
            code: 'DOER0-323',
            owner: 'diegocst90',
            result_status: 2,
            measures: {
                metrics: {
                    progress: 0.45,
                    failed: false,
                    categories: {
                        security: {percent: 0.64, tendency: '-'}
                    }
                }
            }
        });
        var element = $compile("<metrics-measurement item-metrics=\"item.data.measures.metrics\"></metrics-measurement>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        var queryResult = element[0].querySelectorAll('.maintainability-block');
        var pDOM = angular.element(queryResult[0]);
        expect(pDOM.attr('class')).toContain("sprite-arrow-down-red");
    });

    //Test if section is properly set
    it('should show \'Left Red Arrow\' section if its Workmanship category tends to drop', function() {
        var $injector = angular.injector(['crossover.items']);
        var ItemObject = $injector.get('ItemObject');

        // Compile a piece of HTML containing the directive
        $scope.item = new ItemObject({
            id: 'ID303',
            type: 'build',
            code: 'DOER0-323',
            owner: 'diegocst90',
            result_status: 2,
            measures: {
                metrics: {
                    progress: 0.45,
                    failed: false,
                    categories: {
                        workmanship: {percent: 0.34, tendency: '-'}
                    }
                }
            }
        });
        var element = $compile("<metrics-measurement item-metrics=\"item.data.measures.metrics\"></metrics-measurement>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        var queryResult = element[0].querySelectorAll('.workmanship-block');
        var pDOM = angular.element(queryResult[0]);
        expect(pDOM.attr('class')).toContain("sprite-arrow-left-red");
    });
});