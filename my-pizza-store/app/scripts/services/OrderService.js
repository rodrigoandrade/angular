angular.module('pizzaStore').factory('OrderService', function($q) {
	return function() {
		this.placeOrder = function(pizzaType) {
			var deferred = $q.defer();
			deffered.resolve({
				'sucess': true,
				'message': 'Order placed for a ' + pizzaType
			});
		};
	};
});