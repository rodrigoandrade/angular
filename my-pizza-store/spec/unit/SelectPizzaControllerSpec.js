describe('Select Pizza Controller', function() {

	var scope;
	var ctrl;

	beforeEach(module('pizzaStore'));
	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller('SelectPizzaController', {
			$scope = scope
		});
	}));

	describe('$scope.placeOrder', function() {
		it('lets the user place an order when they select a pizza type', function() {
			scope.pizzaType = scope.choices[0];
			scope.placeOrder();
			expect(scope.orderInProgress).toBe(true);
		});

		it('stops a user from placing an order when they have not select a pizza', function() {
			scope.pizzaType = '';
			scope.placeOrder();
			expect(scope.orderInProgress).toBe(false);
		});
	});

});