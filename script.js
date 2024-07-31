document.addEventListener('DOMContentLoaded', () => {
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', navigate);
    });

    // Learn more link
    const learnMoreLink = document.getElementById('learn-more-link');
    if (learnMoreLink) {
        learnMoreLink.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Learn more about our foundation and how you can help!');
            window.location.href = learnMoreLink.href;
        });
    }
});
// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}
;

function navigate(event) {
    event.preventDefault();
    const targetUrl = event.target.getAttribute('href');
    window.location.href = targetUrl;
}

// In script.js
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const query = document.getElementById('search-query').value.toLowerCase();
    alert(Search functionality is not yet implemented. Searching for: ${query});
    // Implement search logic here
}
);
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(Registration not yet implemented. Username: ${username});
    // Implement registration logic here
});
// In script.js
document.getElementById('adoption-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const animal = document.getElementById('animal').value;
    const name = document.getElementById('adopter-name').value;
    const contact = document.getElementById('adopter-contact').value;
    alert(Adoption application for ${animal} submitted. Name: ${name}, Contact: ${contact});
    // Implement adoption application logic here
});