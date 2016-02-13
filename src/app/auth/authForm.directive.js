(function() {
  'use strict';

  angular
    .module('app.auth')
    .directive('weAuthForm', weAuthForm);

    function weAuthForm() {
      return {
        templateUrl: 'app/auth/authForm.html',
        restrict: 'E',
        controller: AuthFormController,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
          error: '=',
          formTitle: '@',
          submitAction: '&'
        }
      }
    }

    function AuthFormController() {
      var vm = this;

      vm.user = {
        email: '',
        password: ''
      };
    }
})();