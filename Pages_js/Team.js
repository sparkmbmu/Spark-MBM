 feather.replace();
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = menuToggle.querySelector("svg:not(#close-icon)");
const closeIcon = document.getElementById("close-icon");
const links = document.querySelectorAll("#mobile-menu .nav-link, #mobile-menu .nav-link-join");

function openMenu() {
  mobileMenu.classList.add("active");
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  document.body.style.overflow = "hidden"; 
}

function closeMenu() {
  mobileMenu.classList.remove("active");
  hamburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
  document.body.style.overflow = ""; 
}

menuToggle.addEventListener("click", () => {
  if (mobileMenu.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close when clicking a link
links.forEach(link =>
  link.addEventListener("click", closeMenu)
);

// Close when clicking outside menu
document.addEventListener("click", (e) => {
  const isClickInsideMenu = mobileMenu.contains(e.target);
  const isClickOnToggle = menuToggle.contains(e.target);

  if (!isClickInsideMenu && !isClickOnToggle && mobileMenu.classList.contains("active")) {
    closeMenu();
  }
});

  links.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      hamburgerIcon.style.display = "block";
      closeIcon.style.display = "none";

      // Optional: Add active class (if not server-handled)
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
  
let prevScroll = window.scrollY;
const navbar = document.getElementById("navbar");
const navbarHeight = navbar.offsetHeight;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= navbarHeight) {
    navbar.style.top = "0";
  } else if (currentScroll > prevScroll) {
    navbar.style.top = `-${navbarHeight}px`;
  } else {
    navbar.style.top = "0";
  }

  prevScroll = currentScroll;

  if (window.scrollY > 10) {
  navbar.classList.add("scrolled");
} else {
  navbar.classList.remove("scrolled");
}
});