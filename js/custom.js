/*global $, alert ,console */
$(function () {
    'use strict';

    //Trigger Nice Scroll PLugin
    $('html').niceScroll({
        cursorcolor:'#F7600e',
        cursorwidth:10,
        cursorborderradius:0,
        cursorborder:'1px solid #F7600e'
    });

    //Change Header Height
    $('.header').height($(window).height());

    //Scroll To Features
    $('.header .arrow i').click(function () {
        $('html , body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });
    // Hire Scroll to our-team
    $('.hire').click(function(){
        $('html , body').animate({
            scrollTop: $('.our-team').offset().top
        }, 1000);
    });
    // Work Scroll to our-work
    $('.work').click(function(){
        $('html , body').animate({
            scrollTop: $('.our-work').offset().top
        }, 1000);
    });
    //Show Hidden Items From Work
    $('.show-more').click(function () {
        $('.hidden').fadeIn(1000);
    });
    //Check Appear Client Testimonials
    var leftArrow = $('.testim .fa-chevron-left'),
        rightArrow = $('.testim .fa-chevron-right');
    function checkClients() {

        if ($('.client:first').hasClass('active')) {

            leftArrow.fadeOut();

        } else {

            leftArrow.fadeIn();

        }
        if ($('.client:last').hasClass('active')) {

            rightArrow.fadeOut();
        } else {

            rightArrow.fadeIn();
        }

        /* $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn(); */ /* short for above */
        /* $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn(); */
    }
    checkClients();
    $('.testim i').click(function () {
        if ($(this).hasClass('fa-chevron-right')) {

            $('.testim .active').fadeOut(100, function () {

                $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                checkClients();
            });
        } else {
            $('.testim .active').fadeOut(100, function () {

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                checkClients();
            });

        }
    });
});