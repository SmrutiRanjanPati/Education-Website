(function () {
  "use strict";

  const SHEET_URL =
    "https://script.google.com/macros/s/AKfycbxjMzheqLjwG1CFRTS-P9_tlXJtwNXFw8tlYyP_fAdvauMCGPrjg2pYf10ElhEG-cMXQw/exec";

  /* =============================================
     SCROLL REVEAL
  ============================================= */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

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
     MAP TAB SWITCHER
  ============================================= */
  window.switchMap = function (id, btn) {
    /* Hide all maps */
    document.querySelectorAll(".map-embed").forEach((m) => m.classList.remove("active"));
    /* Deactivate all tabs */
    document.querySelectorAll(".map-tab").forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    /* Show selected */
    document.getElementById("map-" + id).classList.add("active");
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
  };

  /* =============================================
     CONTACT FORM - GOOGLE SHEETS SUBMIT
  ============================================= */
  window.handleContactSubmit = async function () {
    const btn      = document.getElementById("ct-submit");
    const errorBox = document.getElementById("ct-error");

    const payload = {
      source:          "Contact Page - Inline Form",
      full_name:       document.getElementById("ct-name").value.trim(),
      mobile_number:   document.getElementById("ct-phone").value.trim(),
      email_id:        document.getElementById("ct-email").value.trim(),
      enquiry_details: document.getElementById("ct-message").value.trim(),
      college_name:    "",
      course_name:     "",
    };

    /* ── Validation ── */
    if (!payload.full_name || !payload.mobile_number || !payload.email_id || !payload.enquiry_details) {
      showError(errorBox, "⚠️ Please fill in all required fields.");
      return;
    }
    if (!/^\d{10}$/.test(payload.mobile_number)) {
      showError(errorBox, "⚠️ Please enter a valid 10-digit phone number.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email_id)) {
      showError(errorBox, "⚠️ Please enter a valid email address.");
      return;
    }

    /* ── Submit ── */
    errorBox.style.display = "none";
    btn.disabled  = true;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';

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
      console.error("Contact form error:", err);
      btn.disabled  = false;
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
      showError(errorBox, "❌ Something went wrong. Please try again or call us directly.");
    }
  };

  /* ── Helpers ── */
  function showError(box, msg) {
    box.textContent   = msg;
    box.style.display = "block";
    box.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function showThankYou() {
    document.getElementById("ct-fields").style.display   = "none";
    document.getElementById("ct-thankyou").style.display = "block";

    let secs = 5;
    const cd = document.getElementById("ct-countdown");
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
    const btn = document.getElementById("ct-submit");
    document.getElementById("ct-fields").style.display   = "block";
    document.getElementById("ct-thankyou").style.display = "none";
    document.getElementById("ct-name").value    = "";
    document.getElementById("ct-phone").value   = "";
    document.getElementById("ct-email").value   = "";
    document.getElementById("ct-message").value = "";
    btn.disabled  = false;
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
  }

})();
