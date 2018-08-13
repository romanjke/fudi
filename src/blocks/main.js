$(document).ready(function() {
    //bigSlide
    $('.header__nav-toggle').bigSlide({
        side: 'right',
        speed: 600,
        menuWidth: '320px'
    });

    //onePageNav
    $('#menu').onePageNav();

    //flexslider
    $('.flexslider').flexslider({
        animation: "slide",
        directionNav: false
    });
});