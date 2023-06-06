const mobileMenu = document.querySelector(".nav-links");
mobileMenu.elHeight = getComputedStyle(mobileMenu).height;
mobileMenu.style.height = 0;

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  if (hamburger.classList.contains("active")) {
    mobileMenu.style.height = mobileMenu.elHeight;
    mobileMenu.style.opacity = 1;
  } else {
    mobileMenu.style.height = 0;
    mobileMenu.style.opacity = 0;
  }
});
