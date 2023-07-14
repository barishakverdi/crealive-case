import Swiper, {Autoplay, Thumbs} from 'swiper';
import 'swiper/css/bundle';

// const swiper = new Swiper('.swiper', {
//     modules: [Navigation, Pagination, Autoplay],
//
//     navigation: {
//         prevEl: '.swiper-button-prev',
//         nextEl: '.swiper-button-next',
//     },
//     speed: 700,
//     slidesPerView: 2,
//     loop: false,
//     autoplay: {
//       delay: 5000,
//     },
// });

const swiper = new Swiper(".thumbCarousel", {
    modules: [Autoplay, Thumbs],

    direction: "horizontal",
    slidesPerView: 2,
    spaceBetween: 4,
    // freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
        576: {
            direction: "vertical",
            width: 102,
            slidesPerView: 5,
            spaceBetween: 0,
        },
    },
});
const swiper2 = new Swiper(".mainCarousel", {
    modules: [Autoplay, Thumbs],

    loop: true,
    direction: "horizontal",
    thumbs: {
        swiper: swiper,
    },

    breakpoints: {
        576: {
            direction: "vertical",
        },
    },
});
