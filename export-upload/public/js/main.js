angular.module('upload', ['ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/upload', {
			templateUrl: 'partials/principal.html',
			controller: 'UploadController'
		});

		$routeProvider.otherwise({redirectTo: '/upload'});

	});