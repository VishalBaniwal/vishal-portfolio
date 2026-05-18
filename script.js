 // Theme toggle
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('toggleIcon');
  const root = document.documentElement;
  toggle.addEventListener('click', () => {
    const dark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', dark ? 'light' : 'dark');
    icon.textContent = dark ? '\u2600\uFE0F' : '\uD83C\uDF19';
  });

  // CV Modal
  const cvBtn   = document.getElementById('cvBtn');
  const cvModal = document.getElementById('cvModal');
  const cvClose = document.getElementById('cvClose');
  cvBtn.addEventListener('click', () => cvModal.classList.add('open'));
  cvClose.addEventListener('click', () => cvModal.classList.remove('open'));
  cvModal.addEventListener('click', (e) => { if (e.target === cvModal) cvModal.classList.remove('open'); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') cvModal.classList.remove('open'); });

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 6 * 0.08) + 's';
    observer.observe(el);
  });

  // Active nav
  const secs = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    secs.forEach(s => { if (window.scrollY >= s.offsetTop - 200) cur = s.id; });
    links.forEach(a => { a.classList.toggle('active', a.getAttribute('href') === '#' + cur); });
  });