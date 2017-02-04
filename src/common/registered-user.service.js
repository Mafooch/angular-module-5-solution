(function() {
"use strict";

angular.module("common")
.service("RegisteredUserService", RegisteredUserService);

RegisteredUserService.$inject = ["$http", "ApiPath", "MenuService"];
function RegisteredUserService($http, ApiPath, MenuService) {
  var service = this;

  service.saveUser = function(validUser) {
    service.user = validUser;
  };

  service.getUser = function() {
    return service.user;
  };
}
})();
