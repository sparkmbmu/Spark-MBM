
// --- Initialize Feather Icons ---
feather.replace();

// --- Navbar Scroll Behavior ---
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

// --- Tab Navigation Logic ---
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// --- Countdown Timer Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const countdownElements = document.querySelectorAll('.countdown');
    countdownElements.forEach(el => {
        const targetDate = new Date(el.dataset.date).getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                el.textContent = "Event Over";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            el.textContent = days;
        }

        updateCountdown();
        setInterval(updateCountdown, 1000 * 60 * 60 * 24); // Update once a day
    });
});

// --- Animated Canvas Background Logic ---
const canvas = document.getElementById('canvas-background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// Particle class for the fire/spark effect
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100; // Start below the screen
        this.size = Math.random() * 2 + 0.5;
        this.speedY = Math.random() * 3 + 1;
        this.speedX = (Math.random() * 3) - 1.5;
        // Color with varying opacity for a glowing effect
        this.color = `rgba(255, 106, 0, ${Math.random() * 0.5 + 0.5})`;
    }
    update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        // Reset particle when it goes off screen
        if (this.y < 0) {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 100;
        }
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create particle array
function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.width / 10); // Adjust density
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}

// Resize event
window.addEventListener('resize', function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});

init();
animate();