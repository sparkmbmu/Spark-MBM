 const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = menuToggle.querySelector("svg:not(#close-icon)");
  const closeIcon = document.getElementById("close-icon");
  const links = document.querySelectorAll("#mobile-menu .nav-link, #mobile-menu .nav-link-join");

  function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle("active");
    hamburgerIcon.style.display = isOpen ? "none" : "block";
    closeIcon.style.display = isOpen ? "block" : "none";
  }

  menuToggle.addEventListener("click", toggleMenu);

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
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".slide img");
  const preview = document.createElement("div");
  const slider = document.getElementById("slider");

  preview.id = "image-preview";
  preview.innerHTML = `
    <img id="preview-img" />
    <span id="close-preview">&times;</span>
  `;
  document.body.appendChild(preview);

  const previewImg = document.getElementById("preview-img");
  const closeBtn = document.getElementById("close-preview");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      previewImg.src = img.src;
      preview.classList.add("active");
      slider.classList.add("blurred", "paused");
    });
  });

  closeBtn.addEventListener("click", () => {
    preview.classList.remove("active");
    previewImg.src = "";
    slider.classList.remove("blurred", "paused");
  });
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