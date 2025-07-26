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
