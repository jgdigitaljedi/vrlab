'use strict';

angular.module('vrlabApp').controller('ToursCtrl', ['$scope',
    function ($scope) {
        var tc = this;
        tc.showBooking = false;
    
        tc.bookIt = function () {
        	tc.showBooking = !tc.showBooking;
        };

        tc.minDate = moment().add(2, 'hours').format('MM/DD/YYYY hh:mm a');
    }
]);
