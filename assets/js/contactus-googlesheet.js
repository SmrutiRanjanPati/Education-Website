document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const btn = document.getElementById("submit-btn");
  const responseDiv = document.getElementById("form-response");

  // ✅ YOUR WEB APP URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxjMzheqLjwG1CFRTS-P9_tlXJtwNXFw8tlYyP_fAdvauMCGPrjg2pYf10ElhEG-cMXQw/exec";

  const formData = {
    source:       "Contact Page",
    full_name:    this.user_name.value.trim(),
    email_id:     this.user_email.value.trim(),
    mobile_number: this.phone_number.value.trim(),
    enquiry_details: this.message.value.trim(),
    college_name: ""   // not applicable for contact form
  };

  btn.disabled = true;
  btn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';

  try {
    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(formData)
    });

    const result = await res.json();

    if (result.status === "success") {
      responseDiv.style.display = "block";
      responseDiv.style.color = "green";
      responseDiv.textContent = "✅ Message sent successfully! We'll get back to you soon.";
      this.reset();
    } else {
      throw new Error(result.message);
    }
  } catch (err) {
    responseDiv.style.display = "block";
    responseDiv.style.color = "red";
    responseDiv.textContent = "❌ Something went wrong. Please try again.";
    console.error(err);
  } finally {
    btn.disabled = false;
    btn.innerHTML = 'SEND MESSAGE <i class="fa-solid fa-arrow-right"></i>';
  }
});