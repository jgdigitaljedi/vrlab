(function() {
	'use strict';

	/**
	* @ngdoc index
	* @name app
	* @description
	* # app
	*
	* Main module of the site.
	*/

	angular.module('vrlab', [
		'ngResource',
		'ngAria',
		'ngMdIcons',
		'ngMessages',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ui.router',
		'home'
	]);

})();