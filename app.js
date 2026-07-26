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
  const tabsWrap = document.querySelector('.tabs-wrap');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  if (tabBtns.length && tabPanes.length) {
    const indicator = tabsWrap ? tabsWrap.querySelector('.tabs-indicator') : null;
    let autoInterval;
    let userInteracted = false;
    let cardHovered = false;
    let current = 0;

    document.querySelectorAll('.segment-card').forEach(card => {
      card.addEventListener('mouseenter', () => { cardHovered = true; });
      card.addEventListener('mouseleave', () => { cardHovered = false; });
    });

    const moveIndicator = (idx) => {
      if (!indicator) return;
      const btn = tabBtns[idx];
      indicator.style.width = btn.offsetWidth + 'px';
      indicator.style.transform = `translateX(${btn.offsetLeft}px)`;
    };

    const activateTab = (idx) => {
      tabBtns.forEach((b, i) => b.classList.toggle('active', i === idx));
      tabPanes.forEach((p, i) => p.classList.toggle('active', i === idx));
      moveIndicator(idx);
      current = idx;
    };

    tabBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        userInteracted = true;
        clearInterval(autoInterval);
        activateTab(idx);
      });
    });

    if (indicator) {
      moveIndicator(current);
      requestAnimationFrame(() => indicator.classList.add('ready'));
      window.addEventListener('resize', () => moveIndicator(current));
      window.addEventListener('load', () => moveIndicator(current));
    }

    autoInterval = setInterval(() => {
      if (!userInteracted && !cardHovered) {
        activateTab((current + 1) % tabBtns.length);
      }
    }, 9000);
  }

  // ── Offices carousel (footer) ──────────────────────────────
  const officesCarousel = document.getElementById('offices-carousel');
  const officesTrack = document.getElementById('offices-track');
  if (officesCarousel && officesTrack) {
    const originalCards = Array.from(officesTrack.children);
    originalCards.forEach(card => {
      officesTrack.appendChild(card.cloneNode(true));
    });

    const gap = parseFloat(getComputedStyle(officesTrack).columnGap || getComputedStyle(officesTrack).gap) || 0;
    const step = originalCards[0].getBoundingClientRect().width + gap;

    let index = 0;
    let paused = false;

    const slide = () => {
      if (paused) return;
      index++;
      officesTrack.style.transform = `translateX(-${step * index}px)`;
      if (index === originalCards.length) {
        officesTrack.addEventListener('transitionend', () => {
          officesTrack.style.transition = 'none';
          officesTrack.style.transform = 'translateX(0px)';
          officesTrack.getBoundingClientRect();
          officesTrack.style.transition = '';
          index = 0;
        }, { once: true });
      }
    };

    setInterval(slide, 3200);
    officesCarousel.addEventListener('mouseenter', () => { paused = true; });
    officesCarousel.addEventListener('mouseleave', () => { paused = false; });
  }

  // ── Cursor-follow zoom (soluções diagram) ──────────────────
  const diagramWrap = document.querySelector('.solucoes-diagram');
  const diagramImg = diagramWrap ? diagramWrap.querySelector('img') : null;
  if (diagramWrap && diagramImg) {
    diagramWrap.addEventListener('mousemove', (e) => {
      const rect = diagramWrap.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      diagramImg.style.transformOrigin = `${x}% ${y}%`;
    });
  }

  // ── Demo float dismiss (sistemas page) ─────────────────────
  const demoFloatWrap = document.getElementById('demoFloatWrap');
  const demoFloatClose = document.getElementById('demoFloatClose');
  if (demoFloatWrap && demoFloatClose) {
    demoFloatClose.addEventListener('click', () => {
      demoFloatWrap.style.display = 'none';
    });
  }

});
