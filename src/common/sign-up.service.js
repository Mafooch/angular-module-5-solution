(function() {
"use strict";

angular.module("common")
.service("SignUpService", SignUpService);

SignUpService.$inject = ["$http", "ApiPath"];
function SignUpService($http, ApiPath) {
  var service = this;

  service.saveUser = function(validUser) {
    service.user = validUser;
  };

  service.getUser = function() {
    return service.user;
  };
}
})();
