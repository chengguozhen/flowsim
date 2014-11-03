'use strict';

/**
 * @ngdoc service
 * @name flowsimUiApp.tables
 * @description
 * # tables
 * Service in the flowsimUiApp.
 */
angular.module('flowsimUiApp')
  .factory('tables', function() {

function Capabilities(tables) {
  if(tables && tables instanceof Tables) {
  } else {
  }
}

function Configuration(tables) {
  if(tables) {
    if(tables instanceof Capabilities) {
    } else if(tables instanceof Configuration) {
    }
  } else {
  }
}

return {
  Capabilities: Capabilities,
  Configuration: Configuration
};

});
