const navButton = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
  navbar.classList.toggle('change');
});
