const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 15,
  
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-nav-next',
      prevEl: '.swiper-nav-prev',
    },
    
  });