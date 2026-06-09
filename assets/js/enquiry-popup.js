/* =============================================
   ENQUIRY POPUP - Reusable Dynamic Component
   Usage: Add class="enquiry-now" + data-college="College Name"
          or class="hero-contact-popup" for direct Contact us.
   ============================================= */

(function () {
  "use strict";

  // ✅ GOOGLE APPS SCRIPT TARGET SYSTEM ENDPOINT URL
  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxjMzheqLjwG1CFRTS-P9_tlXJtwNXFw8tlYyP_fAdvauMCGPrjg2pYf10ElhEG-cMXQw/exec";

  // Persistent localized variables holding selection targets
  let _collegeName = "";
  let _courseName = "";

  /* =============================================
     SHARED INTERFACES STRUCTURAL VALIDATION UTILITIES
     ============================================= */

  function validateFormInputs(formId, fields) {
    const form = document.getElementById(formId);
    
    // Clear all previous error states and red borders first
    form.querySelectorAll("input, textarea").forEach(el => {
      el.style.borderColor = "";
      el.classList.remove("input-error-shake");
    });

    // Helper to apply error styling, focus the input, and return the error message
    const triggerError = (inputSelector, message) => {
      const inputEl = form.querySelector(inputSelector);
      if (inputEl) {
        inputEl.style.borderColor = "#ef4444"; // Strict Red Error Border
        inputEl.focus();
        
        // Add CSS class for a subtle shake effect if defined in your stylesheets
        inputEl.classList.add("input-error-shake");
      }
      return message;
    };

    // 1. Full name validation
    if (!fields.fullName || fields.fullName.length < 6) {
      const idSelector = formId === "enquiry-popup-form" ? "#enq-fullname" : "#cp-fullname";
      return triggerError(idSelector, "⚠️ Full Name must be at least 6 characters long.");
    }

    // 2. Clear numeric-only 10-digit mobile validation
    const mobileRegEx = /^\d{10}$/;
    if (!mobileRegEx.test(fields.mobile) || /^(\d)\1{9}$/.test(fields.mobile)) {
      const idSelector = formId === "enquiry-popup-form" ? "#enq-mobile" : "#cp-mobile";
      return triggerError(idSelector, "⚠️ Please enter a valid 10-digit phone number.");
    }

    // 3. RFC Electronic Mail baseline syntax string verification
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegEx.test(fields.email)) {
      const idSelector = formId === "enquiry-popup-form" ? "#enq-email" : "#cp-email";
      return triggerError(idSelector, "⚠️ Please provide a valid email address structure.");
    }

    // 4. Character threshold tracking filter checking message details density
    if (!fields.details || fields.details.length < 20) {
      const idSelector = formId === "enquiry-popup-form" ? "#enq-message" : "#cp-message";
      return triggerError(idSelector, "⚠️ Details or message context must look meaningful (at least 20 characters).");
    }

    return null; // Passes all operational layouts validations cleanly
  }

  /* =============================================
     ENQUIRY POPUP MODAL (CONTEXTUAL ROUTING)
     ============================================= */

  function createModal() {
    if (document.getElementById("enquiry-overlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "enquiry-overlay";
    overlay.className = "enquiry-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "enquiry-title");

    overlay.innerHTML = `
      <div class="enquiry-modal" id="enquiry-modal">
        <div class="enquiry-modal-header">
          <button class="enquiry-close-btn" id="enquiry-close" aria-label="Close Modal">&#x2715;</button>
          <h4 id="enquiry-title">Enquire Now</h4>
          <p>Fill in your details and we'll get back to you shortly.</p>
          <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:12px;">
            <span class="enquiry-college-badge" style="margin-top:0;">
              <i class="fa-solid fa-building-columns"></i>
              <span id="enquiry-college-display">College Name</span>
            </span>
            <span class="enquiry-college-badge" style="margin-top:0;">
              <i class="fa-solid fa-book-open"></i>
              <span id="enquiry-course-display">Course</span>
            </span>
          </div>
        </div>

        <div class="enquiry-modal-body" id="enquiry-form-section">
          <form id="enquiry-popup-form" novalidate>
            <div class="enquiry-form-group">
              <label for="enq-fullname">Full Name <span>*</span></label>
              <input type="text" id="enq-fullname" name="full_name" placeholder="Enter your full name" required />
            </div>

            <div class="enquiry-form-row">
              <div class="enquiry-form-group">
                <label for="enq-mobile">Mobile Number <span>*</span></label>
                <input type="tel" id="enq-mobile" name="mobile_number" placeholder="10-digit number" maxlength="10" required />
              </div>
              <div class="enquiry-form-group">
                <label for="enq-email">Email ID <span>*</span></label>
                <input type="email" id="enq-email" name="email_id" placeholder="you@email.com" required />
              </div>
            </div>

            <div class="enquiry-form-group">
              <label for="enq-message">Enquiry Details <span>*</span></label>
              <textarea id="enq-message" name="enquiry_details" placeholder="Tell us what you'd like to know... (min 20 characters)" required></textarea>
            </div>

            <button type="submit" class="enquiry-submit-btn" id="enq-submit-btn">
              <i class="fa-solid fa-paper-plane"></i> Submit Enquiry
            </button>

            <div class="enquiry-error-msg" id="enq-error-msg"></div>
          </form>
        </div>

        <div class="enquiry-thankyou" id="enquiry-thankyou">
          <div class="enquiry-thankyou-icon"><i class="fa-solid fa-check"></i></div>
          <h4>Thank You! 🎉</h4>
          <p>Your enquiry has been submitted successfully.<br>Our team will reach out to you soon.</p>
          <span class="enquiry-countdown" id="enq-countdown">Closing in 2s...</span>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    attachModalEvents(overlay);
  }

  function openModal(collegeName, courseName) {
    const overlay = document.getElementById("enquiry-overlay");
    resetModal();

    _collegeName = collegeName || "";
    _courseName = courseName || "";

    document.getElementById("enquiry-college-display").textContent = collegeName || "General Admissions";
    document.getElementById("enquiry-course-display").textContent = courseName || "Academic Track";

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";

    setTimeout(() => { document.getElementById("enq-fullname").focus(); }, 350);
  }

  function closeModal() {
    document.getElementById("enquiry-overlay").classList.remove("active");
    document.body.style.overflow = "";
  }

  function resetModal() {
    const form = document.getElementById("enquiry-popup-form");
    form.reset();
    form.querySelectorAll("input, textarea").forEach(el => {
      el.style.borderColor = "";
      el.classList.remove("input-error-shake");
    });

    document.getElementById("enquiry-form-section").style.display = "block";
    document.getElementById("enquiry-thankyou").classList.remove("show");

    const btn = document.getElementById("enq-submit-btn");
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Enquiry';
    
    const errorPanel = document.getElementById("enq-error-msg");
    errorPanel.classList.remove("show");
    errorPanel.textContent = "";
  }

  function attachModalEvents(overlay) {
    document.getElementById("enquiry-close").addEventListener("click", closeModal);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) closeModal(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });
    document.getElementById("enquiry-popup-form").addEventListener("submit", handleEnquirySubmit);
    
    // Restrict numerical input limits natively on keyboard processing bounds
    document.getElementById("enq-mobile").addEventListener("input", function() {
      this.value = this.value.replace(/[^0-9]/g, "");
      this.style.borderColor = ""; // clear error color on active typing
    });
    
    document.querySelectorAll("#enquiry-popup-form input, #enquiry-popup-form textarea").forEach(el => {
      el.addEventListener("input", function() { this.style.borderColor = ""; });
    });
  }

  async function handleEnquirySubmit(e) {
    e.preventDefault();

    const btn = document.getElementById("enq-submit-btn");
    const errorMsg = document.getElementById("enq-error-msg");

    const inputDataMap = {
      fullName: document.getElementById("enq-fullname").value.trim(),
      mobile: document.getElementById("enq-mobile").value.trim(),
      email: document.getElementById("enq-email").value.trim(),
      details: document.getElementById("enq-message").value.trim()
    };

    // Run active dynamic pipeline validation check
    const validationError = validateFormInputs("enquiry-popup-form", inputDataMap);
    if (validationError) {
      errorMsg.textContent = validationError;
      errorMsg.classList.add("show");
      return;
    }

    errorMsg.classList.remove("show");
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Submitting...';

    const payload = {
      source: "Enquiry Popup Layer",
      full_name: inputDataMap.fullName,
      email_id: inputDataMap.email,
      mobile_number: inputDataMap.mobile,
      enquiry_details: inputDataMap.details,
      college_name: _collegeName,
      course_name: _courseName
    };

    try {
      const res = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload)
      });
      const result = await res.json();

      if (result.status === "success") {
        showThankYou("enquiry-form-section", "enquiry-thankyou", "enq-countdown", closeModal);
      } else {
        throw new Error(result.message || "Database response conflict");
      }
    } catch (err) {
      console.error("Enquiry submission error logs:", err);
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Enquiry';
      errorMsg.textContent = "❌ Transmission failed. Please verify connection parameters and retry.";
      errorMsg.classList.add("show");
    }
  }

  /* =============================================
     GENERAL ADVISORY GLOBAL MODAL (CONTACT US)
     ============================================= */

  function createContactModal() {
    if (document.getElementById("contact-popup-overlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "contact-popup-overlay";
    overlay.className = "enquiry-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");

    overlay.innerHTML = `
      <div class="enquiry-modal" id="contact-popup-modal">
        <div class="enquiry-modal-header">
          <button class="enquiry-close-btn" id="contact-popup-close" aria-label="Close Panel">&#x2715;</button>
          <h4>Contact Us</h4>
          <p>Have questions? We hold direct pathways to optimize your candidate credentials mapping.</p>
          <span class="enquiry-college-badge" style="margin-top:12px;">
            <i class="fa-solid fa-headset"></i>
            <span>Free Strategic Planning</span>
          </span>
        </div>

        <div class="enquiry-modal-body" id="contact-popup-form-section">
          <form id="contact-popup-form" novalidate>
            <div class="enquiry-form-group">
              <label for="cp-fullname">Full Name <span>*</span></label>
              <input type="text" id="cp-fullname" name="full_name" placeholder="Enter your full name" required />
            </div>

            <div class="enquiry-form-row">
              <div class="enquiry-form-group">
                <label for="cp-mobile">Phone Number <span>*</span></label>
                <input type="tel" id="cp-mobile" name="mobile_number" placeholder="10-digit number" maxlength="10" required />
              </div>
              <div class="enquiry-form-group">
                <label for="cp-email">Email ID <span>*</span></label>
                <input type="email" id="cp-email" name="email_id" placeholder="you@email.com" required />
              </div>
            </div>

            <div class="enquiry-form-group">
              <label for="cp-message">Message Details <span>*</span></label>
              <textarea id="cp-message" name="message" placeholder="How can we assist you with admissions? (min 20 characters)" required></textarea>
            </div>

            <button type="submit" class="enquiry-submit-btn" id="cp-submit-btn">
              <i class="fa-solid fa-paper-plane"></i> Send Message
            </button>

            <div class="enquiry-error-msg" id="cp-error-msg"></div>
          </form>
        </div>

        <div class="enquiry-thankyou" id="contact-popup-thankyou">
          <div class="enquiry-thankyou-icon"><i class="fa-solid fa-check"></i></div>
          <h4>Thank You! 🎉</h4>
          <p>Your data logs have reached our planner network database securely.<br>Our specialized team holds priority contact tracing metrics next.</p>
          <span class="enquiry-countdown" id="cp-countdown">Closing in 2s...</span>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    attachContactModalEvents(overlay);
  }

  function openContactModal() {
    const overlay = document.getElementById("contact-popup-overlay");
    resetContactModal();
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    setTimeout(() => { document.getElementById("cp-fullname").focus(); }, 350);
  }

  function closeContactModal() {
    document.getElementById("contact-popup-overlay").classList.remove("active");
    document.body.style.overflow = "";
  }

  function resetContactModal() {
    const form = document.getElementById("contact-popup-form");
    form.reset();
    form.querySelectorAll("input, textarea").forEach(el => {
      el.style.borderColor = "";
      el.classList.remove("input-error-shake");
    });

    document.getElementById("contact-popup-form-section").style.display = "block";
    document.getElementById("contact-popup-thankyou").classList.remove("show");

    const btn = document.getElementById("cp-submit-btn");
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    
    const errorPanel = document.getElementById("cp-error-msg");
    errorPanel.classList.remove("show");
    errorPanel.textContent = "";
  }

  function attachContactModalEvents(overlay) {
    document.getElementById("contact-popup-close").addEventListener("click", closeContactModal);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) closeContactModal(); });
    document.getElementById("contact-popup-form").addEventListener("submit", handleContactSubmit);
    
    document.getElementById("cp-mobile").addEventListener("input", function() {
      this.value = this.value.replace(/[^0-9]/g, "");
      this.style.borderColor = "";
    });

    document.querySelectorAll("#contact-popup-form input, #contact-popup-form textarea").forEach(el => {
      el.addEventListener("input", function() { this.style.borderColor = ""; });
    });
  }

  async function handleContactSubmit(e) {
    e.preventDefault();

    const btn = document.getElementById("cp-submit-btn");
    const errorMsg = document.getElementById("cp-error-msg");

    const contactDataMap = {
      fullName: document.getElementById("cp-fullname").value.trim(),
      mobile: document.getElementById("cp-mobile").value.trim(),
      email: document.getElementById("cp-email").value.trim(),
      details: document.getElementById("cp-message").value.trim()
    };

    const validationResult = validateFormInputs("contact-popup-form", contactDataMap);
    if (validationResult) {
      errorMsg.textContent = validationResult;
      errorMsg.classList.add("show");
      return;
    }

    errorMsg.classList.remove("show");
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Sending Message...';

    const payload = {
      source: "Corporate Advisory Hub Popup",
      full_name: contactDataMap.fullName,
      email_id: contactDataMap.email,
      mobile_number: contactDataMap.mobile,
      enquiry_details: contactDataMap.details,
      college_name: "",
      course_name: ""
    };

    try {
      const res = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload)
      });
      const result = await res.json();

      if (result.status === "success") {
        showThankYou("contact-popup-form-section", "contact-popup-thankyou", "cp-countdown", closeContactModal);
      } else {
        throw new Error(result.message || "Database stream write error");
      }
    } catch (err) {
      console.error("Advisory form execution failure logs:", err);
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
      errorMsg.textContent = "❌ Transmission failed. Verify server access bounds or network switches.";
      errorMsg.classList.add("show");
    }
  }

  /* =============================================
     STATE MUTATION ANIMATIONS (THANK YOU PANEL)
     ============================================= */

  function showThankYou(formSectionId, thankyouId, countdownId, closeFn) {
    document.getElementById(formSectionId).style.display = "none";
    document.getElementById(thankyouId).classList.add("show");

    let seconds = 2;
    const countdownEl = document.getElementById(countdownId);
    countdownEl.textContent = `Closing window in ${seconds}s...`;

    const interval = setInterval(() => {
      seconds--;
      countdownEl.textContent = seconds > 0 ? `Closing window in ${seconds}s...` : "Resetting layout viewport...";
      if (seconds <= 0) {
        clearInterval(interval);
        closeFn();
      }
    }, 1000);
  }

  /* =============================================
     Campus components initialization entry
     ============================================= */

  function initComponentWorkspace() {
    createModal();
    createContactModal();

    document.body.addEventListener("click", function (e) {
      const enquiryTrigger = e.target.closest(".enquiry-now");
      if (enquiryTrigger) {
        e.preventDefault();

        const card = enquiryTrigger.closest(
          ".news-card-item, .college-card, .pg-college-card, .pg-college-card.featured, [data-college-scope]"
        );

        const collegeName =
          enquiryTrigger.dataset.college ||
          card?.querySelector(".pg-card-name")?.textContent.trim() ||
          card?.querySelector(".news-content h6, .news-content h5, .news-content h4")?.textContent.trim() ||
          "Admissions Help Desk";

        const courseName =
          enquiryTrigger.dataset.course ||
          card?.dataset.course ||
          card?.querySelector(".news-image > span")?.textContent.trim() ||
          "Integrated Track Management";

        openModal(collegeName, courseName);
        return;
      }

      const contactTrigger = e.target.closest(".hero-contact-popup");
      if (contactTrigger) {
        e.preventDefault();
        openContactModal();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initComponentWorkspace);
  } else {
    initComponentWorkspace();
  }
})();