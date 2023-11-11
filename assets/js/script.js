const mobileNavbar = document.querySelector(".main__nav ");

const menuBar = document.querySelector(".menu-bar");
const closeBtn = document.querySelector(".close-bar");

const openMobileNav = () => {
  mobileNavbar.classList.add("show__main__nav");
};

const closeMobileNav = () => {
  mobileNavbar.classList.remove("show__main__nav");
};

menuBar.addEventListener("click", openMobileNav);
closeBtn.addEventListener("click", closeMobileNav);
