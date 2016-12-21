(function() {
  'use strict';

  angular
    .module('farmDog')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr, $mdSidenav, $mdDialog) {
    var vm = this;

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }


  }
})();
