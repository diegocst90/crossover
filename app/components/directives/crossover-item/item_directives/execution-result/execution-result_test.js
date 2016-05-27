/**
 * Created by diego on 5/27/16.
 */
'use strict';

describe('crossover.directives executionResult', function() {
    var $compile,
        $rootScope,
        $scope;

    // Load the myApp module, which contains the directive
    beforeEach(module('crossover.directives'), module('crossover.items'), module('crossover'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
    }));

    //Test if section is properly set
    it('should show \'Change Accepted\' section if it is Firewall and its execution was accepted', function() {
        var $injector = angular.injector(['crossover.items']);
        var ItemObject = $injector.get('ItemObject');

        // Compile a piece of HTML containing the directive
        $scope.item = new ItemObject({
            id: 'ID303',
            type: 'firewall',
            code: 'DOER0-323',
            owner: 'diegocst90',
            result_status: 2
        });
        var element = $compile("<execution-result item=\"item\"></execution-result>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        var queryResult = element[0].querySelectorAll('p.color-warning');
        var pDOM = angular.element(queryResult[0]);
        expect(pDOM.length).toBe(1);
        expect(pDOM.text()).toContain("Change Accepted");
    });

    //Test if section is properly set
    it('should show \'Change Rejected\' section if it is Firewall and its execution was rejected', function() {
        var $injector = angular.injector(['crossover.items']);
        var ItemObject = $injector.get('ItemObject');

        // Compile a piece of HTML containing the directive
        $scope.item = new ItemObject({
            id: 'ID303',
            type: 'firewall',
            code: 'DOER0-323',
            owner: 'diegocst90',
            result_status: 3
        });
        var element = $compile("<execution-result item=\"item\"></execution-result>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        var queryResult = element[0].querySelectorAll('p.color-danger');
        var pDOM = angular.element(queryResult[0]);
        expect(pDOM.length).toBe(1);
        expect(pDOM.text()).toContain("Change Rejected");
    });

    //Test if section is properly set
    it('should show \'Complete\' section if it is build and its execution was completed', function() {
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
        var element = $compile("<execution-result item=\"item\"></execution-result>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        var queryResult = element[0].querySelectorAll('p.color-green');
        var pDOM = angular.element(queryResult[0]);
        expect(pDOM.length).toBe(1);
        expect(pDOM.text()).toContain("Complete");
    });

    //Test if section is properly set
    it('should show \'Failed\' section if it is build and its execution was failed', function() {
        var $injector = angular.injector(['crossover.items']);
        var ItemObject = $injector.get('ItemObject');

        // Compile a piece of HTML containing the directive
        $scope.item = new ItemObject({
            id: 'ID303',
            type: 'build',
            code: 'DOER0-323',
            owner: 'diegocst90',
            result_status: 3
        });
        var element = $compile("<execution-result item=\"item\"></execution-result>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        var queryResult = element[0].querySelectorAll('p.color-danger');
        var pDOM = angular.element(queryResult[0]);
        expect(pDOM.length).toBe(1);
        expect(pDOM.text()).toContain("Failed");
    });

    //Test if section is properly set
    it('should show \'Executing\' section if it is still running', function() {
        var $injector = angular.injector(['crossover.items']);
        var ItemObject = $injector.get('ItemObject');

        // Compile a piece of HTML containing the directive
        $scope.item = new ItemObject({
            id: 'ID303',
            type: 'build',
            code: 'DOER0-323',
            owner: 'diegocst90',
            result_status: 1
        });
        var element = $compile("<execution-result item=\"item\"></execution-result>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        var queryResult = element[0].querySelectorAll('p.color-black');
        var pDOM = angular.element(queryResult[0]);
        expect(pDOM.length).toBe(1);
        expect(pDOM.text()).toContain("Executing");
    });

    //Test if section is properly set
    it('should show \'Waiting for execution\' section if it is still pending', function() {
        var $injector = angular.injector(['crossover.items']);
        var ItemObject = $injector.get('ItemObject');

        // Compile a piece of HTML containing the directive
        $scope.item = new ItemObject({
            id: 'ID303',
            type: 'build',
            code: 'DOER0-323',
            owner: 'diegocst90',
            result_status: 0
        });
        var element = $compile("<execution-result item=\"item\"></execution-result>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        var queryResult = element[0].querySelectorAll('p.color-black');
        var pDOM = angular.element(queryResult[0]);
        expect(pDOM.length).toBe(1);
        expect(pDOM.text()).toContain("Waiting for execution");
    });
});