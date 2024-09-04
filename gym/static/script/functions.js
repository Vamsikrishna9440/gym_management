jQuery(document).ready(function($) {

    'use strict';
    //***************************
    // Sticky Header Function
    //***************************
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 170) {
            jQuery('body').addClass("findhome-sticky");
        } else {
            jQuery('body').removeClass("findhome-sticky");
        }
    });

    //***************************
    // BannerOne Functions
    //***************************
    jQuery('.moverspackers-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        arrows: false,
        fade: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //***************************
    // testimonial Functions
    //***************************
    jQuery('.moverspackers-testimonial').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //***************************
    // partner Functions
    //***************************
    jQuery('.moverspackers-partner-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-left'></i></span>",
        nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    //***************************
    // footer strip Functions
    //***************************
    jQuery('.moverspackers-twitter-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //***************************
    // Blog Functions
    //***************************
    jQuery('.moverspackers-blog-grid-slide,.moverspackers-blog-large-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-left'></i></span>",
        nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    //***************************
    // Countdown Function
    //***************************
    jQuery(function() {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        jQuery('#moverspackers-countdown').countdown({
            until: austDay
        });
        jQuery('#year').text(austDay.getFullYear());
    });

    //***************************
    // Fancybox Function
    //***************************
    jQuery(".fancybox").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
    });

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    //***************************
    // Parent AddClass Function
    //***************************
    jQuery(".touristpoint-sub-menu").parent("li").addClass("sub-menu-icon");

    //***************************
    // Map Toggle Function
    //***************************
    jQuery('.open-btn').on("click", function() {
        jQuery('.findhome-main-wrapper').addClass('property-search-active');
        jQuery('.findhome-property-search').addClass('property-search-active');
    });
    jQuery('.close-btn').on("click", function() {
        jQuery('.findhome-main-wrapper').removeClass('property-search-active');
        jQuery('.findhome-property-search').removeClass('property-search-active');
    });


    //***************************
    // Progressbar Function
    //***************************
    jQuery('.progressbar1').progressBar({
        percentage: false,
        animation: true,
        backgroundColor: "#f5f5f5",
        barColor: "#ffb118",
        height: "5",
    });




});


//***************************
// TOUR GRID Function
//***************************
jQuery(window).on('load', function() {
    var $grid = $('.moverspackers-filtrable-grid,.moverspackers-filtrable-list').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };
    // bind filter button click
    $('.filters-button-group').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });
    // change is-checked class on buttons
    $('.filters-button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

});


//***************************
// ContactForm Function
//***************************
$('.myform').on('submit', function() {
    // Add text 'loading...' right after clicking on the submit button. 
    $('.output_message').text('Loading...');

    var form = $(this);
    $.ajax({
        url: form.attr('action'),
        method: form.attr('method'),
        data: form.serialize(),
        success: function(result) {
            if (result == 'success') {
                $('.output_message').html('<span class="success-msg"><i class="fa fa-check-circle"></i> Message Sent successfully!</span>');
            } else if (result == 'validate') {
                $('.output_message').html('<span class="spam-error-msg"><i class="fa fa-warning"></i> You have already sent message. Try again after one hour.</span>');
            } else {
                $('.output_message').html('<span class="error-msg"><i class="fa fa-times-circle"></i> Error Sending email!</span>');
            }
        }
    });

    // Prevents default submission of the form after clicking on the submit button. 
    return false;
});