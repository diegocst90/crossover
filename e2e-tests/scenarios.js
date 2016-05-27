'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Crossover app', function() {

    describe('home', function() {
        beforeEach(function() {
            browser.get('index.html#/home?no_responsive=1');
        });

        it('should render home when user navigates to /home', function() {
            expect(element.all(by.css('[ui-view] h2')).first().getText()).toMatch(/PANEL CONTROL/);
        });

        it('should contain only 1 page by default', function() {
            //Check if pagination works
            var paginationDOM = element.all(by.css('[ui-view] ul.pagination')).first();
            var firstPageButton = paginationDOM.all(by.css('li')).get(1); //Asumming 0 is 'Prev'

            expect(firstPageButton.getText()).toBe('1');
        });

        it('should expand on click', function() {
            //Get the 2nd row
            var secondItemDOM = element.all(by.css('[ui-view] .container .crossover-item')).get(1);
            secondItemDOM.click();

            //Check if the item is now expanded
            var secondItemDetails = secondItemDOM.all(by.css('.item-details')).first();
            secondItemDetails.getAttribute('class').then(function(className) {
                expect(className).toMatch('in');
            });

            //Now get the 3rd one, click it and get its details
            var thirdItemDOM = element.all(by.css('[ui-view] .container .crossover-item')).get(2);
            thirdItemDOM.click();
            var thirdItemDetails = thirdItemDOM.all(by.css('.item-details')).first();

            //Check if 2nd row is collapsed and 3rd is expanded
            secondItemDetails.getAttribute('class').then(function(className) {
                expect(className).not.toMatch('in');
            });

            thirdItemDetails.getAttribute('class').then(function(className) {
                expect(className).toMatch('in');
            });
        });

        it('should open Popover when click on measure', function() {
            //Get the 2nd row
            var secondItemDOM = element.all(by.css('[ui-view] .container .crossover-item')).get(1);
            secondItemDOM.click();

            var buildMeasureDOM = secondItemDOM.all(by.css('.item-details build-measurement .measure_block')).first();
            buildMeasureDOM.click();

            //Check if popover DOM exists
            var popopOverDOM = secondItemDOM.all(by.css('.item-details build-measurement + .popover')).first();
            expect(popopOverDOM).toBeDefined();

            //Check if it's visible
            popopOverDOM.getAttribute('class').then(function(className) {
                expect(className).toMatch('in');
            });

            //Check if it's the proper title
            var popoverTitleDOM = popopOverDOM.all(by.css('.popover-inner .popover-content h4')).first();
            expect(popoverTitleDOM.getText()).toMatch('Build Information');
        });
    });

});
