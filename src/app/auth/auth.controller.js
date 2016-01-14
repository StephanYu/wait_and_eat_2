(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

    AuthController.$inject = ['$firebaseAuth', '$location', 'FIREBASE_URL'];
    function AuthController($firebaseAuth, $location, FIREBASE_URL) {
      var vm = this;
      var fbRef = new Firebase(FIREBASE_URL);
      var fbAuthObj = $firebaseAuth(fbRef);
      
      vm.user = {
        email: '',
        password: ''
      };
      vm.register = register;
      vm.login = login;
      vm.logout = logout;

      function register(user) {
        return fbAuthObj.$createUser(user)
          .then(function() {
            vm.login(user);
          })
          .catch(function(error) {
            console.log(error);
          });
      }

      function login(user) {
        return fbAuthObj.$authWithPassword(user)
          .then(function(loggedInUser) {
            console.log(loggedInUser);
          })
          .catch(function(error) {
            console.log(error);
          });
      }

      function logout() {
        fbAuthObj.$unauth();
        $location.path('/');
      }
      
    }
})();