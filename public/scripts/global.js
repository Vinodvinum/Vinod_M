// Site-wide interactions. Kept in one place to avoid duplicate event handlers.
document.addEventListener('DOMContentLoaded', () => {
  const mobileBtn = document.getElementById('mobile-menu');
  const mobileMenu = document.getElementById('mobile-menu-items');

  if (mobileBtn && mobileMenu && !mobileBtn.dataset.menuHandlerAttached) {
    mobileBtn.dataset.menuHandlerAttached = 'true';
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('hidden') === false;
      mobileBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!mediaQuery.matches) {
    const particlesContainer = document.getElementById('particles');
    let particleTimer = 0;

    function createParticle() {
      if (!particlesContainer || document.hidden) return;
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 4 + 's';
      particle.style.animationDuration = (Math.random() * 6 + 8) + 's';
      particlesContainer.appendChild(particle);
      window.setTimeout(() => particle.remove(), 12000);
    }

    particleTimer = window.setInterval(createParticle, 700);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && particleTimer) {
        window.clearInterval(particleTimer);
        particleTimer = 0;
      } else if (!document.hidden && !particleTimer) {
        particleTimer = window.setInterval(createParticle, 700);
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: mediaQuery.matches ? 'auto' : 'smooth' });
      }
    });
  });
});
