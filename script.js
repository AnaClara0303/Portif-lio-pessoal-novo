
// Menu responsivo
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const hamburgerButton = document.querySelector(".hamburger-button");
const navMenu = document.querySelector(".nav-menu");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("change");
  navMenu.classList.toggle("active");
});