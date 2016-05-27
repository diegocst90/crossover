/**
 * Created by diego on 5/27/16.
 */
'use strict';

describe('crossover.directives measureBar', function() {
    var $compile,
        $rootScope,
        $scope;

    // Load the myApp module, which contains the directive
    beforeEach(module('crossover.items'));

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
    it('should calculate percent value properly', function() {
        var $injector = angular.injector(['crossover.items']);
        var ItemObject = $injector.get('ItemObject');

        $scope.item = new ItemObject({
            id: 'ID303',
            type: 'firewall',
            code: 'DOER0-323',
            owner: 'diegocst90',
            result_status: 2,
            measures: {
                metrics: {
                    progress: 0.73,
                    failed: false
                }
            }
        });
        var element = $compile("<measure-bar measure-data=\"item.data.measures.metrics\"></measure-bar>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        //Check the main percent
        var queryResult = element[0].querySelectorAll('uib-progressbar');
        var progressBarDOM = angular.element(queryResult[0]);

        expect(progressBarDOM.attr('uib-tooltip')).toMatch(/73/);
    });

    //Test if section is properly set
    it('should show failed percent value when the metric has failed', function() {
        var $injector = angular.injector(['crossover.items']);
        var ItemObject = $injector.get('ItemObject');

        $scope.item = new ItemObject({
            id: 'ID303',
            type: 'firewall',
            code: 'DOER0-323',
            owner: 'diegocst90',
            result_status: 2,
            measures: {
                metrics: {
                    progress: 0.13,
                    failed: true
                }
            }
        });
        var element = $compile("<measure-bar measure-data=\"item.data.measures.metrics\"></measure-bar>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        //Check the main percent
        var queryResult = element[0].querySelectorAll('uib-progressbar');
        var progressBarDOM = angular.element(queryResult[0]);

        expect(progressBarDOM.attr('uib-tooltip')).toMatch(/Failed/);
    });
});