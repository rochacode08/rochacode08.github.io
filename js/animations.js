document.addEventListener('DOMContentLoaded', () => {
  // ── IntersectionObserver: muito mais eficiente que scroll + getBoundingClientRect ──

  const observerOptions = { threshold: 0.1 };

  // ── Project cards ──────────────────────────────────────────────
  const projectCards = document.querySelectorAll('#projects .project-card');

  const projectObserver = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;

    projectCards.forEach((card, i) => {
      setTimeout(() => card.classList.add('animate-project-card'), 300 * i);
    });

    projectObserver.disconnect();
  }, observerOptions);

  const projectsSection = document.getElementById('projects');
  if (projectsSection) projectObserver.observe(projectsSection);

  // ── Service cards ──────────────────────────────────────────────
  const serviceCards = document.querySelectorAll('#services .card');

  const serviceObserver = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;

    serviceCards.forEach((card, i) => {
      setTimeout(() => card.classList.add('animate-card'), 700 * i);
    });

    serviceObserver.disconnect();
  }, observerOptions);

  const servicesSection = document.getElementById('services');
  if (servicesSection) serviceObserver.observe(servicesSection);

  // ── Seta: scroll suave com duração controlada ──────────────────
  const arrow = document.querySelector('.arrow');
  const target = document.getElementById('my-projects');

  if (arrow && target) {
    arrow.addEventListener('click', (e) => {
      e.preventDefault();

      const start = window.scrollY;
      const end = target.getBoundingClientRect().top + window.scrollY;
      const distance = end - start;
      const duration = 1200; // ms — aumente para descer mais devagar
      let startTime = null;

      // Easing easeInOutCubic: começa devagar, acelera, desacelera no fim
      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, start + distance * easeInOutCubic(progress));

        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    });
  }
});