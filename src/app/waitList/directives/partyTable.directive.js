(function() {
  'use strict';

  angular
    .module('app.waitList')
    .directive('wePartyTable', wePartyTable);

    function wePartyTable() {
      return {
        templateUrl: 'app/waitList/directives/partyTable.html',
        restrict: 'E'
      }
    }
})();