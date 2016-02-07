(function() {
  'use strict';

  angular
    .module('app.waitList')
    .directive('wePartyForm', wePartyForm);

    function wePartyForm() {
      return {
        templateUrl: 'app/waitList/directives/partyForm.html',
        restrict: 'E',
        scope: {},
        controller: partyFormController,
        controllerAs: 'vm'
      }
    }

    partyFormController.$inject = ['partyService'];
    
    function partyFormController(partyService) {
      
    }
})();