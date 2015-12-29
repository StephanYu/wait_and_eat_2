(function() {
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitListController', WaitListController);

    WaitListController.$inject = ['$firebaseArray'];

    function WaitListController($firebaseArray) {
      
      var vm = this;
      var ref = new Firebase('https://waitandeat-syu-v2.firebaseio.com/').child('parties');
      
      function Party() {
        this.name = '';
        this.phone = '';
        this.size = '';
        this.done = false;
        this.notified = false;
      }

      vm.newParty = new Party();
      vm.parties = $firebaseArray(ref);
      vm.addParty = addParty;

      function addParty() {
        vm.parties.$add(vm.newParty);
        vm.newParty = new Party();
      }
    }
})();