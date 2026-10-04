// ============================================================
// Personal Portfolio — Shumaya Jannat Hera
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

  // ---------- 1) Footer copyright year ----------
  var yearEl = document.querySelector("#copyright-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---------- 2) Mobile menu toggle ----------
  var toggleBtn = document.querySelector(".nav-toggle");
  var navList = document.querySelector(".main-nav");
  if (toggleBtn && navList) {
    toggleBtn.addEventListener("click", function () {
      navList.classList.toggle("open");
    });
  }

  // ---------- 3) Contact form: capture the data, then return to Home ----------
  var contactForm = document.querySelector("#message-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // stop the normal submission so we can capture it first

      // Collect every field the visitor filled in
      var data = Object.fromEntries(new FormData(contactForm));

      // Captured information
      console.log("Message captured from the contact form:", data);

      var firstName = data.firstName || "there";
      alert("Thank you, " + firstName + "! Your message has been captured successfully.");

      // send the user back to the Home page
      window.location.href = "index.html";
    });
  }
});