/**
 * Created by Karthick on 12/29/2015.
 */
angular.module('Spicerack-app').config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'templates/pages/nav/home.html'
        })
        .when('/About',{
            templateUrl: 'templates/pages/nav/About.html'
        })
        .when('/booktable',{
            templateUrl: 'templates/pages/nav/booktable.html'
        })
        .when('/login',{
            templateUrl: 'templates/pages/nav/login.html',
            controller:"loginController"
        })
        .when('/viewtable',{
            templateUrl: 'templates/pages/nav/viewtable.html'
        })
        .when('/editbooking',{
            templateUrl: 'templates/pages/nav/edittable.html',

        })
        .when('/profile',{
            templateUrl: 'templates/pages/owner/myprofile.html'

        })
        .when('/viewall',{
            templateUrl: 'templates/pages/owner/viewall.html'

        })
        .when('/editall',{
            templateUrl: 'templates/pages/owner/editall.html'

        })
        .when('/tablelayout',{
            templateUrl: 'templates/pages/owner/tablelayout.html'

        })

});

