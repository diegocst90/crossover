/**
 * Created by diego on 5/27/16.
 */
'use strict';

describe('crossover.directives colorPercent', function() {
    var $compile,
        $rootScope;

    // Load the myApp module, which contains the directive
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
    }));

    //Test danger case
    it('should be "danger" if it is less than 0.5', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<color-percent percent=\"0.32\"></color-percent>")($rootScope);

        // Start digest cycle
        $rootScope.$digest();

        expect(element.find('span').attr('class')).toContain("color-danger");
    });

    //Test warning case
    it('should be "warning" if it is bigger than 0.5 and less than 0.75', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<color-percent percent=\"0.63\"></color-percent>")($rootScope);

        // Start digest cycle
        $rootScope.$digest();

        expect(element.find('span').attr('class')).toContain("color-warning");
    });

    //Test ok case
    it('should be "ok" if it is bigger than 0.75', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<color-percent percent=\"0.96\"></color-percent>")($rootScope);

        // Start digest cycle
        $rootScope.$digest();

        expect(element.find('span').attr('class')).toContain("color-ok");
    });

    //Test if the "%" is properly rounded up
    it('should round the percent properly', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<color-percent percent=\"0.56\"></color-percent>")($rootScope);

        // Start digest cycle
        $rootScope.$digest();

        expect(element.find('span').text()).toMatch("56%");
    });
});