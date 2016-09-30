'use strict';

angular.module('vrlabApp').config(function ($stateProvider) {
    $stateProvider
      	.state('main', {
        	url: '/',
        	templateUrl: 'app/main/main.html',
        	controller: 'MainCtrl',
        	controllerAs: 'vm'
      	});
  	});