const burgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.querySelectorAll(".nav-links");
const navContainer = document.getElementById("nav-container");
let click = 1;
burgerMenu.addEventListener("click", () => {
  navContainer.classList.toggle("show-menu");
  navContainer.style.alignItems = "flex-start";
  navLinks.forEach((navLink) => {
    if (click % 2 !== 0) {
      navLink.style.display = "flex";
      navLink.style.flexDirection = "column";
    }
    if (click % 2 === 0) {
      navLink.style.display = "none";
    }
  });
  click++;
});
