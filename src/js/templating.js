async function includeHTML() {
  const placeholders = document.querySelectorAll('[id$="-placeholder"]');
  for (const placeholder of placeholders) {
    const partialName = placeholder.id.replace('-placeholder', '');
    const response = await fetch(`/partials/${partialName}.html`);
    const html = await response.text();
    placeholder.innerHTML = html;
  }
}

includeHTML();
