const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".dots-list",
    bulletClass: "dots",
    bulletActiveClass: "dotsActive",
  },
  navigation: {
    nextEl: ".btn-arrow.next",
    prevEl: ".btn-arrow.prev",
  },
});
