// ============================================
// LITERARY LAB — SHARED FOOTER
// Include: <div id="footer-placeholder"></div>
// <script src="../components/footer.js"></script>
// ============================================

(function () {
  const path = window.location.pathname;
  const depth = path.split('/').length - 2;
  const base = depth > 1 ? '../' : '';

  const year = new Date().getFullYear();

  const html = `
<footer class="site-footer" id="siteFooter">
  <div class="footer-inner">
    <div class="footer-top">

      <!-- BRAND -->
      <div class="footer-brand">
        <a href="${base}index.html" class="nav-logo">
          <div class="logo-mark">LL</div>
          <div class="logo-text">
            <span class="logo-name">Literary Lab</span>
            <span class="logo-sub">Publishing Studio</span>
          </div>
        </a>
        <p>Helping self-published authors produce books that compete with traditional publishing — beautiful, professional, print-ready.</p>
        <div class="footer-socials" style="margin-top:20px;">
          <a href="https://wa.me/923472590983" class="social-link" target="_blank" aria-label="WhatsApp">💬</a>
          <a href="mailto:lab@zorqstudio.com" class="social-link" aria-label="Email">✉️</a>
          <a href="#" class="social-link" aria-label="Instagram">📸</a>
          <a href="#" class="social-link" aria-label="Facebook">📘</a>
        </div>
      </div>

      <!-- SERVICES -->
      <div class="footer-col">
        <h5>Services</h5>
        <ul>
          <li><a href="${base}services.html#formatting">Interior Formatting</a></li>
          <li><a href="${base}services.html#cover">Cover Design</a></li>
          <li><a href="${base}services.html#package">Full Package</a></li>
          <li><a href="${base}services.html#ebook">eBook Conversion</a></li>
          <li><a href="${base}services.html#cleanup">Manuscript Cleanup</a></li>
          <li><a href="${base}services.html#rush">Rush Delivery</a></li>
        </ul>
      </div>

      <!-- COMPANY -->
      <div class="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="${base}about.html">About Us</a></li>
          <li><a href="${base}portfolio.html">Portfolio</a></li>
          <li><a href="${base}contact.html">Contact</a></li>
          <li><a href="https://zorqstudio.com" target="_blank">Zorq Studio</a></li>
        </ul>
      </div>

      <!-- CONTACT -->
      <div class="footer-col">
        <h5>Get In Touch</h5>
        <ul>
          <li><a href="https://wa.me/923472590983">+92-347-2590983</a></li>
          <li><a href="mailto:lab@zorqstudio.com">lab@zorqstudio.com</a></li>
          <li><a href="mailto:litverseoffcial@gmail.com">litverseoffcial@gmail.com</a></li>
          <li style="margin-top:8px;"><a href="${base}contact.html" style="color:var(--purple-light);font-weight:500;">Request a Quote →</a></li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© ${year} Literary Lab · A <a href="https://zorqstudio.com" target="_blank">Zorq Studio</a> Brand · All rights reserved.</p>
      <div class="footer-socials">
        <a href="https://wa.me/923472590983" class="social-link" target="_blank" aria-label="WhatsApp">💬</a>
        <a href="mailto:lab@zorqstudio.com" class="social-link" aria-label="Email">✉️</a>
      </div>
    </div>
  </div>
</footer>
`;

  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) placeholder.outerHTML = html;
})();
