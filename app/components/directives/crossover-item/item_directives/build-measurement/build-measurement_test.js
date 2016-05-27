/**
 * Created by diego on 5/27/16.
 */
'use strict';

describe('crossover.directives buildMeasurement', function() {
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

    //Test if filled section is properly set
    it('should show debug section only if it\'s available', function() {
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
                build: {
                    categories: {
                        debug: true,
                        release: false
                    }
                }
            }
        });
        var element = $compile("<build-measurement item-build=\"item.data.measures.build\"></build-measurement>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        var debugDOM = element[0].querySelectorAll('.debug-section');
        expect(angular.element(debugDOM[0]).length).toBe(1);

        var releaseDOM = element[0].querySelectorAll('.release-section');
        expect(angular.element(releaseDOM[0]).length).toBe(0);
    });

    //Test if unfilled section is properly set
    it('should show date in readable format', function() {
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
                build: {
                    categories: {
                        debug: true,
                        release: false
                    },
                    last_update: 1464367035996
                }
            }
        });
        var element = $compile("<build-measurement item-build=\"item.data.measures.build\"></build-measurement>")($scope);

        // Start digest cycle
        $rootScope.$digest();

        var dateDOM = element[0].querySelectorAll('.flow-bottom');

        expect(angular.element(dateDOM[0]).text()).toContain("05/27/2016");
    });
});