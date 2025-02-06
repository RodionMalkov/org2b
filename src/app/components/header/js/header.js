export default function hendlerHeader() {
  const header = document.querySelector('.header')
  const catalogBtn = header?.querySelector('.header__nav-catalog-btn')

  if (!header) return

  catalogBtn?.addEventListener('click', () =>
    catalogBtn.classList.toggle('active')
  )
}
