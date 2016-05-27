/**
 * Created by diego on 5/27/16.
 */
'use strict';

describe('crossover.directives coveragePercent', function() {
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
    it('should calculate the filled properly', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<coverage-percent percent=\"0.73\"></coverage-percent>")($rootScope);

        // Start digest cycle
        $rootScope.$digest();

        var filledDOM = element[0].querySelectorAll('.coverage-bar .filled');

        expect(angular.element(filledDOM[0])).toBeDefined();
        expect(angular.element(filledDOM[0]).attr('style')).toContain("width: 73%");
    });

    //Test if unfilled section is properly set
    it('should calculate the unfilled properly', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<coverage-percent percent=\"0.33\"></coverage-percent>")($rootScope);

        // Start digest cycle
        $rootScope.$digest();

        var unfilledDOM = element[0].querySelectorAll('.coverage-bar .unfilled');

        expect(angular.element(unfilledDOM[0])).toBeDefined();
        expect(angular.element(unfilledDOM[0]).attr('style')).toContain("width: 67%");
    });
});