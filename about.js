// MOBILE MENU

const menu = document.querySelector('.menu');
const cancel = document.querySelector('.close');
const menuLinks = document.querySelector('.menu-links');

menu.addEventListener('click', () => {
  menuLinks.style.display = 'block';
});
cancel.addEventListener('click', () => {
  menuLinks.style.display = 'none';
});
