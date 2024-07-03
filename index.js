

const mobileMenu = document.getElementById("mobile-nav");
const menuIcon = document.getElementById("menu-icon");
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("close-menu");

menuOpen.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
  }
};
