angular
	.module('pizzaStore', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/select-pizza.html',
				controller: 'SelectPizzaController'
			})
			.when('/order-status', {
				templateUrl: 'views/order-status.html',
				controller: 'OrderStatusController'
			})
			.otherwise({
				redirectTo: '/'
			});
	});