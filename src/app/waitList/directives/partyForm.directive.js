(function() {
  'use strict';

  angular
    .module('app.waitList')
    .directive('wePartyForm', wePartyForm);

    function wePartyForm() {
      return {
        templateUrl: 'app/waitList/directives/partyForm.html',
        restrict: 'E',
        controller: partyFormController,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
          parties: '='
        }
      }
    }

    partyFormController.$inject = ['partyService'];

    function partyFormController(partyService) {
      var vm = this;

      vm.newParty = new partyService.Party();
      vm.addParty = addParty;

      function addParty() {
        vm.parties.$add(vm.newParty);
        vm.newParty = new partyService.Party();
      }

    }
})();