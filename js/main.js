$(function () {

    // SearchToggle
    let search = $('#search');
    let searchToggle = $('#searchToggle');

    searchToggle.on('click', function (event) {
        event.preventDefault();
        search.toggleClass('show');
    });


    // Up arrow
    var $up__arrow = $('.up__arrow');
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 70) {
            $up__arrow.fadeIn(1000);
        } else {
            $up__arrow.fadeOut(400);
        }
    });

    // Click Up
    $up__arrow.on('click', function() {
        $('html,body').animate({ scrollTop: 0 }, 900)
    });


    // Fixed Header
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function () {
        scrollPos = $(this).scrollTop();
        if (scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }

        console.log(scrollPos)

    });

    // Smooth scroll
    $('[data-scroll]').on('click load resize', function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        console.log(elementOffset)

        $('html, body').animate({
            scrollTop: elementOffset - 150
        }), 1000;
        
    });

    // Burger
    let nav = $('#nav');
    let navBurger = $('#navBurger');

    navBurger.on('click', function (event) {
        event.preventDefault();

        nav.toggleClass('show');
    });
});