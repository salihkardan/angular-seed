'use strict';

angular.module('myApp', ['ngRoute', 'restangular', 'myApp.controllers', 'myApp.services', 'myApp.directives', 'myApp.filters']).
  
	config(function($routeProvider, RestangularProvider) {

		$routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'ListCtrl'});
	  	$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
	  	$routeProvider.otherwise({redirectTo: '/view1'});
		//RestangularProvider.setBaseUrl('http://10.0.3.246:8080/');
		RestangularProvider.setBaseUrl('http://filltext.com/');

	});