const scriptURL = 'https://script.google.com/macros/s/AKfycbxryfQ_VpCvBiM5nARuVfriMDJ6ouRxdPp8xvirP8VH9akXkJJ96m8QoOBlcmp_IH1Y6Q/exec';
const form = document.querySelector('#contact-form');
const btn = document.querySelector('#submit-btn');
const responseMsg = document.querySelector('#form-response');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // UI Feedback
    btn.disabled = true;
    btn.innerHTML = "SENDING...";
    responseMsg.style.display = "block";
    responseMsg.innerHTML = "Processing your request...";
    responseMsg.style.color = "#666";

    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => {
        btn.disabled = false;
        btn.innerHTML = 'SEND MESSAGE <i class="fa-solid fa-arrow-right"></i>';
        
        // Success message
        responseMsg.innerHTML = "Success! Your message has been sent.";
        responseMsg.style.color = "green";
        form.reset(); // Clear the form
        
        // Hide message after 5 seconds
        setTimeout(() => { responseMsg.style.display = "none"; }, 5000);
    })
    .catch(error => {
        btn.disabled = false;
        btn.innerHTML = 'SEND MESSAGE <i class="fa-solid fa-arrow-right"></i>';
        
        // Error message
        responseMsg.innerHTML = "Something went wrong. Please try again.";
        responseMsg.style.color = "red";
        console.error('Error!', error.message);
    });
});