(function() {
  'use strict';

  angular
    .module('app.waitList')
    .directive('wePartyTable', wePartyTable);

    function wePartyTable() {
      return {
        templateUrl: 'app/waitList/directives/partyTable.html',
        restrict: 'E', 
        controller: partyTableController,
        controllerAs: 'vm',
        bindToController: true, 
        scope: {
          parties: '='
        }
      }
    }

    partyTableController.$inject = ['textMessageService'];

    function partyTableController(textMessageService) {
      var vm = this;

      vm.removeParty = removeParty;
      vm.sendTextMessage = sendTextMessage;
      vm.toggleDone = toggleDone;

      function removeParty(party) {
        vm.parties.$remove(party);
      }

      function sendTextMessage(party) {
        textMessageService.sendTextMessage(party, vm.parties);
      }

      function toggleDone(party) {
        vm.parties.$save(party);
      }
    }
})();