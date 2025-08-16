document.addEventListener("DOMContentLoaded", () => {
  const word = document.querySelector(".animated-word");
  if (word) {
    setTimeout(() => {
      word.classList.add("visible");
    }, 500);
  }
 const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = menuToggle?.querySelector("svg:not(#close-icon)");
  const closeIcon = document.getElementById("close-icon");
  const links = document.querySelectorAll("#mobile-menu .nav-link, #mobile-menu .nav-link-join");

  if (!menuToggle || !mobileMenu) return; // Exit if no navbar exists

  function toggleMenu(forceClose = false) {
    const isOpen = forceClose ? false : !mobileMenu.classList.contains("active");

    if (isOpen) {
      mobileMenu.classList.add("active");
      hamburgerIcon.style.display = "none";
      closeIcon.style.display = "block";
      document.body.style.overflow = "hidden"; 
    } else {
      mobileMenu.classList.remove("active");
      hamburgerIcon.style.display = "block";
      closeIcon.style.display = "none";
      document.body.style.overflow = ""; 
    }
  }

  // Toggle on hamburger click
  menuToggle.addEventListener("click", () => toggleMenu());

  // Close on link click
  links.forEach(link =>
    link.addEventListener("click", () => toggleMenu(true))
  );

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (
      mobileMenu.classList.contains("active") &&
      !mobileMenu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      toggleMenu(true);
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
  const bar = document.querySelector(".social-bar");
  if (bar) {
    bar.style.opacity = 0;
    setTimeout(() => {
      bar.style.transition = "opacity 1s ease";
      bar.style.opacity = 1;
    }, 500);
  }
  // const words = ["ANALYZE", "CODE", "CONQUER"];
  const words = ["AUTOMATE", "OPTIMIZE", "DEPLOY"];

  let currentWordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 100;
  const delayBetweenWords = 1800;

  const textElement = document.querySelector(".typewriter-text");

  function typeEffect() {
    if (!textElement) return;

    const currentWord = words[currentWordIndex];
    if (isDeleting) {
      charIndex--;
      textElement.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      textElement.textContent = currentWord.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(typeEffect, 300);
    } else {
      setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
    }
  }

  typeEffect();

  console.log("Script loaded");
});
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
const galleries = document.querySelectorAll(".winners-gallery");

let currentIndex = 0;

function showGallery(index) {
  galleries.forEach((gallery, i) => {
    gallery.classList.toggle("gallery-active", i === index);
  });
  currentIndex = index;
}
function nextGallery() {
  let nextIndex = (currentIndex + 1) % galleries.length;
  showGallery(nextIndex);
}
function prevGallery() {
  let prevIndex = (currentIndex - 1 + galleries.length) % galleries.length;
  showGallery(prevIndex);
}
rightArrow.addEventListener("click", nextGallery);
leftArrow.addEventListener("click", prevGallery);
setInterval(nextGallery, 8000);
showGallery(0);

function showGallery(index) {
  const titles = [
    // "Level – Advanced",
    "Level – Intermediate",
    "Level – Beginner",
  ];
  const titleElement = document.getElementById("gallery-title");
  galleries.forEach((gallery, i) => {
    const isActive = i === index;
    gallery.classList.toggle("gallery-active", isActive);
    if (isActive) {
      const winners = gallery.querySelectorAll(".winner");
      winners.forEach((winner) => {
        winner.classList.add("flip");
        winner.addEventListener(
          "animationend",
          () => {
            winner.classList.remove("flip");
          },
          { once: true }
        );
      });
    }
  });
  if (titleElement) {
    titleElement.textContent = titles[index];
  }
  currentIndex = index;
}

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

// galler image open logic 
// Get elements
const slides = document.querySelectorAll(".slide img");
const lightboxModal = document.getElementById("lightbox-modal");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.getElementById("lightbox-close");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let lightboxIndex = 0; // renamed from currentIndex

// Open Lightbox
function openLightbox(index) {
  lightboxIndex = index;
  lightboxImage.src = slides[index].src;
  // lightboxCaption.textContent = slides[index].alt;
  lightboxModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.querySelector('header').style.transform = "translateY(-75px)";
}

// Close Lightbox
function closeLightbox() {
  lightboxModal.style.display = "none";
  document.querySelector('header').style.transform = "translateY(0px)";
  document.body.style.overflowY = "";
}

// Show Previous Image
function showPrev() {
  lightboxIndex = (lightboxIndex - 1 + slides.length) % slides.length;
  openLightbox(lightboxIndex);
}

// Show Next Image
function showNext() {
  lightboxIndex = (lightboxIndex + 1) % slides.length;
  openLightbox(lightboxIndex);
}

// Event Listeners
slides.forEach((slide, index) => {
  slide.addEventListener("click", () => openLightbox(index));
});

closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

// Optional: close lightbox when clicking outside image
lightboxModal.addEventListener("click", (e) => {
  if (e.target === lightboxModal) closeLightbox();
});



// contact form logic 

 const form = document.getElementById("contactForm");
  const thankYouMessage = document.getElementById("thankYouMessage");
  const returnBtn = document.getElementById("returnBtn");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    form.style.display = "none";
    thankYouMessage.style.display = "block";
  });

  returnBtn.addEventListener("click", function() {
    window.location.reload(); 
  });

