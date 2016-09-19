angular
	.module('pizzaStore', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/select-pizza.html',
				controller: 'SelectPizzaController'
			})
			.otherwise({
				redirectTo: '/'
			});
	});