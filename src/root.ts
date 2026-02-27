import './project-info.scss';
import './variables/variables-expose.scss';
import './styles';

import { isDebug } from './core/constants/isDebug';
import { isDev } from './core/constants/isDev';
import { initHeroGallery } from './HeroGallery';

/** Print app info */
function printAppInfo() {
  const appVersion = process.env.APP_VERSION;
  // eslint-disable-next-line no-console
  const consoleMethod = isDebug || isDev ? console.warn : console.log;
  consoleMethod.call(console, appVersion);
}

/** Init all the page */
function initPage() {
  // Start subcomponents...
  initHeroGallery();

  /* // NOTE: This doesn't work
   * initTildaLabel();
   */

  // Forcibely update components' dimensions
  window.dispatchEvent(new Event('resize'));
}

printAppInfo();

window.addEventListener('load', initPage);
