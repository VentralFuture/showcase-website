// Simple alert for the contact form submission (just for demo purposes)
document.querySelector('#contact form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});
