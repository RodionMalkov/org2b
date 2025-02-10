export default function handlerMobileNav() {
  const mobileNav = document.querySelector('.mobile-nav');
  const navBtn = mobileNav?.querySelectorAll('button[data-modal-open]');
  
  if (!mobileNav || !navBtn) return;

  let activeModalId = null;

  navBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal-open');
      const isActive = btn.classList.contains('active');

      if (isActive) {
        MicroModal.close(modalId);
        btn.classList.remove('active');
        activeModalId = null;
      } else {
        if (activeModalId) {
          document.getElementById(activeModalId).querySelector('[data-modal-close]').click();
          navBtn.forEach(b => b.classList.remove('active'));
        }
        MicroModal.show(modalId);
        btn.classList.add('active');
        activeModalId = modalId;
      }
    });
  });
}
