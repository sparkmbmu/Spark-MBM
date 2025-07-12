// effects.js

const textElement = document.getElementById("animated-text");
const text = "Contact SPARK Community";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    textElement.textContent = text.substring(0, index + 1);
    index++;
    setTimeout(typeWriter, 100); // adjust speed here
  } else {
    // Optional: add a blinking cursor
    textElement.innerHTML += "<span class='cursor'>|</span>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const thankYouMessage = document.getElementById("thankYouMessage");
  const returnBtn = document.getElementById("returnBtn");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent real submit

    // OPTIONAL: You could send data via AJAX here

    form.style.display = "none"; // hide form
    thankYouMessage.style.display = "block"; // show thank you message
  });

  returnBtn.addEventListener("click", function() {
    // Reload page to show form again
    window.location.reload();
  });
});
