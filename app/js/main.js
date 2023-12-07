const rem = function (rem) {
  if (window.innerWidth > 768) {
    return 0.005208335 * window.innerWidth * rem;
  } else {
    return (100 / 375) * (0.1 * window.innerWidth) * rem;
  }
};

const createPag = (activeIndex, classPart) => {
  const wrapper = document.querySelector(`${classPart}`);
  const current = wrapper.querySelector('.pag__current');
  const bullet = wrapper.querySelector('.swiper-pagination-bullet');
  if (bullet.classList.contains('swiper-pagination-bullet-active')) {
    bullet.style.display = 'none';
  } else {
    bullet.style.display = 'block';
  }
  current.textContent = activeIndex;
};

const heroSlider = new Swiper('.hero-slider__box', {
  slidesPerGroup: 1,
  observer: true,
  effect: 'fade',
  updateOnWindowResize: true,
  speed: 800,

  creativeEffect: {
    prev: {
      translate: [0, '-100%', 0],
    },
    next: {
      translate: [0, '100%', 0],
    },
  },
  pagination: {
    el: '.hero-slider .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      index++;
      return '<span class="' + className + '">' + index + '</span>';
    },
  },
  scrollbar: {
    el: '.hero-slider .pag__scrollbar',
  },
  on: {
    init: function () {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.hero-slider');
    },
    beforeTransitionStart: function () {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.hero-slider');
    },
  },
  breakpoints: {
    769: {
      allowTouchMove: false,
      effect: 'creative', // Установите 'creative' для десктопов
    },
    320: {
      allowTouchMove: true,
      effect: 'slide', // Установите 'slide' для мобильных
    },
  },
});

const moodSlider = new Swiper('.mood-slider', {
  speed: 800,
  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
  },
  observer: true,
  updateOnWindowResize: true,

  pagination: {
    el: '.mood .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      index++;
      return '<span class="' + className + '">' + index + '</span>';
    },
  },

  scrollbar: {
    el: '.mood .pag__scrollbar',
  },

  breakpoints: {
    769: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: rem(5.4),
      scrollbar: {
        enabled: true,
      },
    },
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1.72,
      spaceBetween: rem(1.8),
      scrollbar: {
        enabled: false,
      },
    },
  },
  on: {
    init: function () {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.mood');
    },
    beforeTransitionStart: function () {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.mood');
    },
  },
});

const ourSlider = new Swiper('.our-slider', {
  speed: 800,
  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
  },
  direction: 'horizontal',
  observer: true,
  updateOnWindowResize: true,

  pagination: {
    el: '.our .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      index++;
      return '<span class="' + className + '">' + index + '</span>';
    },
  },

  scrollbar: {
    el: '.our .pag__scrollbar',
  },

  breakpoints: {
    769: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: rem(5.4),
      scrollbar: {
        enabled: true,
      },
    },
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1.72,
      spaceBetween: rem(1.8),
      scrollbar: {
        enabled: false,
      },
    },
  },
  on: {
    init: function () {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.our');
    },
    beforeTransitionStart: function () {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.our');
    },
  },
});

const popularSlider = new Swiper('.popular-slider', {
  speed: 800,
  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
  },
  direction: 'horizontal',
  observer: true,
  updateOnWindowResize: true,

  pagination: {
    el: '.popular .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      index++;
      return '<span class="' + className + '">' + index + '</span>';
    },
  },

  scrollbar: {
    el: '.popular .pag__scrollbar',
  },

  breakpoints: {
    769: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: rem(5.4),
      scrollbar: {
        enabled: true,
      },
    },
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1.72,
      spaceBetween: rem(1.8),
      scrollbar: {
        enabled: false,
      },
    },
  },
  on: {
    init: function () {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.popular');
    },
    beforeTransitionStart: function () {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.popular');
    },
  },
});

const countrySlider = new Swiper('.country-slider', {
  speed: 800,
  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
  },
  direction: 'horizontal',
  observer: true,
  updateOnWindowResize: true,

  pagination: {
    el: '.country .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      index++;
      return '<span class="' + className + '">' + index + '</span>';
    },
  },

  scrollbar: {
    el: '.country .pag__scrollbar',
  },

  breakpoints: {
    769: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: rem(5.4),
      scrollbar: {
        enabled: true,
      },
    },
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1.73,
      spaceBetween: rem(1.9),
      scrollbar: {
        enabled: false,
      },
    },
  },
  on: {
    init: function () {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.country');
    },
    beforeTransitionStart: function () {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.country');
    },
  },
});

const catalogSlider = new Swiper('.products-list-swiper', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  grid: {
    rows: 3,
    fill: 'row',
  },
  spaceBetween: 30,

  scrollbar: {
    el: '.pag__scrollbar',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      index++;
      return '<span class="' + className + '">' + index + '</span>';
    },
  },
  speed: 800,
  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
  },
  direction: 'horizontal',
  observer: true,
  updateOnWindowResize: true,
  on: {
    init: function () {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.catalog');
    },
    beforeTransitionStart: function () {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.catalog');
    },
  },
});

const articlesSlider = new Swiper('.articles-slider', {
  slidesPerView: 1,
  spaceBetween: rem(2.4),
  grid: {
    rows: 3,
  },
  speed: 800,
  //   autoplay: {
  //     delay: 4500,
  //     disableOnInteraction: true,
  //   },
  //   grid: {
  //     rows: 3,
  //   },
  //   spaceBetween: rem(2.4),
  //   direction: 'vertical',
  observer: true,
  updateOnWindowResize: true,

  pagination: {
    el: '.articles .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      index++;
      return '<span class="' + className + '">' + index + '</span>';
    },
  },

  scrollbar: {
    el: '.articles .pag__scrollbar',
  },

  breakpoints: {
    769: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: rem(5.4),
      scrollbar: {
        enabled: true,
      },
      grid: {
        rows: 1,
      },
    },
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1.72,
      spaceBetween: rem(1.8),
      scrollbar: {
        enabled: false,
      },
    },
  },
  on: {
    init: function () {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.articles');
    },
    beforeTransitionStart: function () {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.articles');
    },
  },
});
