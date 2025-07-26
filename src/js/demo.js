const summarizeBtn = document.getElementById('summarize-btn');
const demoInput = document.getElementById('demo-input');
const demoOutput = document.getElementById('demo-output');

summarizeBtn.addEventListener('click', () => {
    const text = demoInput.value;
    if (text.trim() === '') {
        demoOutput.innerHTML = '<p>Please paste some text to summarize.</p>';
        return;
    }

    // Mock summarization
    const summary = mockSummarize(text);
    demoOutput.innerHTML = `<p>${summary}</p>`;
});

function mockSummarize(text) {
    const sentences = text.split('.');
    const summarySentences = sentences.slice(0, Math.ceil(sentences.length / 3));
    return summarySentences.join('.') + '.';
}
