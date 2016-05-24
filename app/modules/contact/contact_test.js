'use strict';

describe('crossover.contact module', function() {

  beforeEach(module('crossover.contact'));

  describe('Contact controller', function(){

    it('should load Contact controller', inject(function($controller) {
      //spec body
      var contactCtrl = $controller('ContactCtrl');
      expect(contactCtrl).toBeDefined();
    }));

  });
});