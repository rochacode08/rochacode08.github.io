document.addEventListener('DOMContentLoaded', () => {
  const projectsGrid = document.getElementById('projects');
  const projectCards = [...document.querySelectorAll('#projects .project-card')];
  const toggleButton = document.getElementById('toggle-projects-button');

  if (!projectsGrid || !projectCards.length || !toggleButton) return;

  let isExpanded = false;

  // Calcula quantos cards cabem em duas linhas do grid
  function calcVisibleCount() {
    const cardWidth = projectCards[0].getBoundingClientRect().width;
    const perRow = Math.max(1, Math.floor(projectsGrid.clientWidth / cardWidth));
    return perRow * 2;
  }

  function updateVisibility() {
    const baseVisibleCount = calcVisibleCount();
    const visibleCount = isExpanded ? projectCards.length : baseVisibleCount;
    const needsButton = projectCards.length > baseVisibleCount;

    projectCards.forEach((card, i) => {
      const wasHidden = card.style.display === 'none';
      const shouldShow = i < visibleCount;

      card.style.display = shouldShow ? '' : 'none';

      // Anima os cards recém-revelados ao expandir
      if (shouldShow && wasHidden && isExpanded) {
        setTimeout(() => card.classList.add('animate-project-card'), 300 * (i - baseVisibleCount));
      }

      if (!shouldShow) card.classList.remove('animate-project-card');
    });

    toggleButton.textContent = isExpanded ? 'Mostrar menos' : 'Mostrar mais';
    toggleButton.style.display = needsButton ? '' : 'none';
  }

  toggleButton.addEventListener('click', () => {
    isExpanded = !isExpanded;
    updateVisibility();
  });

  // Recalcula ao redimensionar usando ResizeObserver (mais eficiente que resize event)
  new ResizeObserver(updateVisibility).observe(projectsGrid);

  updateVisibility();
});