const burger = document.querySelector(".burger");
const iconBars = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const navBelt = document.querySelector(".nav");
// const body = document.querySelector("body");

burger.addEventListener("click", function () {
    iconBars.classList.toggle("show");
    iconX.classList.toggle("show");
    navBelt.classList.toggle("show");
    // body.classList.toggle("show");
})


// Scroll to section 
$('#for-who').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.second-section').offset().top,
    }, 500)

    if ($(window).width() < 1251) {
        $('.burger, .fa-bars, .fa-times, .nav').toggleClass("show")
    }
});

$('#functions').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.third-section').offset().top
    }, 500)

    if ($(window).width() < 1251) {
        $('.burger, .fa-bars, .fa-times, .nav').toggleClass("show")
    }
});



$('#customers').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.brands-box').offset().top
    }, 500)

    if ($(window).width() < 1251) {
        $('.burger, .fa-bars, .fa-times, .nav').toggleClass("show")
    }
});



$('#app').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.fourth-section').offset().top
    }, 500)

    if ($(window).width() < 1251) {
        $('.burger, .fa-bars, .fa-times, .nav').toggleClass("show")
    }
});



// Back to top button
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 1000) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});



// Form validation 
$(document).ready(function () {
    $(".brand-promise form.register").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        invalidHandler: function (f) {
            var form = $(f);
            $(".register").addClass('error-border');
        },
        submitHandler: function (form) {
            $(".register").removeClass('error-border');
        },
        highlight: function (element, errorClass) {
            $(element).closest('form').addClass('error-border');
            $(element).closest('form').removeClass('valid-border');
        },
        unhighlight: function (element, errorClass) {

            $(element).closest('form').removeClass('error-border');
            $(element).closest('form').addClass('valid-border');
        }

    });
});


$('form.register .register-btn').click(function (event) {
    event.preventDefault();
    $(".brand-promise form.register").submit();
})



// Smaller than 800px 

if ($(window).width() < 800) {
    $("form").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        }
    });

};









// Footer form validation 

$(document).ready(function () {
    $("form#register").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        invalidHandler: function (f) {
            var form = $(f);
            $("#register").addClass('error-border');
        },
        submitHandler: function (form) {
            $("#register").removeClass('error-border');
        },
        highlight: function (element, errorClass) {
            $(element).closest('form').addClass('error-border');
            $(element).closest('form').removeClass('valid-border');
        },
        unhighlight: function (element, errorClass) {

            $(element).closest('form').removeClass('error-border');
            $(element).closest('form').addClass('valid-border');
        }

    });
});

$('form#register .submit-btn').click(function (event) {
    event.preventDefault();
    $("form#register").submit();
})

// Smaller than 800px 

if ($(window).width() < 800) {
    // change functionality for smaller screens
    $("form#register").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        }
    });

};