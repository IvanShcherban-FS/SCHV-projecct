document.addEventListener('DOMContentLoaded', () => {
 
  /* ── БУРГЕР МЕНЮ ── */
  const burger    = document.getElementById('burgerBtn');
  const headNav   = document.getElementById('headNav');
  const headStart = document.getElementById('headStart');
 
  if (burger) {
    burger.addEventListener('click', () => {
      const isOpen = burger.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(isOpen));
      headNav.classList.toggle('mobile-open', isOpen);
      headStart.classList.toggle('mobile-open', isOpen);
    });
 
    /* Закрити меню при кліку на будь-яке посилання всередині */
    headNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeBurger);
    });
    headStart.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeBurger);
    });
 
    /* Закрити при кліку поза меню */
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-box')) closeBurger();
    });
 
    /* Закрити при ресайзі до десктопного розміру */
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeBurger();
    });
  }
 
  function closeBurger() {
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    headNav.classList.remove('mobile-open');
    headStart.classList.remove('mobile-open');
  }
 
 
  /* ── FAQ ACCORDION ── */
  document.querySelectorAll('.faq-box').forEach(box => {
    const header = box.querySelector('.faq-header');
    const answer = box.querySelector('.faq-answer');
    if (!header || !answer) return;
 
    header.addEventListener('click', () => {
      const isActive = box.classList.contains('active');
 
      /* Закрити всі інші */
      document.querySelectorAll('.faq-box.active').forEach(other => {
        if (other !== box) {
          other.classList.remove('active');
          other.querySelector('.faq-answer').style.maxHeight = null;
        }
      });
 
      /* Відкрити / закрити поточний */
      box.classList.toggle('active', !isActive);
      answer.style.maxHeight = isActive ? null : answer.scrollHeight + 'px';
    });
  });
 
});