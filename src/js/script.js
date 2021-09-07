//script from jQuery for slick-slider
// $(document).ready(function () {
//   $('.carousel__inner').slick({
//     speed: 1200,
//     slidesToShow: 1,
//     prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//     nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//     responsive: [
//         {
//             breakpoint: 991,
//             settings: {
//                 arrows: false,
//                 dots: true
//             }
//         },
//     ]
// });

// var slider = tns({
//     container: '.my-slider',
//     items: 3,
//     slideBy: 'page',
//     autoplay: true
//   });

//Script for slider - Vanilla JS
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    responsive: {
        320: {
            nav: true
        },
        991: {
            nav: false
        }
    }
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

// Ogigin script from jQuery for tabs
// $(document).ready(function () {
//     $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
//     $(this)
//       .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
//       .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
//   });
// });

//jQuery
(function ($) {
// My script from jQuery for tabs
$(function() {
  
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
    // Script for toogle "Details" to "Back" in cards of catalog
    function toggleSlide(item) {
        $(item).each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');

        })
        })
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
    

    //Script for Modal
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    
    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__text').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    //Validation for forms
    function validateForms (form) {
        $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите минимум {0} буквы")
            },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
            }           
        }
    });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    // Mask for phone in inputs
    $('input[name="phone"]').mask("+7 (999) 999-99-99");

    //For sending data from forms to email
    $('form').on("submit", function (e) {
        e.preventDefault;
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
});
})(jQuery);