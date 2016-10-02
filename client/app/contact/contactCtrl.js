'use strict';

angular.module('vrlabApp').controller('ContactCtrl', ['$scope', '$http', '$mdDialog',
    function ($scope, $http, $mdDialog) {
        var cc = this;
    
        cc.sendEmail = function (user) {
			$http.post('/vrmail', {
				firstName: user.firstName,
				email: user.email,
				lastName: user.lastName,
				phone: user.phone,
				company: user.company,
				comment: user.comments
			}).success(function(res) {
				if(res.error) {
					$mdDialog.show({
					    controller: function DialogController($scope, $mdDialog) {
					    	$scope.theme = cc.theme;
		            		$scope.closeDialog = function() {
		              			$mdDialog.hide();
		            		};
		          		},
					    templateUrl: '/app/contact/modals/failure.contact.view.html',
					    parent: angular.element(document.body)
					});
				} else {
					$mdDialog.show({
					    controller: function DialogController($scope, $mdDialog) {
					    	$scope.theme = cc.theme;
		            		$scope.closeDialog = function() {
		              			$mdDialog.hide();
		            		};
		          		},
					    templateUrl: '/app/contact/modals/success.contact.view.html',
					    parent: angular.element(document.body)
					});
				}
				console.log('success');
			}).error(function() {
				$mdDialog.show({
				    controller: function DialogController($scope, $mdDialog) {
				    	$scope.theme = cc.theme;
	            		$scope.closeDialog = function() {
	              			$mdDialog.hide();
	            		};
	          		},
				    templateUrl: '/app/contact/modals/failure.contact.view.html',
				    parent: angular.element(document.body)
				});
				console.log('error');
			});

			$scope.closeDialog = function() {
				$mdDialog.hide();
			};
        };
    }
]);
