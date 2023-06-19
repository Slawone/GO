const orderBtn = document.querySelector('.header__order');

const overlay = document.querySelector('.modal-overlay');

orderBtn.addEventListener('click', () => {
  overlay.classList.add('is-visible');
  document.body.style.overflow = 'hidden';
});

overlay.addEventListener('click', (e) => {
  const target = e.target;
  if (target === overlay || target.classList.contains('close-btn')) {
    overlay.classList.remove('is-visible');
    document.body.style.overflow = 'visible';
  }
});
