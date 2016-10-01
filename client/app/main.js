'use strict';

angular.module('vrlabApp').config(function ($stateProvider) {
    $stateProvider
      	.state('main', {
        	url: '/',
        	templateUrl: 'app/main/main.html',
        	controller: 'MainCtrl',
        	controllerAs: 'vm'
      	})
      	.state('main.home', {
      		parent: 'main',
      		templateUrl: 'app/home/home.html',
      		controller: 'HomeCtrl',
      		controllerAs: 'hc'
      	})
      	.state('main.products', {
      		parent: 'main',
      		templateUrl: 'app/products/products.html',
      		controller: 'ProductsCtrl',
      		controllerAs: 'pc'
      	})
        .state('main.productions', {
          parent: 'main',
          templateUrl: 'app/productions/productions.html',
          controller: 'ProductionsCtrl',
          controllerAs: 'prc'
        })
        .state('main.tours', {
          parent: 'main',
          templateUrl: 'app/tours/tours.html',
          controller: 'ToursCtrl',
          controllerAs: 'tc'
        })
      	.state('main.contact', {
      		parent: 'main',
      		templateUrl: 'app/contact/contact.html',
      		controller: 'ContactCtrl',
      		controllerAs: 'cc'
      	});
  	});