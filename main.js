window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navContainer = document.querySelector('.nav');

  if (hamburger && navLinks && navContainer) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      navContainer.classList.toggle('transparent-bg'); // This class controls background
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('suggestion-form');
  const text = document.getElementById('suggestion-text');
  const list = document.getElementById('suggestion-list');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const suggestion = text.value.trim();
    if (suggestion !== '') {
      const item = document.createElement('div');
      item.classList.add('suggestion-item');
      item.textContent = suggestion;
      list.prepend(item);
      text.value = '';
    }
  });
});
