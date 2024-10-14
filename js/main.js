(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1000);
    };
    spinner();
    
    
    // Initiate The wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Active Link Based on Click and Scroll Position
    $(document).ready(function() {
        // Click event to add 'active' class to the clicked link
        $('.navbar-nav .nav-link').on('click', function() {
            $('.navbar-nav .nav-link').removeClass('active'); // Remove 'active' class from all links
            $(this).addClass('active'); // Add 'active' class to the clicked link
        });

        // Add 'active' class to the nav link based on scroll position
        $(window).on('scroll', function() {
            const sections = $('section'); // All sections on the page
            const scrollPos = $(document).scrollTop(); // Get the current scroll position

            sections.each(function() {
                const currLink = $('.navbar-nav').find('a[href="#' + $(this).attr('id') + '"]');
                const sectionTop = $(this).offset().top - 80; // Adjust the offset as per your navbar height

                if (scrollPos >= sectionTop && scrollPos < sectionTop + $(this).outerHeight()) {
                    $('.navbar-nav .nav-link').removeClass('active'); // Remove 'active' class from all links
                    currLink.addClass('active'); // Add 'active' class to the current section link
                }
            });
        });
    });

    // Facts Counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    // Back To Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth'); // Smooth scroll to the top
        return false; // Prevent default behavior (for safety)
    });


    // Testimonial Slider
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Vendor Slider
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });

    // Gallery Slider
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        auto: true,             // Enable auto play
        pause: 2000,            // Time in milliseconds between slides
        speed: 700,             // Speed of the slide transition
        onSliderLoad: function(){
            $('#autoWidth').removeClass('cs-hidden');
        }
    });

    // Water Ripple Effect
    $(document).ready(function() {
        $('#banner').ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04,
        });
        // Apply ripple effect to plan section
        $('.plan').ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04,
        });
    });
    
})(jQuery);

