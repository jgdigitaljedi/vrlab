'use strict';

angular.module('vrlabApp').controller('ContactCtrl', ['$scope', '$http', '$mdDialog', '$timeout', 'HelperService',
    function ($scope, $http, $mdDialog, $timeout, HelperService) {
        var cc = this;
        $timeout(function () {HelperService.hasScrollBar();});
    
        cc.sendEmail = function (valid) {

        	if (valid) {
				$http.post('/api/proxy/vrmail', {
					firstName: cc.user.firstName,
					email: cc.user.email,
					lastName: cc.user.lastName,
					phone: cc.user.phone,
					company: cc.user.company,
					comment: cc.user.comments
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
						    templateUrl: '/app/contact/modals/contact.success.view.html',
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
        	}
        };
    }
]);
