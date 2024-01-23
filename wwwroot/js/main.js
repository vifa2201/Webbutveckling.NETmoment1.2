const hamburger = document.querySelector(".hamburger")
  , navMenu = document.querySelector(".navMenu");
function mobileMenu() {
    hamburger.classList.toggle("active"),
    navMenu.classList.toggle("active")
}
hamburger.addEventListener("click", mobileMenu);
const navLink = document.querySelectorAll(".navLink");
function closeMenu() {
    hamburger.classList.remove("active"),
    navMenu.classList.remove("active")
}
navLink.forEach((e=>e.addEventListener("click", closeMenu)))
