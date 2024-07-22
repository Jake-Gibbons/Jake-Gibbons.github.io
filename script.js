document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to your server
    // For the purpose of this example, we will just display a message
    
    const resultDiv = document.getElementById('form-result');
    resultDiv.innerHTML = `<p>Thank you, ${name}. Your message has been sent!</p>`;
    
    // Clear the form
    document.getElementById('contact-form').reset();
});
