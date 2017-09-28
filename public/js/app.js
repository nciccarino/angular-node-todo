var app = angular.module('todolist', [])

app.config(function($routeProvider) {
  console.log("route provider hit")
};

  $routeProvider
    .when('/', {
      controller:'listController as todoList',
      templateUrl:'todo.html'
    })
    .when('/edit/:projectId', {
      controller:'editTaskController as editInfo',
      templateUrl:'form.html'
    })
    .when('/new', {
      controller:'newTaskController as editInfo',
      templateUrl:'form.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})

app.controller('listController', function($scope, $http) {
  $scope.data = []; 
  var request = $http.get("/data");
  request.success(function(data){
    $scope.data = data; 
  });
  request.error(function(data) {
    console.log("Error: " + data); 
  }); 
}); //listController

app.controller('newTaskController', function($location, $http) {
  var editInfo = this;
  editInfo.save = function() {
    $http.post("/newtask/").then(function(data) {
      $location.path('/');
    });
  };
}); //newTaskController

app.controller('editTaskController', function($location, $http, $routeParams) {
  var editInfo = this;
  var taskId = $routeParams.id;

  editInfo.destroy = function() {
    $http.delete("/delete/" + taskId).then(function(data) {
      $location.path('/');
    });
  };

  editInfo.save = function() {
    $http.put("/save/" + taskId).then(function(data) {
      $location.path('/');
    });
  };
}); //editTaskController