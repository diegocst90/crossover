'use strict';

describe('crossover.home module', function() {

  beforeEach(module('crossover.home'));

  describe('Home controller', function(){

    it('should load Home controller', inject(function($controller) {
      //spec body
      var homeCtrl = $controller('HomeCtrl');
      expect(homeCtrl).toBeDefined();
    }));

  });
});