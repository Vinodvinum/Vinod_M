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
      mobileBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Project filtering stays keyboard-accessible and uses data attributes rendered by Astro.
  const projectFilters = document.getElementById('project-filters');
  if (projectFilters && projectFilters.dataset.bound !== 'true') {
    projectFilters.dataset.bound = 'true';
    const filterButtons = Array.from(projectFilters.querySelectorAll('[data-project-filter]'));
    const projectCards = Array.from(document.querySelectorAll('[data-project-filter-card]'));
    const projectGroups = Array.from(document.querySelectorAll('[data-project-group]'));
    const featuredGroup = document.querySelector('[data-featured-projects]');
    const filterStatus = document.getElementById('project-filter-status');

    const applyProjectFilter = (filter, button) => {
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });

      projectCards.forEach((card) => {
        card.hidden = filter !== 'all' && card.dataset.projectFilterCard !== filter;
      });

      projectGroups.forEach((group) => {
        group.hidden = filter !== 'all' && group.dataset.projectGroup !== filter;
      });

      if (featuredGroup) {
        const visibleFeaturedCards = Array.from(featuredGroup.querySelectorAll('[data-project-filter-card]'))
          .some((card) => !card.hidden);
        featuredGroup.hidden = filter !== 'all' && !visibleFeaturedCards;
      }

      if (filterStatus) {
        const label = button?.textContent?.trim() || 'Selected category';
        filterStatus.textContent = filter === 'all'
          ? 'Showing all project categories.'
          : `Showing projects in: ${label}.`;
      }
    };

    filterButtons.forEach((button) => {
      if (button.dataset.filterHandlerAttached) return;
      button.dataset.filterHandlerAttached = 'true';
      button.addEventListener('click', () => applyProjectFilter(button.dataset.projectFilter || 'all', button));
    });
  }

  // Subtle pointer-responsive mandala. It is intentionally disabled for reduced-motion users.
  const heroVisual = document.querySelector('.hero-visual');
  const heroWheel = heroVisual?.querySelector('.hero-wheel');
  if (heroVisual && heroWheel && !heroVisual.dataset.parallaxBound) {
    heroVisual.dataset.parallaxBound = 'true';
    if (!reduceMotion) {
      heroVisual.addEventListener('pointermove', (event) => {
        const bounds = heroVisual.getBoundingClientRect();
        if (!bounds.width || !bounds.height) return;
        const horizontal = ((event.clientX - bounds.left) / bounds.width - 0.5) * 9;
        const vertical = ((event.clientY - bounds.top) / bounds.height - 0.5) * 9;
        heroWheel.style.setProperty('--parallax-x', `${horizontal.toFixed(2)}px`);
        heroWheel.style.setProperty('--parallax-y', `${vertical.toFixed(2)}px`);
      });
      heroVisual.addEventListener('pointerleave', () => {
        heroWheel.style.setProperty('--parallax-x', '0px');
        heroWheel.style.setProperty('--parallax-y', '0px');
      });
    }
  }

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
