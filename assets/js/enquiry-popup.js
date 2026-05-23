/* =============================================
   ENQUIRY POPUP - Reusable Component
   Usage: Add class="enquiry-now" + data-college="College Name"
          to any button/link to trigger the popup.
   ============================================= */

(function () {
    "use strict";

    // ✅ YOUR GOOGLE APPS SCRIPT WEB APP URL
    const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxjMzheqLjwG1CFRTS-P9_tlXJtwNXFw8tlYyP_fAdvauMCGPrjg2pYf10ElhEG-cMXQw/exec";

    // Hidden variables for college & course (no input boxes)
    let _collegeName = "";
    let _courseName  = "";

    /* =============================================
       ENQUIRY POPUP MODAL
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

            <!-- Header -->
            <div class="enquiry-modal-header">
              <button class="enquiry-close-btn" id="enquiry-close" aria-label="Close">&#x2715;</button>
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

            <!-- Body: Form -->
            <div class="enquiry-modal-body" id="enquiry-form-section">
              <form id="enquiry-popup-form" novalidate>

                <div class="enquiry-form-group">
                  <label for="enq-fullname">Full Name <span>*</span></label>
                  <input type="text" id="enq-fullname" name="full_name"
                         placeholder="Enter your full name" required />
                </div>

                <div class="enquiry-form-row">
                  <div class="enquiry-form-group">
                    <label for="enq-mobile">Mobile Number <span>*</span></label>
                    <input type="tel" id="enq-mobile" name="mobile_number"
                           placeholder="10-digit number" maxlength="10" required />
                  </div>
                  <div class="enquiry-form-group">
                    <label for="enq-email">Email ID <span>*</span></label>
                    <input type="email" id="enq-email" name="email_id"
                           placeholder="you@email.com" required />
                  </div>
                </div>

                <div class="enquiry-form-group">
                  <label for="enq-message">Enquiry Details <span>*</span></label>
                  <textarea id="enq-message" name="enquiry_details"
                            placeholder="Tell us what you'd like to know..." required></textarea>
                </div>

                <button type="submit" class="enquiry-submit-btn" id="enq-submit-btn">
                  <i class="fa-solid fa-paper-plane"></i> Submit Enquiry
                </button>

                <div class="enquiry-error-msg" id="enq-error-msg">
                  Something went wrong. Please try again.
                </div>

              </form>
            </div>

            <!-- Thank You State -->
            <div class="enquiry-thankyou" id="enquiry-thankyou">
              <div class="enquiry-thankyou-icon">
                <i class="fa-solid fa-check"></i>
              </div>
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
        _courseName  = courseName  || "";

        document.getElementById("enquiry-college-display").textContent = collegeName || "N/A";
        document.getElementById("enquiry-course-display").textContent  = courseName  || "N/A";

        overlay.classList.add("active");
        document.body.style.overflow = "hidden";

        setTimeout(() => { document.getElementById("enq-fullname").focus(); }, 350);
    }

    function closeModal() {
        document.getElementById("enquiry-overlay").classList.remove("active");
        document.body.style.overflow = "";
    }

    function resetModal() {
        document.getElementById("enquiry-popup-form").reset();
        document.getElementById("enquiry-form-section").style.display = "block";
        document.getElementById("enquiry-thankyou").classList.remove("show");

        const btn = document.getElementById("enq-submit-btn");
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Enquiry';
        document.getElementById("enq-error-msg").classList.remove("show");
    }

    function attachModalEvents(overlay) {
        document.getElementById("enquiry-close").addEventListener("click", closeModal);
        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) closeModal();
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") closeModal();
        });
        document.getElementById("enquiry-popup-form").addEventListener("submit", handleEnquirySubmit);
    }

    async function handleEnquirySubmit(e) {
        e.preventDefault();

        const btn      = document.getElementById("enq-submit-btn");
        const errorMsg = document.getElementById("enq-error-msg");

        const payload = {
            source:          "Enquiry Popup",
            full_name:       document.getElementById("enq-fullname").value.trim(),
            email_id:        document.getElementById("enq-email").value.trim(),
            mobile_number:   document.getElementById("enq-mobile").value.trim(),
            enquiry_details: document.getElementById("enq-message").value.trim(),
            college_name:    _collegeName,
            course_name:     _courseName,
        };

        if (!payload.full_name || !payload.mobile_number || !payload.email_id || !payload.enquiry_details) {
            errorMsg.textContent = "⚠️ Please fill in all required fields.";
            errorMsg.classList.add("show");
            return;
        }

        errorMsg.classList.remove("show");
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner"></span> Submitting...';

        try {
            const res    = await fetch(GOOGLE_SHEET_URL, {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: JSON.stringify(payload),
            });
            const result = await res.json();

            if (result.status === "success") {
                showThankYou("enquiry-form-section", "enquiry-thankyou", "enq-countdown", closeModal);
            } else {
                throw new Error(result.message || "Unknown error");
            }
        } catch (err) {
            console.error("Enquiry submission error:", err);
            btn.disabled = false;
            btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Enquiry';
            errorMsg.textContent = "❌ Something went wrong. Please try again.";
            errorMsg.classList.add("show");
        }
    }

    /* =============================================
       HOME PAGE CONTACT US POPUP
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

            <!-- Header -->
            <div class="enquiry-modal-header">
              <button class="enquiry-close-btn" id="contact-popup-close" aria-label="Close">&#x2715;</button>
              <h4>Contact Us</h4>
              <p>Have questions? We're here to help you with your admission journey.</p>
              <span class="enquiry-college-badge" style="margin-top:12px;">
                <i class="fa-solid fa-headset"></i>
                <span>Free Consultation</span>
              </span>
            </div>

            <!-- Body: Form -->
            <div class="enquiry-modal-body" id="contact-popup-form-section">
              <form id="contact-popup-form" novalidate>

                <div class="enquiry-form-group">
                  <label for="cp-fullname">Full Name <span>*</span></label>
                  <input type="text" id="cp-fullname" name="full_name"
                         placeholder="Enter your full name" required />
                </div>

                <div class="enquiry-form-row">
                  <div class="enquiry-form-group">
                    <label for="cp-mobile">Phone Number <span>*</span></label>
                    <input type="tel" id="cp-mobile" name="mobile_number"
                           placeholder="10-digit number" maxlength="10" required />
                  </div>
                  <div class="enquiry-form-group">
                    <label for="cp-email">Email ID <span>*</span></label>
                    <input type="email" id="cp-email" name="email_id"
                           placeholder="you@email.com" required />
                  </div>
                </div>

                <div class="enquiry-form-group">
                  <label for="cp-message">Message <span>*</span></label>
                  <textarea id="cp-message" name="message"
                            placeholder="How can we help you?" required></textarea>
                </div>

                <button type="submit" class="enquiry-submit-btn" id="cp-submit-btn">
                  <i class="fa-solid fa-paper-plane"></i> Send Message
                </button>

                <div class="enquiry-error-msg" id="cp-error-msg">
                  Something went wrong. Please try again.
                </div>

              </form>
            </div>

            <!-- Thank You State -->
            <div class="enquiry-thankyou" id="contact-popup-thankyou">
              <div class="enquiry-thankyou-icon">
                <i class="fa-solid fa-check"></i>
              </div>
              <h4>Thank You! 🎉</h4>
              <p>Your message has been sent successfully.<br>Our team will reach out to you soon.</p>
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
        document.getElementById("contact-popup-form").reset();
        document.getElementById("contact-popup-form-section").style.display = "block";
        document.getElementById("contact-popup-thankyou").classList.remove("show");

        const btn = document.getElementById("cp-submit-btn");
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
        document.getElementById("cp-error-msg").classList.remove("show");
    }

    function attachContactModalEvents(overlay) {
        document.getElementById("contact-popup-close").addEventListener("click", closeContactModal);
        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) closeContactModal();
        });
        document.getElementById("contact-popup-form").addEventListener("submit", handleContactSubmit);
    }

    async function handleContactSubmit(e) {
        e.preventDefault();

        const btn      = document.getElementById("cp-submit-btn");
        const errorMsg = document.getElementById("cp-error-msg");

        const payload = {
            source:          "Contact Us Popup",
            full_name:       document.getElementById("cp-fullname").value.trim(),
            email_id:        document.getElementById("cp-email").value.trim(),
            mobile_number:   document.getElementById("cp-mobile").value.trim(),
            enquiry_details: document.getElementById("cp-message").value.trim(),
            college_name:    "",
            course_name:     "",
        };

        if (!payload.full_name || !payload.mobile_number || !payload.email_id || !payload.enquiry_details) {
            errorMsg.textContent = "⚠️ Please fill in all required fields.";
            errorMsg.classList.add("show");
            return;
        }

        errorMsg.classList.remove("show");
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner"></span> Sending...';

        try {
            const res    = await fetch(GOOGLE_SHEET_URL, {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: JSON.stringify(payload),
            });
            const result = await res.json();

            if (result.status === "success") {
                showThankYou("contact-popup-form-section", "contact-popup-thankyou", "cp-countdown", closeContactModal);
            } else {
                throw new Error(result.message || "Unknown error");
            }
        } catch (err) {
            console.error("Contact form error:", err);
            btn.disabled = false;
            btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
            errorMsg.textContent = "❌ Something went wrong. Please try again.";
            errorMsg.classList.add("show");
        }
    }

    /* =============================================
       SHARED: Thank You + Auto Close
       ============================================= */

    function showThankYou(formSectionId, thankyouId, countdownId, closeFn) {
        document.getElementById(formSectionId).style.display = "none";
        document.getElementById(thankyouId).classList.add("show");

        let seconds = 2;
        const countdownEl = document.getElementById(countdownId);
        countdownEl.textContent = `Closing in ${seconds}s...`;

        const interval = setInterval(() => {
            seconds--;
            countdownEl.textContent = seconds > 0 ? `Closing in ${seconds}s...` : "Closing...";
            if (seconds <= 0) {
                clearInterval(interval);
                closeFn();
            }
        }, 1000);
    }

    /* =============================================
       INIT
       ============================================= */

    function init() {
        // Create both modals
        createModal();
        createContactModal();

        document.addEventListener("click", function (e) {

            // --- Enquiry Now buttons (college cards) ---
            const enquiryTrigger = e.target.closest(".enquiry-now");
            if (enquiryTrigger) {
                e.preventDefault();
                const card = enquiryTrigger.closest(".news-card-item, .college-card, [data-college-scope]");
                const collegeName =
                    enquiryTrigger.dataset.college ||
                    card?.querySelector(".news-content h6, .news-content h5, .news-content h4")?.textContent.trim() || "";
                const courseName =
                    enquiryTrigger.dataset.course ||
                    card?.querySelector(".news-image > span")?.textContent.trim() || "";
                openModal(collegeName, courseName);
                return;
            }

            // --- Hero Contact Us button ---
            const contactTrigger = e.target.closest(".hero-contact-popup");
            if (contactTrigger) {
                e.preventDefault();
                openContactModal();
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();