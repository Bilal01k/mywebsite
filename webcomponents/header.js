class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <nav class="navbar">
          <a href="index.html" class="logo">MySite</a>
          <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('my-header', MyHeader);
