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
        $('#banner-desktop').ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04,
        });
        $('#banner-mobile').ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04,
        });
    });

    $(document).ready(function() {
        // Contact Form Submission
        $("#contactForm").on("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission
    
            // Get form field values
            const fullName = $("#fullName").val();
            const email = $("#email").val();
            const gender = $("#gender").val();
            const packageSelected = $("#packageSelect").val();
            const message = $("#message").val(); // Optional message field
    
            // Debug check for packageSelected
            console.log('Selected package:', packageSelected); 
    
            // Create an array for the message lines
            const messageLines = [
                `Package Request:`, // Update this to "Package Request"
                `Name: ${fullName}`,
                `Email: ${email}`,
                `Gender: ${gender}`,
                `Selected Package: ${packageSelected}`,
                `Message: ${message ? message : 'No message provided'}`
            ];
    
            // Join the message lines with line breaks
            const messageText = messageLines.join('\n');
    
            // Detect if the user is on mobile or desktop
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const whatsappUrl = isMobile 
                ? `https://wa.me/918755576691?text=${encodeURIComponent(messageText)}`  // Mobile link
                : `https://web.whatsapp.com/send?phone=918755576691&text=${encodeURIComponent(messageText)}`; // WhatsApp Web link
    
            // Open WhatsApp link
            window.open(whatsappUrl, '_blank');
    
            // Show Thank You Modal after submission
            $("#contactModal").modal('hide');  // Hide the contact modal
            $("#thankYouModal").modal('show'); // Show the thank you modal
        });
    });    
    
})(jQuery);

