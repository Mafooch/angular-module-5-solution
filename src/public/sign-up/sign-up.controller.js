(function() {
"use strict";

angular.module("public")
.controller("SignUpController", SignUpController);

SignUpController.$inject = ["SignUpService"];
function SignUpController(SignUpService) {
  var $ctrl = this;
  $ctrl.user = {};

  $ctrl.submit = function() {
    SignUpService.saveUser($ctrl.user);
  };
}
})();
