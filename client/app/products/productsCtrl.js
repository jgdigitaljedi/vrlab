'use strict';

angular.module('vrlabApp').controller('ProductsCtrl', ['$scope', '$timeout', 'HelperService',
    function ($scope, $timeout, HelperService) {
        var pc = this;
    
        $timeout(function () {HelperService.hasScrollBar();});
    }
]);
