(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

    AuthController.$inject = ['$firebaseAuth'];
    function AuthController($firebaseAuth) {
      var vm = this;
      var fbRef = new Firebase('https://waitandeat-syu-v2.firebaseio.com/');
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
        console.log("Logged out!");
      }
      
    }
})();