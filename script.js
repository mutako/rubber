const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const yearNode = document.getElementById('year');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (menuButton && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  document.addEventListener('click', (event) => {
    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuButton.contains(event.target);
    if (!clickedInsideMenu && !clickedToggle) {
      closeMenu();
    }
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = 'Thank you. Your inquiry has been recorded. We will contact you soon.';
    contactForm.reset();
  });
}

if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}
