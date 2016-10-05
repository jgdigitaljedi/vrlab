'use strict';

angular.module('vrlabApp').controller('ProductionsCtrl', ['$scope', '$timeout', '$compile',
    function ($scope, $timeout, $compile) {
        var prc = this;
        var valiantProps = {
        	crossOrigin: 'anonymous',   // valid keywords: 'anonymous' or 'use-credentials'
        	clickAndDrag: false,    // use click-and-drag camera controls
        	flatProjection: false,  // map image to appear flat (often more distorted)
        	fov: 20,                // initial field of view
        	fovMin: 3,              // min field of view allowed
        	fovMax: 100,                // max field of view allowed
        	hideControls: false,    // hide player controls
        	lon: 180,                 // initial lon for camera angle
        	lat: 0,                 // initial lat for camera angle
        	loop: 'loop',           // video loops by default
        	muted: true,            // video muted by default
        	autoplay: true          // video autoplays by default
        };
        var screenWidth = window.innerWidth;
        prc.state = {
        	source: 'video'
        };

        if (screenWidth >= 960) {
        	prc.vidDims = {width: '960px', height: '540px'};
        } else if (screenWidth < 960 && screenWidth >= 720) {
        	prc.vidDims = {width: '720px', height: '405px'};
        } else if (screenWidth < 720 && screenWidth >= 608) {
        	prc.vidDims = {width: '608px', height: '342px'};
        } else if (screenWidth < 608 && screenWidth >= 480) {
        	prc.vidDims = {width: '480px', height: '270px'};
        } else {
        	prc.vidDims = {width: '400px', height: '225px'};
        }
    
        prc.images = ['android.png', 'cardboard.png', 'ios.png', 'facebook.png', 'youtube.png',
        	'unity.png', 'leap.png', 'oculus.png', 'vive.jpg', 'tesla.png'];

        prc.proImages = ['up.jpg', 'getter.jpg', 'party.jpg'];
        prc.proVids = ['linez_360_video'];

        prc.playerSwitch = function (type, source) {
        	console.log('source', source);
    		if ($('.center-area').find('img').length) {
    			$('.image-big').remove();
    		}
        	if ($('.valiantContainer').length) {
        		$('.valiantContainer').Valiant360('destroy');
        		$('.valiantContainer').remove();
        	}
        	if (type === 'image') {
        		prc.state.source = 'image';
        		var temp = $compile('<img src="../assets/images/proImages/'+ source + '" class="image-big" style="max-height: ' + prc.vidDims.height + ';" />')($scope);
        		$('.center-area').append(temp);
        	} else {
        		prc.state.source = 'video';
        		var vid = $compile('<div class="valiantContainer" data-video-src="/assets/video/' + source +
        			'.mp4" style="width: ' + prc.vidDims.width + '; height: ' + prc.vidDims.height + ';"></div>')($scope);
        		$('.center-area').append(vid);
        			$('.valiantContainer').Valiant360(valiantProps);       		
        	}
        };

        // initialize plugin, default options shown
        $timeout(function () {
        	$('.valiantContainer').Valiant360(valiantProps);
        }, 200);
    }
]);
