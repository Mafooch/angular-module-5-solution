(function() {
"use strict";

angular.module("public")
.controller("SignUpController", SignUpController);

SignUpController.$inject = ["RegisteredUserService", "MenuService"];
function SignUpController(RegisteredUserService, MenuService) {
  var $ctrl = this;
  $ctrl.user = {};

  $ctrl.submit = function() {
    MenuService.getMenuItem($ctrl.user.short_name).then(function successCallback(response) {
      $ctrl.user.menuItemTitle = response.name;
      $ctrl.user.menuItemDescription = response.description;
      RegisteredUserService.saveUser($ctrl.user);
    }, function errorCallback(response) {
      $ctrl.user.menuItemTitle = false;
      $ctrl.user.menuItemDescription = false;
    });
  };
}
})();
