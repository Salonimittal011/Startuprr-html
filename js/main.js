$(document).ready(function () {

    //header scroll top
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 750) {
            $(".header").addClass("head");
        } else {
            $(".header").removeClass("head");
        }
    });

    //burger-menu
    $('.nav-icon').on('click', function () {
        $(this).toggleClass('open');
    })

    function myMap() {
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    }

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    })

});