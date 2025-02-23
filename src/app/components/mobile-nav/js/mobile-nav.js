export default function handlerMobileNav() {
  const mobileNav = document.querySelector('.mobile-nav')
  const navBtn = mobileNav?.querySelectorAll('button[data-modal-open]')
  const heroSearchBtn = document.querySelector('.hero__search--mobile')

  if (!mobileNav || !navBtn) return

  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      const searchBtn = Array.from(navBtn).find(
        button => button.getAttribute('data-modal-open') === 'sheet-search'
      )

      if (!searchBtn.classList.contains('active')) {
        searchBtn.classList.add('active')
      }
    })
  }

  let activeModalId = null

  navBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal-open')
      const isActive = btn.classList.contains('active')

      if (isActive) {
        document
          .getElementById(activeModalId)
          .querySelector('[data-modal-close]')
          .click()
        btn.classList.remove('active')
        activeModalId = null
      } else {
        if (activeModalId) {
          document
            .getElementById(activeModalId)
            .querySelector('[data-modal-close]')
            .click()
          navBtn.forEach(b => b.classList.remove('active'))
        }
        MicroModal.show(modalId)
        btn.classList.add('active')
        activeModalId = modalId
      }
    })
  })
}
