"use strict";

// Scroll menu navbar on window/page Javascript
/*
window.onscroll = function () {
    let mainNavigation = document.getElementById('main-navigation');
    if (window.pageYOffset > 150) {
        mainNavigation.style.background = "white";
    } else {
        mainNavigation.style.background = "transparent";
    }
};
 */


// Collapse Navbar
$(window).scroll(function(event) {

    let $maineNav = $("#main-navigation");

    if ($(window).scrollTop() > 200) {
        $maineNav.addClass("scrolled");
    } else {
        $maineNav.removeClass("scrolled");
    }
    event.preventDefault();
});

$(document).ready( function () {

let toggle = document.querySelector(".navbar-toggler");
let mainNavigation = document.querySelector("#main-navigation");
toggle.addEventListener('click', function () {
     mainNavigation.classList.toggle('acti');

});
});

// Animation Menu Navbar on Click
$(document).on('click', 'a[href^="#"]', function (even) {

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 80
    }, 1000);

    even.preventDefault();
});


// Closes responsive menu when a scroll trigger link is clicked
$(document).on('click', '.js-scroll-trigger', function (e) {

    if ($('.js-scroll-trigger').is('a')) {
        $('.navbar-collapse').collapse('hide');
    }
    e.preventDefault();
});

//Initialize animation on loading window
new WOW().init();


// Trigger .progress-bar animation when into view
$(document).ready(function() {

    $('.progress-bar').waypoint(function() {

        $('.progress-bar').css({
            animation: 'animate-positive 5s',
            opacity: '1'
        });
    }, { offset: '80%' });

 });


// FILTER PROJECTS BASED ON THE VALUE OF DATA-FILTER ATTRIBUTE

$(window).on('load', function(){

    let $projects = $('.grid');

    $projects.isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        animationOptions: {
            duration: 750,
            easing: 'ease',
            queue: false
    }
    });

    $('button').on('click', function(e){

        $('button').removeClass('active');
        $(this).addClass('active');

        let filter = $(this).attr('data-filter');
        $projects.isotope({filter: filter});

        e.preventDefault();
    });

});


