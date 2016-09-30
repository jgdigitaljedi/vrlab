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
      		controller: 'app/home/homeCtrl.js',
      		controllerAs: 'hc'
      	})
      	.state('main.about', {
      		parent: 'main',
      		templateUrl: 'app/about/about.html',
      		controller: 'app/about/aboutCtrl.js',
      		controllerAs: 'ac'
      	})
      	.state('main.products', {
      		parent: 'main',
      		templateUrl: 'app/products/products.html',
      		controller: 'app/products/productsCtrl.js',
      		controllerAs: 'pc'
      	})
      	.state('main.contact', {
      		parent: 'main',
      		templateUrl: 'app/contact/contact.html',
      		controller: 'app/contact/contactCtrl.js',
      		controllerAs: 'cc'
      	});
  	});