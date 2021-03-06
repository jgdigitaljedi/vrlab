'use strict';

angular.module('vrlabApp').controller('ToursCtrl', ['$scope', '$timeout', 'HelperService',
    function ($scope, $timeout, HelperService) {
        var tc = this;
        tc.showBooking = false;
        $timeout(function () {HelperService.hasScrollBar();});
    
        tc.bookIt = function () {
        	tc.showBooking = !tc.showBooking;
        };

        tc.minDate = moment().add(2, 'hours').format('MM/DD/YYYY hh:mm a');

        tc.bookTour = function (valid) {
        	console.log('valid', valid);
        	console.log('tour', tc.tour);
        };
    }
]);
