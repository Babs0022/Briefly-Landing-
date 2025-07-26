// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const parentItem = question.closest('.faq-item');
        parentItem.classList.toggle('active');

        const answer = parentItem.querySelector('.faq-answer');
        if (parentItem.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px'; // Set max-height dynamically
        } else {
            answer.style.maxHeight = '0';
        }
    });
});

// Add any other interactive JS here, e.g., form validation, animations, etc.
// For social media icons, you'd typically link to a library like Font Awesome:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
// If not using an external library, replace <i class="fab fa-..."></i> with SVG icons or simple text/images.