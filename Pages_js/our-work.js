document.addEventListener('DOMContentLoaded', () => {
            // --- Initialize Feather Icons ---
            feather.replace();

            // --- Winner Data ---
            const winnersData = {
                "Contest 2.0": {
                    "Beginner": [
                        { name: "Piyush Lamba", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=Piyush" },
                        { name: "Niyati Bhandari", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=Niyati" },
                        { name: "Priyanka Suthar", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=Priyanka" }
                    ],
                    "Intermediate": [
                        { name: "Tanvi Shekhawat", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=Tanvi" },
                        { name: "Randeep Singh", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=Randeep" },
                        { name: "Yash Garg", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=Yash" }
                    ],
                    "Hard": [
                        { name: "Mohit Pohwani", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=Mohit" },
                        { name: "Garvit Jain", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=Garvit" },
                        { name: "Himanshi Mathur", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=Himanshi" }
                    ]
                },
                "Contest 1.0": {
                    "Beginner": [
                        { name: "Student A", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=A" },
                        { name: "Student B", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=B" },
                        { name: "Student C", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=C" }
                    ],
                    "Intermediate": [
                        { name: "Student D", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=D" },
                        { name: "Student E", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=E" },
                        { name: "Student F", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=F" }
                    ],
                    "Hard": [
                        { name: "Student G", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=G" },
                        { name: "Student H", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=H" },
                        { name: "Student I", img: "https://placehold.co/250x250/1a1a1a/ffffff?text=I" }
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