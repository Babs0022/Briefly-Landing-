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

// Contact Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If validation passes, you can submit the form here (e.g., using fetch to send data to a server)
    alert('Form submitted successfully!');
    contactForm.reset();
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Modal Signup
const modal = document.getElementById('signup-modal');
const modalTriggers = document.querySelectorAll('.signup-trigger');
const closeButton = document.querySelector('.close-button');

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('modal-name').value;
    const email = document.getElementById('modal-email').value;
    const password = document.getElementById('modal-password').value;

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If validation passes, you can submit the form here (e.g., using fetch to send data to a server)
    alert('Account created successfully!');
    signupForm.reset();
    modal.style.display = 'none';
});
