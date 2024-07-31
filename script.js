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

