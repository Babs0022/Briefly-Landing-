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
