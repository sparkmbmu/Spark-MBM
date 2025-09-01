// // effects.js

// const menuToggle = document.getElementById("menu-toggle");
//   const mobileMenu = document.getElementById("mobile-menu");
//   const hamburgerIcon = menuToggle.querySelector("svg:not(#close-icon)");
//   const closeIcon = document.getElementById("close-icon");
//   const links = document.querySelectorAll("#mobile-menu .nav-link, #mobile-menu .nav-link-join");

//   function toggleMenu() {
//     const isOpen = mobileMenu.classList.toggle("active");
//     hamburgerIcon.style.display = isOpen ? "none" : "block";
//     closeIcon.style.display = isOpen ? "block" : "none";
//   }

//   menuToggle.addEventListener("click", toggleMenu);

//   links.forEach(link => {
//     link.addEventListener("click", () => {
//       mobileMenu.classList.remove("active");
//       hamburgerIcon.style.display = "block";
//       closeIcon.style.display = "none";

//       // Optional: Add active class (if not server-handled)
//       links.forEach(l => l.classList.remove("active"));
//       link.classList.add("active");
//     });
//   });
//   const currentPath = window.location.pathname;
//   document.querySelectorAll(".nav-link").forEach(link => {
//     if (link.getAttribute("href") === currentPath) {
//       link.classList.add("active");
//     }
//   });

// const textElement = document.getElementById("animated-text");
// const text = "Contact SPARK Community";
// let index = 0;

// function typeWriter() {
//   if (index < text.length) {
//     textElement.textContent = text.substring(0, index + 1);
//     index++;
//     setTimeout(typeWriter, 100); // adjust speed here
//   } else {
//     // Optional: add a blinking cursor
//     textElement.innerHTML += "<span class='cursor'>|</span>";
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   typeWriter();
// });
// document.addEventListener("DOMContentLoaded", function() {
//   const form = document.getElementById("contactForm");
//   const thankYouMessage = document.getElementById("thankYouMessage");
//   const returnBtn = document.getElementById("returnBtn");

//   form.addEventListener("submit", function(e) {
//     e.preventDefault(); // prevent real submit

//     // OPTIONAL: You could send data via AJAX here

//     form.style.display = "none"; // hide form
//     thankYouMessage.style.display = "block"; // show thank you message
//   });

//   returnBtn.addEventListener("click", function() {
//     // Reload page to show form again
//     window.location.reload();
//   });
// });

// let prevScroll = window.scrollY;
// const navbar = document.getElementById("navbar");
// const navbarHeight = navbar.offsetHeight;

// window.addEventListener("scroll", () => {
//   const currentScroll = window.scrollY;

//   if (currentScroll <= navbarHeight) {
//     navbar.style.top = "0";
//   } else if (currentScroll > prevScroll) {
//     navbar.style.top = `-${navbarHeight}px`;
//   } else {
//     navbar.style.top = "0";
//   }

//   prevScroll = currentScroll;

//   if (window.scrollY > 10) {
//   navbar.classList.add("scrolled");
// } else {
//   navbar.classList.remove("scrolled");
// }
// });

// This event listener ensures that the script runs only after the entire
// HTML document has been loaded and parsed.


document.addEventListener("DOMContentLoaded", function() {

  // --- Mobile Menu Logic ---
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
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Set the 'active' class on the current page's navigation link
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });


  // --- Corrected Typewriter Effect ---
  const textElement = document.getElementById("animated-text");
  const text = "Contact <span class='spark'>SPARK</span> Community";
  let i = 0;
  
  // Ensure the element is empty before starting the animation
  textElement.innerHTML = "";

  function typeWriter() {
      if (i < text.length) {
          // Get the content to be displayed in this frame
          let content = text.slice(0, i);
          
          // Find the last opened and closed HTML tags
          let lastOpeningTag = content.lastIndexOf('<');
          let lastClosingTag = content.lastIndexOf('>');

          // If a tag is open but not yet closed, it means we are in the middle of a tag.
          // To prevent displaying a broken tag, we jump the index to the end of that tag.
          if (lastOpeningTag > lastClosingTag) {
              i = text.indexOf('>', lastOpeningTag) + 1;
              content = text.slice(0, i);
          }
          
          textElement.innerHTML = content;
          i++;
          setTimeout(typeWriter, 100); // Adjust typing speed here (in milliseconds)
      } else {
          // When done, add the blinking cursor
          textElement.innerHTML = text + "<span class='cursor'>|</span>";
      }
  }
  
  // Start the animation
  typeWriter();


  // --- Contact Form Logic ---
  const form = document.getElementById("contactForm");
  const thankYouMessage = document.getElementById("thankYouMessage");
  const returnBtn = document.getElementById("returnBtn");

 form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };

  emailjs.send("service_5qx2qma", "template_jj4c5jz", formData)
    .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      form.style.display = "none";
      thankYouMessage.style.display = "block";
    }, function(error) {
      console.error("FAILED...", error);
      alert("❌ Message could not be sent. Please try again.");
    });
});


  returnBtn.addEventListener("click", function() {
    window.location.reload(); // Reload the page to show the form again
  });


  // --- Navbar Scroll Effect ---
  let prevScroll = window.scrollY;
  const navbar = document.getElementById("navbar");
  if (navbar) {
      const navbarHeight = navbar.offsetHeight;

      window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        if (currentScroll <= navbarHeight) {
          navbar.style.top = "0"; // Show navbar at the top
        } else if (currentScroll > prevScroll) {
          navbar.style.top = `-${navbarHeight}px`; // Hide navbar on scroll down
        } else {
          navbar.style.top = "0"; // Show navbar on scroll up
        }

        prevScroll = currentScroll;

        // Add a 'scrolled' class for potential styling (e.g., background change)
        if (window.scrollY > 10) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
  }
});
