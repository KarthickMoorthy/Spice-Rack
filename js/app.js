/**
 * Created by Karthick on 12/29/2015.
 */
angular.module('Spicerack-app',['ngRoute']);



$(document).ready(function(){
    var mCarouselTO = setTimeout(function(){
        $('#carousel-example-generic').carousel({

            interval: 7000,
            cycle: true,
        }).trigger('slide');
    }, 2000);

});
$('[data-slide-to=0]').trigger('click');