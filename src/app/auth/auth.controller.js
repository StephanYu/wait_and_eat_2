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

      function register(user) {
        return fbAuthObj.$createUser(user);
      }
      
    }
})();