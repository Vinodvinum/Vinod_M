// Resilient site interactions. Safe after Astro view transitions and on direct page loads.
function releaseUnstartedWelcomeSplash() {
  // Inline scripts inside an Astro view-transition swap are not re-executed.
  // If the home splash arrived through client navigation, it would otherwise
  // remain above the page forever. Preserve the intro on a real page load.
  const splash = document.getElementById('welcome-splash');
  if (splash && splash.dataset.started !== 'true') {
    document.body.classList.remove('welcome-lock');
    splash.remove();
  }
}

function initSiteInteractions() {
  const mobileBtn = document.getElementById('mobile-menu');
  const mobileMenu = document.getElementById('mobile-menu-items');

  if (mobileBtn && mobileMenu && !mobileBtn.dataset.menuHandlerAttached) {
    mobileBtn.dataset.menuHandlerAttached = 'true';
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.hidden;
      mobileMenu.hidden = !isOpen;
      mobileBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const particlesContainer = document.getElementById('particles');
  // The design uses a small, fixed starfield in the intro and hero. Avoid spawning
  // random floating particles across every section; this keeps the visual calm.
  if (particlesContainer) {
    particlesContainer.dataset.initialized = 'true';
    particlesContainer.replaceChildren();
  }

  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach((link) => {
      if (link.dataset.closeMenuAttached) return;
      link.dataset.closeMenuAttached = 'true';
      link.addEventListener('click', () => {
        mobileMenu.hidden = true;
        mobileBtn?.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    if (anchor.dataset.hashNavigationAttached) return;
    anchor.dataset.hashNavigationAttached = 'true';
    anchor.addEventListener('click', (event) => {
      const raw = anchor.getAttribute('href');
      if (!raw || raw === '#') return;
      let url;
      try { url = new URL(raw, window.location.href); } catch { return; }
      if (!url.hash) return;
      const samePage = url.origin === window.location.origin && url.pathname.replace(/\/$/, '') === window.location.pathname.replace(/\/$/, '');
      if (!samePage) return;
      const id = decodeURIComponent(url.hash.slice(1));
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      history.pushState(null, '', url.pathname + url.search + url.hash);
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });
}

function scrollToCurrentHash() {
  if (!window.location.hash) return;
  const id = decodeURIComponent(window.location.hash.slice(1));
  const target = document.getElementById(id);
  if (target) window.requestAnimationFrame(() => target.scrollIntoView({ behavior: 'auto', block: 'start' }));
}

document.addEventListener('DOMContentLoaded', () => {
  releaseUnstartedWelcomeSplash();
  initSiteInteractions();
  scrollToCurrentHash();
});
document.addEventListener('astro:page-load', () => {
  releaseUnstartedWelcomeSplash();
  initSiteInteractions();
  scrollToCurrentHash();
});
