(() => {
  'use strict';
  document.querySelectorAll('[data-case-comparison]').forEach(comparison => {
    const range = comparison.querySelector('input[type="range"]');
    const update = () => {
      const value = Number(range.value);
      comparison.style.setProperty('--compare', `${value}%`);
      range.setAttribute('aria-valuetext', `Draft ${value} percent; final ${100 - value} percent`);
    };
    range.addEventListener('input', update);
    update();
  });
})();
