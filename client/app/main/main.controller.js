'use strict';

angular.module('vrlabApp').controller('MainCtrl', ['$scope', '$state',
    function ($scope, $state) {
        var vm = this;
    
    	if ($state.current.name === 'main') {
        	$state.go('main.home');
        }

        // (function($) {
        //     $.fn.hasScrollBar = function() {
        //         return $(document).height() > $(window).height();
        //     };
        // })(jQuery);

    }
]);
