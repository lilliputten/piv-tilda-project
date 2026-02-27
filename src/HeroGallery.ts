export function initHeroGallery() {
  const heroGallerySelector = '.uc-HeroGallery';
  const heroGallery = document.querySelector<HTMLDivElement>(heroGallerySelector);
  if (!heroGallery) {
    // eslint-disable-next-line no-console
    console.warn('[HeroGallery] Not found', heroGallerySelector);
    return;
  }

  console.log('[HeroGallery] Initialized', {
    heroGallery,
  });
  debugger;
}
