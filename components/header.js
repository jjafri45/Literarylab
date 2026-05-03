// ============================================
// LITERARY LAB — SHARED HEADER
// Include this script in every page:
// <div id="header-placeholder"></div>
// <script src="../components/header.js"></script>
// ============================================

(function () {
  // Detect current page for active link
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';

  function isActive(href) {
    if (href === 'index.html' && (page === 'index.html' || page === '')) return 'active';
    if (href !== 'index.html' && page === href) return 'active';
    return '';
  }

  // Resolve relative path to components root
  const depth = path.split('/').length - 2;
  const base = depth > 1 ? '../' : '';

  const html = `
<header class="site-header" id="siteHeader">
  <div class="nav-inner">

    <!-- LOGO — Replace logo-mark div with <img> for your actual logo -->
    <a href="${base}index.html" class="nav-logo">
      <div class="logo-mark">LL</div>
      <div class="logo-text">
        <span class="logo-name">Literary Lab</span>
        <span class="logo-sub">Publishing Studio</span>
      </div>
    </a>

    <!-- DESKTOP NAV -->
    <nav class="nav-menu" role="navigation" aria-label="Main navigation">
      <a href="${base}index.html"        class="nav-link ${isActive('index.html')}">Home</a>
      <a href="${base}services.html"     class="nav-link ${isActive('services.html')}">Services</a>
      <a href="${base}portfolio.html"    class="nav-link ${isActive('portfolio.html')}">Portfolio</a>
      <a href="${base}about.html"        class="nav-link ${isActive('about.html')}">About</a>
      <a href="${base}contact.html"      class="nav-cta-btn ${isActive('contact.html')}">Get a Quote</a>
    </nav>

    <!-- HAMBURGER -->
    <div class="hamburger" id="hamburger" aria-label="Toggle menu" role="button" tabindex="0">
      <span></span><span></span><span></span>
    </div>
  </div>
</header>

<!-- MOBILE NAV OVERLAY -->
<div class="mobile-nav-overlay" id="mobileNav" role="dialog" aria-label="Mobile navigation">
  <a href="${base}index.html"     class="mobile-nav-link ${isActive('index.html')}">Home</a>
  <a href="${base}services.html"  class="mobile-nav-link ${isActive('services.html')}">Services</a>
  <a href="${base}portfolio.html" class="mobile-nav-link ${isActive('portfolio.html')}">Portfolio</a>
  <a href="${base}about.html"     class="mobile-nav-link ${isActive('about.html')}">About</a>
  <a href="${base}contact.html"   class="mobile-nav-cta">Get a Quote →</a>
</div>

<!-- WHATSAPP FLOAT -->
<a class="wa-float" href="https://wa.me/923472590983" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>
`;

  document.getElementById('header-placeholder').outerHTML = html;

  // ── SCROLL HANDLER ──
  window.addEventListener('scroll', () => {
    const header = document.getElementById('siteHeader');
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ── HAMBURGER TOGGLE ──
  function toggleMenu() {
    const ham = document.getElementById('hamburger');
    const mob = document.getElementById('mobileNav');
    if (!ham || !mob) return;
    ham.classList.toggle('open');
    mob.classList.toggle('open');
    document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
  }

  document.addEventListener('click', (e) => {
    const ham = document.getElementById('hamburger');
    const mob = document.getElementById('mobileNav');
    if (!ham || !mob) return;
    if (ham.contains(e.target)) { toggleMenu(); return; }
    if (mob.classList.contains('open') && !mob.contains(e.target)) {
      ham.classList.remove('open');
      mob.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // ── REVEAL OBSERVER ──
  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((el, i) => {
        if (el.isIntersecting) {
          setTimeout(() => el.target.classList.add('visible'), el.target.dataset.delay || 0);
          observer.unobserve(el.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
      if (!el.dataset.delay) el.dataset.delay = (i % 4) * 80;
      observer.observe(el);
    });
  });
})();
