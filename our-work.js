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


function toggleLevels(card) {
  // const description = card.querySelector('.description');
  const levels = card.querySelector('.levels');

  const isOpen = levels.style.display === 'flex';

  // Close all open boxes first
  closeAllBoxes();

  // If it was not already open, open this one
  if (!isOpen) {
    levels.style.display = 'flex';
    // description.style.display = 'none';
  }
}

// Close all event boxes
function closeAllBoxes() {
  const allBoxes = document.querySelectorAll('.event-box');
  allBoxes.forEach(box => {
    box.querySelector('.levels').style.display = 'none';
    // box.querySelector('.description').style.display = 'block';
  });
}

// Close if clicked outside
document.addEventListener('click', function (event) {
  const isInsideBox = event.target.closest('.event-box');
  if (!isInsideBox) {
    closeAllBoxes();
  }
});

