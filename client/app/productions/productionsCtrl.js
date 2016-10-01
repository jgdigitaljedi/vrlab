'use strict';

angular.module('vrlabApp').controller('ProductionsCtrl', ['$scope',
    function ($scope) {
        var prc = this;
    
        prc.images = ['android.png', 'cardboard.png', 'ios.png', 'facebook.png', 'youtube.png',
        	'unity.png', 'leap.png', 'oculus.png', 'vive.jpg', 'tesla.png'];

        prc.carosel = ['up.jpg', 'getter.jpg', 'party.jpg'];
    }
]);
