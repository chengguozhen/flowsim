'use strict';

describe('Directive: fgSelectionTables', function () {

  // load the directive's module
  beforeEach(module('flowsimApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fg-selection-tables></fg-selection-tables>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fgSelectionTables directive');
  }));
});
