document.addEventListener('DOMContentLoaded', () => {
  const projectsGrid = document.getElementById('projects');
  const projectCards = [...document.querySelectorAll('#projects .project-card')];
  const toggleButton = document.getElementById('toggle-projects-button');
  const filterButtons = [...document.querySelectorAll('#project-filters .filter-button')];

  if (!projectsGrid || !projectCards.length || !toggleButton) return;

  let isExpanded = false;
  let activeFilter = 'all';

  function getFilteredCards() {
    if (activeFilter === 'all') return projectCards;
    return projectCards.filter((card) => card.dataset.category === activeFilter);
  }

  function calcVisibleCount(referenceCard) {
    const cardWidth = referenceCard.getBoundingClientRect().width;
    const perRow = Math.max(1, Math.floor(projectsGrid.clientWidth / cardWidth));
    return perRow * 2;
  }

  function updateVisibility() {
    const filteredCards = getFilteredCards();

    projectCards.forEach((card) => {
      card.style.display = filteredCards.includes(card) ? '' : 'none';
    });

    const baseVisibleCount = calcVisibleCount(filteredCards[0]);
    const visibleCount = isExpanded ? filteredCards.length : baseVisibleCount;
    const needsButton = filteredCards.length > baseVisibleCount;

    const revealStarted = projectCards.some((card) =>
      card.classList.contains('animate-project-card')
    );

    filteredCards.forEach((card, i) => {
      const wasHidden = !card.classList.contains('animate-project-card');
      const shouldShow = i < visibleCount;

      card.style.display = shouldShow ? '' : 'none';

      if (shouldShow && wasHidden && revealStarted) {
        setTimeout(() => card.classList.add('animate-project-card'), 120 * i);
      }

      if (!shouldShow) card.classList.remove('animate-project-card');
    });

    toggleButton.textContent = isExpanded ? 'Mostrar menos' : 'Mostrar mais';
    toggleButton.style.display = needsButton ? '' : 'none';
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.dataset.filter === activeFilter) return;

      activeFilter = button.dataset.filter;
      isExpanded = false; 

      filterButtons.forEach((b) => {
        const isActive = b === button;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-pressed', isActive);
      });

      updateVisibility();
    });
  });

  toggleButton.addEventListener('click', () => {
    isExpanded = !isExpanded;
    updateVisibility();
  });

  // Recalcula ao redimensionar usando ResizeObserver (mais eficiente que resize event)
  new ResizeObserver(updateVisibility).observe(projectsGrid);

  updateVisibility();
});