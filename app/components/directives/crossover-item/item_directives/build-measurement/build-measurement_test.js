/**
 * Created by diego on 5/27/16.
 */
'use strict';

describe('crossover.directives buildMeasurement', function() {
    var $compile,
        $rootScope;

    // Load the myApp module, which contains the directive
    beforeEach(module('crossover.directives'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    //Test if filled section is properly set
    it('should show debug section only if it\'s available', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<build-measurement stop-event item-build=\"\{'categories': \{'debug': true, 'release': false\}\}\"  uib-popover-template=\"'components/directives/crossover-item/popovers/_build-measurement.html'\" popover-trigger=\"outsideClick\"></build-measurement>")($rootScope);

        // Start digest cycle
        $rootScope.$digest();

        var debugDOM = element[0].querySelectorAll('.debug-section');
        expect(angular.element(debugDOM[0]).length).toBe(1);

        var releaseDOM = element[0].querySelectorAll('.release-section');
        expect(angular.element(releaseDOM[0]).length).toBe(0);
    });

    //Test if unfilled section is properly set
    it('should show date in readable format', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<build-measurement stop-event item-build=\"\{'categories': \{'debug': true, 'release': false\}, 'last_update': 1464367035996\}\"  uib-popover-template=\"'components/directives/crossover-item/popovers/_build-measurement.html'\" popover-trigger=\"outsideClick\"></build-measurement>")($rootScope);

        // Start digest cycle
        $rootScope.$digest();

        var dateDOM = element[0].querySelectorAll('.flow-bottom');

        expect(angular.element(dateDOM[0]).text()).toContain("05/27/2016");
    });
});