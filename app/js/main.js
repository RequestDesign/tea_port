const rem = function (rem) {
  if (window.innerWidth > 768) {
    return 0.005208335 * window.innerWidth * rem;
  } else {
    return (100 / 375) * (0.1 * window.innerWidth) * rem;
  }
};

const createPag = (activeIndex, classPart, scrollbar, slider) => {
  const wrapper = document.querySelector(`${classPart}`);
  const current = wrapper.querySelector('.pag__current');
  const bullet = wrapper.querySelector('.swiper-pagination-bullet');
  const init = () => {
    if (scrollbar && window.innerWidth > 768) {
      slider.pagination.bullets[activeIndex - 1].appendChild(scrollbar);
      slider.pagination.bullets.forEach(bullet => {
        bullet.style.display = 'inline-flex';
      });
    } else {
      if (bullet) {
        scrollbar
          ? document
              .querySelector('.pag__scrollbar-wrapper')
              .appendChild(scrollbar)
          : null;
        if (bullet.classList.contains('swiper-pagination-bullet-active')) {
          bullet.style.display = 'none';
        } else {
          bullet.style.display = 'block';
        }
        current.innerHTML = `${activeIndex}`;
      }
    }
  };
  init();
  window.addEventListener('resize', init);
};

if (document.querySelector('.carousel-hero-product__slider')) {
  const productHeroSlider = new Swiper('.carousel-hero-product__slider', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    updateOnWindowResize: true,
    speed: 800,
    loop: true,
    navigation: {
      prevEl: '.carousel-hero-product__control-btn_prev',
      nextEl: '.carousel-hero-product__control-btn_next',
    },
  });
}

const ceremonySlider = new Swiper('.ceremony__slider', {
  slidesPerGroup: 1,
  observer: true,
  effect: 'fade',
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  allowTouchMove: false,
  autoHeight: true,
  updateOnWindowResize: true,
  speed: 800,

  pagination: {
    el: '.ceremony .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      index++;
      return `<span class="${className}">
        <span>${index}</span>
      </span>`;
    },
  },
  scrollbar: {
    el: '.ceremony .pag__scrollbar',
  },
  breakpoints: {
    768: {
      allowTouchMove: true,
    },
  },
  on: {
    init: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(
        activePaginationIndex,
        '.ceremony',
        swiper.scrollbar.el,
        swiper
      );
    },
    beforeTransitionStart: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(
        activePaginationIndex,
        '.ceremony',
        swiper.scrollbar.el,
        swiper
      );
    },
  },
});

const heroSlider = new Swiper('.hero-slider__box', {
  slidesPerGroup: 1,
  observer: true,
  effect: 'fade',
  updateOnWindowResize: true,
  speed: 800,
  fadeEffect: {
    crossFade: true,
  },

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
      return `<span class="${className}">
        <span>${index}</span>
      </span>`;
    },
  },
  scrollbar: {
    el: '.hero-slider .pag__scrollbar',
  },
  on: {
    init: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(
        activePaginationIndex,
        '.hero-slider',
        swiper.scrollbar.el,
        swiper
      );
    },
    beforeTransitionStart: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(
        activePaginationIndex,
        '.hero-slider',
        swiper.scrollbar.el,
        swiper
      );
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
    el: '.hor-slider.mood .swiper-pagination',
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
    init: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.mood', null, swiper);
    },
    beforeTransitionStart: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.mood', null, swiper);
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
    init: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.our', null, swiper);
    },
    beforeTransitionStart: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.our', null, swiper);
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
    init: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.popular', null, swiper);
    },
    beforeTransitionStart: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.popular', null, swiper);
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
    init: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.country', null, swiper);
    },
    beforeTransitionStart: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.country', null, swiper);
    },
  },
});

const catalogSlider = new Swiper('.products-list-swiper', {
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: rem(2),
      grid: {
        rows: 6,
        fill: 'row',
      },
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: rem(4.8),
      grid: {
        rows: 3,
        fill: 'row',
      },
    }
  },
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
    init: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.catalog', null, swiper);
    },
    beforeTransitionStart: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.catalog', null, swiper);
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
    init: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.articles', null, swiper);
    },
    beforeTransitionStart: function (swiper) {
      const activeSlideIndex = this.realIndex;
      const slidesPerGroup = this.params.slidesPerGroup;
      const activePaginationIndex =
        Math.floor(activeSlideIndex / slidesPerGroup) + 1;
      createPag(activePaginationIndex, '.articles', null, swiper);
    },
  },
});

const orderCatalogButton = document.querySelector('.--catalog .order__bar-menu-button');
const closeMenuButton = document.querySelector('.products-list__filter-controls-close');
const clearFiltersButton = document.querySelector('.products-list__filter-controls-button');

if (orderCatalogButton) {
  orderCatalogButton.addEventListener('click', () => {
    const menu = document.querySelector('.products-list__head');
    document.documentElement.classList.add('lock');

    menu.classList.add('--active');
  });

  closeMenuButton.addEventListener('click', () => {
    const menu = document.querySelector('.products-list__head');
    document.documentElement.classList.remove('lock');

    menu.classList.remove('--active');
  });

  clearFiltersButton.addEventListener('click', () => {
    const categories = document.querySelectorAll('.products-list__category');

    categories.forEach((category) => {
      const texts = category.querySelectorAll('.text');

      texts.forEach((text) => text.classList.remove('active'));

      const text = category.querySelector('.products-list__popup-wrapper .text');
      const textContent = text.textContent;
      const selectValue = category.querySelector('.select-value');
      selectValue.textContent = textContent;

      text.classList.add('active');
    })
  })
}
