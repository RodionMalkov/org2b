export default function hendlerMobileNav() {
  const mobileNav = document.querySelector('.mobile-nav')
  const navBtn = mobileNav?.querySelectorAll('.mobile-nav button')

  if (!mobileNav && !navBtn) return

  navBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtn.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
    })
  })
}
