(function() {
"use strict";

angular.module("public")
.controller("SignUpController", SignUpController);

SignUpController.$inject = ["RegisteredUserService"];
function SignUpController(RegisteredUserService) {
  var $ctrl = this;
  $ctrl.user = {};

  $ctrl.submit = function() {
    RegisteredUserService.saveUser($ctrl.user);
  };
}
})();
