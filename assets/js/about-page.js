(function () {
  "use strict";

  /* =============================================
     SCROLL REVEAL
  ============================================= */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* =============================================
     FAQ TOGGLE
  ============================================= */
  window.toggleFaq = function (btn) {
    const item   = btn.closest(".faq-item");
    const isOpen = item.classList.contains("open");

    document.querySelectorAll(".faq-item.open").forEach((i) => {
      i.classList.remove("open");
      i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }
  };

  /* =============================================
     ABOUT PAGE INLINE FORM — GOOGLE SHEETS SUBMIT
  ============================================= */
  const SHEET_URL =
    "https://script.google.com/macros/s/AKfycbxjMzheqLjwG1CFRTS-P9_tlXJtwNXFw8tlYyP_fAdvauMCGPrjg2pYf10ElhEG-cMXQw/exec";

  window.handleAboutFormSubmit = async function () {
    const btn      = document.getElementById("ab-submit-btn");
    const errorBox = document.getElementById("ab-error-msg");

    const payload = {
      source:          "About Page - Inline Form",
      full_name:       document.getElementById("ab-fullname").value.trim(),
      mobile_number:   document.getElementById("ab-mobile").value.trim(),
      email_id:        document.getElementById("ab-email").value.trim(),
      enquiry_details: document.getElementById("ab-message").value.trim(),
      college_name:    "",
      course_name:     "",
    };

    /* ── Validation ── */
    if (
      !payload.full_name ||
      !payload.mobile_number ||
      !payload.email_id ||
      !payload.enquiry_details
    ) {
      showError(errorBox, "⚠️ Please fill in all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(payload.mobile_number)) {
      showError(errorBox, "⚠️ Please enter a valid 10-digit phone number.");
      return;
    }

    /* ── Submit ── */
    errorBox.style.display = "none";
    btn.disabled   = true;
    btn.innerHTML  = '<i class="fa-solid fa-circle-notch fa-spin"></i> Submitting...';

    try {
      const res    = await fetch(SHEET_URL, {
        method:  "POST",
        headers: { "Content-Type": "text/plain" },
        body:    JSON.stringify(payload),
      });
      const result = await res.json();

      if (result.status === "success") {
        showThankYou();
      } else {
        throw new Error(result.message || "Unknown error");
      }
    } catch (err) {
      console.error("About form error:", err);
      btn.disabled  = false;
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Enquiry';
      showError(errorBox, "❌ Something went wrong. Please try again.");
    }
  };

  /* ── Helpers ── */
  function showError(box, msg) {
    box.textContent    = msg;
    box.style.display  = "block";
  }

  function showThankYou() {
    document.getElementById("ab-form-fields").style.display     = "none";
    document.getElementById("about-form-thankyou").style.display = "block";

    let secs = 4;
    const cd = document.getElementById("ab-countdown");
    cd.textContent = `Form will reset in ${secs}s`;

    const iv = setInterval(() => {
      secs--;
      cd.textContent = secs > 0 ? `Form will reset in ${secs}s` : "";

      if (secs <= 0) {
        clearInterval(iv);
        resetForm();
      }
    }, 1000);
  }

  function resetForm() {
    const btn = document.getElementById("ab-submit-btn");

    document.getElementById("ab-form-fields").style.display      = "block";
    document.getElementById("about-form-thankyou").style.display  = "none";
    document.getElementById("ab-fullname").value = "";
    document.getElementById("ab-mobile").value   = "";
    document.getElementById("ab-email").value    = "";
    document.getElementById("ab-message").value  = "";

    btn.disabled  = false;
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Enquiry';
  }

  /* =============================================
     FAQ HASH SCROLL
  ============================================= */
  if (window.location.hash === "#faq") {
    document.querySelector(".faq-section")?.scrollIntoView({ behavior: "smooth" });
  }

})();
