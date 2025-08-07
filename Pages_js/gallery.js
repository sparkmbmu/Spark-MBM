const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = menuToggle.querySelector("svg:not(#close-icon)");
const closeIcon = document.getElementById("close-icon");
const links = document.querySelectorAll("#mobile-menu .nav-link, #mobile-menu .nav-link-join");

// Handles the mobile menu toggle
function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle("active");
    if (isOpen) {
        hamburgerIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        hamburgerIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
}

menuToggle.addEventListener("click", toggleMenu);

// Closes mobile menu when a link is clicked
links.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        hamburgerIcon.style.display = "block";
        closeIcon.style.display = "none";

        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.querySelector(".lightbox-prev");
    const nextBtn = document.querySelector(".lightbox-next");

    let currentIndex = 0;
    const imageSources = Array.from(galleryItems).map(item => item.querySelector("img").src);

    function openLightbox(index) {
        currentIndex = index;
        lightboxImage.src = imageSources[currentIndex];
        lightbox.classList.add("active");
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % imageSources.length;
        lightboxImage.src = imageSources[currentIndex];
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
        lightboxImage.src = imageSources[currentIndex];
    }

    // Opens the lightbox when a gallery image is clicked
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const index = parseInt(item.getAttribute("data-index"));
            openLightbox(index);
        });
    });

    // Closes the lightbox with the close button
    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    // Navigates images with the next/prev buttons
    prevBtn.addEventListener("click", showPrevImage);
    nextBtn.addEventListener("click", showNextImage);

    // Navigates images with keyboard arrows and closes with Escape
    document.addEventListener("keydown", (e) => {
        if (lightbox.classList.contains("active")) {
            if (e.key === "ArrowLeft") {
                showPrevImage();
            } else if (e.key === "ArrowRight") {
                showNextImage();
            } else if (e.key === "Escape") {
                lightbox.classList.remove("active");
            }
        }
    });

    // Closes the lightbox by clicking outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });
});
