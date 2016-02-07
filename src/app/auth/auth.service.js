(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('authService', authService);

    authService.$inject = ['$firebaseAuth', 'firebaseDataService', 'partyService'];

    function authService($firebaseAuth, firebaseDataService, partyService) {

      var firebaseAuthObj = $firebaseAuth(firebaseDataService.root);

      var service = {
        firebaseAuthObj: firebaseAuthObj,
        register: register,
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn,
        sendWelcomeEmail: sendWelcomeEmail
      };

      return service; 

      /*------------------------*/

      function register(user) {
        return firebaseAuthObj.$createUser(user);
      }

      function login(user) {
        return firebaseAuthObj.$authWithPassword(user);
      }

      function logout() {
        partyService.reset();
        firebaseAuthObj.$unauth();
      }

      function isLoggedIn() {
        return firebaseAuthObj.$getAuth();
      }

      function sendWelcomeEmail(emailAddress) {
        firebaseDataService.emails.push({
          emailAddress: emailAddress
        });
      }
    }
})();