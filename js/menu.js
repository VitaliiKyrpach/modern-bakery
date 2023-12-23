const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-open");
const menuBtnClose = document.querySelector(".menu-close");

const handleMenu = () => {
  mobileMenu.classList.toggle("is-open");
  document.body.classList.toggle("no-scroll");
};

menuBtnOpen.addEventListener("click", handleMenu);
menuBtnClose.addEventListener("click", handleMenu);
