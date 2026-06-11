document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = { threshold: 0.1 };

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

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function smoothScrollTo(targetY) {
    if (prefersReducedMotion) {
      window.scrollTo(0, targetY);
      return;
    }

    const start = window.scrollY;
    const distance = targetY - start;
    const duration = 1200;
    let startTime = null;

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
  }

  const arrow = document.querySelector('.arrow');
  const target = document.getElementById('my-projects');

  if (arrow && target) {
    arrow.addEventListener('click', (e) => {
      e.preventDefault();
      smoothScrollTo(target.getBoundingClientRect().top + window.scrollY);
    });
  }
});
