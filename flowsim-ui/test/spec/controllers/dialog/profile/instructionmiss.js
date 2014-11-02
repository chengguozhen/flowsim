'use strict';

describe('Controller: DialogProfileInstructionmissCtrl', function () {

  // load the controller's module
  beforeEach(module('flowsimUiApp'));

  var DialogProfileInstructionmissCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DialogProfileInstructionmissCtrl = $controller('DialogProfileInstructionmissCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
