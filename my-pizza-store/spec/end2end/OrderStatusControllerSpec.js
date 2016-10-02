describe('Place An Order', function() {
	it('should navigate to the order page when a user places an order', function() {
		browser.get('/#/');

		expect(browser.getLocationAbsUrl()).toBe('/');

		var pizzaTypeOptions = element.all(by.tagName('option'));
		pizzaTypeOptions.get(1).click();

		var selectPizzaType = element(by.css('option:checked'));
		expect(selectPizzaType.getText()).toBe(pizzaTypeOptions.get(0).getText());

		var placeOrderButton = element(by.buttonText('Place Order'));
		placeOrderButton.click();

		expect(browser.getLocationAbsUrl()).toBe('/order-status');

	});
});