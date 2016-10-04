'use strict';

angular.module('vrlabApp').controller('ProductionsCtrl', ['$scope',
    function ($scope) {
        var prc = this;
    
        prc.images = ['android.png', 'cardboard.png', 'ios.png', 'facebook.png', 'youtube.png',
        	'unity.png', 'leap.png', 'oculus.png', 'vive.jpg', 'tesla.png'];

        prc.carosel = ['up.jpg', 'getter.jpg', 'party.jpg'];

        // initialize plugin, default options shown
           $('.valiantContainer').Valiant360({
               crossOrigin: 'anonymous',   // valid keywords: 'anonymous' or 'use-credentials'
               clickAndDrag: false,    // use click-and-drag camera controls
               flatProjection: false,  // map image to appear flat (often more distorted)
               fov: 35,                // initial field of view
               fovMin: 3,              // min field of view allowed
               fovMax: 100,                // max field of view allowed
               hideControls: false,    // hide player controls
               lon: 180,                 // initial lon for camera angle
               lat: 0,                 // initial lat for camera angle
               loop: 'loop',           // video loops by default
               muted: true,            // video muted by default
               autoplay: true          // video autoplays by default
           });

           // play video
           // $('.valiantContainer').Valiant360('play');

           // pause video
           // $('.valiantContainer').Valiant360('pause');

           // load new video file
           // $('.valiantContainer').Valiant360('loadVideo', 'linez_360_video.mp4');

           // load new photo file
           // $('.valiantContainer').Valiant360('loadPhoto', 'path/to/file.jpg');

           // destroy Valiant360 processing/resources (however, will not remove element from the dom. That is left up to you)
           // $('.valiantContainer').Valiant360('destroy'); 
    }
]);
