const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const demoForm = document.querySelector('.contact-form');
if (demoForm) {
  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Demo form submitted. Connect this form to the client intake or automation before launch.');
  });
}
