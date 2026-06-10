/* =============================================
   ENQUIRY POPUP - Reusable Dynamic Component
   With spam-prevention Math Captcha Validation & Auto-Welcome Popups
   ============================================= */

(function () {
  "use strict";

  // ✅ GOOGLE APPS SCRIPT TARGET SYSTEM ENDPOINT URL
  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxjMzheqLjwG1CFRTS-P9_tlXJtwNXFw8tlYyP_fAdvauMCGPrjg2pYf10ElhEG-cMXQw/exec";

  // Persistent localized variables holding selection targets
  let _collegeName = "";
  let _courseName = "";

  // Captcha State Storage
  let _enqCaptchaAnswer = 0;
  let _cpCaptchaAnswer = 0;
  let _welCaptchaAnswer = 0;

  /* =============================================
     MATH CAPTCHA GENERATOR UTILITY
     ============================================= */
  function generateCaptcha(displayId) {
    const num1 = Math.floor(Math.random() * 9) + 1; // 1 to 9
    const num2 = Math.floor(Math.random() * 9) + 1; // 1 to 9
    const displayEl = document.getElementById(displayId);

    if (displayEl) {
      displayEl.textContent = `${num1} + ${num2}`;
    }
    return num1 + num2;
  }

  /* =============================================
     SHARED INTERFACES STRUCTURAL VALIDATION UTILITIES
     ============================================= */

  function validateFormInputs(formId, fields, expectedCaptcha) {
    const form = document.getElementById(formId);
    if (!form) return null;

    form.querySelectorAll("input, textarea").forEach((el) => {
      el.style.borderColor = "";
      el.classList.remove("input-error-shake");
    });

    const triggerError = (inputSelector, message) => {
      const inputEl = form.querySelector(inputSelector);
      if (inputEl) {
        inputEl.style.borderColor = "#ef4444";
        inputEl.focus();
        inputEl.classList.add("input-error-shake");
      }
      return message;
    };

    if (!fields.fullName || fields.fullName.length < 6) {
      let idSelector = "#enq-fullname";
      if (formId === "contact-popup-form") idSelector = "#cp-fullname";
      if (formId === "welcome-popup-form") idSelector = "#wel-fullname";
      return triggerError(idSelector, "⚠️ Full Name must be at least 6 characters long.");
    }

    const mobileRegEx = /^\d{10}$/;
    if (!mobileRegEx.test(fields.mobile) || /^(\d)\1{9}$/.test(fields.mobile)) {
      let idSelector = "#enq-mobile";
      if (formId === "contact-popup-form") idSelector = "#cp-mobile";
      if (formId === "welcome-popup-form") idSelector = "#wel-mobile";
      return triggerError(idSelector, "⚠️ Please enter a valid 10-digit phone number.");
    }

    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegEx.test(fields.email)) {
      let idSelector = "#enq-email";
      if (formId === "contact-popup-form") idSelector = "#cp-email";
      if (formId === "welcome-popup-form") idSelector = "#wel-email";
      return triggerError(idSelector, "⚠️ Please provide a valid email address structure.");
    }

    if (!fields.details || fields.details.length < 20) {
      let idSelector = "#enq-message";
      if (formId === "contact-popup-form") idSelector = "#cp-message";
      if (formId === "welcome-popup-form") idSelector = "#wel-message";
      return triggerError(idSelector, "⚠️ Details must be at least 20 characters.");
    }

    if (parseInt(fields.captchaUserAnswer) !== expectedCaptcha) {
      let idSelector = "#enq-captcha-input";
      if (formId === "contact-popup-form") idSelector = "#cp-captcha-input";
      if (formId === "welcome-popup-form") idSelector = "#wel-captcha-input";
      return triggerError(idSelector, "⚠️ Incorrect captcha answer.");
    }

    return null;
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
          <button type="button" class="enquiry-close-btn" id="enquiry-close" aria-label="Close Modal">&#x2715;</button>
          <h4 id="enquiry-title">Enquire Now</h4>
          <div class="badge-row-container">
            <span class="enquiry-college-badge" id="enquiry-college-display">College Name</span>
            <span class="enquiry-college-badge" id="enquiry-course-display">Course</span>
          </div>
        </div>

        <div class="enquiry-modal-body" id="enquiry-form-section">
          <form id="enquiry-popup-form" novalidate>
            <div class="enquiry-form-group">
              <input type="text" id="enq-fullname" name="full_name" placeholder="Full Name *" required />
            </div>

            <div class="enquiry-form-row">
              <div class="enquiry-form-group">
                <input type="tel" id="enq-mobile" name="mobile_number" placeholder="Mobile Number *" maxlength="10" required />
              </div>
              <div class="enquiry-form-group">
                <input type="email" id="enq-email" name="email_id" placeholder="Email ID *" required />
              </div>
            </div>

            <div class="enquiry-form-group">
              <textarea id="enq-message" name="enquiry_details" placeholder="Tell us what you'd like to know... (min 20 characters) *" required></textarea>
            </div>

            <div class="captcha-row-layout">
              <div class="captcha-math-block" id="enq-captcha-question">0 + 0</div>
              <div style="font-weight:700; color:var(--ink); font-size:13px;">=</div>
              <input type="text" id="enq-captcha-input" placeholder="Security Check *" maxlength="3" required />
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
          <p>Your enquiry has been submitted successfully.</p>
          <span class="enquiry-countdown" id="enq-countdown">Closing in 2s...</span>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    attachModalEvents();
  }

  function openModal(collegeName, courseName) {
    const overlay = document.getElementById("enquiry-overlay");
    resetModal();

    _collegeName = collegeName || "";
    _courseName = courseName || "";

    document.getElementById("enquiry-college-display").innerHTML =
      `<i class="fa-solid fa-building-columns"></i> <span>${collegeName || "General Admissions"}</span>`;

    document.getElementById("enquiry-course-display").innerHTML =
      `<i class="fa-solid fa-book-open"></i> <span>${courseName || "Academic Track"}</span>`;

    _enqCaptchaAnswer = generateCaptcha("enq-captcha-question");

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";

    setTimeout(() => { document.getElementById("enq-fullname").focus(); }, 350);
  }

  function closeModal() {
    document.getElementById("enquiry-overlay").classList.remove("active");
    document.body.style.overflow = "";
  }

  /* ── CRITICAL FIX: OUTSIDE BACKGROUND CLICK DISMISSED FROM EVENT BINDINGS ── */
  function attachModalEvents() {
    document.getElementById("enquiry-close").addEventListener("click", closeModal);
    document.getElementById("enquiry-popup-form").addEventListener("submit", handleEnquirySubmit);

    document.getElementById("enq-mobile").addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
      this.style.borderColor = "";
    });

    document.getElementById("enq-captcha-input").addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
      this.style.borderColor = "";
    });

    document.querySelectorAll("#enquiry-popup-form input, #enquiry-popup-form textarea").forEach((el) => {
      el.addEventListener("input", function () { this.style.borderColor = ""; });
    });
  }

  function resetModal() {
    const form = document.getElementById("enquiry-popup-form");
    if (!form) return;
    form.reset();
    form.querySelectorAll("input, textarea").forEach((el) => {
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

  async function handleEnquirySubmit(e) {
    e.preventDefault();

    const btn = document.getElementById("enq-submit-btn");
    const errorMsg = document.getElementById("enq-error-msg");

    const inputDataMap = {
      fullName: document.getElementById("enq-fullname").value.trim(),
      mobile: document.getElementById("enq-mobile").value.trim(),
      email: document.getElementById("enq-email").value.trim(),
      details: document.getElementById("enq-message").value.trim(),
      captchaUserAnswer: document.getElementById("enq-captcha-input").value.trim(),
    };

    const validationError = validateFormInputs("enquiry-popup-form", inputDataMap, _enqCaptchaAnswer);
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
      course_name: _courseName,
    };

    try {
      const res = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
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
      _enqCaptchaAnswer = generateCaptcha("enq-captcha-question");
      document.getElementById("enq-captcha-input").value = "";
      errorMsg.textContent = "❌ Submission failed. Verify parameters and retry.";
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
          <button type="button" class="enquiry-close-btn" id="contact-popup-close" aria-label="Close Panel">&#x2715;</button>
          <h4>Contact Us</h4>
          <div class="badge-row-container">
            <span class="enquiry-college-badge"><i class="fa-solid fa-headset"></i> Free Strategic Planning</span>
          </div>
        </div>

        <div class="enquiry-modal-body" id="contact-popup-form-section">
          <form id="contact-popup-form" novalidate>
            <div class="enquiry-form-group">
              <input type="text" id="cp-fullname" name="full_name" placeholder="Full Name *" required />
            </div>

            <div class="enquiry-form-row">
              <div class="enquiry-form-group">
                <input type="tel" id="cp-mobile" name="mobile_number" placeholder="Phone Number *" maxlength="10" required />
              </div>
              <div class="enquiry-form-group">
                <input type="email" id="cp-email" name="email_id" placeholder="Email ID *" required />
              </div>
            </div>
            <div class="enquiry-form-group">
              <textarea id="cp-message" name="message" placeholder="Tell us what you'd like to know... (min 20 characters) *" required></textarea>
            </div>

            <div class="captcha-row-layout">
              <div class="captcha-math-block" id="cp-captcha-question">0 + 0</div>
              <div style="font-weight:700; color:var(--ink); font-size:13px;">=</div>
              <input type="text" id="cp-captcha-input" placeholder="Security Check *" maxlength="3" required />
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
          <p>Your data logs have reached our planner network database securely.</p>
          <span class="enquiry-countdown" id="cp-countdown">Closing in 2s...</span>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    attachContactModalEvents();
  }

  function openContactModal() {
    const overlay = document.getElementById("contact-popup-overlay");
    resetContactModal();
    _cpCaptchaAnswer = generateCaptcha("cp-captcha-question");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    setTimeout(() => { document.getElementById("cp-fullname").focus(); }, 350);
  }

  function closeContactModal() {
    document.getElementById("contact-popup-overlay").classList.remove("active");
    document.body.style.overflow = "";
  }

  /* ── CRITICAL FIX: OUTSIDE BACKGROUND CLICK DISMISSED FROM EVENT BINDINGS ── */
  function attachContactModalEvents() {
    document.getElementById("contact-popup-close").addEventListener("click", closeContactModal);
    document.getElementById("contact-popup-form").addEventListener("submit", handleContactSubmit);

    document.getElementById("cp-mobile").addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
      this.style.borderColor = "";
    });

    document.getElementById("cp-captcha-input").addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
      this.style.borderColor = "";
    });

    document.querySelectorAll("#contact-popup-form input, #contact-popup-form textarea").forEach((el) => {
      el.addEventListener("input", function () { this.style.borderColor = ""; });
    });
  }

  function resetContactModal() {
    const form = document.getElementById("contact-popup-form");
    if (!form) return;
    form.reset();
    form.querySelectorAll("input, textarea").forEach((el) => {
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

  async function handleContactSubmit(e) {
    e.preventDefault();

    const btn = document.getElementById("cp-submit-btn");
    const errorMsg = document.getElementById("cp-error-msg");

    const contactDataMap = {
      fullName: document.getElementById("cp-fullname").value.trim(),
      mobile: document.getElementById("cp-mobile").value.trim(),
      email: document.getElementById("cp-email").value.trim(),
      details: document.getElementById("cp-message").value.trim(),
      captchaUserAnswer: document.getElementById("cp-captcha-input").value.trim(),
    };

    const validationResult = validateFormInputs("contact-popup-form", contactDataMap, _cpCaptchaAnswer);
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
      college_name: "-",
      course_name: "-",
    };

    try {
      const res = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (result.status === "success") {
        showThankYou("contact-popup-form-section", "contact-popup-thankyou", "cp-countdown", closeContactModal);
      } else {
        throw new Error(result.message || "Database write error stream logs");
      }
    } catch (err) {
      console.error("Advisory form execution failure logs:", err);
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
      _cpCaptchaAnswer = generateCaptcha("cp-captcha-question");
      document.getElementById("cp-captcha-input").value = "";
      errorMsg.textContent = "❌ Transmission failed. Verify parameters and retry.";
      errorMsg.classList.add("show");
    }
  }

  /* =============================================
     NEW MODEL: AUTO-TRIGGER WELCOME POPUP ON SITE LAUNCH
     ============================================= */

  function createWelcomeModal() {
    if (document.getElementById("welcome-popup-overlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "welcome-popup-overlay";
    overlay.className = "enquiry-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");

    overlay.innerHTML = `
      <div class="enquiry-modal" id="welcome-popup-modal">
        <div class="enquiry-modal-header">
          <button type="button" class="enquiry-close-btn" id="welcome-popup-close" aria-label="Close Panel">&#x2715;</button>
          <h4>Welcome to Career Futures! 🎉</h4>
          <p>Get instant priority admission advice and allocation mapping slots today.</p>
          <span class="enquiry-college-badge" style="margin-top:8px;">
            <i class="fa-solid fa-star"></i>
            <span>Priority Advisory Access</span>
          </span>
        </div>

        <div class="enquiry-modal-body" id="welcome-popup-form-section">
          <form id="welcome-popup-form" novalidate>
            <div class="enquiry-form-group">
              <input type="text" id="wel-fullname" name="full_name" placeholder="Full Name *" required />
            </div>

            <div class="enquiry-form-row">
              <div class="enquiry-form-group">
                <input type="tel" id="wel-mobile" name="mobile_number" placeholder="Phone Number *" maxlength="10" required />
              </div>
              <div class="enquiry-form-group">
                <input type="email" id="wel-email" name="email_id" placeholder="Email ID *" required />
              </div>
            </div>

            <div class="enquiry-form-group">
              <textarea id="wel-message" name="enquiry_details" placeholder="Tell us what you'd like to know... (min 20 characters) *" required></textarea>
            </div>

            <div class="captcha-row-layout">
              <div class="captcha-math-block" id="wel-captcha-question">0 + 0</div>
              <div style="font-weight:700; color:var(--ink); font-size:13px;">=</div>
              <input type="text" id="wel-captcha-input" placeholder="Security Check *" maxlength="3" required />
            </div>

            <button type="submit" class="enquiry-submit-btn" id="wel-submit-btn">
              <i class="fa-solid fa-paper-plane"></i> Access Free Consultation
            </button>

            <div class="enquiry-error-msg" id="wel-error-msg"></div>
          </form>
        </div>

        <div class="enquiry-thankyou" id="welcome-popup-thankyou">
          <div class="enquiry-thankyou-icon"><i class="fa-solid fa-check"></i></div>
          <h4>Profile Logged Successfully! 🚀</h4>
          <p>Our senior counselor will map out your application and contact you directly.</p>
          <span class="enquiry-countdown" id="wel-countdown">Closing window in 2s...</span>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    attachWelcomeModalEvents();
  }

  function openWelcomeModal() {
    if (sessionStorage.getItem("cf_welcome_modal_dismissed") === "true") return;

    const overlay = document.getElementById("welcome-popup-overlay");
    resetWelcomeModal();
    _welCaptchaAnswer = generateCaptcha("wel-captcha-question");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    setTimeout(() => { const el = document.getElementById("wel-fullname"); if(el) el.focus(); }, 350);
  }

  function closeWelcomeModal() {
    document.getElementById("welcome-popup-overlay").classList.remove("active");
    document.body.style.overflow = "";
    sessionStorage.setItem("cf_welcome_modal_dismissed", "true");
  }

  /* ── CRITICAL FIX: OUTSIDE BACKGROUND CLICK DISMISSED FROM EVENT BINDINGS ── */
  function attachWelcomeModalEvents() {
    document.getElementById("welcome-popup-close").addEventListener("click", closeWelcomeModal);
    document.getElementById("welcome-popup-form").addEventListener("submit", handleWelcomeSubmit);

    document.getElementById("wel-mobile").addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
      this.style.borderColor = "";
    });

    document.getElementById("wel-captcha-input").addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
      this.style.borderColor = "";
    });

    document.querySelectorAll("#welcome-popup-form input, #welcome-popup-form textarea").forEach((el) => {
      el.addEventListener("input", function () { this.style.borderColor = ""; });
    });
  }

  function resetWelcomeModal() {
    const form = document.getElementById("welcome-popup-form");
    if (!form) return;
    form.reset();
    form.querySelectorAll("input, textarea").forEach((el) => {
      el.style.borderColor = "";
      el.classList.remove("input-error-shake");
    });

    document.getElementById("welcome-popup-form-section").style.display = "block";
    document.getElementById("welcome-popup-thankyou").classList.remove("show");

    const btn = document.getElementById("wel-submit-btn");
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Access Free Consultation';

    const errorPanel = document.getElementById("wel-error-msg");
    errorPanel.classList.remove("show");
    errorPanel.textContent = "";
  }

  async function handleWelcomeSubmit(e) {
    e.preventDefault();

    const btn = document.getElementById("wel-submit-btn");
    const errorMsg = document.getElementById("wel-error-msg");

    const welcomeDataMap = {
      fullName: document.getElementById("wel-fullname").value.trim(),
      mobile: document.getElementById("wel-mobile").value.trim(),
      email: document.getElementById("wel-email").value.trim(),
      details: document.getElementById("wel-message").value.trim(),
      captchaUserAnswer: document.getElementById("wel-captcha-input").value.trim()
    };

    const validationResult = validateFormInputs("welcome-popup-form", welcomeDataMap, _welCaptchaAnswer);
    if (validationResult) {
      errorMsg.textContent = validationResult;
      errorMsg.classList.add("show");
      return;
    }

    errorMsg.classList.remove("show");
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Logging Profile...';

    const payload = {
      source: "Auto Trigger Welcome Modal Launchpad Line",
      full_name: welcomeDataMap.fullName,
      email_id: welcomeDataMap.email,
      mobile_number: welcomeDataMap.mobile,
      enquiry_details: welcomeDataMap.details,
      college_name: "-",
      course_name: "-"
    };

    try {
      const res = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload)
      });
      const result = await res.json();

      if (result.status === "success") {
        showThankYou("welcome-popup-form-section", "welcome-popup-thankyou", "wel-countdown", closeWelcomeModal);
      } else {
        throw new Error(result.message || "Database baseline insertion fault");
      }
    } catch (err) {
      console.error("Welcome submission execution layer error:", err);
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Access Free Consultation';
      _welCaptchaAnswer = generateCaptcha("wel-captcha-question");
      document.getElementById("wel-captcha-input").value = "";
      errorMsg.textContent = "❌ Transmission down. Verify constraints and retry.";
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
    if (countdownEl) countdownEl.textContent = `Closing window in ${seconds}s...`;

    const interval = setInterval(() => {
      seconds--;
      if (countdownEl) {
        countdownEl.textContent = seconds > 0 ? `Closing window in ${seconds}s...` : "Resetting layout viewport...";
      }
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
    createWelcomeModal();

    setTimeout(() => {
      if (sessionStorage.getItem("cf_welcome_modal_dismissed") === "true") return;

      const enqActive = document.getElementById("enquiry-overlay")?.classList.contains("active");
      const cpActive = document.getElementById("contact-popup-overlay")?.classList.contains("active");
      
      if (!enqActive && !cpActive) {
        openWelcomeModal();
      }
    }, 2000);

    document.body.addEventListener("click", function (e) {
      const enquiryTrigger = e.target.closest(".enquiry-now");
      if (enquiryTrigger) {
        e.preventDefault();

        const card = enquiryTrigger.closest(
          ".news-card-item, .college-card, .pg-college-card, .pg-college-card.featured, [data-college-scope]",
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

        sessionStorage.setItem("cf_welcome_modal_dismissed", "true");
        openModal(collegeName, courseName);
        return;
      }

      const contactTrigger = e.target.closest(".hero-contact-popup");
      if (contactTrigger) {
        e.preventDefault();
        sessionStorage.setItem("cf_welcome_modal_dismissed", "true");
        openContactModal();
      }
    });
    
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape") {
        const welOverlay = document.getElementById("welcome-popup-overlay");
        const enqOverlay = document.getElementById("enquiry-overlay");
        const cpOverlay = document.getElementById("contact-popup-overlay");
        
        if (welOverlay && welOverlay.classList.contains("active")) closeWelcomeModal();
        if (enqOverlay && enqOverlay.classList.contains("active")) closeModal();
        if (cpOverlay && cpOverlay.classList.contains("active")) closeContactModal();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initComponentWorkspace);
  } else {
    initComponentWorkspace();
  }
})();