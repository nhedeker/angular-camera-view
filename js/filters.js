(function() {
  'use strict';

  angular.module('cameraApp')
    .filter('rating', () => {
      return function(input) {
        let stars = '';
        for (let i = 1; i <= input; i++) {
          stars += '*';
        }
        return stars;
      };
    });
})();
