(function() {
  'use strict';

  angular
    .module('farmDog')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr, $mdSidenav) {
    var vm = this;

    $scope.toggleLeft = buildToggler('left');

    console.log($mdSidenav);

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }


  }
})();
