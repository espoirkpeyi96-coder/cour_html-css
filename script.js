// script.js: interactions for contact form and UI

document.addEventListener("DOMContentLoaded", function () {
  // Update footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form handling (simulated)
  const form = document.getElementById("contactForm");
  const result = document.getElementById("contactResult");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get("name");
      const email = data.get("email");
      const message = data.get("message");

      if (!name || !email || !message) {
        result.textContent = "Veuillez remplir tous les champs.";
        result.style.color = "#ffb4b4";
        return;
      }

      // Simulate sending
      result.textContent = "Envoi en cours...";
      result.style.color = "#ffd27a";
      await new Promise((r) => setTimeout(r, 900));

      // Show success (in production, replace with fetch to backend)
      result.textContent = "Merci, votre message a été envoyé.";
      result.style.color = "#b7f5d0";
      form.reset();
    });
  }

  // Close mobile sidebar when a link is clicked
  // Menu toggle (mobile)
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-navigation");
  const closeBtn = document.querySelector(".close-sidebar-button");



    document.querySelectorAll(".links-container a").forEach((a) => {
      a.addEventListener("click", () => {
        const cb = document.getElementById("sidebar-active");
        if (cb) cb.checked = false;
      });
    });
});
