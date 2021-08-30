//script for slick-slider
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
//     });
// });

// var slider = tns({
//     container: '.my-slider',
//     items: 3,
//     slideBy: 'page',
//     autoplay: true
//   });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    responsive: {
        320: {
            // edgePadding: 20,
            // gutter: 20,
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