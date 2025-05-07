class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <nav class="navbar">
          <a href="index.html" class="logo">Zie Core <span>Fitness</span></a>
          <ul class="nav-links">
            <li><a href="index.html#location">Location</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="service.html">Services</a></li>
            <li><a href="ladies-hours.html">Ladies' Hours</a></li>
            <li><a href="contactus.html">Contact</a></li>
          </ul>
          <button class="mobile-menu-btn">
            <i class="fa fa-bars"></i>
          </button>
        </nav>
      </header>
    `;
  }
}

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <section class="cta">
          <h2>Ready to Transform Your Life?</h2>
          <p>Join Zie Core Fitness today and experience expert training and support.</p>
          <div class="hero-btns">
            <a href="contactus.html#Contact-form" class="btn btn-primary">Join Now</a>
            <a href="contactus.html#Contact-form" class="btn btn-secondary">Enquiry</a>
          </div>
        </section>

        <div class="footer-content">
          <div class="footer-section">
            <h3>Zie Core Fitness</h3>
            <p>Top-quality training, equipment, and nutrition guidance.</p>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
          </div>

          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="service.html">Services</a></li>
              <li><a href="ladies-hours.html">Ladies' Hours</a></li>
              <li><a href="contactus.html">Contact</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li><i class="fas fa-map-marker-alt"></i> Ajman, UAE</li>
              <li><i class="fas fa-phone-alt"></i> +97 1502610078</li>
              <li><i class="fas fa-envelope"></i> Ziecorefitnessgym2024@gmail.com</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 Zie Core Fitness. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
