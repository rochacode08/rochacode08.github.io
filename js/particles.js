(function () {
  const ID = 'particles-js';

  const config = {
    particles: {
      number: { value: 45, density: { enable: true, value_area: 800 } },
      color: { value: '#3996DB' },
      shape: { type: 'circle' },
      opacity: { value: 0.2, random: true },
      size: { value: 2, random: true },
      line_linked: {
        enable: true,
        distance: 140,
        color: '#3996DB',
        opacity: 0.1,
        width: 0.8
      },
      move: {
        enable: true,
        speed: 1.8,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: { enable: false },
        onclick: { enable: false },
        resize: true
      }
    },
    retina_detect: true
  };

  function isLight() {
    return document.documentElement.dataset.theme === 'light';
  }

  function init() {
    if (typeof particlesJS === 'undefined' || document.getElementById(ID)?.querySelector('canvas')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    particlesJS(ID, config);
  }

  function destroy() {
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }
  }

  function sync() {
    isLight() ? init() : destroy();
  }

  window.addEventListener('load', sync);

  new MutationObserver(sync).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
})();
