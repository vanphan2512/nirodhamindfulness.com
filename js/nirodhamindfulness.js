// active menu


$(document).on('click', '.menu-item', function () {
    var path = window.location.pathname;
    console.log("sss", path)
    $('.menu-item a').removeClass("active");
    $(this).addClass("active");
});




// menu mobile
$(document).on('click', '.btn-menu-mobile', function () {
    $('body').addClass('pace-done sidebar-open').prepend('<div class="app-backdrop backdrop-sidebar"></div>');
});
$(document).on('click', '.backdrop-sidebar', function () {
    $('body').removeClass('pace-done  sidebar-open');
    $('.backdrop-sidebar').remove();
});
$(document).on('click', '.btn-close-menu', function () {
    $('body').removeClass('pace-done  sidebar-open');
    $('.backdrop-sidebar').remove();
});
// menu footer
$(document).on('click', '.menu-footer .menu-link', function () {
    var $submenu = $(this).next('.footer-list');
    if ($submenu.length < 1)
        return;
    if ($submenu.is(":visible")) {
        $submenu.slideUp(function () {
            $('.menu-footer.open').removeClass('open');
        });
        $(this).removeClass('open');
        return;
    }
    $('.menu-footer .footer-list:visible').slideUp();
    $('.menu-footer .menu-link').removeClass('open');
    $submenu.slideToggle(function () {
        $('.menu-footer.open').removeClass('open');
    });
    $(this).addClass('open');
});
$(document).on('click', '.menu-mobile .megamenu.has-sub .menu-item-link', function () {
    var $submenu = $(this).next('.megamenu-menu');
    if ($submenu.length < 1)
        return;
    if ($submenu.is(":visible")) {
        $submenu.slideUp(function () {
            $('.menu-mobile .megamenu.has-sub.open').removeClass('open');
        });
        $(this).removeClass('open');
        return;
    }
    $('.menu-mobile .megamenu.has-sub  .megamenu-menu:visible').slideUp();
    $('.menu-mobile .megamenu.has-sub .menu-item-link').removeClass('open');
    $submenu.slideToggle(function () {
        $('.megamenu.has-sub.open').removeClass('open');
    });
    $(this).addClass('open');
});
$(document).on('click', '.megamenu-sub.has-sub-sub .menu-item-link', function () {
    var $submenu = $(this).next('.megamenu-menu-sub');
    if ($submenu.length < 1)
        return;
    if ($submenu.is(":visible")) {
        $submenu.slideUp(function () {
            $('.megamenu-sub.has-sub-sub.open').removeClass('open');
        });
        $(this).removeClass('open');
        return;
    }
    $('.megamenu-sub.has-sub-sub .megamenu-menu-sub:visible').slideUp();
    $('.megamenu-sub.has-sub-sub .menu-item-link').removeClass('open');
    $submenu.slideToggle(function () {
        $('.megamenu-sub.has-sub-sub.open').removeClass('open');
    });
    $(this).addClass('open');
});
// Tab
function openProTabs(evt, cityName) {
    var i, pro_tabcontent, pro_tablinks;
    pro_tabcontent = document.getElementsByClassName("pro-tabcontent");
    for (i = 0; i < pro_tabcontent.length; i++) {
        pro_tabcontent[i].style.display = "none";
    }
    pro_tablinks = document.getElementsByClassName("pro-tablinks");
    for (i = 0; i < pro_tablinks.length; i++) {
        pro_tablinks[i].className = pro_tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
if ($('#defaultOpenProTabs').length) {
    document.getElementById("defaultOpenProTabs").click();
}
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
if ($('#defaultOpen').length) {
    document.getElementById("defaultOpen").click();
}
// show hình ảnh page product detail
$(document).ready(function () {
    if ($('#zoom').length) {
        $('#zoom').ezPlus({
            zoomWindowFadeIn: 500,
            zoomLensFadeIn: 500,
            gallery: 'gallery_01',
            imageCrossfade: true,
            zoomWindowWidth: 411,
            zoomWindowHeight: 274,
            zoomWindowOffsetX: 10,
            scrollZoom: true,
            cursor: 'pointer',
            galleryActiveClass: 'active',
            responsive: true,
            loadingIcon: true
        });
        $('#zoom').bind('click', function (e) {
            var ez = $('#zoom').data('ezPlus');
            $.fancyboxPlus(ez.getGalleryList());
            return false;
        });
    }
});
$(document).ready(function () {
    $("#slider-product").owlCarousel({
        items: 4,
        itemsDesktop: [1000, 4],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: [400, 1],
        navigation: true,
        pagination: false,
        autoPlay: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });

    $("#slider-product-gift").slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $("#carousel-album").slick({
        centerMode: false,
        slidesToShow: 1,
        autoplay: true,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });

    $("#group-slide").slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 1000,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $("#group-slide2").slick({
        dots: true,
        centerMode: true,
        centerPadding: '0 60px',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $("#group-slide3").slick({
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $("#facials-slider").slick({
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2,
        vertical: true,
    });




    // $("#slider-product-gift").owlCarousel({
    //     stagePadding: 50,
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 5
    //         }
    //     },
    //     navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    //     // stagePadding: 5000,
    //     // loop: true,
    //     // margin: 100,
    //     // items: 4,
    //     // itemsDesktop: [1000, 1],
    //     // itemsDesktopSmall: [900, 1],
    //     // itemsTablet: [600, 1],
    //     // itemsMobile: false,
    //     // navigation: true,
    //     // pagination: false,
    //     // autoPlay: false,
    //     // slideSpeed: 1000,
    //     // paginationSpeed: 1000,
    //     // navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    // });

    $("#our-team").owlCarousel({
        items: 3,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
        pagination: true,
        autoPlay: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#classes").owlCarousel({
        items: 3,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
        pagination: true,
        autoPlay: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#owl-home-main-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        autoPlay: 2000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#ProductThumbs").owlCarousel({
        items: 4,
        itemsDesktop: [992, 4],
        itemsDesktopSmall: [992, 3],
        itemsTablet: [768, 2],
        itemsMobile: [576, 1],
        navigation: true,
        pagination: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#home-brand-slider").owlCarousel({
        items: 5,
        itemsDesktop: [992, 5],
        itemsDesktopSmall: [992, 3],
        itemsTablet: [768, 2],
        itemsMobile: [576, 1],
        navigation: false,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoPlay: false,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#home-news-slider").owlCarousel({
        items: 3,
        itemsDesktop: [992, 3],
        itemsDesktopSmall: [992, 2],
        itemsTablet: [768, 2],
        itemsMobile: [576, 1],
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#home-promotion-slider").owlCarousel({
        items: 3,
        itemsDesktop: [992, 3],
        itemsDesktopSmall: [992, 3],
        itemsTablet: [769, 2],
        itemsMobile: [576, 1],
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#owl-blog-single-slider1").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#owl-blog-single-slider2").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#owl-blog-single-slider3").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#owl-blog-single-slider4").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#owl-blog-single-slider5").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#owl-blog-single-slider6").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#owl-blog-single-slider7").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#owl-blog-single-slider8").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#owl-blog-single-slider9").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#owl-blog-single-slider10").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
});
// slide 
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}
if ($(window).width() > 992) {
    $('.accordion.col-sb-trigger').trigger('click');
}

$(function () {
    //defining all needed variables
    var $overlay = $('.overlay');
    var $mainPopUp = $('.main-popup')
    var $signIn = $('#sign-in');
    var $register = $('#register');
    var $formSignIn = $('form.sign-in');
    var $formRegister = $('form.register');
    var $firstChild = $('nav ul li:first-child');
    var $secondChild = $('nav ul li:nth-child(2)');
    var $thirdChild = $('nav ul li:nth-child(3)');
    //defining function to create underline initial state on document load
    function initialState() {
        $('.underline').css({
            "width": $firstChild.width(),
            "left": $firstChild.position().left,
            "top": $firstChild.position().top + $firstChild.outerHeight(true) + 'px'
        });
    }
    initialState(); //() used after calling function to call function immediately on doc load
    //defining function to change underline depending on which li is active
    function changeUnderline(el) {
        $('.underline').css({
            "width": el.width(),
            "left": el.position().left,
            "top": el.position().top + el.outerHeight(true) + 'px'
        });
    } //note: have not called the function...don't want it called immediately
    $firstChild.on('click', function () {
        var el = $firstChild;
        changeUnderline(el); //call the changeUnderline function with el as the perameter within the called function
        $secondChild.removeClass('active');
        $thirdChild.removeClass('active');
        $(this).addClass('active');
    });
    $secondChild.on('click', function () {
        var el = $secondChild;
        changeUnderline(el); //call the changeUnderline function with el as the perameter within the called function
        $firstChild.removeClass('active');
        $thirdChild.removeClass('active');
        $(this).addClass('active');
    });
    $thirdChild.on('click', function () {
        var el = $thirdChild;
        changeUnderline(el); //call the changeUnderline function with el as the perameter within the called function
        $firstChild.removeClass('active');
        $secondChild.removeClass('active');
        $(this).addClass('active');
    });
    $('.login-trigger').on('click', function () {
        $overlay.addClass('visible');
        $mainPopUp.addClass('visible');
        $signIn.addClass('active');
        $register.removeClass('active');
        $formRegister.removeClass('move-left');
        $formSignIn.removeClass('move-left');
    });
    $overlay.on('click', function () {
        $(this).removeClass('visible');
        $mainPopUp.removeClass('visible');
    });
    $('#popup-close-button').on('click', function (e) {
        e.preventDefault();
        $overlay.removeClass('visible');
        $mainPopUp.removeClass('visible');
    });
    $signIn.on('click', function () {
        $signIn.addClass('active');
        $register.removeClass('active');
        $formSignIn.removeClass('move-left');
        $formRegister.removeClass('move-left');
    });
    $register.on('click', function () {
        $signIn.removeClass('active');
        $register.addClass('active');
        $formSignIn.addClass('move-left');
        $formRegister.addClass('move-left');
    });
    $('input').on('submit', function (e) {
        e.preventDefault(); //used to prevent submission of form...remove for real use
    });
});
// show giỏ hàng
$(function () {

    var $overlay = $('.cart-overlay');
    var $cartPopUp = $('.desktop-cart-wrapper .quickview-cart');
    var $btnClose = $(".desktop-cart-wrapper .btnCloseQVCart");
    $(".desktop-cart-wrapper > a").on('click', function () {
        $cartPopUp.css('display', 'block');
    });
    $overlay.on('click', function () {
        $(this).removeClass('open');
        $cartPopUp.css('display', 'none');
    });
    $btnClose.on('click', function () {
        $cartPopUp.css('display', 'none');
    });
});
jQuery(document).ready(function () {
    var offset = 220;
    var duration = 500;
    jQuery('#back-to-top').fadeOut(duration);
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#back-to-top').fadeIn(duration);
        } else {
            jQuery('#back-to-top').fadeOut(duration);
        }
    });
    jQuery('#back-to-top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    });
    window.onscroll = changePos;
    function changePos() {
        var header = $("#header");
        var headerheight = $("#header").height();
        if (window.pageYOffset > headerheight) {
            header.addClass('scrolldown');
        } else {
            header.removeClass('scrolldown');
        }
    }


});

jQuery(document).ready(function () {
    const description = document.getElementById('desc-health-wellness');
    if (description) {
        description.style.webkitLineClamp = '3';
    }
    // Event listener for the 'Read More' button click
    jQuery('#readMoreBtn').click(function () {
        toggleReadMore(); // Call the function on button click
    });

    // Function to toggle the 'Read More'/'Show Less' functionality
    function toggleReadMore() {
        const description = document.getElementById('desc-health-wellness');
        const readMoreBtn = document.getElementById('readMoreBtn');

        if (description && readMoreBtn) {
            // Toggle between showing 3 lines or the full content
            if (description.style.webkitLineClamp === '3') {
                description.style.webkitLineClamp = 'unset'; // Show full text
                readMoreBtn.textContent = 'Show less...';
            } else {
                description.style.webkitLineClamp = '3'; // Show truncated text
                readMoreBtn.textContent = 'Read more...';
            }
        }

    }
});

jQuery(document).ready(function () {
    // Initially show half of the content by limiting the height of the list
    let isExpanded = false;

    jQuery('#readMore-aboutus').click(function () {
        if (isExpanded) {
            jQuery('#aboutUsList').removeClass('show-full');
            jQuery(this).text('Read more...');
        } else {
            jQuery('#aboutUsList').addClass('show-full');
            jQuery(this).text('Show Less...');
        }
        isExpanded = !isExpanded;
    });
});
jQuery(document).ready(function () {
    $('#control-date').datepicker({});
});
