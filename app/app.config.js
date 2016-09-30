(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('vrlab')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		$mdThemingProvider.theme('blue')
		    .primaryPalette('blue-grey')
		    .accentPalette('amber')
		    .warnPalette('red')
		    .dark();

	    $mdThemingProvider.theme('lime')
	      .primaryPalette('lime')
	      .accentPalette('orange')
	      .warnPalette('blue');
		    
	    $mdThemingProvider.alwaysWatchTheme(true);
		
		$urlRouterProvider
			.otherwise('/home');
		
	}


	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		// 'use strict';
		console.log('AngularJS run() function...');
	}


})();