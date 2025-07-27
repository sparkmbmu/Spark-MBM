// effects.js

const textElement = document.getElementById("animated-text");
const text = "Contact SPARK Community";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    textElement.textContent = text.substring(0, index + 1);
    index++;
    setTimeout(typeWriter, 100); // adjust speed here
  } else {
    // Optional: add a blinking cursor
    textElement.innerHTML += "<span class='cursor'>|</span>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const thankYouMessage = document.getElementById("thankYouMessage");
  const returnBtn = document.getElementById("returnBtn");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent real submit

    // OPTIONAL: You could send data via AJAX here

    form.style.display = "none"; // hide form
    thankYouMessage.style.display = "block"; // show thank you message
  });

  returnBtn.addEventListener("click", function() {
    // Reload page to show form again
    window.location.reload();
  });
});

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
