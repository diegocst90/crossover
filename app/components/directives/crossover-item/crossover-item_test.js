/**
 * Created by diego on 5/27/16.
 */
'use strict';

describe('crossover.directives crossoverItem', function() {
    var $compile,
        $rootScope,
        $scope;

    // Load the myApp module, which contains the directive
    beforeEach(module('crossover.directives'), module('crossover.items'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
    }));

    //Test if section is properly set
    it('should show the right icon to Firewalls that executed successfully', function() {
        var $injector = angular.injector(['crossover.items']);
        var ItemObject = $injector.get('ItemObject');

        //TEST green Case
        $scope.item = new ItemObject({
            id: 'ID303',
            type: 'firewall',
            code: 'DOER0-323',
            owner: 'diegocst90',
            result_status: 2
        });
        var element = $compile("<crossover-item item=\"item\"></crossover-item>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        //Check the main percent
        var queryResult = element[0].querySelectorAll('.item-field .item-icon');
        var iconDOM = angular.element(queryResult[0]);
        expect(iconDOM.attr('class')).toContain("sprite-wall-green-25px");
    });

    it('should show the right icon to Firewalls that were rejected', function() {
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
        var element = $compile("<crossover-item item=\"item\"></crossover-item>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        //Check the main percent
        var queryResult = element[0].querySelectorAll('.item-field .item-icon');
        var iconDOM = angular.element(queryResult[0]);
        expect(iconDOM.attr('class')).toContain("sprite-wall-red-25px");
    });

    it('should show the right icon to Firewalls that are running', function() {
        var $injector = angular.injector(['crossover.items']);
        var ItemObject = $injector.get('ItemObject');

        // Compile a piece of HTML containing the directive
        $scope.item = new ItemObject({
            id: 'ID303',
            type: 'firewall',
            code: 'DOER0-323',
            owner: 'diegocst90',
            result_status: 1
        });
        var element = $compile("<crossover-item item=\"item\"></crossover-item>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        //Check the main percent
        var queryResult = element[0].querySelectorAll('.item-field .item-icon');
        var iconDOM = angular.element(queryResult[0]);
        expect(iconDOM.attr('class')).toContain("sprite-wall-blue-25px");
    });

    it('should show the right icon to Firewalls that are pending', function() {
        var $injector = angular.injector(['crossover.items']);
        var ItemObject = $injector.get('ItemObject');

        // Compile a piece of HTML containing the directive
        $scope.item = new ItemObject({
            id: 'ID303',
            type: 'firewall',
            code: 'DOER0-323',
            owner: 'diegocst90',
            result_status: 0
        });
        var element = $compile("<crossover-item item=\"item\"></crossover-item>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        //Check the main percent
        var queryResult = element[0].querySelectorAll('.item-field .item-icon');
        var iconDOM = angular.element(queryResult[0]);
        expect(iconDOM.attr('class')).toContain("sprite-wall-gray-25px");
    });

    //Test if section is properly set
    it('should show the right icon to Builds that were successfully executed', function() {
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
        var element = $compile("<crossover-item item=\"item\"></crossover-item>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        //Check the main percent
        var queryResult = element[0].querySelectorAll('.item-field .item-icon');
        var iconDOM = angular.element(queryResult[0]);
        expect(iconDOM.attr('class')).toContain("sprite-computer-green-25px");
    });

    it('should show the right icon to Build that failed', function() {
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
        var element = $compile("<crossover-item item=\"item\"></crossover-item>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        //Check the main percent
        var queryResult = element[0].querySelectorAll('.item-field .item-icon');
        var iconDOM = angular.element(queryResult[0]);
        expect(iconDOM.attr('class')).toContain("sprite-computer-red-25px");
    });

    it('should show the right icon to Build that are running', function() {
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
        var element = $compile("<crossover-item item=\"item\"></crossover-item>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        //Check the main percent
        var queryResult = element[0].querySelectorAll('.item-field .item-icon');
        var iconDOM = angular.element(queryResult[0]);
        expect(iconDOM.attr('class')).toContain("sprite-computer-blue-25px");
    });

    it('should show the right icon to Build that are pending', function() {
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
        var element = $compile("<crossover-item item=\"item\"></crossover-item>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        //Check the main percent
        var queryResult = element[0].querySelectorAll('.item-field .item-icon');
        var iconDOM = angular.element(queryResult[0]);
        expect(iconDOM.attr('class')).toContain("sprite-computer-gray-25px");
    });

    it('should close all the measure bar if the item is expanded', function() {
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
        $scope.item.expanded = true;
        var element = $compile("<crossover-item item=\"item\"></crossover-item>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        //Check the main percent
        var queryResult = element[0].querySelectorAll('.item-field measure-bar');
        var measureBarDOM = angular.element(queryResult[0]);
        expect(measureBarDOM.attr('class')).toContain("ng-hide");
    });
});