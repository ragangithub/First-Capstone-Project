// MOBILE MENU

const menu = document.querySelector(".menu");
const cancel = document.querySelector(".close");
const menu_links = document.querySelector(".menu-links");

menu.addEventListener("click", () => {
  menu_links.style.display = "block";
  console.log("hi");
});
cancel.addEventListener("click", () => {
  menu_links.style.display = "none";
});
