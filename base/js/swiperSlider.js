var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    allowSlideNext:true,
    allowSlidePrev:true,
    allowTouchMove:true,
    loop:true,
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
        },
        "@0.75": {
            slidesPerView: 2,
        },
        "@1.00": {
            slidesPerView: 3,
        },
        "@1.50": {
            slidesPerView: 4,
        },
        1440: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        540: {
            slidesPerView: 2,
        },
        425: {
            slidesPerView: 1,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});