(function() {
  'use strict';

  angular.module('cameraApp')
    .filter('rating', () => {
      return function(num) {
        return '*'.repeat(num);
      };
    });
})();
