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
    const visibleCount = isExpanded ? projectCards.length : calcVisibleCount();
    const allFit = projectCards.length <= visibleCount;
    const baseIndex = calcVisibleCount(); // captura uma vez só, evita delay negativo

    projectCards.forEach((card, i) => {
      const wasHidden = card.style.display === 'none';
      const shouldShow = i < visibleCount;

      card.style.display = shouldShow ? '' : 'none';

      // Anima os cards recém-revelados ao expandir
      if (shouldShow && wasHidden && isExpanded) {
        setTimeout(() => card.classList.add('animate-project-card'), 300 * (i - baseIndex));
      }

      if (!shouldShow) card.classList.remove('animate-project-card');
    });

    toggleButton.textContent = isExpanded ? 'Mostrar menos' : 'Mostrar mais';
    toggleButton.style.display = allFit ? 'none' : '';
  }

  toggleButton.addEventListener('click', () => {
    isExpanded = !isExpanded;
    updateVisibility();

    if (!isExpanded) {
      setTimeout(() => toggleButton.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
    }
  });

  // Recalcula ao redimensionar usando ResizeObserver (mais eficiente que resize event)
  new ResizeObserver(updateVisibility).observe(projectsGrid);

  updateVisibility();
});