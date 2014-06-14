'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('MyCtrl1', ['$scope', function($scope) {

  	}])
  	.controller('MyCtrl2', ['$scope', function($scope) {

  	}])
  	.controller("ListCtrl",['$scope','Restangular',function($scope,r){
  		// r.all('?rows=5&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true').getList()
		r.all('students').getList()
		.then(function(data) {
			$scope.people = data;
		});
	}]);
