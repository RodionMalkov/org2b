export default function hendlerNavList() {
  document.querySelectorAll('.nav-list svg').forEach(svg => {
    svg.addEventListener('click', function (event) {
      event.stopPropagation()

      const parentLink = this.closest('li').querySelector('a')
      const submenu = this.closest('li').querySelector('ul')

      if (parentLink) {
        parentLink.classList.toggle('active')
      }
      if (submenu) {
        submenu.classList.toggle('active')
      }
    })
  })
}
