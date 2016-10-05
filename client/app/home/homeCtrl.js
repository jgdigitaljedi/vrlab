'use strict';

angular.module('vrlabApp').controller('HomeCtrl', ['$scope', '$timeout', 'HelperService',
    function ($scope, $timeout, HelperService) {
        var hc = this;
    
        $timeout(function () {HelperService.hasScrollBar();});
    }
]);
