document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const root = document.documentElement;
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  function updateButton() {
    const isLight = root.dataset.theme === 'light';
    themeToggle.textContent = isLight ? '🌙' : '☀️';
    themeToggle.setAttribute(
      'aria-label',
      isLight ? 'Mudar para tema escuro' : 'Mudar para tema claro'
    );
    if (themeColorMeta) {
      themeColorMeta.content = isLight ? '#F1F3F6' : '#0D0E11';
    }
  }

  themeToggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', root.dataset.theme);
    updateButton();
  });

  updateButton();
});
