import { startTypingLoop } from './typingEffect.js';
import { initPortfolioAnimations } from './portfolioAnimations.js';
import { initPopupAndHorizontalScroll } from './popupAndScroll.js';
import { startMarquee } from './marquee.js';
import { setVideoPlaybackRate } from './videoControl.js';

document.addEventListener("DOMContentLoaded", () => {
  startTypingLoop();
  initPortfolioAnimations();
  initPopupAndHorizontalScroll();
  startMarquee();
  setVideoPlaybackRate();
});
