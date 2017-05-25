

var app = angular.module("receipe", []);


app.controller("rctrl", function($scope, $http){


$http.get('json/receipe.php')
//$http.get('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3 ')
.then(function(response) {
      $scope.mydata = response.data;
	   });
});	



	
	
	
	
	
	
	
	
	
	
	
	
	
