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
$(window).scroll(function() {

    let $maineNav = $("#main-navigation");

    if ($(window).scrollTop() > 200) {
        $maineNav.addClass("scrolled");
    } else {
        $maineNav.removeClass("scrolled");
    }
    
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

    $('#proiecte-section button').on('click', function(e){

        $('#proiecte-section button').removeClass('active');
        $(this).addClass('active');

        let filter = $(this).attr('data-filter');
        $projects.isotope({filter: filter});

        e.preventDefault();
    });

});

enableRadialProgress();
function enableRadialProgress(){

    $(".radial-progress").each(function(){
        let $this = $(this);
        let  progPercent = $this.data('prog-percent');

        let bar = new ProgressBar.Line(this, {
            color: 'rgba(24, 24, 24, 0.7)',
            strokeWidth: 0.8,
            trailWidth: 0.8,
            trailColor: 'rgba(24, 24, 24, 0.7)',
            easing: 'easeInOut',
            duration: 1800,
            text: {
                style: {
                    // Text color.
                    fontFamily: '"Comic Sans MS", sans serif',
                    fontWeight: '500',
                    fontSize: '16px',
                    color: 'rgba(24, 24, 24, 0.7)',
                    position: 'absolute',
                    right: '0',
                    top: '-5px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false

            },
            from: { color: '#facd3d', width: 1 },
            to: { color: '#facd3d', width: 1 },
            // Set default step function for all animate calls
            step: function(state, shape) {
                shape.path.setAttribute('stroke', state.color);
                shape.path.setAttribute('stroke-width', state.width);

                let value = (Math.round(shape.value() * 100) + '%');
                if (value === 0) {
                    shape.setText('');
                } else {
                    shape.setText(value);
                }

            }
        });

        $(this).waypoint(function(){
            bar.animate(progPercent);
        },{offset: "90%"})

    });
}

$(window).scroll(function () {
    let pageTop = $(window).scrollTop();
    let pageBottom = pageTop + $(window).height();
    let hide = $(".hide");

    for (let i = 0; i < hide.length; i++) {
        let tag = hide[i];

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible")
        } else {
            $(tag).removeClass("visible")
        }
    }
})
