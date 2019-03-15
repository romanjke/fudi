$(document).ready(function() {
    //bigSlide
    var bigSlideAPI = ($('.header__nav-toggle').bigSlide({
        menu: '#nav',
        side: 'right',
        menuWidth: '320px'
    })).bigSlideAPI;

    $('.nav__close').click(function(e) {
        e.preventDefault();
        bigSlideAPI.view.toggleClose();
    });

    //onePageNav
    $('#nav').onePageNav({
        filter: ':not(.nav__close)'
    });

    //flexslider
    $('.flexslider').flexslider({
        animation: 'slide',
        directionNav: false
    });

    //AOS
    AOS.init({
        useClassNames: true,
        initClassName: false,
        animatedClassName: 'animated',
        once: true
    });
});