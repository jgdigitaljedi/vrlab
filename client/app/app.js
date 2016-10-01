'use strict';

angular.module('vrlabApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'ngMessages',
    'ui.router',
    'ngMaterial',
    'angulike'
])
.config(function ($mdIconProvider) {
    $mdIconProvider
        .iconSet('action', '../assets/iconsets/action-icons.svg', 24)
        .iconSet('alert', '../assets/iconsets/alert-icons.svg', 24)
        .iconSet('av', '../assets/iconsets/av-icons.svg', 24)
        .iconSet('communication', '../assets/iconsets/communication-icons.svg', 24)
        .iconSet('content', '../assets/iconsets/content-icons.svg', 24)
        .iconSet('device', '../assets/iconsets/device-icons.svg', 24)
        .iconSet('editor', '../assets/iconsets/editor-icons.svg', 24)
        .iconSet('file', '../assets/iconsets/file-icons.svg', 24)
        .iconSet('hardware', '../assets/iconsets/hardware-icons.svg', 24)
        .iconSet('icons', '../assets/iconsets/icons-icons.svg', 24)
        .iconSet('image', '../assets/iconsets/image-icons.svg', 24)
        .iconSet('maps', '../assets/iconsets/maps-icons.svg', 24)
        .iconSet('navigation', '../assets/iconsets/navigation-icons.svg', 24)
        .iconSet('notification', '../assets/iconsets/notification-icons.svg', 24)
        .iconSet('social', '../assets/iconsets/social-icons.svg', 24)
        .iconSet('toggle', '../assets/iconsets/toggle-icons.svg', 24)
        .iconSet('avatar', '../assets/iconsets/avatar-icons.svg', 128);
})
.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider) {
    $urlRouterProvider
        .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');

    var customPrimary = {
            '50': '#b76cae',
            '100': '#af5ba4',
            '200': '#a14f97',
            '300': '#904787',
            '400': '#7f3e77',
            '500': '#6e3667',
            '600': '#5d2e57',
            '700': '#4c2547',
            '800': '#3b1d37',
            '900': '#2a1427',
            'A100': '#bf7eb7',
            'A200': '#c88fc1',
            'A400': '#d0a0ca',
            'A700': '#180c17'
        };
        $mdThemingProvider
            .definePalette('customPrimary', 
                            customPrimary);

        var customAccent = {
            '50': '#2f4908',
            '100': '#3e600a',
            '200': '#4d770d',
            '300': '#5c8e0f',
            '400': '#6aa512',
            '500': '#79bc14',
            '600': '#96e61d',
            '700': '#a1e934',
            '800': '#abeb4b',
            '900': '#b6ee62',
            'A100': '#96e61d',
            'A200': '#88d317',
            'A400': '#79bc14',
            'A700': '#c1f079'
        };
        $mdThemingProvider
            .definePalette('customAccent', 
                            customAccent);

        var customWarn = {
            '50': '#8c1071',
            '100': '#750e5f',
            '200': '#5f0b4c',
            '300': '#48083a',
            '400': '#310627',
            '500': '#1a0315',
            '600': '#030003',
            '700': '#000000',
            '800': '#000000',
            '900': '#000000',
            'A100': '#a31384',
            'A200': '#ba1596',
            'A400': '#d118a9',
            'A700': '#000000'
        };
        $mdThemingProvider
            .definePalette('customWarn', 
                            customWarn);

        var customBackground = {
            '50': '#939393',
            '100': '#868686',
            '200': '#797979',
            '300': '#6c6c6c',
            '400': '#606060',
            '500': '#535353',
            '600': '#464646',
            '700': '#393939',
            '800': '#2d2d2d',
            '900': '#202020',
            'A100': '#9f9f9f',
            'A200': '#acacac',
            'A400': '#b9b9b9',
            'A700': '#131313'
        };
        $mdThemingProvider
            .definePalette('customBackground', 
                            customBackground);

       $mdThemingProvider.theme('default')
           .primaryPalette('customPrimary')
           .accentPalette('customAccent')
           .warnPalette('customWarn')
           .backgroundPalette('customBackground');
})
.factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
        // Add authorization token to headers
        request: function (config) {
            config.headers = config.headers || {};
            if ($cookieStore.get('token')) {
                config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
            }
            return config;
        },

        // Intercept 401s and redirect you to login
        responseError: function (response) {
            if(response.status === 401) {
                $location.path('/login');
                // remove any stale tokens
                $cookieStore.remove('token');
                return $q.reject(response);
            } else {
                return $q.reject(response);
            }
        }
    };
})
.run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
        Auth.isLoggedInAsync(function (loggedIn) {
            if (next.authenticate && !loggedIn) {
                event.preventDefault();
                $location.path('/login');
            }
        });
    });
    // konami code
    var neededkeys = [38,38,40,40,37,39,37,39,66,65],
        started = false,
        count = 0;
    function reset() {
        started = false; count = 0;
       return;
    }
    $(document).keydown(function (e){
        var key = e.keyCode;
        //Set start to true only if having pressed the first key in the konami sequence.
        if (!started){
            if (key === 38){
                started = true;
            }
        }
        //If we've started, pay attention to key presses, looking for right sequence.
        if (started){
            if (neededkeys[count] === key){
                //We're good so far.
                count++;
            } else {
                //Oops, not the right sequence, lets restart from the top.
                reset();
            }
            if (count === 10){
                //We made it! Do something cool here.
                console.log('konami easter egg');
                // audio.play();
                // $scope.konami = true;
                //Reset the conditions so that someone can do it all again.
                reset();
            }
        } else {
            //Oops.
            reset();
        }
    });
       //Function used to reset us back to starting point.
});
