'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Crossover app', function() {


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#/home?no_responsive=1');
    });


    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('[ui-view] h2')).first().getText()).
        toMatch(/PANEL CONTROL/);
    });

  });
});
