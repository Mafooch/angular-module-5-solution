(function() {
"use strict";

angular.module("common")
.service("RegisteredUserService", RegisteredUserService);

RegisteredUserService.$inject = ["$http", "ApiPath", "MenuService"];
function RegisteredUserService($http, ApiPath, MenuService) {
  var service = this;

  service.saveUser = function(validUser) {
    service.user = validUser;
    MenuService.getMenuItem(service.user.short_name).then(function(response) {
      service.user.menuItemTitle = response.name;
      service.user.menuItemDescription = response.description;
    });
  };

  service.getUser = function() {
    return service.user;
  };
}
})();
