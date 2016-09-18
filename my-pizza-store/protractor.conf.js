exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['spec/end2end/*'],
	capabilities: {
		browserName: 'firefox'
	},
	baseUrl: 'http://localhost:8888/'		
}