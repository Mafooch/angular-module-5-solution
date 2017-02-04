(function() {
"use strict";

angular.module("common")
.controller("MyInfoController", MyInfoController);

MyInfoController.$inject = ["RegisteredUserService"];
function MyInfoController(RegisteredUserService) {
  var $ctrl = this;
  $ctrl.user = RegisteredUserService.getUser();
}
})();
