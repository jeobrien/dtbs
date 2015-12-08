angular.module('DTBS.main')

.service('d3UpdateTable', ['$rootScope', function($rootScope) {
  var data;

  var emit = function(data) { $rootScope.$broadcast('d3:update-table', data); }
  var api = {
    get: function() {
      return data;
    },
    set: function(data) {
      data = data;
      emit(data);
      return data;
    },
    push: function(datum) {
      data = datum;
      emit(data);
      return data;
    }
  }
  return api;
}])
.service('d3DeleteTable', ['$rootScope', function($rootScope) {
  var data;

  var emit = function(data) { $rootScope.$broadcast('d3:delete-table', data); }
  var api = {
    get: function() {
      return data;
    },
    set: function(data) {
      data = data;
      emit(data);
      return data;
    },
    push: function(datum) {
      data = datum;
      emit(data);
      return data;
    }
  }
  return api;
}]);