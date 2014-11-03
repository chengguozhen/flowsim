'use strict';

/**
 * @ngdoc service
 * @name flowsimUiApp.groups
 * @description
 * # groups
 * Service in the flowsimUiApp.
 */
angular.module('flowsimUiApp')
  .factory('groups', function() {

function Capabilities(groups) {
  if(groups && groups instanceof Groups) {
  } else {
  }
}

function Configuration(groups) {
  if(groups) {
    if(groups instanceof Capabilities) {
    } else if(groups instanceof Configuration) {
    }
  } else {
  }
}

return {
  Capabilities: Capabilities,
  Configuration: Configuration
};

});
