/* ============================================================
   wseed.world — main.js
   ============================================================ */

// ── Scroll progress bar ──────────────────────────────────────
(function () {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  function update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// ── Mobile nav toggle ────────────────────────────────────────
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  // close on link click
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
})();

// ── Carousel ─────────────────────────────────────────────────
(function () {
  var carousel = document.getElementById('figCarousel');
  if (!carousel) return;

  var slides  = carousel.querySelectorAll('.carousel-slide');
  var dots    = carousel.querySelectorAll('.carousel-dot');
  var counter = document.getElementById('carouselCurrent');
  var total   = slides.length;
  var current = 0;
  var timer;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + total) % total;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    if (counter) counter.textContent = current + 1;
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() { timer = setInterval(next, 5000); }
  function stopAuto()  { clearInterval(timer); }

  carousel.querySelector('.carousel-next').addEventListener('click', function () { stopAuto(); next(); startAuto(); });
  carousel.querySelector('.carousel-prev').addEventListener('click', function () { stopAuto(); prev(); startAuto(); });

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () { stopAuto(); goTo(i); startAuto(); });
  });

  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);

  startAuto();
})();

// ── Active nav link ──────────────────────────────────────────
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
