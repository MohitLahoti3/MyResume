$(document).ready(function() {
    $('.sidenav').sidenav();
    //Window size condition
    $(window).resize(function() {
        if ($(window).width() >= 992) {
            $('#menu').hide();
        } else {
            $('#menu').show();
        }
    }).resize();
    //image slider
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    // collapsiblejquery
    $('.collapsible').collapsible();

    // Icons jquery
    $("#facebook").hover(function() {
        $(this).css("color", "blue");
    }, function() {
        $(this).css("color", "white");
    });
    $("#twitter").hover(function() {
        $(this).css("color", "cyan");
    }, function() {
        $(this).css("color", "white");
    });
    $("#linkedin").hover(function() {
        $(this).css("color", "cyan");
    }, function() {
        $(this).css("color", "white");
    });
    $("#instagram").hover(function() {
        $(this).css("color", "#e91e60");
    }, function() {
        $(this).css("color", "white");
    });
    $("#github").hover(function() {
        $(this).css("color", "gray");
    }, function() {
        $(this).css("color", "white");
    });
    $("#mail").hover(function() {
        $(this).css("color", "red");
    }, function() {
        $(this).css("color", "white");
    });
    //Tooltip
    $(document).ready(function() {
        $('.tooltipped').tooltip();
    });
});