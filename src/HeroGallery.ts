let owlCarousel: JQuery<HTMLDivElement> | undefined;

function initCarousel() {
  const slides = [
    // Gallery slide ids. See also styles in the `src/styles/HeroGallery.scss` module.
    '#rec1966648601',
    '#rec1972774181',
  ];
  const jqSlides = $(slides.join(', '));
  const block = $('.uc-HeroGallery');
  const wrap = $(block.find('.carousel-wrapper'));
  owlCarousel = wrap.find('.tn-atom');
  owlCarousel.addClass('owl-carousel owl-theme');
  jqSlides.appendTo(owlCarousel);

  // Initialize owl carousel with responsive breakpoints
  owlCarousel.owlCarousel({
    loop: true,
    center: true,
    dots: true,
    nav: true,
    margin: 0,
    items: 1,
    navText: ['❮', '❯'],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });

  jqSlides.addClass('inited');
}

let updateGemetryHandler: NodeJS.Timeout;

function updateGemetry() {
  clearTimeout(updateGemetryHandler);
  updateGemetryHandler = setTimeout(() => {
    requestAnimationFrame(() => {
      owlCarousel?.trigger('refresh.owl.carousel');
    });
  }, 1000);
}

export function initHeroGallery() {
  const heroGallerySelector = '.uc-HeroGallery';
  const heroGallery = document.querySelector<HTMLDivElement>(heroGallerySelector);
  if (!heroGallery) {
    // eslint-disable-next-line no-console
    console.warn('[HeroGallery] Not found', heroGallerySelector);
    return;
  }

  initCarousel();

  window.addEventListener('resize', updateGemetry);
}
