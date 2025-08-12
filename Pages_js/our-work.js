
// hamburger 
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
                    "Hard": [
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
                            <p class="batch-label">${winner.Batch}</p>
                        </div>
                    `;
                    modalGallery.innerHTML += winnerCard;
                });

                winnerModal.classList.add('active');
                document.body.classList.add('modal-open');
            }

            function closeWinnerModal() {
                winnerModal.classList.remove('active');
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
            const viewMoreContestsBtn = document.getElementById('view-more-contests');
            const contestsHidden = document.getElementById('contests-hidden');
            viewMoreContestsBtn.addEventListener('click', () => {
                const isHidden = contestsHidden.style.display === 'none' || contestsHidden.style.display === '';
                contestsHidden.style.display = isHidden ? 'block' : 'none';
                viewMoreContestsBtn.textContent = isHidden ? 'View Less' : 'View More';
            });

            const viewMoreSessionsBtn = document.getElementById('view-more-sessions');
            const sessionsHidden = document.getElementById('sessions-hidden');
            viewMoreSessionsBtn.addEventListener('click', () => {
                const isHidden = sessionsHidden.style.display === 'none' || sessionsHidden.style.display === '';
                sessionsHidden.style.display = isHidden ? 'block' : 'none';
                viewMoreSessionsBtn.textContent = isHidden ? 'View Less' : 'View More';
            });


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
        });

        // --- Tab Navigation Logic (kept global for onclick) ---
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
        
        // Set the default active tab on page load
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('Contests').style.display = "block";
        });