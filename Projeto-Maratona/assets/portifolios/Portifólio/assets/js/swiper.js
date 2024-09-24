
var swiper = new Swiper(".mySwiperProjects", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
    768: {
    slidesPerView: 2,
    spaceBetween: 40
    },
    992:
    {
        slidesPerView: 3,
        spaceBetween: 20
    },
},
    navigation: {
        nextEl: ".swiper-button-next-projects",
        prevEl: ".swiper-button-prev-projects",
    },
});