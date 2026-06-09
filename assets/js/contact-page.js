/* =========================================================
   CAREER FUTURES - CONTACT PAGE CORE PROCESSING MODULE
   Handles Main Form Validation, Math Captcha & Sheet API Streams
   ========================================================= */

(function () {
  "use strict";

  // ✅ GOOGLE APPS SCRIPT TARGET SYSTEM ENDPOINT URL
  const GOOGLE_SHEET_ENDPOINT_URL = "https://script.google.com/macros/s/AKfycbxjMzheqLjwG1CFRTS-P9_tlXJtwNXFw8tlYyP_fAdvauMCGPrjg2pYf10ElhEG-cMXQw/exec";

  // Encapsulated local page state tracking variable
  let _mainPageCaptchaAnswer = 0;

  /* ── MATH CAPTCHA GENERATOR UTILITY ── */
  function generateMainPageCaptcha() {
    const r1 = Math.floor(Math.random() * 9) + 1; // 1 to 9
    const r2 = Math.floor(Math.random() * 9) + 1; // 1 to 9
    const targetBlock = document.getElementById("ct-captcha-question");
    
    if (targetBlock) {
      targetBlock.textContent = `${r1} + ${r2}`;
    }
    return r1 + r2;
  }

  /* ── INDEPENDENT VALIDATION ENGINE ── */
  function validateMainFormFields(data) {
    const formElement = document.getElementById("main-contact-page-form");
    if (!formElement) return null;

    // Reset diagnostic borders and shake states on fresh evaluation
    formElement.querySelectorAll("input, textarea").forEach((el) => {
      el.style.borderColor = "";
      el.classList.remove("input-error-shake");
    });

    const triggerBoxError = (id, msg) => {
      const box = document.getElementById(id);
      if (box) {
        box.style.borderColor = "#ef4444"; // Strict Red Error Border Indicator
        box.focus();
        box.classList.add("input-error-shake");
      }
      return msg;
    };

    // 1. Full Name check
    if (!data.name || data.name.length < 6) {
      return triggerBoxError("ct-name", "⚠️ Full Name must span at least 6 characters.");
    }

    // 2. Numeric 10-digit mobile layout verification
    const telRegEx = /^\d{10}$/;
    if (!telRegEx.test(data.phone) || /^(\d)\1{9}$/.test(data.phone)) {
      return triggerBoxError("ct-phone", "⚠️ Enter a valid 10-digit telephone number.");
    }

    // 3. Email structure verification
    const mailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailRegEx.test(data.email)) {
      return triggerBoxError("ct-email", "⚠️ Enter an authentic email address structure.");
    }

    // 4. Message field density verification
    if (!data.message || data.message.length < 20) {
      return triggerBoxError("ct-message", "⚠️ Message details must span at least 20 characters.");
    }

    // 5. Anti-Spam Security Token Match check
    if (parseInt(data.captchaInput) !== _mainPageCaptchaAnswer) {
      return triggerBoxError("ct-captcha-input", "⚠️ Incorrect security captcha check answer.");
    }

    return null; // Form data structure matches parameters perfectly
  }

  /* ── DATA TRANSMISSION PROCESSING WORKFLOW ── */
  async function handleMainContactSubmit(e) {
    e.preventDefault();

    const errorDisplay = document.getElementById("ct-error");
    const submitBtn = document.getElementById("ct-submit-btn");

    const packageMap = {
      name: document.getElementById("ct-name").value.trim(),
      phone: document.getElementById("ct-phone").value.trim(),
      email: document.getElementById("ct-email").value.trim(),
      message: document.getElementById("ct-message").value.trim(),
      captchaInput: document.getElementById("ct-captcha-input").value.trim()
    };

    // Evaluate structural assertions
    const internalValidationError = validateMainFormFields(packageMap);
    if (internalValidationError) {
      errorDisplay.textContent = internalValidationError;
      errorDisplay.style.display = "block";
      errorDisplay.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    errorDisplay.style.display = "none";
    errorDisplay.textContent = "";
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Transmitting...';

    const outwardPayload = {
      source: "Contact Page Core Form Target",
      full_name: packageMap.name,
      email_id: packageMap.email,
      mobile_number: packageMap.phone,
      enquiry_details: packageMap.message,
      college_name: "-",
      course_name: "-"
    };

    try {
      const response = await fetch(GOOGLE_SHEET_ENDPOINT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(outwardPayload)
      });
      const parsedJSON = await response.json();

      if (parsedJSON.status === "success") {
        document.getElementById("ct-fields").style.display = "none";
        const successBlock = document.getElementById("ct-thankyou");
        if (successBlock) successBlock.style.display = "block";

        let remainingDuration = 3;
        const countBlock = document.getElementById("ct-countdown");
        if (countBlock) countBlock.textContent = `Refreshing view screen in ${remainingDuration}s...`;

        const reloadTimer = setInterval(() => {
          remainingDuration--;
          if (remainingDuration <= 0) {
            clearInterval(reloadTimer);
            window.location.reload();
          } else {
            if (countBlock) countBlock.textContent = `Refreshing view screen in ${remainingDuration}s...`;
          }
        }, 1000);
      } else {
        throw new Error("Target database error reply");
      }
    } catch (err) {
      console.error("Form execution failure:", err);
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';

      // Re-initialize a fresh math challenge if fetch stream defaults
      _mainPageCaptchaAnswer = generateMainPageCaptcha();
      const captchaInputBox = document.getElementById("ct-captcha-input");
      if (captchaInputBox) captchaInputBox.value = "";

      errorDisplay.textContent = "❌ Submission failed. Please double check connectivity and retry.";
      errorDisplay.style.display = "block";
    }
  }

  /* ── DOM INITIALIZATION ENGINE ── */
  function initializeContactForm() {
    const formElement = document.getElementById("main-contact-page-form");
    if (!formElement) return;

    // Booting up initial math verification state
    _mainPageCaptchaAnswer = generateMainPageCaptcha();

    // Bind transmission trigger submit listener hook
    formElement.addEventListener("submit", handleMainContactSubmit);

    // Apply strict clean digits parsing limitations to interactive input layers
    const phoneInputBox = document.getElementById("ct-phone");
    if (phoneInputBox) {
      phoneInputBox.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
        this.style.borderColor = "";
      });
    }

    const captchaInputBox = document.getElementById("ct-captcha-input");
    if (captchaInputBox) {
      captchaInputBox.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
        this.style.borderColor = "";
      });
    }

    formElement.querySelectorAll("input, textarea").forEach((inputBox) => {
      inputBox.addEventListener("input", function () {
        this.style.borderColor = "";
      });
    });
  }

  // Self-contained document execution pipeline bindings
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeContactForm);
  } else {
    initializeContactForm();
  }
})();