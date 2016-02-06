(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('authService', authService);

    authService.$inject = ['$firebaseAuth', 'firebaseDataService'];

    function authService($firebaseAuth, firebaseDataService) {

      var firebaseAuthObj = $firebaseAuth(firebaseDataService.root);

      var service = {
        firebaseAuthObj: firebaseAuthObj,
        register: register,
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn
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
        firebaseAuthObj.$unauth();
      }

      function isLoggedIn() {
        return firebaseAuthObj.$getAuth();
      }
    }
})();