document.addEventListener("DOMContentLoaded", () => {
  // Animate the 'Incubate' word
  const word = document.querySelector(".animated-word");
  if (word) {
    setTimeout(() => {
      word.classList.add("visible");
    }, 500);
  }

  // Mobile menu toggle logic
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }

  // Optional fade-in effect for social bar
  const bar = document.querySelector(".social-bar");
  if (bar) {
    bar.style.opacity = 0;
    setTimeout(() => {
      bar.style.transition = "opacity 1s ease";
      bar.style.opacity = 1;
    }, 500);
  }

  // Typewriter effect
  const words = ["AUTOMATE", "OPTIMIZE", "DEPLOY"];
  let currentWordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 100;
  const delayBetweenWords = 1200;

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

  typeEffect(); // Start the typewriter animation

  console.log("Script loaded");
});
