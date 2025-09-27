// hamburger 
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

 // Handle click events (hamburger close + highlight)
links.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";

    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

const currentFile = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-link").forEach(link => {
  const linkFile = link.getAttribute("href").split("/").pop();
  if (linkFile === currentFile) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});


        document.addEventListener('DOMContentLoaded', () => {
            // --- Initialize Feather Icons ---
            feather.replace();

            // --- Winner Data ---
const winnersData = {
                "Contest 2.0": {
                    "Beginner": [
                        { name: "Suraj Chouhan", img: "../Components/Home/Results/Spark_Contest_2/surajcho.jpg" , Batch: "2024-2028"},
                        { name: "Harshit Seth", img: "../Components/Home/Results/Spark_Contest_2/harshit.jpeg" , Batch: "2024-2028"},
                        { name: "Sujal Gupta", img: "../Components/Home/Results/Spark_Contest_2/sujal.jpg" , Batch: "2024-2028"}
                    ],
                    "Intermediate": [
                        { name: "Priyank Mundel", img: "../Components/Home/Results/Spark_Contest_2/priyank.jpg" , Batch: "2024-2028"},
                        { name: "Yogya Agarwal", img: "../Components/Home/Results/Spark_Contest_2/yogya.jpg" , Batch: "2024-2028"},
                        { name: "Randeep Singh", img: "../Components/Home/Results/Spark_Contest_2/randeep.jpg" , Batch: "2024-2028"}





                    ]
                },
                "Contest 1.0": {
                    "Beginner": [
                        { name: "Piyush Lamba", img: "../Components/Home/Results/Spark_Contest_1/piyush.jpg" , Batch: "2024-2028"},
                        { name: "Niyati Bhandari", img: "../Components/Home/Results/Spark_Contest_1/niyati.jpg" , Batch: "2024-2028"},
                        { name: "Priyanka Suthar", img: "../Components/Home/Results/Spark_Contest_1/priyanka.jpg" , Batch: "2024-2028"}
                    ],
                    "Intermediate": [
                        { name: "Tanvi Shekhawat", img: "../Components/Home/Results/Spark_Contest_1/tanvish.jpg" , Batch: "2024-2028"},
                        { name: "Randeep Singh", img: "../Components/Home/Results/Spark_Contest_1/randeep.jpg" , Batch: "2024-2028"},
                        { name: "Yash Garg", img: "../Components/Home/Results/Spark_Contest_1/yash.jpg" , Batch: "2024-2028"}
                    ],
                    "Advanced": [
                        { name: "Mohit Pohwani", img: "../Components/Home/Results/Spark_Contest_1/mohitpoh.jpg" , Batch: "2024-2028"},
                        { name: "Garvit Jain", img: "../Components/Home/Results/Spark_Contest_1/garvit.png" , Batch: "2024-2028"},
                        { name: "Himanshi Mathur", img: "../Components/Home/Results/Spark_Contest_1/himanshi.jpeg" , Batch: "2024-2028"}
                    ]
                }
            };

            // --- Winner Modal Logic ---
            const winnerModal = document.getElementById('winner-modal');
            const modalCloseBtn = document.getElementById('modal-close-btn');
            const modalTitle = document.getElementById('modal-title');
            const modalGallery = document.getElementById('modal-winners-gallery');
            const viewWinnersBtns = document.querySelectorAll('.view-winners-btn');

            function openWinnerModal(event) {
                const contest = event.currentTarget.dataset.contest;
                const level = event.currentTarget.dataset.level;
                const winners = winnersData[contest]?.[level];
                document.querySelector('header').style.transform = "translateY(-72px)"

                if (!winners) {
                    console.error("Winners not found for", contest, level);
                    return;
                }

                modalTitle.textContent = `${contest} - ${level} Winners`;
                modalGallery.innerHTML = ''; // Clear previous winners

                const positions = ['first', 'second', 'third'];
                const badges = ['🥇1st', '🥈2nd', '🥉3rd'];

                winners.forEach((winner, index) => {
                    const winnerCard = `
                        <div class="winner ${positions[index]}">
                            <p class="h-upper position-badge">${badges[index]}</p>
                            <img src="${winner.img}" alt="Winner ${winner.name}" onerror="this.onerror=null;this.src='https://placehold.co/250x250/1a1a1a/ffffff?text=Image+Error';">
                            <p class="h-lower">${winner.name}</p>
                        </div>
                    `;
                    modalGallery.innerHTML += winnerCard;
                });

                winnerModal.classList.add('active');
                document.body.classList.add('modal-open');
            }

            function closeWinnerModal() {
                winnerModal.classList.remove('active');
            document.querySelector('header').style.transform = "translateY(0px)"
                document.body.classList.remove('modal-open');
            }

            viewWinnersBtns.forEach(btn => btn.addEventListener('click', openWinnerModal));
            modalCloseBtn.addEventListener('click', closeWinnerModal);
            winnerModal.addEventListener('click', (event) => {
                if (event.target === winnerModal) {
                    closeWinnerModal();
                }
            });
            
            // --- Countdown Timer Logic ---
            const countdownElements = document.querySelectorAll('.countdown');
            countdownElements.forEach(el => {
                const targetDate = new Date(el.dataset.date).getTime();
                let intervalId;
                
                function updateCountdown() {
                    const now = new Date().getTime();
                    const distance = targetDate - now;
                    
                    if (distance < 0) {
                        el.textContent = "Event Over";
                        if(el.nextElementSibling) {
                           el.nextElementSibling.style.display = 'none';
                        }
                        if (intervalId) clearInterval(intervalId);
                        return;
                    }
                    
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    el.textContent = days;
                }
                
                updateCountdown();
                intervalId = setInterval(updateCountdown, 1000 * 60 * 60 * 24);
            });

            // --- View More Logic ---
            function setupViewMore(buttonId, contentId) {
                const viewMoreBtn = document.getElementById(buttonId);
                const hiddenContent = document.getElementById(contentId);
                if (viewMoreBtn && hiddenContent) {
                    viewMoreBtn.addEventListener('click', () => {
                        const isHidden = hiddenContent.style.display === 'none' || hiddenContent.style.display === '';
                        hiddenContent.style.display = isHidden ? 'block' : 'none';
                        viewMoreBtn.textContent = isHidden ? 'View Less' : 'View More';
                    });
                }
            }

            setupViewMore('view-more-contests', 'contests-hidden');
            setupViewMore('view-more-sessions', 'sessions-hidden');
            setupViewMore('view-more-projects', 'projects-hidden');


            // --- Animated Canvas Background Logic ---
            const canvas = document.getElementById('canvas-background');
            const ctx = canvas.getContext('2d');
            
            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            resizeCanvas();

            let particlesArray;

            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = canvas.height + Math.random() * 100;
                    this.size = Math.random() * 2 + 0.5;
                    this.speedY = Math.random() * 3 + 1;
                    this.speedX = (Math.random() * 3) - 1.5;
                    this.color = `rgba(255, 106, 0, ${Math.random() * 0.5 + 0.5})`; 
                }
                update() {
                    this.y -= this.speedY;
                    this.x += this.speedX;
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

            function initParticles() {
                particlesArray = [];
                let numberOfParticles = (canvas.width / 15);
                for (let i = 0; i < numberOfParticles; i++) {
                    particlesArray.push(new Particle());
                }
            }

            function animateParticles() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (let i = 0; i < particlesArray.length; i++) {
                    particlesArray[i].update();
                    particlesArray[i].draw();
                }
                requestAnimationFrame(animateParticles);
            }

            window.addEventListener('resize', () => {
                resizeCanvas();
                initParticles();
            });

            initParticles();
            animateParticles();

          // countdown for project
          const targetDate = new Date("October 1, 2025 00:00:00").getTime();
          const countdownElement = document.getElementById("countdown");  
          const interval = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            if (timeLeft <= 0) {
            clearInterval(interval);
            countdownElement.textContent = "Launched!";
            countdownElement.classList.add("ended");
            return;
          }
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
            
        });

        // --- Tab Navigation Logic (kept global for onclick) ---
function openTab(evt, tabName) {
    // Hide all tab content
    document.querySelectorAll(".tab-content").forEach(el => {
        el.style.display = "none";
    });

    // Remove active class from all tab buttons
    document.querySelectorAll(".tab-link").forEach(btn => {
        btn.classList.remove("active");
    });

    // Show the clicked tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Show only Contests on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".tab-content").forEach(el => {
        el.style.display = "none";
    });
    document.getElementById("Contests").style.display = "block";
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


// timeline logic 


const timeline = document.querySelector(".timeline-container");
const fill = document.querySelector(".timeline-line-fill");
const progressCircle = document.querySelector(".timeline-progress-circle");
const items = document.querySelectorAll(".timeline-item");
const dots = document.querySelectorAll(".timeline-dot");

function updateTimelineProgress() {
  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const sectionCenter = rect.top + (timeline.offsetHeight / 2);
  const viewportCenter = windowHeight / 2;

  const startPoint = viewportCenter - sectionCenter;
  let progress = (startPoint + (timeline.offsetHeight / 2)) / timeline.offsetHeight;
  progress = Math.max(0, Math.min(1, progress));

  const fillHeight = progress * timeline.offsetHeight;
  fill.style.height = fillHeight + "px";

  // Move the circle to the end of the fill
  progressCircle.style.top = fillHeight - (progressCircle.offsetHeight / 2) + "px";

  // Highlight items when fill passes their dot
  items.forEach((item, index) => {
    const dotRect = dots[index].getBoundingClientRect();
    const dotOffset = dotRect.top - timeline.getBoundingClientRect().top;

    if (dotOffset <= fillHeight) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", updateTimelineProgress);
window.addEventListener("resize", updateTimelineProgress);
updateTimelineProgress();
document.addEventListener("DOMContentLoaded", function() {
  const viewWinnersHard = document.getElementById("view-winners-hard");

  viewWinnersHard.addEventListener("click", function() {
    alert("To be announced soon!");
  });
});



