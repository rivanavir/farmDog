(function() {
  'use strict';

  angular
    .module('farmDog')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {
    $rootScope.$on('stateChangeError', function () {
      throw arguments[5];
    });

    $log.debug('runBlock end');
  }

})();
