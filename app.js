document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll shadow ───────────────────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Hamburger menu ─────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Active nav link ────────────────────────────────────────
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (href !== '/' && path.endsWith(href)) {
      a.classList.add('active');
    }
  });

  // ── Scroll reveal ──────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach(el => io.observe(el));
  }

  // ── Footer year ────────────────────────────────────────────
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Tab system (sistemas page) ─────────────────────────────
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  if (tabBtns.length && tabPanes.length) {
    let autoInterval;
    let userInteracted = false;
    let current = 0;

    const activateTab = (idx) => {
      tabBtns.forEach((b, i) => b.classList.toggle('active', i === idx));
      tabPanes.forEach((p, i) => p.classList.toggle('active', i === idx));
      current = idx;
    };

    tabBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        userInteracted = true;
        clearInterval(autoInterval);
        activateTab(idx);
      });
    });

    autoInterval = setInterval(() => {
      if (!userInteracted) {
        activateTab((current + 1) % tabBtns.length);
      }
    }, 9000);
  }

});
