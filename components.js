class ProjectItem extends HTMLElement {
  connectedCallback() {
    const number = this.getAttribute('number') || '';
    const title = this.getAttribute('title') || '';
    const description = this.getAttribute('description') || '';
    const tag = this.getAttribute('tag') || '';
    const href = this.getAttribute('href') || '#';

    this.setAttribute('role', 'link');
    this.setAttribute('tabindex', '0');
    this.setAttribute('aria-label', `${title} — ${description}`);

    this.innerHTML = `
      <span class="num">${number}</span>
      <div class="content">
        <strong class="title">${title}</strong>
        <p class="desc">${description}</p>
        <span class="tag">${tag}</span>
      </div>
      <span class="arrow" aria-hidden="true">→</span>
    `;

    this.addEventListener('click', () => {
      if (href && href !== '#') window.open(href, '_blank', 'noopener');
    });

    this.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  }
}

customElements.define('project-item', ProjectItem);
