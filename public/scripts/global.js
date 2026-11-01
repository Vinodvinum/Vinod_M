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

  // Project Explorer: combine live search with discipline filters.
  const projectFilters = document.getElementById('project-filters');
  if (projectFilters && projectFilters.dataset.bound !== 'true') {
    projectFilters.dataset.bound = 'true';
    const filterButtons = Array.from(projectFilters.querySelectorAll('[data-project-filter]'));
    const searchInput = document.getElementById('project-search');
    const clearSearchButton = document.getElementById('project-search-clear');
    const projectCards = Array.from(document.querySelectorAll('[data-project-filter-card]'));
    const catalogueCards = Array.from(document.querySelectorAll('[data-project-catalogue-card]'));
    const projectGroups = Array.from(document.querySelectorAll('[data-project-group]'));
    const featuredGroup = document.querySelector('[data-featured-projects]');
    const filterStatus = document.getElementById('project-filter-status');
    const emptyState = document.getElementById('project-empty-state');
    const totalCount = catalogueCards.length;
    let activeFilter = 'all';

    const applyProjectFilter = (filter = activeFilter) => {
      activeFilter = filter;
      filterButtons.forEach((button) => {
        const active = (button.dataset.projectFilter || 'all') === activeFilter;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });

      const query = (searchInput?.value || '').trim().toLocaleLowerCase();
      projectCards.forEach((card) => {
        const categoryMatches = activeFilter === 'all' || card.dataset.projectFilterCard === activeFilter;
        const searchText = (card.dataset.projectSearch || '').toLocaleLowerCase();
        const searchMatches = !query || searchText.includes(query);
        card.hidden = !(categoryMatches && searchMatches);
      });

      projectGroups.forEach((group) => {
        const visibleCards = Array.from(group.querySelectorAll('[data-project-catalogue-card]'));
        group.hidden = !visibleCards.some((card) => !card.hidden);
      });

      if (featuredGroup) {
        const featuredCards = Array.from(featuredGroup.querySelectorAll('[data-project-filter-card]'));
        featuredGroup.hidden = !featuredCards.some((card) => !card.hidden);
      }

      const visibleCount = catalogueCards.filter((card) => !card.hidden).length;
      if (filterStatus) {
        const filterLabel = filterButtons.find((button) => button.dataset.projectFilter === activeFilter)?.dataset.filterLabel || 'All work';
        const suffix = query ? ` matching “${searchInput.value.trim()}”` : '';
        filterStatus.textContent = `Showing ${visibleCount} of ${totalCount} projects${suffix}${activeFilter === 'all' ? '' : ` in ${filterLabel}`}.`;
      }
      if (emptyState) emptyState.hidden = visibleCount !== 0;
      if (clearSearchButton) clearSearchButton.hidden = !query;
    };

    filterButtons.forEach((button) => {
      if (button.dataset.filterHandlerAttached) return;
      button.dataset.filterHandlerAttached = 'true';
      button.addEventListener('click', () => applyProjectFilter(button.dataset.projectFilter || 'all'));
    });

    searchInput?.addEventListener('input', () => applyProjectFilter());
    searchInput?.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && searchInput.value) {
        searchInput.value = '';
        applyProjectFilter();
      }
    });
    clearSearchButton?.addEventListener('click', () => {
      if (!searchInput) return;
      searchInput.value = '';
      applyProjectFilter();
      searchInput.focus();
    });

    applyProjectFilter('all');
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
