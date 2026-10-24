// Resilient site interactions. Safe after Astro view transitions and on direct page loads.
function initSiteInteractions() {
  const mobileBtn = document.getElementById('mobile-menu');
  const mobileMenu = document.getElementById('mobile-menu-items');

  if (mobileBtn && mobileMenu && !mobileBtn.dataset.menuHandlerAttached) {
    mobileBtn.dataset.menuHandlerAttached = 'true';
    mobileBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', isOpen);
      mobileBtn.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer && !particlesContainer.dataset.initialized) {
    particlesContainer.dataset.initialized = 'true';
    if (!reduceMotion) {
      let timer = 0;
      const createParticle = () => {
        if (document.hidden || !particlesContainer.isConnected) return;
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        particle.style.animationDuration = (Math.random() * 6 + 8) + 's';
        particlesContainer.appendChild(particle);
        window.setTimeout(() => particle.remove(), 12000);
      };
      const start = () => { if (!timer) timer = window.setInterval(createParticle, 900); };
      const stop = () => { if (timer) window.clearInterval(timer); timer = 0; };
      start();
      document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
    }
  }

  // Handle hash-only links and absolute paths with hashes (e.g. /#projects)
  // after Astro client navigation. Fall back to native browser navigation if
  // the element is not on this page.
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
      if (!samePage) return; // Let Astro/the browser navigate, then scroll on page-load.
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

document.addEventListener('DOMContentLoaded', () => { initSiteInteractions(); scrollToCurrentHash(); });
document.addEventListener('astro:page-load', () => { initSiteInteractions(); scrollToCurrentHash(); });
