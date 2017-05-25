  var app = angular.module("myapp", ["ngRoute"]);
  
  
app.config(function($routeProvider) {
    $routeProvider
    
    .when("/italian", {
        templateUrl : "nitalian.html",
        controller : "rctrl"
    })
    .when("/chinese", {
        templateUrl : "nchinese.html",
        //controller : "parisCtrl"
		//controller : "rctrl"
    });
	
});

app.controller("rctrl", function($scope, $http){


$http.get('json/italian.php')
//$http.get('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3 ')
.then(function(response) {
      $scope.mydata = response.data;
	   });
});	

app.controller("lctrl", function($scope, $http){


$http.get('json/chinese.php')
//$http.get('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3 ')
.then(function(response) {
      $scope.mydata1 = response.data;
	   });
});	

