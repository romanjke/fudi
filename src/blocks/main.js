/*******************************************************
                    MODULE bigSlide
*******************************************************/

$(document).ready(function() {
    $('.header__nav-toggle').bigSlide({
        side: 'right',
        speed: 600,
        menuWidth: '320px'
    });

    $('#menu').onePageNav();
});