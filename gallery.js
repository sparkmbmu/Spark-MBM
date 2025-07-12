document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".slide img");
  const preview = document.createElement("div");
  const slider = document.getElementById("slider");

  preview.id = "image-preview";
  preview.innerHTML = `
    <img id="preview-img" />
    <span id="close-preview">&times;</span>
  `;
  document.body.appendChild(preview);

  const previewImg = document.getElementById("preview-img");
  const closeBtn = document.getElementById("close-preview");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      previewImg.src = img.src;
      preview.classList.add("active");
      slider.classList.add("blurred", "paused");
    });
  });

  closeBtn.addEventListener("click", () => {
    preview.classList.remove("active");
    previewImg.src = "";
    slider.classList.remove("blurred", "paused");
  });
});
