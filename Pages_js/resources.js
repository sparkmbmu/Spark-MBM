// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = menuToggle.querySelector("svg:not(#close-icon)");
const closeIcon = document.getElementById("close-icon");
const links = document.querySelectorAll("#mobile-menu .nav-link, #mobile-menu .nav-link-join");

function openMenu() {
  mobileMenu.classList.add("active");
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  document.body.style.overflow = "hidden"; // lock scroll
}

function closeMenu() {
  mobileMenu.classList.remove("active");
  hamburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
  document.body.style.overflow = ""; // unlock scroll
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
    });
});

// Highlight active link
const currentPath = window.location.pathname.split('/').pop();
document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
    }
});

// Accordion-style resource list interactivity
const resourceItems = document.querySelectorAll('.resource-item');

resourceItems.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle the 'active' class on the clicked item
        item.classList.toggle('active');

        // Close other active items
        resourceItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
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