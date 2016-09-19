module.exports = function(config) {
	config.set({
		frameworks:['jasmine'],
		browsers:['Firefox'],
		files:[
			'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular.js',
			'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular-route.js',
			'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular-mocks.js',
			'app/scripts/app.js',
			'app/scripts/controllers/SelectPizzaController.js',
			'spec/unit/*js'
		]
	});
};