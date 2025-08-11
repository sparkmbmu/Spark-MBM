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
// --- Preloader ---
                window.addEventListener('load', () => {
                    const preloader = document.getElementById('preloader');
                    preloader.classList.add('loaded');
                });

                // --- Scroll Animations ---
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                        }
                    });
                }, {threshold: 0.1});

                document.querySelectorAll('.gallery-item').forEach(item => {
                    observer.observe(item);
                });

                // --- Lightbox Logic ---
                const modal = document.getElementById('lightbox-modal');
                const modalImg = document.getElementById('lightbox-image');
                const modalCaption = document.getElementById('lightbox-caption');
                const closeBtn = document.getElementById('lightbox-close');
                const prevBtn = document.getElementById('prev-btn');
                const nextBtn = document.getElementById('next-btn');
                const galleryItems = document.querySelectorAll('.gallery-item');

                let currentIndex = 0;
                const galleryData = Array.from(galleryItems).map(item => {
                    const img = item.querySelector('img');
                    return {
                        src: img.src,
                        alt: img.alt
                    };
                });

                function showImage(index) {
                    const item = galleryData[index];
                    modalImg.src = item.src;
                    modalCaption.textContent = item.alt;
                    currentIndex = index;
                    modal.style.display = 'flex';
                }

                galleryItems.forEach(item => {
                    item.addEventListener('click', () => {
                        const index = parseInt(item.getAttribute('data-index'));
                        showImage(index);
                    });
                });

                const closeModal = () => {
                    modal.style.display = 'none';
                };


                const showNextImage = () => {
                    currentIndex = (currentIndex + 1) % galleryData.length;
                    showImage(currentIndex);
                };

                const showPrevImage = () => {
                    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
                    showImage(currentIndex);
                };

                closeBtn.addEventListener('click', closeModal);
                nextBtn.addEventListener('click', showNextImage);
                prevBtn.addEventListener('click', showPrevImage);

                modal.addEventListener('click', (e) => {
                    if (e.target.classList.contains('lightbox-modal')) {
                        closeModal();
                    }
                });

                document.addEventListener('keydown', (e) => {
                    if (modal.style.display === 'flex') {
                        if (e.key === 'ArrowRight') showNextImage();
                        else if (e.key === 'ArrowLeft') showPrevImage();
                        else if (e.key === 'Escape') closeModal();
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