// SWIPER init
var slider = new Swiper(".partners__list.swiper", {
    slidesPerView: 'auto',
    spaceBetween: 62,
    loop: true,
    freeMode: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1440: {
            spaceBetween: 134,
            centeredSlides: false
        },
    },
});

var slider = new Swiper(".slider", {
    navigation: {
      nextEl: ".arrow.right",
      prevEl: ".arrow.left",
    },
    slidesPerView: 'auto',
    spaceBetween: 27,
    loop: true,
    freeMode: true,
    centeredSlides: false,
    breakpoints: {
        768: {
            freeMode: false,
        },
    },
});