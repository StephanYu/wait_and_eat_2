(function() {
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitListController', WaitListController);

    WaitListController.$inject = ['$firebaseArray', 'FIREBASE_URL'];

    function WaitListController($firebaseArray, FIREBASE_URL) {
      
      var vm = this;
      var partiesRef = new Firebase(FIREBASE_URL).child('parties');
      var textMessagesRef = new Firebase(FIREBASE_URL).child('textmessages');
      
      function Party() {
        this.name = '';
        this.phone = '';
        this.size = '';
        this.done = false;
        this.notified = false;
      }

      vm.newParty = new Party();
      vm.parties = $firebaseArray(partiesRef);
      vm.addParty = addParty;
      vm.removeParty = removeParty;
      vm.sendTextMessage = sendTextMessage;
      vm.toggleDone = toggleDone;

      function addParty() {
        vm.parties.$add(vm.newParty);
        vm.newParty = new Party();
      }

      function removeParty(party) {
        vm.parties.$remove(party);
      }

      function sendTextMessage(party) {
        var newTextMessage = {
          phoneNumber: party.phone,
          size: party.size,
          name: party.name
        };
        textMessagesRef.push(newTextMessage);
        party.notified = true;
        vm.parties.$save(party);
      }

      function toggleDone(party) {
        vm.parties.$save(party);
      }
    }
})();