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
    it('should show an accurate percent of passed tests', function() {
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
                unit_test: {
                    progress: 0.45,
                    failed: false,
                    categories: {
                      passed: 650,
                      failed: 43
                    }
                }
            }
        });
        var element = $compile("<test-measurement item=\"item\" title=\"Unit Test\" measurement-index=\"unit_test\"></test-measurement>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        //Check the main percent
        var queryResult = element[0].querySelectorAll('.row .aligned-to-graphic span');
        var percentDOM = angular.element(queryResult[0]);
        expect(percentDOM.text()).toContain("94%");

        //Check the code covered section
        var queryResult = element[0].querySelectorAll('.flow-bottom .coverage-bar div.filled');
        var codeCoveredDOM = angular.element(queryResult[0]);
        expect(codeCoveredDOM.attr('style')).toContain("width: 45%");
    });

    //Test default case for empty results
    it('should show 100% percent of failed tests and 0% code covered when no data is provided', function() {
        var $injector = angular.injector(['crossover.items']);
        var ItemObject = $injector.get('ItemObject');

        // Compile a piece of HTML containing the directive
        $scope.item = new ItemObject({
            id: 'ID303',
            type: 'build',
            code: 'DOER0-323',
            owner: 'diegocst90',
            result_status: 2
        });
        var element = $compile("<test-measurement item=\"item\" title=\"Functional Test\" measurement-index=\"functional_test\"></test-measurement>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        //Check the main percent
        var queryResult = element[0].querySelectorAll('.row .aligned-to-graphic span');
        var percentDOM = angular.element(queryResult[0]);
        expect(percentDOM.text()).toContain("0%");

        //Check the code covered section
        var queryResult = element[0].querySelectorAll('.flow-bottom .coverage-bar div.filled');
        var codeCoveredDOM = angular.element(queryResult[0]);
        expect(codeCoveredDOM.attr('style')).toContain("width: 0%");
    });
});